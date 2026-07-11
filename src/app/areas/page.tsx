import { AreaCard, ContentShell, CTASection, Hero, JsonLd, SectionHeader } from "@/components/site";
import { areas } from "@/lib/site-data";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Areas We Serve Across the UAE",
  description: "Find premium movers and packers in Sharjah, Ajman, Al Quoz, Dubai, Abu Dhabi, Ras Al Khaimah, Fujairah and Umm Al Quwain.",
  path: "/areas",
  keywords: ["Movers in Sharjah", "Movers Ajman", "Movers Dubai", "Moving Company UAE"],
});

export default function AreasPage() {
  return (
    <ContentShell>
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Areas We Serve", href: "/areas" }])} />
      <Hero eyebrow="UAE-wide coverage" title="Professional movers near you in every major emirate." description="Our local moving teams serve homes, villas, apartments, offices and commercial facilities across Sharjah, Ajman, Al Quoz, Dubai, Abu Dhabi and the Northern Emirates." />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Local moving pages" title="Choose your area" description="Each local page includes unique guidance for community access, moving routes and common customer needs." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => <AreaCard key={area.slug} area={area} />)}
          </div>
        </div>
      </section>
      <CTASection />
    </ContentShell>
  );
}
