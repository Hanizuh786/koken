import Breadcrumbs from "@/components/Breadcrumbs";
import BlogCard from "@/components/BlogCard";
import JsonLd from "@/components/JsonLd";
import { blogPosts, sectionId, type BlogCategory } from "@/data/blog";
import { absoluteUrl, company, organizationId, pageMeta } from "@/lib/site";

export const metadata = {
  ...pageMeta({
    title: "HNB Industry Insights: Manufacturing & OEM Guides",
    description:
      "Guides from KOKEN's UAE team on heat-not-burn (HNB) products: how HNB works, granules manufacturing, OEM and private label, and entering new markets.",
    path: "/insights",
  }),
  alternates: { canonical: "/insights", types: { "application/rss+xml": "/insights/rss.xml" } },
};

const categories: BlogCategory[] = ["HNB basics", "Products & flavours", "Manufacturing", "OEM & private label", "Market entry"];

export default function BlogIndex() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${absoluteUrl("/insights")}#blog`,
    name: `${company.shortName} Insights`,
    url: absoluteUrl("/insights"),
    publisher: { "@id": organizationId },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: absoluteUrl(`/insights/${post.slug}`),
      datePublished: post.published,
      dateModified: post.updated ?? post.published,
    })),
  };
  const [featured, ...rest] = blogPosts;
  return (
    <main>
      <JsonLd data={schema} />
      <section className="pageHero sectionPad">
        <Breadcrumbs items={[{ name: "Insights", path: "/insights" }]} />
        <p className="eyebrow">Knowledge hub · {blogPosts.length} guides</p>
        <h1>KOKEN Insights.</h1>
        <div className="answerBox">
          <p>
            Practical guides from the KOKEN team in Ras Al Khaimah, UAE, on heat-not-burn (HNB) products, granules manufacturing, OEM
            and private-label programmes, and taking an HNB range to new markets.
          </p>
        </div>
        <nav aria-label="Insight categories" className="blogCategoryNav">
          <ul className="tocList">
            {categories.map((category) => (
              <li key={category}>
                <a href={`#${sectionId(category)}`}>{category}</a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <section className="sectionPad">
        <div className="sectionHead">
          <p className="eyebrow">Latest guide</p>
        </div>
        <div className="blogFeatured">
          <BlogCard post={featured} headingLevel="h2" />
        </div>
      </section>
      {categories.map((category) => {
        const posts = rest.filter((post) => post.category === category);
        if (!posts.length) return null;
        return (
          <section key={category} id={sectionId(category)} className="sectionPad blogCategory">
            <div className="sectionHead">
              <h2>{category}</h2>
            </div>
            <div className="blogGrid">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}
