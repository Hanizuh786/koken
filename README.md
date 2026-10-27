

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
- Canonical domain is `https://kokenstick.com` (set in `src/lib/site.ts` and `next.config.mjs`); the site is hosted on GoDaddy, which deploys from GitHub `main`
- GA4 property `G-KQV7E1TBY3` is built in (`src/components/Analytics.tsx`) with a `generate_lead` conversion on quote submit; optional env vars: `NEXT_PUBLIC_GA_ID` (overrides it), `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, `NEXT_PUBLIC_BING_SITE_VERIFICATION`
- Insights (`/insights`): 20 HNB guides in `src/data/blog/*.ts` (BlogPosting + FAQ schema, RSS at `/insights/rss.xml`); add a post by appending an entry to one of those files
- Bump `contentUpdated` in `src/lib/site.ts` when copy changes

## Assistive Agent Optimization (AAO)
Helps AI assistants and browsing agents read the catalogue and prepare quote requests for buyers. Shared definitions live in `src/lib/agent.ts`.
- `/catalog.json`: machine-readable catalogue with flavour profiles, images and add-to-quote links
- `/openapi.json`: OpenAPI spec for the catalogue and `POST /api/contact`. The API accepts `lineItems: [{ slug, quantity }]` and returns a `missing` list on a 400 response.
- `/llms-full.txt`: all product, FAQ and glossary text in one file, alongside the existing `llms.txt`, which now has a "For AI agents" section
- Quote deep link: `/quote?add=slug-a,slug-b&qty=10` adds products to the quote list. Query parameters matching the form fields (`fullName`, `companyName`, `country`, `email`, `whatsapp`, `businessType`, `estimatedVolume`, `targetMarket`, `message`) prefill the form so the buyer only has to review and send.
- Schema.org `QuoteAction` on the Organization and on every Product, plus `<link rel="alternate">` and `<link rel="service-desc">` tags in the page head
- Forms use `autocomplete` hints, labelled controls and `aria-live` updates, and the age gate is a labelled dialog

## Hidden products
- Peppermint herbal sticks are commented out in `src/data/products.ts` (with matching copy in FAQs, blog posts and the herbal page). `/products/peppermint-herbal-sticks` temporarily redirects to `/herbal-sticks` (see `next.config.mjs`).
