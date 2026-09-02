import type { Metadata } from "next";
import "./globals.scss";
import AgeGate from "@/components/AgeGate";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RfqProvider } from "@/components/RfqProvider";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://koken-fzllc.vercel.app";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KOKEN International FZ-LLC | UAE HNB production and granules manufacturing",
    template: "%s | KOKEN International FZ-LLC",
  },
  description:
    "KOKEN International FZ-LLC is the official patent and licence holder for HNB production in the UAE, offering granules manufacturing, bulk supply, OEM and private-label programmes for global B2B partners.",
  keywords: [
    "official HNB patent holder UAE",
    "HNB licence holder UAE",
    "HNB granules manufacturing",
    "heat-not-burn production UAE",
    "OEM HNB manufacturer",
    "private label HNB products",
    "bulk HNB quote",
    "tobacco sticks manufacturer",
    "herbal sticks manufacturer",
    "global HNB supplier",
  ],
  openGraph: {
    title: "KOKEN International FZ-LLC | UAE HNB production",
    description:
      "UAE-based HNB production, granules manufacturing, bulk supply, OEM and private-label programmes for global B2B partners.",
    type: "website",
    locale: "en_AE",
    siteName: "KOKEN International FZ-LLC",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KOKEN International FZ-LLC",
    url: siteUrl,
    logo: `${siteUrl}/images/koken-logo.png`,
    description:
      "Official patent and licence holder for HNB production in the UAE, with granules manufacturing and global B2B supply programmes.",
    email: "sales@koken-inc.cn",
    telephone: "+971565053048",
    areaServed: "Worldwide",
    knowsAbout: [
      "HNB production",
      "granules manufacturing",
      "OEM manufacturing",
      "private-label HNB products",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Hamra Industrial Zone-FZ",
      addressLocality: "Ras Al Khaimah",
      addressCountry: "AE",
    },
    sameAs: [
      "https://www.linkedin.com/company/kokenstick?originalSubdomain=ae",
    ],
  };
  return (
    <html lang="en-AE">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <RfqProvider>
          <AgeGate />
          <Header />
          {children}
          <Footer />
        </RfqProvider>
      </body>
    </html>
  );
}
