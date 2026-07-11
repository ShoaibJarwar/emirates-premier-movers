import { ContentShell, Hero, JsonLd } from "@/components/site";
import { company } from "@/lib/site-data";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({ title: "Terms and Conditions", description: "Terms and conditions for moving, packing, quote requests and website usage by Emirates Premier Movers.", path: "/terms-and-conditions" });

export default function TermsPage() {
  return <ContentShell><JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Terms and Conditions", href: "/terms-and-conditions" }])} /><Hero eyebrow="Legal" title="Terms & Conditions" description="Service terms for website users and moving customers requesting quotes from Emirates Premier Movers." /><section className="px-4 py-16 sm:px-6 lg:px-8"><div className="prose-moving mx-auto max-w-4xl rounded-[2rem] bg-white p-8 shadow-sm"><h2>Quotes and bookings</h2><p>Quotes are based on information provided by the customer and may change if inventory, access, distance, packing scope or timing changes.</p><h2>Customer responsibilities</h2><p>Customers should secure building permissions, elevator booking, parking access and disclose fragile, valuable or restricted items before move day.</p><h2>Service delivery</h2><p>{company.name} aims to deliver careful, timely moving services. Delays may occur because of building restrictions, weather, traffic, authority requirements or inaccurate move information.</p><h2>Website usage</h2><p>Website content is provided for general information and may be updated without notice.</p></div></section></ContentShell>;
}
