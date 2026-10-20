import type { BlogPost } from "./types";
import { basicsPosts } from "./basics";
import { manufacturingPosts } from "./manufacturing";
import { brandingPosts } from "./branding";
import { marketPosts } from "./market";

export type { BlogPost, BlogCategory } from "./types";

export const blogPosts: BlogPost[] = [...basicsPosts, ...manufacturingPosts, ...brandingPosts, ...marketPosts].sort(
  (a, b) => b.published.localeCompare(a.published),
);

export const blogAuthor = {
  name: "KOKEN Editorial Team",
  description:
    "Written by the KOKEN International FZ-LLC product and manufacturing team in Ras Al Khaimah, UAE, drawing on day-to-day work with HNB granules, stick production and B2B supply programmes.",
};

export const getBlogPost = (slug: string) => blogPosts.find((post) => post.slug === slug);

export const getRelatedPosts = (post: BlogPost, limit = 3) => {
  const picked = (post.related ?? []).map(getBlogPost).filter((p): p is BlogPost => Boolean(p));
  const sameCategory = blogPosts.filter((p) => p.category === post.category && p.slug !== post.slug && !picked.includes(p));
  const rest = blogPosts.filter((p) => p.slug !== post.slug && !picked.includes(p) && !sameCategory.includes(p));
  return [...picked, ...sameCategory, ...rest].slice(0, limit);
};

export const readingMinutes = (post: BlogPost) => {
  const words = [post.answer, ...post.takeaways, ...post.sections.flatMap((s) => [s.heading, ...s.blocks.map(blockText)])]
    .join(" ")
    .split(/\s+/).length;
  return Math.max(3, Math.round(words / 220));
};

function blockText(block: BlogPost["sections"][number]["blocks"][number]) {
  if (block.type === "list") return block.items.join(" ");
  if (block.type === "table") return [...block.head, ...block.rows.flat()].join(" ");
  return block.text;
}

export const sectionId = (heading: string) => heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
