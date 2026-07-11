import { ContentShell, CTASection, FaqSection, InternalLinks, JsonLd } from "@/components/site";
import { blogPosts, getBlogPost } from "@/lib/site-data";
import { blogPostingSchema, breadcrumbSchema, faqSchema, pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return pageMetadata({ title: post.seoTitle, description: post.description, path: `/blog/${post.slug}` });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <ContentShell>
      <JsonLd data={[blogPostingSchema(post), faqSchema(post.faqs), breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: post.title, href: `/blog/${post.slug}` }])]} />
      <article className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link href="/blog" className="text-sm font-bold uppercase tracking-[0.18em] text-amber-700">← Moving Blog</Link>
          <p className="mt-8 text-sm font-semibold text-slate-500">{post.category} · {post.readTime} · {new Date(post.date).toLocaleDateString("en-AE", { year: "numeric", month: "long", day: "numeric" })}</p>
          <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">{post.title}</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">{post.description}</p>
          <div className="mt-8"><InternalLinks /></div>
          <div className="prose-moving mt-10">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
            <h2>Need help with your UAE move?</h2>
            <p>Contact Emirates Premier Movers for a free quote covering packing, furniture moving, apartment shifting, villa moving and office relocation across Sharjah, Ajman, Dubai and the wider UAE.</p>
          </div>
        </div>
      </article>
      <section className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-4xl"><FaqSection items={post.faqs} /></div></section>
      <CTASection title="Get expert help for your move" />
    </ContentShell>
  );
}
