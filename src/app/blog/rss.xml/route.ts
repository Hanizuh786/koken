import { blogPosts } from "@/data/blog";
import { absoluteUrl, company } from "@/lib/site";

export const dynamic = "force-static";

const escape = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function GET() {
  const items = blogPosts
    .map(
      (post) => `    <item>
      <title>${escape(post.title)}</title>
      <link>${absoluteUrl(`/blog/${post.slug}`)}</link>
      <guid>${absoluteUrl(`/blog/${post.slug}`)}</guid>
      <pubDate>${new Date(`${post.published}T00:00:00Z`).toUTCString()}</pubDate>
      <category>${escape(post.category)}</category>
      <description>${escape(post.description)}</description>
    </item>`,
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escape(company.shortName)} HNB Industry Blog</title>
    <link>${absoluteUrl("/blog")}</link>
    <description>Guides on heat-not-burn products, manufacturing, OEM and market entry from ${escape(company.name)}.</description>
    <language>en</language>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
