import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// AI search and assistant crawlers are explicitly allowed so KOKEN can be cited
// in ChatGPT, Claude, Perplexity, Gemini and Google AI Overviews (SEO checklist #102).
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "CCBot",
  "Amazonbot",
  "DuckAssistBot",
  "meta-externalagent",
];

export default function robots(): MetadataRoute.Robots {
  const disallow = ["/api/"];
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      { userAgent: aiCrawlers, allow: "/", disallow },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
