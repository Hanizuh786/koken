import Script from "next/script";

// GA4 for kokenstick.com (SEO checklist #1, #110). NEXT_PUBLIC_GA_ID overrides the default
// property; set it to an empty string to turn analytics off (e.g. on a staging copy).
const defaultGaId = "G-KQV7E1TBY3";

export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID ?? defaultGaId;
  if (!gaId) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
      </Script>
    </>
  );
}

