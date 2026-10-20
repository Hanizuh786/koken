

## Included
- Home page 
- Dedicated category pages
  - `/tobacco-sticks`
  - `/herbal-sticks`
  - `/devices`
  - `/custom-branding`
- Product detail pages using `/products/[slug]`
- Every product has description, highlights and quote option
- RFQ basket using localStorage
- Quote page with selected products and enquiry form
- Email notification API to `sales@koken-inc.cn`
- 18+ age gate
- Professional footer
- Responsive design
- SEO metadata and product structured data
# koken

## SEO and AI search (GEO)
- `sitemap.xml`, `robots.txt` (AI crawlers allowed) and `llms.txt` are generated from `src/data` and `src/lib/site.ts`
- Canonical URLs, Open Graph/Twitter cards and a generated share image on every page
- Structured data: Organization/LocalBusiness, WebSite, Product, ItemList, BreadcrumbList, FAQPage, DefinedTermSet
- About, Contact (with map), FAQ and Glossary pages; custom 404
- Company name/address/phone live in `src/lib/site.ts` so they stay consistent everywhere
- Optional env vars: `NEXT_PUBLIC_GA_ID` (GA4 + `generate_lead` conversion on quote submit), `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, `NEXT_PUBLIC_BING_SITE_VERIFICATION`
- Blog: 20 HNB guides in `src/data/blog/*.ts` (BlogPosting + FAQ schema, RSS at `/blog/rss.xml`); add a post by appending an entry to one of those files
- Bump `contentUpdated` in `src/lib/site.ts` when copy changes
