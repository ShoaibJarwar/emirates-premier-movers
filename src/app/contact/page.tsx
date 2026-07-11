import { ContentShell, GoogleMap, Hero, JsonLd } from "@/components/site";
import { LeadForm } from "@/components/interactive";
import { company } from "@/lib/site-data";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = pageMetadata({ title: "Contact UAE Movers", description: "Contact Emirates Premier Movers 24/7 for moving and packing quotes in Sharjah, Ajman, Dubai, Abu Dhabi and across the UAE.", path: "/contact" });

export default function ContactPage() {
  return <ContentShell><JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }])} /><Hero eyebrow="Contact us" title="Speak with a UAE moving coordinator today." description="Call, WhatsApp or send your moving details and we will respond with clear next steps." /><section className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]"><div className="space-y-4"><ContactLine icon={<Phone />} label="Phone" href={`tel:${company.phoneHref}`} value={company.phone} /><ContactLine icon={<Mail />} label="Email" href={`mailto:${company.email}`} value={company.email} /><ContactLine icon={<MapPin />} label="Address" value={company.address} /><p className="rounded-3xl bg-amber-50 p-5 text-sm font-semibold text-amber-900">Working hours: {company.hours}. We support urgent moves, weekend moves and office relocation outside normal business hours.</p><GoogleMap /></div><LeadForm variant="contact" /></div></section></ContentShell>;
}

function ContactLine({ icon, label, value, href }: { icon: ReactNode; label: string; value: string; href?: string }) {
  const content = <span className="font-semibold text-slate-950">{value}</span>;
  return <div className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><span className="text-amber-600">{icon}</span><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{label}</p>{href ? <Link href={href}>{content}</Link> : content}</div></div>;
}
