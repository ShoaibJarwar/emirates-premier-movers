import { ContentShell, CTASection, Hero, InternalLinks, JsonLd, SectionHeader, ServiceCard, TrustGrid } from "@/components/site";
import { areas, getArea, services } from "@/lib/site-data";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return pageMetadata({ title: area.title, description: area.description, path: `/areas/${area.slug}`, keywords: area.keywords });
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  return (
    <ContentShell>
      <JsonLd data={[serviceSchema(area.title, area.description, `/areas/${area.slug}`), breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Areas", href: "/areas" }, { name: area.name, href: `/areas/${area.slug}` }])]} />
      <Hero eyebrow="Local UAE movers" title={area.title} description={area.description} />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="prose-moving">
            <h2>Reliable moving company in {area.name}</h2>
            <p>{area.intro}</p>
            <p>Our moving coordinators plan each relocation around access rules, parking, elevators, dismantling, packing materials and route timing. Whether you need home moving, office relocation, villa moving or furniture movers in {area.name}, you receive a clear quote and a professional crew.</p>
            <h3>Popular communities we serve</h3>
            <p>{area.neighborhoods.join(", ")} and nearby communities are covered by our local moving teams with 24/7 support.</p>
            <InternalLinks />
          </div>
          <div className="rounded-[2rem] bg-white p-7 shadow-xl shadow-slate-200/70">
            <h2 className="font-serif text-2xl font-bold text-slate-950">Why customers in {area.name} choose us</h2>
            <ul className="mt-6 space-y-4">
              {area.highlights.map((highlight) => <li key={highlight} className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-700">{highlight}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Services in area" title={`Moving services available in ${area.name}`} description="Choose a focused moving service or request a complete packing and relocation package." />
          <div className="grid gap-5 md:grid-cols-3">{services.slice(0, 6).map((service) => <ServiceCard key={service.slug} service={service} />)}</div>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><TrustGrid /></div></section>
      <CTASection title={`Need movers in ${area.name}?`} description={`Get a fast quote for packing, moving, furniture assembly or office relocation in ${area.name} today.`} />
    </ContentShell>
  );
}
