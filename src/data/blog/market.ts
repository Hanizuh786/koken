import type { BlogPost } from "./types";

export const marketPosts: BlogPost[] = [
  {
    slug: "importing-hnb-products-compliance-checklist",
    title: "Importing HNB Products: A Compliance Checklist",
    description:
      "What to confirm before importing heat-not-burn sticks: product classification, registration, labelling, excise, age rules and import documentation.",
    category: "Market entry",
    published: "2026-02-23",
    updated: "2026-10-20",
    keywords: ["import HNB products", "heated tobacco import regulations", "HNB compliance", "HNB import checklist"],
    answer:
      "Before importing HNB products, confirm how your market classifies them, whether registration or approval is required, the labelling and health warning rules, excise and tax treatment, age and sale restrictions, and the documents customs will ask for.",
    takeaways: [
      "Rules are **country-specific**, and some markets restrict or ban HNB products.",
      "**Tobacco and herbal** sticks may be classified differently.",
      "Confirm **registration, labelling, excise, sale rules and documents** before ordering.",
      "Use a local **customs broker or regulatory adviser** for final confirmation.",
    ],
    sections: [
      {
        heading: "The checklist",
        blocks: [
          {
            type: "table",
            head: ["Area", "Question to answer"],
            rows: [
              ["Classification", "Is the product a heated tobacco product, a herbal product, or another category in my market?"],
              ["Legality", "Is the category allowed to be imported and sold? Are flavours restricted?"],
              ["Registration", "Does the product need registration, notification or approval before sale?"],
              ["Ingredients", "Are there ingredient disclosure requirements or banned ingredients?"],
              ["Labelling", "What health warnings, languages and mandatory text are required? Is plain packaging required?"],
              ["Tax", "What excise and import duties apply, and are tax stamps required?"],
              ["Sale rules", "What are the minimum age, channel and advertising restrictions?"],
              ["Documents", "What will customs require at the border?"],
            ],
          },
        ],
      },
      {
        heading: "Documents commonly requested",
        blocks: [
          {
            type: "list",
            items: [
              "Commercial invoice and packing list.",
              "Bill of lading or air waybill.",
              "Certificate of origin.",
              "Product specifications and ingredient information.",
              "Import licence or permit where required.",
            ],
          },
          {
            type: "p",
            text: "Exact requirements vary. Share your list with your manufacturer early so it can be prepared alongside production.",
          },
        ],
      },
      {
        heading: "Tobacco vs herbal classification",
        blocks: [
          {
            type: "p",
            text: "Because [herbal sticks](/herbal-sticks) contain no tobacco, some markets treat them under different rules from [heated tobacco sticks](/tobacco-sticks). Do not assume either is easier; confirm both separately.",
          },
        ],
      },
      {
        heading: "Next steps",
        blocks: [
          {
            type: "p",
            text: "Once the rules are clear, design your packaging accordingly (see our [packaging guide](/insights/hnb-packaging-design-guide)) and plan shipping (see [shipping from the UAE](/insights/shipping-hnb-products-from-the-uae)). When you send your [quote request](/quote), include your destination market so KOKEN can advise on a suitable product and packaging pathway.",
          },
          {
            type: "quote",
            text: "This checklist is general information, not legal advice. Buyers are responsible for confirming and meeting local regulations.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Are HNB products legal everywhere?",
        answer: "No. Regulations vary widely; some markets allow and regulate HNB products, while others restrict or ban them.",
      },
      {
        question: "Who is responsible for import compliance?",
        answer: "The importer is responsible for meeting local regulations. Manufacturers can support with product information and documentation.",
      },
    ],
    related: ["hnb-packaging-design-guide", "shipping-hnb-products-from-the-uae", "how-to-become-an-hnb-distributor"],
  },
  {
    slug: "how-to-request-an-hnb-quote",
    title: "How to Request an HNB Quote That Gets a Fast Reply",
    description:
      "What to include in a heat-not-burn request for quote (RFQ), why prices are quoted per programme, and how to use KOKEN's quote list.",
    category: "Market entry",
    published: "2026-04-13",
    keywords: ["HNB quote", "request for quote heated tobacco", "HNB price", "bulk HNB pricing"],
    answer:
      "To get a fast, accurate HNB quote, send the supplier your company details, destination market, products and flavours, estimated volume, packaging needs and target timeline in one message. HNB prices depend on these factors, so suppliers usually quote per programme.",
    takeaways: [
      "HNB pricing depends on **product mix, volume, packaging and destination**.",
      "One **complete RFQ** beats several partial emails.",
      "Use the KOKEN **quote list** to attach exact products to your enquiry.",
      "Expect clarifying questions on **compliance and packaging**.",
    ],
    sections: [
      {
        heading: "Why HNB prices are quoted, not listed",
        blocks: [
          {
            type: "p",
            text: "Two buyers ordering the same flavour can face different costs: branded packaging, market-specific warnings, volumes, shipping terms and documentation all change the price. That is why KOKEN, like most B2B manufacturers, quotes on request.",
          },
        ],
      },
      {
        heading: "What to include in your RFQ",
        blocks: [
          {
            type: "list",
            items: [
              "Company name, country and business type.",
              "Destination market(s).",
              "Products and flavours. Add them to your quote list from the [tobacco](/tobacco-sticks) and [herbal](/herbal-sticks) pages.",
              "Estimated first-order and ongoing volume.",
              "Packaging: KOKEN-branded, private label, or OEM.",
              "Target launch date.",
              "Preferred shipping terms if known.",
            ],
          },
        ],
      },
      {
        heading: "How the KOKEN quote list works",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "Open any product page and select **Add to quote**.",
              "Go to the [quote page](/quote) and adjust quantities or references.",
              "Complete the form with your company and market details.",
              "Submit. The enquiry goes to the KOKEN sales team at sales@koken-inc.cn.",
            ],
          },
        ],
      },
      {
        heading: "After you send it",
        blocks: [
          {
            type: "p",
            text: "Expect follow-up questions about compliance, device compatibility and packaging. Having your [OEM brief](/insights/how-to-write-an-hnb-oem-brief) ready speeds this up.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Why doesn't KOKEN list prices online?",
        answer: "Prices depend on product mix, volume, packaging and destination market, so KOKEN provides market-specific quotes on request.",
      },
      {
        question: "How do I contact KOKEN for a quote?",
        answer: "Use the quote form on the website, email sales@koken-inc.cn, or message +971 56 505 3048 on WhatsApp.",
      },
    ],
    related: ["how-to-write-an-hnb-oem-brief", "hnb-moq-and-volume-planning", "how-to-choose-an-hnb-manufacturer"],
  },
  {
    slug: "how-to-become-an-hnb-distributor",
    title: "How to Become an HNB Distributor: A Practical Roadmap",
    description:
      "A roadmap for importers and wholesalers entering the heat-not-burn category: market research, licensing, supplier selection, range and retail support.",
    category: "Market entry",
    published: "2026-05-25",
    keywords: ["HNB distributor", "heated tobacco distributor", "become HNB wholesaler", "HNB importer"],
    answer:
      "To become an HNB distributor, research your market's demand and regulations, obtain the licences needed to import and sell, choose a licensed manufacturer, build a focused range, set up compliant logistics and support your retail partners with product training.",
    takeaways: [
      "Begin with **market research and regulation**.",
      "Secure the **licences** your market requires to import and wholesale.",
      "Choose a **licensed, reliable manufacturer**.",
      "Win retailers with a **focused range and good product information**.",
    ],
    sections: [
      {
        heading: "1. Research the market",
        blocks: [
          {
            type: "list",
            items: [
              "Which HNB devices are already in use?",
              "Which flavour families sell?",
              "Who are the existing competitors and at what price points?",
              "Which retail channels are permitted to sell HNB products?",
            ],
          },
        ],
      },
      {
        heading: "2. Get licensed",
        blocks: [
          {
            type: "p",
            text: "Many markets require import, wholesale or tobacco trading licences. Confirm requirements with local authorities and work through our [import compliance checklist](/insights/importing-hnb-products-compliance-checklist).",
          },
        ],
      },
      {
        heading: "3. Choose a supplier",
        blocks: [
          {
            type: "p",
            text: "Use our [10 questions for choosing an HNB manufacturer](/insights/how-to-choose-an-hnb-manufacturer). Decide whether you will distribute the manufacturer's brand or build your own through [private label](/insights/oem-vs-private-label-hnb).",
          },
        ],
      },
      {
        heading: "4. Build a focused range",
        blocks: [
          {
            type: "p",
            text: "Start with a small number of flavours that cover different preferences, and consider adding a tobacco-free [herbal line](/insights/what-are-herbal-hnb-sticks). See [building an HNB product range](/insights/building-an-hnb-product-range).",
          },
        ],
      },
      {
        heading: "5. Set up logistics and support retailers",
        blocks: [
          {
            type: "list",
            items: [
              "Plan shipping, warehousing and stock rotation (see [shipping from the UAE](/insights/shipping-hnb-products-from-the-uae)).",
              "Give retailers clear product information: flavour profiles, device compatibility, age restrictions.",
              "Track sell-through by flavour and outlet, and reorder on data.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need a licence to distribute HNB products?",
        answer: "In many markets, yes. Import, wholesale or tobacco trading licences may be required; check with local authorities.",
      },
      {
        question: "Can I distribute under my own brand?",
        answer: "Yes. Private-label programmes let distributors sell HNB products under their own brand and packaging.",
      },
    ],
    related: ["importing-hnb-products-compliance-checklist", "building-an-hnb-product-range", "how-to-choose-an-hnb-manufacturer"],
  },
  {
    slug: "building-an-hnb-product-range",
    title: "Building an HNB Product Range: Tobacco and Herbal",
    description:
      "How to plan a heat-not-burn product range: choosing flavours across families, balancing tobacco and herbal SKUs, and adding devices.",
    category: "Products & flavours",
    published: "2026-06-22",
    keywords: ["HNB product range", "heated tobacco range planning", "HNB SKU planning", "tobacco and herbal sticks"],
    answer:
      "A strong HNB range covers several flavour families with few overlaps, balances tobacco and tobacco-free herbal SKUs to suit local rules and demand, and is planned alongside the devices your customers use.",
    takeaways: [
      "Cover **different flavour families** rather than near-duplicates.",
      "Add a **herbal line** for tobacco-free demand where allowed.",
      "Plan the range around **device compatibility**.",
      "**Review quarterly** and replace slow SKUs.",
    ],
    sections: [
      {
        heading: "Step 1: Map flavour families",
        blocks: [
          {
            type: "p",
            text: "Group available flavours into families: classic tobacco, fresh and menthol, sweet, fruit, citrus and roasted. Our guide to [flavour profiles](/insights/hnb-flavour-profiles-explained) explains how to compare them.",
          },
        ],
      },
      {
        heading: "Step 2: Choose a starter range",
        blocks: [
          {
            type: "table",
            caption: "Example starter range built from KOKEN flavours",
            head: ["Role in range", "Tobacco option", "Herbal option"],
            rows: [
              ["Classic anchor", "[Amber](/products/amber-tobacco-sticks) or [Classic Tobacco](/products/tobacco-classic-sticks)", "[Coffee](/products/coffee-herbal-sticks)"],
              // Peppermint hidden for now:
              // ["Fresh / cooling", "[Menthol](/products/menthol-tobacco-sticks) or [Blue](/products/blue-tobacco-sticks)", "[Peppermint](/products/peppermint-herbal-sticks)"],
              ["Fresh / cooling", "[Menthol](/products/menthol-tobacco-sticks) or [Blue](/products/blue-tobacco-sticks)", "[Lime](/products/lime-herbal-sticks)"],
              ["Smooth / sweet", "[Silver](/products/silver-tobacco-sticks) or [Vanilla](/products/vanilla-tobacco-sticks)", "[Mango](/products/mango-herbal-sticks)"],
              ["Fruit / citrus", "[Blueberry](/products/blueberry-tobacco-sticks)", "[Grapeel](/products/grapeel-herbal-sticks), [Strawberry](/products/strawberry-herbal-sticks) or [Apple](/products/apple-herbal-sticks)"],
            ],
          },
          {
            type: "p",
            text: "Check each flavour against local rules, since some markets restrict menthol or fruit flavours in tobacco products.",
          },
        ],
      },
      {
        heading: "Step 3: Balance tobacco and herbal",
        blocks: [
          {
            type: "p",
            text: "Herbal sticks contain no tobacco or nicotine and can serve different customers or channels. Where regulations allow both, a mixed range covers more demand. See [what herbal HNB sticks are](/insights/what-are-herbal-hnb-sticks).",
          },
        ],
      },
      {
        heading: "Step 4: Plan devices",
        blocks: [
          {
            type: "p",
            text: "Your range must work in the devices your customers use. If there is no established device base, plan [device supply](/devices) together with sticks. See [stick and device compatibility](/insights/hnb-stick-and-device-compatibility).",
          },
        ],
      },
      {
        heading: "Step 5: Review and refine",
        blocks: [
          {
            type: "p",
            text: "Review sell-through each quarter. Replace the slowest flavour with a new direction rather than expanding endlessly, and keep stock deep on best sellers. Our [MOQ and volume planning guide](/insights/hnb-moq-and-volume-planning) covers reorder timing.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How many SKUs should an HNB range have?",
        answer: "Many ranges launch with three to five flavours per line and expand based on sales data, rather than launching every flavour at once.",
      },
      {
        question: "Should I offer both tobacco and herbal sticks?",
        answer: "Where regulations allow, offering both covers more customer preferences and channels. Confirm local rules for each category.",
      },
    ],
    related: ["hnb-flavour-profiles-explained", "what-are-herbal-hnb-sticks", "hnb-stick-and-device-compatibility"],
  },
  {
    slug: "shipping-hnb-products-from-the-uae",
    title: "Shipping HNB Products From the UAE: A Buyer's Guide",
    description:
      "How to ship heat-not-burn sticks from the UAE: sea vs air freight, choosing incoterms, packing, storage conditions and lead-time planning.",
    category: "Market entry",
    published: "2026-08-10",
    keywords: ["ship HNB products", "HNB freight UAE", "heated tobacco shipping", "HNB storage", "incoterms HNB"],
    answer:
      "Most HNB programmes ship from the UAE by sea freight for regular orders and by air for samples or urgent top-ups. Agree the incoterm up front, ship in sealed cases, and store sticks in cool, dry conditions away from direct sunlight.",
    takeaways: [
      "**Sea freight** for regular volume; **air freight** for samples and urgent stock.",
      "Agree the **incoterm** so responsibilities and costs are clear.",
      "Protect sticks from **heat, humidity and sunlight** in transit and storage.",
      "Plan lead time as **production + transit + customs + buffer**.",
    ],
    sections: [
      {
        heading: "Sea vs air freight",
        blocks: [
          {
            type: "table",
            head: ["", "Sea freight", "Air freight"],
            rows: [
              ["Best for", "Regular programme orders", "Samples, launches, urgent top-ups"],
              ["Cost per unit", "Lower", "Higher"],
              ["Transit time", "Longer", "Shorter"],
              ["Planning need", "Higher, so book ahead", "Lower"],
            ],
          },
        ],
      },
      {
        heading: "Choosing an incoterm",
        blocks: [
          {
            type: "p",
            text: "Incoterms define who handles and pays for each part of the journey. Common choices include **EXW** (buyer collects from the factory), **FOB** (seller delivers onto the vessel at the port of origin) and **CIF** (seller pays freight and insurance to the destination port). Choose based on your freight forwarder relationships and how much control you want over shipping.",
          },
        ],
      },
      {
        heading: "Packing and storage",
        blocks: [
          {
            type: "list",
            items: [
              "Keep sticks in sealed packs and cases until sale.",
              "Store in cool, dry conditions away from direct sunlight and strong odours.",
              "Avoid long dwell times in hot containers or yards where possible.",
              "Rotate stock first-in, first-out and keep batch codes recorded.",
            ],
          },
        ],
      },
      {
        heading: "Planning lead time",
        blocks: [
          {
            type: "p",
            text: "Total lead time = production (including packaging) + inland and port handling + transit + customs clearance + a safety buffer. Agree production timing when you confirm your order, and keep [import documents](/insights/importing-hnb-products-compliance-checklist) ready to avoid delays at the border.",
          },
          {
            type: "p",
            text: "KOKEN ships from Ras Al Khaimah, UAE. Read [why source HNB products from the UAE](/insights/why-manufacture-hnb-in-the-uae), then share your destination and preferred terms in a [quote request](/quote).",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How should HNB sticks be stored?",
        answer: "In sealed packaging, in cool and dry conditions away from direct sunlight and strong odours, with first-in, first-out stock rotation.",
      },
      {
        question: "Should I ship HNB products by sea or air?",
        answer: "Sea freight suits regular volume orders at lower cost; air freight suits samples and urgent stock.",
      },
    ],
    related: ["why-manufacture-hnb-in-the-uae", "importing-hnb-products-compliance-checklist", "hnb-moq-and-volume-planning"],
  },
];
