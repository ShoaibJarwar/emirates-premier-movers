import { ContentShell, CTASection, Hero, JsonLd, SectionHeader, ServiceCard } from "@/components/site";
import { services } from "@/lib/site-data";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Moving and Packing Services UAE",
  description: "Explore professional home moving, apartment moving, villa moving, office relocation, packing, furniture moving, storage and international relocation services in the UAE.",
  path: "/services",
  keywords: ["Moving Company UAE", "Packing Services UAE", "Office Movers Dubai", "Villa Movers UAE"],
});

export default function ServicesPage() {
  return (
    <ContentShell>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]), serviceSchema("Moving and Packing Services UAE", "Complete relocation services across the UAE.", "/services")]} />
      <Hero eyebrow="Complete relocation solutions" title="Premium moving services for every UAE relocation." description="Choose specialist movers for homes, apartments, villas, offices, commercial units, furniture, packing, storage and inter-emirate relocation." />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Our services" title="Designed around safety, timing and trust" description="Every service includes clear communication, trained crews and careful protection for your property." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </div>
      </section>
      <CTASection />
    </ContentShell>
  );
}
