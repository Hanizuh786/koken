// Single source of truth for brand/NAP details so they stay consistent across
// pages, structured data, llms.txt and the footer (SEO checklist #96, #109).
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://koken-fzllc.vercel.app"
).replace(/\/$/, "");

export const company = {
  name: "KOKEN International FZ-LLC",
  shortName: "KOKEN",
  description:
    "KOKEN International FZ-LLC is the official patent and licence holder for HNB (heat-not-burn) production in the UAE, offering granules manufacturing, bulk supply, OEM and private-label programmes for global B2B partners.",
  email: "sales@koken-inc.cn",
  infoEmail: "info@koken-inc.cn",
  telephone: "+971565053048",
  telephoneDisplay: "+971 56 505 3048",
  whatsappUrl: "https://wa.me/971565053048",
  linkedin: "https://www.linkedin.com/company/kokenstick",
  logo: "/images/koken-logo.png",
  address: {
    streetAddress: "Al Hamra Industrial Zone-FZ",
    addressLocality: "Ras Al Khaimah",
    addressRegion: "Ras Al Khaimah",
    addressCountry: "AE",
    countryName: "United Arab Emirates",
  },
  mapQuery: "Al Hamra Industrial Zone-FZ, Ras Al Khaimah, United Arab Emirates",
};

// Bump when page copy is meaningfully updated; used for dateModified and sitemap lastModified.
export const contentUpdated = "2026-10-20";

export const absoluteUrl = (path: string) =>
  path.startsWith("http") ? path : `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;

export const organizationId = `${siteUrl}/#organization`;

export type Crumb = { name: string; path: string };

export const breadcrumbSchema = (crumbs: Crumb[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: absoluteUrl(crumb.path),
  })),
});

export type FaqItem = { question: string; answer: string };

export const faqSchema = (items: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
});

// Shared Open Graph/Twitter fields so every page gets complete social tags.
export const pageMeta = ({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) => {
  // Fall back to the generated site-wide card so pages that override openGraph keep an image.
  const ogImage = image ?? "/opengraph-image";
  const images = [{ url: ogImage, alt: title }];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website" as const,
      siteName: company.name,
      locale: "en_AE",
      images,
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [ogImage],
    },
  };
};
