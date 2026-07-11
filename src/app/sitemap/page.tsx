import { ContentShell, Hero, JsonLd, SectionHeader } from "@/components/site";
import { areas, blogPosts, navItems, services } from "@/lib/site-data";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = pageMetadata({ title: "Website Sitemap", description: "Browse all Emirates Premier Movers website pages, services, areas, blog posts and legal pages.", path: "/sitemap" });

export default function SitemapPage() {
  const groups = [
    { title: "Main pages", links: [...navItems, { label: "Get a Free Quote", href: "/get-a-free-quote" }, { label: "FAQ", href: "/faq" }, { label: "Testimonials", href: "/testimonials" }] },
    { title: "Services", links: services.map((item) => ({ label: item.shortTitle, href: `/services/${item.slug}` })) },
    { title: "Areas", links: areas.map((item) => ({ label: item.name, href: `/areas/${item.slug}` })) },
    { title: "Blog", links: blogPosts.map((item) => ({ label: item.title, href: `/blog/${item.slug}` })) },
    { title: "Legal", links: [{ label: "Privacy Policy", href: "/privacy-policy" }, { label: "Terms & Conditions", href: "/terms-and-conditions" }] },
  ];
  return <ContentShell><JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Sitemap", href: "/sitemap" }])} /><Hero eyebrow="Sitemap" title="Find every moving service and UAE location page." description="Use this sitemap to navigate services, local movers pages, blog guides and company information." /><section className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">{groups.map((group) => <div key={group.title} className="rounded-[2rem] bg-white p-6 shadow-sm"><SectionHeader centered={false} title={group.title} /><ul className="space-y-3">{group.links.map((link) => <li key={link.href}><Link className="font-semibold text-slate-700 hover:text-amber-700" href={link.href}>{link.label}</Link></li>)}</ul></div>)}</div></section></ContentShell>;
}
