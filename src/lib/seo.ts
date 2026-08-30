import type { Metadata } from "next";
import { company } from "@/lib/site-data";

export function absoluteUrl(path = "/") {
  const base = company.baseUrl.replace(/\/$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${cleanPath}`;
}

export function whatsappUrl(message: string) {
  return `https://wa.me/${company.whatsappHref}?text=${encodeURIComponent(message)}`;
}

export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(company.name) ? title : `${title} | ${company.name}`;

  return {
    // `title.absolute` explicitly overrides the root layout's `title.template`
    // (`"%s | ${company.name}"`). A plain string here would otherwise have that
    // template applied on top of `fullTitle`, which already ends in the company
    // name, resulting in "... | Emirates Premier Movers | Emirates Premier Movers"
    // in the browser tab and search results.
    title: { absolute: fullTitle },
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: company.name,
      locale: "en_AE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    legalName: company.legalName,
    url: company.baseUrl,
    email: company.email,
    telephone: company.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressCountry: "AE",
    },
    sameAs: [whatsappUrl(`Hello ${company.name}, I would like to request a moving quote.`)],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: company.name,
    url: company.baseUrl,
    image: absoluteUrl("/brand-mark.svg"),
    telephone: company.phone,
    email: company.email,
    priceRange: "AED 499 - AED 10,000+",
    openingHours: "Mo-Su 00:00-23:59",
    areaServed: ["Sharjah", "Ajman", "Al Quoz", "Dubai", "Abu Dhabi", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"],
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressCountry: "AE",
    },
    // Coordinates for King Faisal Street, Al Majaz, Sharjah — the street the office
    // address is on. Update if the real office address ever changes to a different
    // street. Deliberately no `aggregateRating`: schema.org and Google guidelines
    // require it to reflect real, verifiable reviews — never fabricate a rating or
    // review count. Add it once genuine review data exists to back it.
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.3337,
      longitude: 55.3918,
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: { "@type": "MovingCompany", name: company.name, url: company.baseUrl },
    areaServed: "United Arab Emirates",
    url: absoluteUrl(path),
  };
}

export function blogPostingSchema(post: { title: string; description: string; date: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: company.name },
    publisher: { "@type": "Organization", name: company.name },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };
}
