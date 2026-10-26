import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { products } from "@/data/products";
import { absoluteUrl, contentUpdated } from "@/lib/site";

// Only canonical, indexable URLs belong here (SEO checklist #2, #22).
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(contentUpdated);
  const pages: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/tobacco-sticks", priority: 0.9 },
    { path: "/herbal-sticks", priority: 0.9 },
    { path: "/custom-branding", priority: 0.9 },
    { path: "/devices", priority: 0.7 },
    { path: "/about", priority: 0.7 },
    { path: "/quote", priority: 0.7 },
    { path: "/contact", priority: 0.6 },
    { path: "/faq", priority: 0.6 },
    { path: "/glossary", priority: 0.5 },
    { path: "/insights", priority: 0.8 },
  ];
  return [
    ...pages.map(({ path, priority }) => ({ url: absoluteUrl(path), lastModified, changeFrequency: "monthly" as const, priority })),
    ...products.map((product) => ({
      url: absoluteUrl(`/products/${product.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...blogPosts.map((post) => ({
      url: absoluteUrl(`/insights/${post.slug}`),
      lastModified: new Date(post.updated ?? post.published),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
