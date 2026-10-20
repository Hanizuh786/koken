import Link from "next/link";
import { notFound } from "next/navigation";
import BlogCard, { formatDate } from "@/components/BlogCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import RichText, { plainText } from "@/components/RichText";
import { blogAuthor, blogPosts, getBlogPost, getRelatedPosts, readingMinutes, sectionId, type BlogPost } from "@/data/blog";
import { absoluteUrl, company, organizationId, pageMeta } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article not found" };
  const meta = pageMeta({ title: post.title, description: post.description, path: `/insights/${slug}` });
  return {
    ...meta,
    keywords: post.keywords,
    authors: [{ name: blogAuthor.name, url: absoluteUrl("/about") }],
    openGraph: {
      ...meta.openGraph,
      type: "article" as const,
      publishedTime: post.published,
      modifiedTime: post.updated ?? post.published,
      section: post.category,
      tags: post.keywords,
    },
  };
}

function Block({ block }: { block: BlogPost["sections"][number]["blocks"][number] }) {
  switch (block.type) {
    case "p":
      return <p><RichText text={block.text} /></p>;
    case "quote":
      return <blockquote><RichText text={block.text} /></blockquote>;
    case "list": {
      const List = block.ordered ? "ol" : "ul";
      return <List>{block.items.map((item) => <li key={item}><RichText text={item} /></li>)}</List>;
    }
    case "table":
      return (
        <div className="tableScroll">
          <table className="factsTable blogTable">
            {block.caption && <caption>{block.caption}</caption>}
            <thead>
              <tr>{block.head.map((cell) => <th key={cell} scope="col">{cell}</th>)}</tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row.join("|")}>
                  {row.map((cell, i) => (i === 0 ? <th key={i} scope="row"><RichText text={cell} /></th> : <td key={i}><RichText text={cell} /></td>))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const url = absoluteUrl(`/insights/${slug}`);
  const modified = post.updated ?? post.published;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    url,
    mainEntityOfPage: url,
    datePublished: post.published,
    dateModified: modified,
    articleSection: post.category,
    keywords: post.keywords.join(", "),
    wordCount: readingMinutes(post) * 220,
    inLanguage: "en",
    image: absoluteUrl("/opengraph-image"),
    author: { "@type": "Organization", name: blogAuthor.name, url: absoluteUrl("/about"), parentOrganization: { "@id": organizationId } },
    publisher: { "@id": organizationId },
    abstract: plainText(post.answer),
  };

  return (
    <main>
      <JsonLd data={schema} />
      <article className="blogArticle">
        <header className="pageHero sectionPad">
          <Breadcrumbs items={[{ name: "Insights", path: "/insights" }, { name: post.title, path: `/insights/${slug}` }]} />
          <p className="eyebrow">{post.category}</p>
          <h1>{post.title}</h1>
          <p className="blogMeta">
            By <Link href="/about">{blogAuthor.name}</Link> · Published <time dateTime={post.published}>{formatDate(post.published)}</time>
            {post.updated && (
              <>
                {" "}· Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
              </>
            )}{" "}
            · {readingMinutes(post)} min read
          </p>
          <div className="answerBox">
            <p><RichText text={post.answer} /></p>
          </div>
        </header>
        <div className="sectionPad blogBody">
          <aside className="blogTakeaways" aria-labelledby="takeaways-heading">
            <h2 id="takeaways-heading">Key takeaways</h2>
            <ul>{post.takeaways.map((item) => <li key={item}><RichText text={item} /></li>)}</ul>
          </aside>
          <nav className="blogToc" aria-labelledby="toc-heading">
            <h2 id="toc-heading">In this guide</h2>
            <ol>
              {post.sections.map((section) => (
                <li key={section.heading}><a href={`#${sectionId(section.heading)}`}>{section.heading}</a></li>
              ))}
              <li><a href="#faq-heading">FAQ</a></li>
            </ol>
          </nav>
          {post.sections.map((section) => (
            <section key={section.heading} id={sectionId(section.heading)} className="blogSection">
              <h2>{section.heading}</h2>
              {section.blocks.map((block, i) => <Block key={i} block={block} />)}
            </section>
          ))}
          <div className="detailNote blogCta">
            <strong>Planning an HNB programme?</strong>
            <span>
              Share your target market, volume and packaging needs with {company.name}.{" "}
              <Link href="/quote">Request a manufacturing quote</Link> or browse the <Link href="/tobacco-sticks">tobacco</Link> and{" "}
              <Link href="/herbal-sticks">herbal</Link> stick ranges.
            </span>
          </div>
        </div>
      </article>
      <Faq items={post.faqs} title="Frequently asked questions" />
      <section className="sectionPad">
        <div className="contentCard blogAuthor">
          <h2>About the author</h2>
          <p>
            <strong>{blogAuthor.name}.</strong> {blogAuthor.description} <Link href="/about">More about KOKEN</Link>.
          </p>
          <p className="blogDisclaimer">
            This article is general B2B industry information, not legal, regulatory or medical advice. HNB products are not risk free
            and are for adults only; rules differ by country, so confirm requirements with local authorities before trading.
          </p>
        </div>
      </section>
      <section className="sectionPad productBand">
        <div className="sectionHead">
          <p className="eyebrow">Keep reading</p>
          <h2>Related guides</h2>
          <p>Browse all guides in <Link href="/insights">KOKEN Insights</Link>.</p>
        </div>
        <div className="blogGrid">
          {getRelatedPosts(post).map((related) => <BlogCard key={related.slug} post={related} />)}
        </div>
      </section>
    </main>
  );
}
