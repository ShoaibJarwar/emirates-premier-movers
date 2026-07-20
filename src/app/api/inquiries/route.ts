import { db } from "@/db";
import { inquiries } from "@/db/schema";
import { company } from "@/lib/site-data";
import { sql } from "drizzle-orm";
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

async function ensureInquiriesTable() {
  await db.execute(sql`
    create table if not exists inquiries (
      id integer generated always as identity primary key,
      type varchar(40) not null,
      name varchar(140) not null,
      phone varchar(60) not null,
      email varchar(180),
      from_location varchar(180),
      to_location varchar(180),
      service varchar(120),
      move_date varchar(80),
      message text not null,
      integration_status jsonb,
      created_at timestamptz not null default now()
    )
  `);
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
 *   TWILIO_WHATSAPP_TO       - the business owner's WhatsApp number, e.g. "whatsapp:971523834103"
 *
 * Email is intentionally NOT handled here — that's done client-side via EmailJS
 * (see src/lib/emailjs-client.ts) immediately after a successful submission.
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

export async function POST(request: Request) {
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
  const whatsappResult = await sendWhatsAppViaTwilio(message);
  const integrationStatus = { whatsapp: whatsappResult };

  await ensureInquiriesTable();
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

  // The database write above is the source of truth for "we received your inquiry" —
  // WhatsApp delivery is a best-effort notification on top of it, so a Twilio failure
  // (e.g. not configured yet) doesn't block the customer's success message. Email
  // notification happens separately, client-side, via EmailJS.
  return Response.json({ ok: true, integrationStatus });
}
