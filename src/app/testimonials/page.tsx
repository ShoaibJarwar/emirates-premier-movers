import { ContentShell, CTASection, Hero, JsonLd, SectionHeader, Testimonials } from "@/components/site";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({ title: "Customer Testimonials", description: "Read reviews from UAE customers who trusted Emirates Premier Movers for apartment moving, office relocation, packing and villa shifting.", path: "/testimonials" });

export default function TestimonialsPage() {
  return <ContentShell><JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Testimonials", href: "/testimonials" }])} /><Hero eyebrow="Customer feedback" title="Trusted by families and businesses across the UAE." description="Our customers value careful handling, clear communication and dependable move-day execution." /><section className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeader eyebrow="Reviews" title="What customers say" /><Testimonials /></div></section><CTASection /></ContentShell>;
}
