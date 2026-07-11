import { ContentShell, CTASection, Hero, JsonLd, SectionHeader, StatsBand, TrustGrid } from "@/components/site";
import { company } from "@/lib/site-data";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({ title: "About Our UAE Moving Company", description: "Learn about Emirates Premier Movers, a premium moving and packing company serving Sharjah, Ajman, Dubai, Abu Dhabi and the UAE with 24/7 support.", path: "/about", keywords: ["Moving Company UAE", "Packers and Movers Sharjah"] });

export default function AboutPage() {
  return (
    <ContentShell>
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "About", href: "/about" }])} />
      <Hero eyebrow="About our company" title="A premium UAE moving company focused on trust, safety and service." description={`${company.name} helps families, professionals and businesses move with less stress through careful packing, trained crews, covered trucks and responsive communication.`} />
      <StatsBand />
      <section className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2"><div className="prose-moving"><h2>Professional movers for UAE customers</h2><p>We understand that relocation is not only transport. It is a handover of personal belongings, business assets and valuable furniture. Our process combines survey, planning, packing, protection, moving, assembly and final inspection.</p><p>From movers in Sharjah and Ajman to office movers Dubai businesses rely on, our crews are trained for local building rules, service lift timings, community access and inter-emirate routes.</p><h2>Our service promise</h2><p>We provide clear quotes, respectful crews, careful packing materials and 24/7 support. Whether you are shifting a studio apartment or relocating a corporate office, you receive practical guidance from first inquiry to final placement.</p></div><TrustGrid /></div></section>
      <CTASection />
    </ContentShell>
  );
}
