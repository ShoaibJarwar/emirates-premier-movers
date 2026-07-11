import { areas, blogPosts, company, services } from "@/lib/site-data";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.baseUrl.replace(/\/$/, "");
  const staticRoutes = ["", "/about", "/services", "/areas", "/pricing", "/blog", "/testimonials", "/faq", "/contact", "/get-a-free-quote", "/privacy-policy", "/terms-and-conditions", "/sitemap"];
  const serviceRoutes = services.map((service) => `/services/${service.slug}`);
  const areaRoutes = areas.map((area) => `/areas/${area.slug}`);
  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes, ...blogRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("get-a-free-quote") ? 0.9 : 0.7,
  }));
}
