import { db } from "@/db";
import { inquiries } from "@/db/schema";
import { company } from "@/lib/site-data";
import { sql } from "drizzle-orm";

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

async function sendEmail(message: string, payload: InquiryPayload): Promise<IntegrationResult> {
  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_EMAIL_TO ?? company.email;
  const from = process.env.INQUIRY_EMAIL_FROM ?? "leads@emiratespremiermovers.ae";
  const webhookUrl = process.env.EMAIL_WEBHOOK_URL;

  try {
    if (resendKey) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to,
          subject: `New moving inquiry from ${payload.name ?? "website"}`,
          text: message,
        }),
      });
      return { ok: response.ok, provider: "resend", detail: response.ok ? "sent" : await response.text() };
    }

    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject: `New moving inquiry from ${payload.name}`, message, payload }),
      });
      return { ok: response.ok, provider: "email-webhook", detail: response.ok ? "sent" : await response.text() };
    }

    return { ok: false, provider: "email", detail: "RESEND_API_KEY or EMAIL_WEBHOOK_URL is not configured" };
  } catch (error) {
    return { ok: false, provider: "email", detail: error instanceof Error ? error.message : "unknown error" };
  }
}

async function sendWhatsApp(message: string, payload: InquiryPayload): Promise<IntegrationResult> {
  const token = process.env.WHATSAPP_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const to = process.env.WHATSAPP_INQUIRY_TO?.replace(/\D/g, "") ?? company.whatsappHref;
  const webhookUrl = process.env.WHATSAPP_WEBHOOK_URL;

  try {
    if (token && phoneNumberId) {
      const response = await fetch(`https://graph.facebook.com/v20.0/${phoneNumberId}/messages`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to,
          type: "text",
          text: { preview_url: false, body: message },
        }),
      });
      return { ok: response.ok, provider: "whatsapp-cloud", detail: response.ok ? "sent" : await response.text() };
    }

    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, payload }),
      });
      return { ok: response.ok, provider: "whatsapp-webhook", detail: response.ok ? "sent" : await response.text() };
    }

    return { ok: false, provider: "whatsapp", detail: "WHATSAPP_TOKEN/WHATSAPP_PHONE_NUMBER_ID or WHATSAPP_WEBHOOK_URL is not configured" };
  } catch (error) {
    return { ok: false, provider: "whatsapp", detail: error instanceof Error ? error.message : "unknown error" };
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
  const [emailResult, whatsappResult] = await Promise.all([sendEmail(message, payload), sendWhatsApp(message, payload)]);
  const integrationStatus = { email: emailResult, whatsapp: whatsappResult };

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

  if (emailResult.ok || whatsappResult.ok) {
    return Response.json({ ok: true, integrationStatus });
  }

  return Response.json(
    {
      ok: false,
      error: "Your inquiry was saved, but email and WhatsApp delivery both failed. Please call or WhatsApp us directly.",
      integrationStatus,
    },
    { status: 502 },
  );
}
