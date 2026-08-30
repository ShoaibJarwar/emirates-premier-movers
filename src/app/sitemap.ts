import { areas, blogPosts, company, services } from "@/lib/site-data";
import type { MetadataRoute } from "next";

// A fixed "site last touched" date for static routes with no natural per-page
// update timestamp (home, about, pricing, etc.). Bump this manually when you
// meaningfully edit one of those pages — do NOT replace with `new Date()`,
// which would falsely tell search engines every page changes on every deploy
// and can suppress re-crawl priority.
const SITE_CONTENT_DATE = "2026-01-24";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.baseUrl.replace(/\/$/, "");

  const staticRoutes = ["", "/about", "/services", "/areas", "/pricing", "/blog", "/testimonials", "/faq", "/contact", "/get-a-free-quote", "/privacy-policy", "/terms-and-conditions", "/sitemap"];
  const serviceRoutes = services.map((service) => ({ path: `/services/${service.slug}`, lastModified: service.lastUpdated }));
  const areaRoutes = areas.map((area) => ({ path: `/areas/${area.slug}`, lastModified: area.lastUpdated }));
  const blogRoutes = blogPosts.map((post) => ({ path: `/blog/${post.slug}`, lastModified: post.date }));

  const allRoutes = [
    ...staticRoutes.map((path) => ({ path, lastModified: SITE_CONTENT_DATE })),
    ...serviceRoutes,
    ...areaRoutes,
    ...blogRoutes,
  ];

  return allRoutes.map(({ path, lastModified }) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.includes("get-a-free-quote") ? 0.9 : path === "/areas/sharjah" ? 0.9 : 0.7,
  }));
}
