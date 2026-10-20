import Link from "next/link";
import { readingMinutes, type BlogPost } from "@/data/blog";

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default function BlogCard({ post, headingLevel = "h3" }: { post: BlogPost; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <article className="blogCard">
      <span className="tag">{post.category}</span>
      <Heading>
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </Heading>
      <p>{post.description}</p>
      <p className="blogMeta">
        <time dateTime={post.updated ?? post.published}>{formatDate(post.updated ?? post.published)}</time> · {readingMinutes(post)} min read
      </p>
    </article>
  );
}
