"use client";

import { company, services } from "@/lib/site-data";
import { whatsappUrl } from "@/lib/seo";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Phone, Send, ArrowUp, MessageCircle } from "lucide-react";
import Link from "next/link";
import { type FormEvent, type ReactNode, useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  );
}

export function FaqAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={item.question} className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <button
            type="button"
            onClick={() => setOpen(open === index ? -1 : index)}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-slate-950"
            aria-expanded={open === index}
          >
            <span>{item.question}</span>
            <ChevronDown className={`h-5 w-5 shrink-0 text-amber-600 transition ${open === index ? "rotate-180" : ""}`} aria-hidden="true" />
          </button>
          <AnimatePresence initial={false}>
            {open === index ? (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-7 text-slate-600">{item.answer}</p>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block text-sm font-semibold text-slate-800">
      <span>{label}</span>
      <span className="mt-2 block">{children}</span>
    </label>
  );
}

const inputClass = "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none ring-amber-500/20 transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-4";

export function LeadForm({ variant = "quote" }: { variant?: "quote" | "contact" }) {
  const [state, setState] = useState<FormState>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: variant }),
      });
      const result = (await response.json()) as { ok?: boolean; error?: string };
      if (response.ok && result.ok) {
        setState("success");
        setFeedback("Thank you. Your inquiry has been sent and our UAE moving coordinator will contact you shortly.");
        form.reset();
      } else {
        setState("error");
        setFeedback(result.error ?? "We could not send the inquiry. Please call or WhatsApp us directly.");
      }
    } catch {
      setState("error");
      setFeedback("Network error. Please call or WhatsApp us directly for immediate support.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60 sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name">
          <input className={inputClass} name="name" autoComplete="name" placeholder="Your name" required />
        </Field>
        <Field label="Mobile number">
          <input className={inputClass} name="phone" autoComplete="tel" placeholder="+971 ..." required />
        </Field>
        <Field label="Email address">
          <input className={inputClass} name="email" type="email" autoComplete="email" placeholder="you@example.com" />
        </Field>
        <Field label="Service needed">
          <select className={inputClass} name="service" defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.shortTitle}>
                {service.shortTitle}
              </option>
            ))}
          </select>
        </Field>
        {variant === "quote" ? (
          <>
            <Field label="Moving from">
              <input className={inputClass} name="fromLocation" placeholder="Sharjah, Ajman, Dubai..." />
            </Field>
            <Field label="Moving to">
              <input className={inputClass} name="toLocation" placeholder="Destination area" />
            </Field>
            <Field label="Preferred move date">
              <input className={inputClass} name="moveDate" type="date" />
            </Field>
          </>
        ) : null}
        <label className="block text-sm font-semibold text-slate-800 sm:col-span-2">
          <span>Move details</span>
          <textarea className={`${inputClass} mt-2 min-h-32 resize-y`} name="message" placeholder="Tell us about rooms, furniture, lift access, packing needs and timing." required />
        </label>
      </div>
      <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-4 font-semibold text-white transition hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-70" disabled={state === "loading"} type="submit">
        <Send className="h-5 w-5" aria-hidden="true" />
        {state === "loading" ? "Sending inquiry..." : variant === "quote" ? "Get my free quote" : "Send message"}
      </button>
      {feedback ? <p className={`mt-4 rounded-2xl px-4 py-3 text-sm ${state === "success" ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-800"}`}>{feedback}</p> : null}
      <p className="mt-4 text-xs leading-6 text-slate-500">By submitting, you agree to be contacted by phone, WhatsApp or email about your moving inquiry. We never use default HTML form submission.</p>
    </form>
  );
}

export function FloatingActions() {
  const message = `Hello ${company.name}, I need a moving quote in the UAE.`;
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3 sm:right-6">
      <Link href={whatsappUrl(message)} target="_blank" className="flex h-13 w-13 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-900/20 transition hover:-translate-y-1 hover:bg-emerald-600" aria-label="Chat on WhatsApp">
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      </Link>
      <Link href={`tel:${company.phoneHref}`} className="flex h-13 w-13 items-center justify-center rounded-full bg-amber-500 text-slate-950 shadow-2xl shadow-amber-900/20 transition hover:-translate-y-1 hover:bg-amber-400" aria-label="Call now">
        <Phone className="h-6 w-6" aria-hidden="true" />
      </Link>
      <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex h-11 w-11 items-center justify-center self-end rounded-full border border-slate-200 bg-white text-slate-700 shadow-xl transition hover:-translate-y-1" aria-label="Back to top">
        <ArrowUp className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}
