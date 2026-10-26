import type { FaqItem } from "@/lib/site";

// Inline text supports [label](/path) links and **bold**; see components/RichText.
export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "table"; head: string[]; rows: string[][]; caption?: string }
  | { type: "quote"; text: string };

export type BlogSection = { heading: string; blocks: BlogBlock[] };

export type BlogCategory = "HNB basics" | "Manufacturing" | "OEM & private label" | "Market entry" | "Products & flavours";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  published: string;
  updated?: string;
  keywords: string[];
  // One- or two-sentence direct answer shown first, for snippets and AI citations.
  answer: string;
  takeaways: string[];
  sections: BlogSection[];
  faqs: FaqItem[];
  related?: string[];
};
