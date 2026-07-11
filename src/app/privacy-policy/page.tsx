import { ContentShell, Hero, JsonLd } from "@/components/site";
import { company } from "@/lib/site-data";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = pageMetadata({ title: "Privacy Policy", description: "Privacy policy for Emirates Premier Movers website inquiries, quote forms and contact details.", path: "/privacy-policy" });

export default function PrivacyPage() {
  return <ContentShell><JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Privacy Policy", href: "/privacy-policy" }])} /><Hero eyebrow="Legal" title="Privacy Policy" description="How we collect, use and protect information submitted through our moving quote and contact forms." /><Legal><h2>Information we collect</h2><p>We collect details you submit such as name, phone, email, moving locations, preferred date, service requirements and message content.</p><h2>How we use information</h2><p>{company.name} uses inquiry details to respond to quotes, coordinate moving services, send WhatsApp or email follow-up and improve customer support.</p><h2>Data sharing</h2><p>We do not sell personal information. We may share details with trusted operational staff or integration providers only when needed to answer or deliver your moving request.</p><h2>Contact</h2><p>For privacy questions, contact {company.email}.</p></Legal></ContentShell>;
}

function Legal({ children }: { children: ReactNode }) { return <section className="px-4 py-16 sm:px-6 lg:px-8"><div className="prose-moving mx-auto max-w-4xl rounded-[2rem] bg-white p-8 shadow-sm">{children}</div></section>; }
