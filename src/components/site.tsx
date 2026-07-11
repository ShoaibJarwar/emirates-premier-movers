import { areas, blogPosts, company, navItems, pricing, services, stats, testimonials, trustPoints } from "@/lib/site-data";
import { absoluteUrl, whatsappUrl } from "@/lib/seo";
import type { ReactNode } from "react";
import { ArrowRight, Check, Mail, MapPin, Menu, Phone, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn, FaqAccordion, LeadForm } from "@/components/interactive";

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "light" }) {
  const classes = {
    primary: "bg-amber-500 text-slate-950 hover:bg-amber-400",
    secondary: "bg-slate-950 text-white hover:bg-amber-700",
    light: "bg-white text-slate-950 hover:bg-amber-50",
  }[variant];
  return (
    <Link href={href} className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold shadow-lg shadow-slate-950/10 transition ${classes}`}>
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/20 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label={`${company.name} home`}>
          <Image src="/brand-mark.svg" alt="" width={44} height={44} priority />
          <div>
            <p className="font-serif text-lg font-bold tracking-tight text-slate-950">{company.name}</p>
            <p className="hidden text-xs font-medium uppercase tracking-[0.18em] text-amber-700 sm:block">UAE Movers</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 sm:flex">
          <Link href={`tel:${company.phoneHref}`} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-950 transition hover:border-amber-400">
            <Phone className="h-4 w-4 text-amber-600" aria-hidden="true" /> Call
          </Link>
          <ButtonLink href="/get-a-free-quote">Free Quote</ButtonLink>
        </div>
        <Link href="/sitemap" className="rounded-full border border-slate-200 p-2 text-slate-700 lg:hidden" aria-label="Open site navigation">
          <Menu className="h-6 w-6" aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/brand-mark.svg" alt="" width={48} height={48} />
            <div>
              <p className="font-serif text-xl font-bold">{company.name}</p>
              <p className="text-sm text-slate-400">{company.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">Licensed moving and packing company serving Sharjah, Ajman, Al Quoz, Dubai, Abu Dhabi and every emirate with careful crews, covered trucks and 24/7 support.</p>
          <div className="mt-6 flex gap-3">
            <ButtonLink href={whatsappUrl(`Hello ${company.name}, I need a moving quote.`)} variant="light">WhatsApp</ButtonLink>
            <ButtonLink href={`tel:${company.phoneHref}`} variant="primary">Call Now</ButtonLink>
          </div>
        </div>
        <FooterColumn title="Services" links={services.slice(0, 7).map((service) => ({ label: service.shortTitle, href: `/services/${service.slug}` }))} />
        <FooterColumn title="Areas" links={areas.map((area) => ({ label: area.name, href: `/areas/${area.slug}` }))} />
        <div>
          <h2 className="font-bold">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="flex gap-2"><Phone className="h-4 w-4 text-amber-400" /> <Link href={`tel:${company.phoneHref}`}>{company.phone}</Link></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 text-amber-400" /> <Link href={`mailto:${company.email}`}>{company.email}</Link></li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-amber-400" /> <span>{company.address}</span></li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-400">
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms-and-conditions">Terms</Link>
            <Link href="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-400">© {new Date().getFullYear()} {company.legalName}. All rights reserved.</div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="font-bold">{title}</h2>
      <ul className="mt-4 space-y-2 text-sm text-slate-300">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="transition hover:text-amber-300">{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Hero({ eyebrow, title, description, children }: { eyebrow?: string; title: string; description: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.28),transparent_35%),linear-gradient(135deg,rgba(15,23,42,0.92),rgba(15,23,42,1))]" />
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
        <FadeIn>
          <div>
            {eyebrow ? <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-amber-300">{eyebrow}</p> : null}
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/get-a-free-quote">Get a Free Quote</ButtonLink>
              <ButtonLink href={whatsappUrl(`Hello ${company.name}, I need moving help.`)} variant="light">WhatsApp 24/7</ButtonLink>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur">
            {children ?? <LeadForm />}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, description, centered = true }: { eyebrow?: string; title: string; description?: string; centered?: boolean }) {
  return (
    <div className={`mb-10 ${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      {eyebrow ? <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-amber-700">{eyebrow}</p> : null}
      <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-600">{description}</p> : null}
    </div>
  );
}

export function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const Icon = service.icon;
  return (
    <Link href={`/services/${service.slug}`} className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700"><Icon className="h-6 w-6" /></span>
      <h3 className="mt-5 font-serif text-xl font-bold text-slate-950">{service.shortTitle}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-amber-700">Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
    </Link>
  );
}

export function AreaCard({ area }: { area: (typeof areas)[number] }) {
  return (
    <Link href={`/areas/${area.slug}`} className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl">
      <MapPin className="h-8 w-8 text-amber-600" />
      <h3 className="mt-5 font-serif text-xl font-bold text-slate-950">{area.name}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{area.description}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-amber-700">Movers in {area.name} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
    </Link>
  );
}

export function StatsBand() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center">
            <p className="font-serif text-4xl font-bold text-slate-950">{stat.value}</p>
            <p className="mt-2 text-sm font-semibold text-slate-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function TrustGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {trustPoints.map((point) => {
        const Icon = point.icon;
        return (
          <div key={point.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
            <Icon className="h-9 w-9 text-amber-600" />
            <h3 className="mt-4 font-serif text-xl font-bold text-slate-950">{point.title}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">{point.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {testimonials.map((testimonial) => (
        <div key={testimonial.name} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex gap-1 text-amber-500">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</div>
          <p className="mt-4 text-sm leading-7 text-slate-700">“{testimonial.quote}”</p>
          <p className="mt-5 font-bold text-slate-950">{testimonial.name}</p>
          <p className="text-sm text-slate-500">{testimonial.location}</p>
        </div>
      ))}
    </div>
  );
}

