import { AreaCard, BlogCard, ContentShell, CTASection, Hero, InternalLinks, JsonLd, SectionHeader, ServiceCard, StatsBand, Testimonials, TrustGrid } from "@/components/site";
import { areas, blogPosts, company, faqs, services } from "@/lib/site-data";
import { breadcrumbSchema, faqSchema, pageMetadata, serviceSchema } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Premium Movers and Packers in Sharjah, Ajman, Dubai & UAE",
  description: "Book premium movers and packers in Sharjah, Ajman, Al Quoz, Dubai, Abu Dhabi and the UAE. Safe packing, affordable pricing, 24/7 WhatsApp and free quotes.",
  path: "/",
  keywords: ["Movers in Sharjah", "Packers and Movers Sharjah", "Movers Ajman", "Movers Dubai", "Moving Company UAE"],
});

export default function HomePage() {
  return (
    <ContentShell>
      <JsonLd data={[faqSchema(faqs), breadcrumbSchema([{ name: "Home", href: "/" }]), serviceSchema("Moving and Packing Services UAE", company.tagline, "/")]} />
      <Hero
        eyebrow="24/7 Premium UAE Moving Company"
        title="Careful movers and packers for homes, villas and offices across the UAE."
        description="Emirates Premier Movers delivers secure packing, experienced crews, covered trucks and transparent quotes for relocations in Sharjah, Ajman, Al Quoz, Dubai, Abu Dhabi and every emirate."
      />
      <StatsBand />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Why choose us" title="Built for safe UAE relocation" description="Every move is planned around access, building rules, furniture protection, timing and customer communication." />
          <TrustGrid />
        </div>
      </section>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Services" title="Complete moving and packing services" description="From apartment moving and villa shifting to office relocation and storage coordination, our teams handle the full move lifecycle." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 9).map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Areas we serve" title="Local movers in Sharjah, Ajman, Dubai and beyond" description="Dedicated local landing pages help customers find reliable movers in their emirate, community and route." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => <AreaCard key={area.slug} area={area} />)}
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Customer reviews" title="Trusted by UAE families and businesses" description="Clear communication, careful packing and accountable supervision are at the centre of our service." />
          <Testimonials />
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Moving advice" title="Expert UAE relocation guides" description="Plan your move with practical guidance for Sharjah homes, Ajman apartments, Dubai offices and villa relocations." />
          <div className="grid gap-5 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => <BlogCard key={post.slug} post={post} />)}
          </div>
          <div className="mt-10"><InternalLinks /></div>
        </div>
      </section>
      <CTASection />
    </ContentShell>
  );
}
