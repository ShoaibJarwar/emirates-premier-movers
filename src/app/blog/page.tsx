import { BlogCard, ContentShell, CTASection, Hero, JsonLd, SectionHeader } from "@/components/site";
import { blogPosts } from "@/lib/site-data";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "UAE Moving Blog and Relocation Guides",
  description: "Expert moving guides for Sharjah, Ajman, Dubai offices, packing protection, UAE moving mistakes and villa relocation planning.",
  path: "/blog",
  keywords: ["House Shifting UAE", "Packing Services UAE", "Office Movers Dubai", "Movers in Sharjah"],
});

export default function BlogPage() {
  return (
    <ContentShell>
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }])} />
      <Hero eyebrow="Moving knowledge" title="UAE relocation guides from professional movers." description="Practical, local advice for home moving, office relocation, villa shifting and packing protection across the Emirates." />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Latest guides" title="Plan a smoother move" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => <BlogCard key={post.slug} post={post} />)}
          </div>
        </div>
      </section>
      <CTASection />
    </ContentShell>
  );
}
