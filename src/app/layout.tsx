import type { Metadata, Viewport } from "next";
import "./globals.scss";
import AgeGate from "@/components/AgeGate";
import Analytics from "@/components/Analytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { RfqProvider } from "@/components/RfqProvider";
import { absoluteUrl, company, organizationId, siteUrl } from "@/lib/site";

const defaultTitle = "KOKEN International FZ-LLC | HNB Manufacturer in the UAE";
const defaultDescription =
  "Official UAE patent and licence holder for HNB production. Granules manufacturing, tobacco and herbal sticks, OEM and private-label supply for B2B buyers.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | KOKEN",
  },
  description: defaultDescription,
  applicationName: company.name,
  authors: [{ name: company.name, url: siteUrl }],
  creator: company.name,
  publisher: company.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: "/",
    type: "website",
    locale: "en_AE",
    siteName: company.name,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  // Search Console / Bing Webmaster verification via env vars (SEO checklist #1, #2).
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#155fd6",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": organizationId,
  name: company.name,
  alternateName: company.shortName,
  url: siteUrl,
  logo: absoluteUrl(company.logo),
  image: absoluteUrl(company.logo),
  description: company.description,
  email: company.email,
  telephone: company.telephone,
  areaServed: "Worldwide",
  knowsAbout: [
    "Heat-not-burn (HNB) production",
    "HNB granules manufacturing",
    "Heated tobacco sticks",
    "Tobacco-free herbal sticks",
    "OEM manufacturing",
    "Private-label HNB products",
  ],
  address: { "@type": "PostalAddress", ...withoutCountryName(company.address) },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: company.email,
      telephone: company.telephone,
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
  ],
  sameAs: [company.linkedin],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: company.name,
  url: siteUrl,
  inLanguage: "en-AE",
  publisher: { "@id": organizationId },
};

function withoutCountryName({ countryName: _countryName, ...address }: typeof company.address) {
  return address;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AE">
      <body>
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <RfqProvider>
          <AgeGate />
          <Header />
          {children}
          <Footer />
        </RfqProvider>
        <Analytics />
      </body>
    </html>
  );
}