export function PricingCards() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {pricing.map((plan) => (
        <div key={plan.name} className={`rounded-[2rem] border p-7 shadow-sm ${plan.featured ? "border-amber-300 bg-slate-950 text-white shadow-2xl" : "border-slate-200 bg-white text-slate-950"}`}>
          <h3 className="font-serif text-2xl font-bold">{plan.name}</h3>
          <p className={`mt-3 text-sm leading-7 ${plan.featured ? "text-slate-300" : "text-slate-600"}`}>{plan.description}</p>
          <p className="mt-6 font-serif text-3xl font-bold text-amber-500">{plan.price}</p>
          <ul className="mt-6 space-y-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex gap-3 text-sm"><Check className="h-5 w-5 shrink-0 text-amber-500" /> {feature}</li>
            ))}
          </ul>
          <div className="mt-7"><ButtonLink href="/get-a-free-quote" variant={plan.featured ? "primary" : "secondary"}>Request Quote</ButtonLink></div>
        </div>
      ))}
    </div>
  );
}

export function BlogCard({ post }: { post: (typeof blogPosts)[number] }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">{post.category} · {post.readTime}</p>
      <h3 className="mt-4 font-serif text-2xl font-bold text-slate-950">{post.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{post.description}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-amber-700">Read guide <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
    </Link>
  );
}

export function CTASection({ title = "Ready for a safer, smoother UAE move?", description = "Speak with a moving coordinator now and receive a clear quote for packing, moving, transport and setup." }: { title?: string; description?: string }) {
  return (
    <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 md:flex-row md:items-center">
        <div>
          <h2 className="font-serif text-3xl font-bold">{title}</h2>
          <p className="mt-3 max-w-2xl text-slate-300">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/get-a-free-quote">Free Quote</ButtonLink>
          <ButtonLink href={`tel:${company.phoneHref}`} variant="light">Call {company.phone}</ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function GoogleMap() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-sm">
      <iframe
        title={`${company.name} map`}
        src={`https://www.google.com/maps?q=${encodeURIComponent(company.address)}&output=embed`}
        className="h-[360px] w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export function ContentShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <main className={className}>{children}</main>;
}

export function InternalLinks() {
  const links = [
    { label: "Home Moving", href: "/services/home-moving" },
    { label: "Packing Services UAE", href: "/services/packing-services" },
    { label: "Movers in Sharjah", href: "/areas/sharjah" },
    { label: "Office Movers Dubai", href: "/services/office-relocation" },
    { label: "Villa Movers UAE", href: "/services/villa-moving" },
    { label: "Get a Free Quote", href: "/get-a-free-quote" },
  ];
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => <Link key={link.href} href={link.href} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-amber-400 hover:text-amber-700">{link.label}</Link>)}
    </div>
  );
}

export function FaqSection({ items }: { items: { question: string; answer: string }[] }) {
  return <FaqAccordion items={items} />;
}

export const siteUrl = absoluteUrl;
