import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar, Footer, JsonLd } from "@/components/site";
import { FloatingActions } from "@/components/interactive";
import { company } from "@/lib/site-data";
import { localBusinessSchema, organizationSchema } from "@/lib/seo";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(company.baseUrl),
  title: {
    default: `${company.name} | Premium Movers and Packers UAE`,
    template: `%s | ${company.name}`,
  },
  description:
    "Premium moving and packing company in Sharjah, Ajman, Al Quoz, Dubai, Abu Dhabi and across the UAE. 24/7 movers, secure packing and free quotes.",
  applicationName: company.name,
  verification: {
    google: "orqsH3Gz3_w2F6JbqzZu7uACcO80HtKWNsGTN0iqkUE",
  },
  openGraph: {
    siteName: company.name,
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-AE" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`} suppressHydrationWarning>
        <JsonLd data={[organizationSchema(), localBusinessSchema()]} />
        <Navbar />
        {children}
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
