import { db } from "@/db";
import { inquiries } from "@/db/schema";
import { company } from "@/lib/site-data";
import { Resend } from "resend";
import twilio from "twilio";

export const dynamic = "force-dynamic";

type InquiryPayload = {
  type?: string;
  name?: string;
  phone?: string;
  email?: string;
  fromLocation?: string;
  toLocation?: string;
  service?: string;
  moveDate?: string;
  message?: string;
};

type IntegrationResult = { ok: boolean; provider: string; detail: string };

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 2000) : "";
}

function buildInquiryMessage(payload: Required<Pick<InquiryPayload, "type" | "name" | "phone" | "message">> & InquiryPayload) {
  return [
    `New ${payload.type} inquiry for ${company.name}`,
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    payload.email ? `Email: ${payload.email}` : null,
    payload.service ? `Service: ${payload.service}` : null,
    payload.moveDate ? `Move date: ${payload.moveDate}` : null,
    payload.fromLocation ? `From: ${payload.fromLocation}` : null,
    payload.toLocation ? `To: ${payload.toLocation}` : null,
    `Message: ${payload.message}`,
  ]
    .filter(Boolean)
    .join("\n");
}

/**
 * Sends a WhatsApp notification to the business owner via Twilio's WhatsApp API.
 *
 * Requires four env vars:
 *   TWILIO_ACCOUNT_SID       - from the Twilio console
 *   TWILIO_AUTH_TOKEN        - from the Twilio console
 *   TWILIO_WHATSAPP_FROM     - your Twilio WhatsApp-enabled sender, e.g. "whatsapp:+14155238886"
 *                              (the Twilio sandbox number while testing, or your approved
 *                              WhatsApp Business sender once live)
 *   TWILIO_WHATSAPP_TO       - the business owner's WhatsApp number, e.g. "whatsapp:+971523834103"
 *
 * Email is handled separately by sendEmailViaResend, below.
 */
async function sendWhatsAppViaTwilio(message: string): Promise<IntegrationResult> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_WHATSAPP_FROM;
  const to = process.env.TWILIO_WHATSAPP_TO;

  if (!accountSid || !authToken || !from || !to) {
    return {
      ok: false,
      provider: "twilio-whatsapp",
      detail: "TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_WHATSAPP_FROM and TWILIO_WHATSAPP_TO must all be configured",
    };
  }

  try {
    const client = twilio(accountSid, authToken);
    const result = await client.messages.create({ from, to, body: message });
    return { ok: true, provider: "twilio-whatsapp", detail: result.sid };
  } catch (error) {
    return { ok: false, provider: "twilio-whatsapp", detail: error instanceof Error ? error.message : "unknown error" };
  }
}

/**
 * Emails the inquiry to the business inbox via Resend (https://resend.com).
 *
 * Requires three env vars:
 *   RESEND_API_KEY     - from the Resend dashboard (Settings → API Keys)
 *   RESEND_FROM_EMAIL   - the verified sender address, e.g. "Emirates Premier Movers <leads@emiratespremiermovers.ae>"
 *                          (use Resend's shared "onboarding@resend.dev" sender while testing,
 *                          before you've verified your own domain in Resend)
 *   RESEND_TO_EMAIL      - the inbox that should receive new inquiries
 *
 * Runs server-side, alongside the Twilio WhatsApp notification above — this keeps
 * the Resend API key off the client entirely, unlike a browser-side email SDK.
 */
async function sendEmailViaResend(payload: Pick<InquiryPayload, "type" | "name" | "phone" | "email">, message: string): Promise<IntegrationResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.RESEND_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return {
      ok: false,
      provider: "resend-email",
      detail: "RESEND_API_KEY, RESEND_FROM_EMAIL and RESEND_TO_EMAIL must all be configured",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: payload.email || undefined,
      subject: `New ${payload.type} inquiry from ${payload.name}`,
      text: message,
    });
    if (error) return { ok: false, provider: "resend-email", detail: error.message };
    return { ok: true, provider: "resend-email", detail: data?.id ?? "sent" };
  } catch (error) {
    return { ok: false, provider: "resend-email", detail: error instanceof Error ? error.message : "unknown error" };
  }
}

