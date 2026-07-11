import { ContentShell, CTASection, FaqSection, Hero, JsonLd, SectionHeader, ServiceCard } from "@/components/site";
import { getService, services } from "@/lib/site-data";
import { breadcrumbSchema, faqSchema, pageMetadata, serviceSchema } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({ title: service.title, description: service.description, path: `/services/${service.slug}`, keywords: service.keywords });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <ContentShell>
      <JsonLd data={[serviceSchema(service.title, service.description, `/services/${service.slug}`), faqSchema(service.faqs), breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: service.shortTitle, href: `/services/${service.slug}` }])]} />
      <Hero eyebrow="Specialist UAE movers" title={service.title} description={service.description} />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeader centered={false} eyebrow="Overview" title={`Professional ${service.shortTitle.toLowerCase()} with careful planning`} description={service.overview} />
            <div className="rounded-[2rem] bg-slate-950 p-7 text-white">
              <h2 className="font-serif text-2xl font-bold">Best for</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.keywords.map((keyword) => <span key={keyword} className="rounded-full bg-white/10 px-3 py-1 text-sm text-amber-200">{keyword}</span>)}
              </div>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {service.benefits.map((benefit) => <div key={benefit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><h3 className="font-bold text-slate-950">{benefit}</h3><p className="mt-2 text-sm leading-7 text-slate-600">A supervised process keeps your move organised, protected and on schedule from first call to final placement.</p></div>)}
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Process" title="How our service works" description="A structured moving process reduces risk, delays and confusion on move day." />
          <div className="grid gap-5 md:grid-cols-4">
            {service.process.map((step, index) => <div key={step} className="rounded-3xl border border-slate-200 bg-slate-50 p-6"><span className="font-serif text-4xl font-bold text-amber-600">0{index + 1}</span><h3 className="mt-4 font-bold text-slate-950">{step}</h3></div>)}
          </div>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="FAQs" title={`${service.shortTitle} questions`} description="Answers to common questions from UAE customers." />
          <FaqSection items={service.faqs} />
        </div>
      </section>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Related services" title="Plan the rest of your move" />
          <div className="grid gap-5 md:grid-cols-3">{related.map((item) => <ServiceCard key={item.slug} service={item} />)}</div>
        </div>
      </section>
      <CTASection title={`Book ${service.shortTitle.toLowerCase()} today`} />
    </ContentShell>
  );
}
