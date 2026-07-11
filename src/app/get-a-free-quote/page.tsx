import { ContentShell, Hero, JsonLd, SectionHeader, TrustGrid } from "@/components/site";
import { LeadForm } from "@/components/interactive";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({ title: "Get a Free Moving Quote UAE", description: "Request a free moving quote for home moving, villa moving, office relocation, packing services and furniture movers in the UAE.", path: "/get-a-free-quote", keywords: ["Movers in Sharjah", "Movers Ajman", "Movers Dubai", "Packing Services UAE"] });

export default function QuotePage() {
  return <ContentShell><JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Get a Free Quote", href: "/get-a-free-quote" }])} /><Hero eyebrow="Free quote" title="Tell us about your move. We’ll plan the safest option." description="Share your locations, service needs and preferred date. Our moving coordinator will review the details and respond quickly." /><section className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]"><div><SectionHeader centered={false} eyebrow="Quote form" title="Receive a clear written estimate" description="The more detail you provide about rooms, cartons, furniture, lift access and packing needs, the more accurate your quote will be." /><TrustGrid /></div><LeadForm /></div></section></ContentShell>;
}
