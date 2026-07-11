import { ContentShell, CTASection, FaqSection, Hero, JsonLd, SectionHeader } from "@/components/site";
import { faqs } from "@/lib/site-data";
import { breadcrumbSchema, faqSchema, pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({ title: "Moving Company FAQ UAE", description: "Answers to common questions about movers, packers, pricing, furniture assembly, office relocation and UAE service areas.", path: "/faq", keywords: ["Moving Company UAE", "Packing Services UAE"] });

export default function FAQPage() {
  return <ContentShell><JsonLd data={[faqSchema(faqs), breadcrumbSchema([{ name: "Home", href: "/" }, { name: "FAQ", href: "/faq" }])]} /><Hero eyebrow="Questions answered" title="UAE moving and packing FAQs." description="Clear answers before you book movers for your home, villa, apartment, office or furniture relocation." /><section className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-4xl"><SectionHeader eyebrow="FAQ" title="Frequently asked questions" /><FaqSection items={faqs} /></div></section><CTASection /></ContentShell>;
}
