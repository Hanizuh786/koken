/** @type {import('next').NextConfig} */
const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://koken-fzllc.vercel.app");
const canonicalHost = siteUrl.host;
const alternateHost = canonicalHost.startsWith("www.") ? canonicalHost.slice(4) : `www.${canonicalHost}`;

const nextConfig = {
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return [
      // Serve one hostname only: send www/non-www variant to the canonical host with a 301 (SEO checklist #15, #16).
      {
        source: "/:path*",
        has: [{ type: "host", value: alternateHost }],
        destination: `${siteUrl.origin}/:path*`,
        permanent: true,
      },
      // The guides section was renamed from Blog to Insights.
      { source: "/blog", destination: "/insights", permanent: true },
      { source: "/blog/:path*", destination: "/insights/:path*", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }],
      },
    ];
  },
};

export default nextConfig;