// --- Rate limiting -----------------------------------------------------
//
// This is a public POST endpoint that writes to the database and fires a
// Twilio WhatsApp message, so it needs basic abuse protection. In-memory is
// intentionally simple: a handful of submissions per IP per hour is enough
// to stop scripted spam without adding infrastructure.
//
// Caveat: this Map lives in the memory of a single running server instance.
// On serverless platforms (Vercel, etc.), each cold start gets a fresh, empty
// Map, and if multiple instances run concurrently under load, each has its
// own independent counter — so the *effective* limit per IP can be higher
// than RATE_LIMIT_MAX across a burst of traffic. That's an acceptable
// trade-off for a low-traffic contact form; it stops casual/scripted abuse
// without needing external infrastructure. For a hard guarantee under real
// load, replace this with a Postgres-backed counter (a row per IP + window)
// or a shared store like Upstash/Vercel KV.
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  // Opportunistic cleanup so the map doesn't grow unbounded over a long-lived
  // instance — only runs once the map has accumulated a meaningful number of
  // distinct IPs, so it doesn't do extra work on every single request.
  if (requestLog.size > 500) {
    for (const [key, timestamps] of requestLog) {
      if (timestamps.every((t) => now - t > RATE_LIMIT_WINDOW_MS)) requestLog.delete(key);
    }
  }

  const recent = (requestLog.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  requestLog.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
}

function getClientIp(request: Request): string {
  // Vercel (and most reverse proxies) set x-forwarded-for as "client, proxy1, proxy2...".
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return Response.json(
      { ok: false, error: "Too many inquiries submitted from this connection. Please call or WhatsApp us directly, or try again later." },
      { status: 429 },
    );
  }

  const raw = (await request.json().catch(() => ({}))) as InquiryPayload;
  const payload = {
    type: clean(raw.type) || "quote",
    name: clean(raw.name),
    phone: clean(raw.phone),
    email: clean(raw.email),
    fromLocation: clean(raw.fromLocation),
    toLocation: clean(raw.toLocation),
    service: clean(raw.service),
    moveDate: clean(raw.moveDate),
    message: clean(raw.message),
  };

  if (!payload.name || !payload.phone || !payload.message) {
    return Response.json({ ok: false, error: "Name, phone and message are required." }, { status: 400 });
  }

  const message = buildInquiryMessage(payload);
  const [whatsappResult, emailResult] = await Promise.all([
    sendWhatsAppViaTwilio(message),
    sendEmailViaResend(payload, message),
  ]);
  const integrationStatus = { whatsapp: whatsappResult, email: emailResult };

  // Log full delivery detail (including raw provider error text) server-side only —
  // never send it to the browser. A failed/misconfigured integration is an
  // operational detail for whoever manages this deployment, not information a
  // site visitor needs or should see.
  if (!whatsappResult.ok) {
    console.error("WhatsApp notification via Twilio failed:", whatsappResult.detail);
  }
  if (!emailResult.ok) {
    console.error("Email notification via Resend failed:", emailResult.detail);
  }

  try {
    // Table creation is NOT run here on every request — that would mean a
    // `CREATE TABLE IF NOT EXISTS` query on every single form submission. Run
    // `npx drizzle-kit push` once (see README) after setting DATABASE_URL,
    // before your first deployment, to create the `inquiries` table.
    await db.insert(inquiries).values({
      type: payload.type,
      name: payload.name,
      phone: payload.phone,
      email: payload.email || null,
      fromLocation: payload.fromLocation || null,
      toLocation: payload.toLocation || null,
      service: payload.service || null,
      moveDate: payload.moveDate || null,
      message: payload.message,
      integrationStatus,
    });
  } catch (error) {
    // Log the real cause server-side (e.g. missing DATABASE_URL, connection refused,
    // table not yet migrated) but never leak internals to the client — return a
    // clean JSON error so the frontend can show a clear message instead of a
    // generic network error.
    // Postgres error code 42P01 = "relation does not exist". drizzle-orm wraps the
    // raw pg driver error in `error.cause` (standard Error.cause chaining) rather
    // than exposing `code` on the top-level error, so both need checking.
    const errorCode = (error as { code?: string })?.code ?? (error as { cause?: { code?: string } })?.cause?.code;
    const isMissingTable = errorCode === "42P01";
    if (isMissingTable) {
      console.error(
        "Failed to save inquiry: the `inquiries` table does not exist in this database yet. " +
          "Run `npx drizzle-kit push` against this DATABASE_URL to create it, then try again. " +
          "Raw error:",
        error,
      );
    } else {
      console.error("Failed to save inquiry to the database:", error);
    }
    return Response.json(
      { ok: false, error: "We could not save your inquiry right now. Please call or WhatsApp us directly." },
      { status: 500 },
    );
  }

  // The database write above is the source of truth for "we received your inquiry" —
  // WhatsApp (Twilio) and email (Resend) delivery are both best-effort notifications
  // on top of it, so a provider failure or missing config doesn't block the customer's
  // success message. Integration status (including any raw provider error text) is
  // intentionally not included in this response — see the console.error calls above
  // for where to check delivery failures.
  return Response.json({ ok: true });
}
