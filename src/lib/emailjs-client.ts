"use client";

import emailjs from "@emailjs/browser";

export type InquiryEmailParams = {
  to_name: string;
  from_name: string;
  phone: string;
  email: string;
  service: string;
  from_location: string;
  to_location: string;
  move_date: string;
  message: string;
  inquiry_type: string;
};

/**
 * Sends the inquiry to your inbox via EmailJS (https://www.emailjs.com).
 *
 * Requires three env vars, all safe to expose to the browser (EmailJS is designed
 * for client-side use and scopes access to your configured service/template):
 *   NEXT_PUBLIC_EMAILJS_SERVICE_ID
 *   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
 *   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
 *
 * In your EmailJS template, reference the fields above as {{from_name}}, {{phone}}, etc.
 * If the env vars aren't set, this quietly no-ops so local/dev environments without
 * EmailJS configured don't throw — the inquiry is still saved to the database via
 * the /api/inquiries route regardless of whether this succeeds.
 */
export async function sendInquiryEmail(params: InquiryEmailParams): Promise<{ ok: boolean; reason?: string }> {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.warn("EmailJS is not configured (missing NEXT_PUBLIC_EMAILJS_* env vars) — skipping email notification.");
    return { ok: false, reason: "not-configured" };
  }

  try {
    await emailjs.send(serviceId, templateId, params, { publicKey });
    return { ok: true };
  } catch (error) {
    console.error("EmailJS send failed:", error);
    return { ok: false, reason: error instanceof Error ? error.message : "unknown error" };
  }
}
