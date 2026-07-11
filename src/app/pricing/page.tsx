import { ContentShell, CTASection, Hero, JsonLd, PricingCards, SectionHeader } from "@/components/site";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({ title: "Moving Company Pricing UAE", description: "Transparent moving and packing prices for studios, apartments, villas, offices and commercial relocation in Sharjah, Ajman, Dubai and the UAE.", path: "/pricing", keywords: ["Moving Company UAE", "Movers Dubai", "Movers Ajman"] });

export default function PricingPage() {
  return (
    <ContentShell>
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Pricing", href: "/pricing" }])} />
      <Hero eyebrow="Transparent estimates" title="Clear moving prices based on your real move requirements." description="Every quote considers inventory volume, packing scope, truck size, access, distance, building rules and special handling needs." />
      <section className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeader eyebrow="Pricing" title="Popular moving packages" description="Use these starting prices as guidance. Request a free survey for a fixed written quote." /><PricingCards /></div></section>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-4xl prose-moving"><h2>What affects your moving price?</h2><p>Pricing depends on the number of rooms, cartons, furniture dismantling, elevator access, walking distance, floor level, parking, moving date, distance between locations and packing material level. Month-end and weekend dates can book quickly, so early confirmation helps secure crew availability.</p><p>We always recommend a detailed quote rather than a vague hourly estimate for larger apartment, villa and office moves.</p></div></section>
      <CTASection title="Request a fixed moving quote" />
    </ContentShell>
  );
}
