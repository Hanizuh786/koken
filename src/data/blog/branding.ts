import type { BlogPost } from "./types";

export const brandingPosts: BlogPost[] = [
  {
    slug: "oem-vs-private-label-hnb",
    title: "OEM vs Private Label HNB: Which Model Fits Your Brand?",
    description:
      "The difference between OEM and private-label heat-not-burn manufacturing, with a comparison of control, speed, cost drivers and when to choose each.",
    category: "OEM & private label",
    published: "2026-02-16",
    keywords: ["OEM HNB", "private label HNB", "OEM vs private label", "heated tobacco private label"],
    answer:
      "With private label, you sell a manufacturer's existing products under your own brand and packaging. With OEM, the manufacturer produces to your own specification, such as a custom flavour or stick design. Private label is faster to launch; OEM gives more control over the product itself.",
    takeaways: [
      "**Private label** means an existing product in your packaging, and is the fastest route to market.",
      "**OEM** means a product made to your specification, giving more control but taking longer.",
      "Many brands **start with private label** and move selected SKUs to OEM later.",
      "Both models need a clear [brief](/blog/how-to-write-an-hnb-oem-brief) and early packaging decisions.",
    ],
    sections: [
      {
        heading: "Side-by-side comparison",
        blocks: [
          {
            type: "table",
            head: ["", "Private label", "OEM"],
            rows: [
              ["Product", "Manufacturer's existing flavours and specs", "Built to your specification"],
              ["Branding", "Your brand and packaging", "Your brand and packaging"],
              ["Development time", "Shorter", "Longer (development and approval rounds)"],
              ["Control over formula", "Choose from existing range", "Adjust flavour, filling or format"],
              ["Best for", "Fast launch, testing a market", "Differentiated range, established brands"],
            ],
          },
        ],
      },
      {
        heading: "When private label makes sense",
        blocks: [
          {
            type: "p",
            text: "If you want to enter a market quickly or test demand, private label is the practical choice. You select proven flavours, for example from KOKEN's [tobacco](/tobacco-sticks) and [herbal](/herbal-sticks) ranges, and focus your effort on branding, distribution and compliance.",
          },
        ],
      },
      {
        heading: "When OEM makes sense",
        blocks: [
          {
            type: "p",
            text: "OEM suits brands that need something the standard range does not offer: a signature flavour, a specific profile for local taste, or a format tuned to a particular device. Expect development rounds, sample approvals and a longer timeline.",
          },
        ],
      },
      {
        heading: "A common path: start private label, evolve to OEM",
        blocks: [
          {
            type: "p",
            text: "Many brands launch with private-label SKUs, learn what sells, then develop one or two OEM products to stand apart. Planning both from the beginning with the same manufacturer keeps packaging and supply consistent. See KOKEN's [OEM and private-label programme](/custom-branding) and our step-by-step guide to [launching a private-label HNB brand](/blog/how-to-launch-a-private-label-hnb-brand).",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What is the difference between OEM and private label?",
        answer: "Private label uses a manufacturer's existing product in your branding; OEM produces a product to your own specification.",
      },
      {
        question: "Which is faster to launch, OEM or private label?",
        answer: "Private label is usually faster because the product already exists and only packaging needs to be developed.",
      },
      {
        question: "Does KOKEN offer both OEM and private label?",
        answer: "Yes. KOKEN supports both OEM and private-label HNB programmes from its UAE manufacturing base.",
      },
    ],
    related: ["how-to-launch-a-private-label-hnb-brand", "how-to-write-an-hnb-oem-brief", "hnb-packaging-design-guide"],
  },
  {
    slug: "how-to-launch-a-private-label-hnb-brand",
    title: "How to Launch a Private-Label HNB Brand in 8 Steps",
    description:
      "A step-by-step plan for launching your own heat-not-burn brand: market checks, range selection, packaging, samples, compliance, orders and launch.",
    category: "OEM & private label",
    published: "2026-03-23",
    keywords: ["launch HNB brand", "private label heated tobacco", "start HNB brand", "HNB brand owner"],
    answer:
      "To launch a private-label HNB brand: confirm the rules in your market, define your customer and channel, choose flavours, design compliant packaging, approve samples, prepare documentation, place a first order sized to your plan, and launch with retail support.",
    takeaways: [
      "Start with **regulation**, not design: confirm what your market allows.",
      "Pick a **focused range** of three to five flavours.",
      "Agree **packaging artwork** early, since it drives lead time.",
      "Approve **samples** before production and keep reference samples.",
    ],
    sections: [
      {
        heading: "The 8 steps",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "**Check the rules.** Confirm the product category is allowed, and what registration, labelling and tax apply. Use our [compliance checklist](/blog/importing-hnb-products-compliance-checklist).",
              "**Define customer and channel.** Who are you selling to (distributors, retail chains, specialist stores) and which devices are used in your market?",
              "**Choose your range.** Select flavours across different families. See [building an HNB product range](/blog/building-an-hnb-product-range).",
              "**Brief your manufacturer.** Share market, flavours, volume and packaging needs in a structured [OEM brief](/blog/how-to-write-an-hnb-oem-brief).",
              "**Design packaging.** Build artwork around mandatory warnings and markings. See our [packaging guide](/blog/hnb-packaging-design-guide).",
              "**Approve samples.** Test in the target device and sign off flavour and physical specs.",
              "**Prepare documentation and logistics.** Agree shipping method, incoterm and import paperwork. See [shipping from the UAE](/blog/shipping-hnb-products-from-the-uae).",
              "**Place the first order and launch.** Size the order to your distribution plan, then support retailers with product information.",
            ],
          },
        ],
      },
      {
        heading: "Common mistakes",
        blocks: [
          {
            type: "list",
            items: [
              "Designing packaging before confirming local warning requirements.",
              "Launching too many flavours and spreading stock thin.",
              "Skipping device compatibility tests.",
              "Ordering before import documentation is clear.",
            ],
          },
        ],
      },
      {
        heading: "Working with KOKEN",
        blocks: [
          {
            type: "p",
            text: "KOKEN supports brand owners from flavour selection to branded packaging and bulk supply. Start by shortlisting flavours from the [tobacco](/tobacco-sticks) and [herbal](/herbal-sticks) ranges, then send your brief through the [quote form](/quote). Read more about the [private-label programme](/custom-branding).",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What is the first step in launching an HNB brand?",
        answer: "Confirm the regulations in your target market, including whether the category is allowed and what registration, labelling and tax rules apply.",
      },
      {
        question: "How many flavours should a private-label HNB brand start with?",
        answer: "A focused launch range of three to five flavours across different flavour families is a common starting point.",
      },
    ],
    related: ["oem-vs-private-label-hnb", "hnb-packaging-design-guide", "how-to-write-an-hnb-oem-brief"],
  },
  {
    slug: "hnb-packaging-design-guide",
    title: "HNB Packaging Design: Compliance First, Brand Second",
    description:
      "How to design heat-not-burn packaging: pack formats, mandatory health warnings, market markings, batch codes and an artwork approval workflow.",
    category: "OEM & private label",
    published: "2026-04-20",
    keywords: ["HNB packaging", "heated tobacco packaging design", "private label packaging", "tobacco health warnings packaging"],
    answer:
      "Design HNB packaging around the mandatory elements first: health warnings, required text, tax or excise markings, and batch codes for your market. Then build your brand into the remaining space, and approve final proofs with the manufacturer before production.",
    takeaways: [
      "Mandatory **warnings and markings** decide the layout, so start there.",
      "Requirements **differ by market**, so a pack for one country may not be legal in another.",
      "Plan artwork for the **pack, carton and shipping case**.",
      "Use a written **proof approval** process before printing.",
    ],
    sections: [
      {
        heading: "Packaging levels",
        blocks: [
          {
            type: "table",
            head: ["Level", "Typical content"],
            rows: [
              ["Pack", "Brand, flavour name, health warnings, mandatory text, batch code"],
              ["Carton", "Multiple packs; brand, flavour, counts, markings required for distribution"],
              ["Shipping case", "Multiple cartons; shipping marks, product description, quantities, handling marks"],
            ],
          },
        ],
      },
      {
        heading: "Mandatory elements to check",
        blocks: [
          {
            type: "list",
            items: [
              "**Health warnings:** text, picture warnings, size and position rules.",
              "**Product description:** how the product must be described (for example heated tobacco or herbal product).",
              "**Language requirements** for the destination market.",
              "**Tax or excise markings** and any track-and-trace codes.",
              "**Age restriction statements** where required.",
              "**Batch or lot codes** and manufacturer or importer details.",
              "**Restrictions on wording**, such as bans on certain descriptors or claims.",
            ],
          },
          {
            type: "quote",
            text: "Never put health claims on HNB packaging. Many markets prohibit implying that a product is safer or less harmful.",
          },
        ],
      },
      {
        heading: "Building the brand within the rules",
        blocks: [
          {
            type: "p",
            text: "Once mandatory elements are placed, use colour coding to distinguish flavours, keep the flavour name clear, and use a consistent system across tobacco and herbal lines. Check that colour and imagery rules in your market allow your design, since some markets mandate plain packaging.",
          },
        ],
      },
      {
        heading: "Artwork approval workflow",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "Share market requirements and brand guidelines with the manufacturer.",
              "Receive dielines (templates) for pack, carton and case.",
              "Submit artwork and check every mandatory element.",
              "Review printed or digital proofs and sign off in writing.",
              "Keep approved proofs on file for QC of future shipments (see our [QC checklist](/blog/hnb-quality-control-checklist)).",
            ],
          },
          {
            type: "p",
            text: "KOKEN's [private-label packaging programme](/products/private-label-packaging) supports brand owners through this process.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do HNB products need health warnings on the pack?",
        answer: "In most markets, yes. Warning text, images, size and position are set by local regulations, so check the rules for each destination.",
      },
      {
        question: "Can one HNB pack design be used in every country?",
        answer: "Usually not. Warnings, languages, markings and plain packaging rules differ, so packs often need market-specific versions.",
      },
    ],
    related: ["how-to-launch-a-private-label-hnb-brand", "importing-hnb-products-compliance-checklist", "oem-vs-private-label-hnb"],
  },
  {
    slug: "how-to-write-an-hnb-oem-brief",
    title: "How to Write an HNB OEM Brief (With Template)",
    description:
      "What to include in a heat-not-burn OEM or private-label brief: market, product, flavours, device, packaging, volume and timeline, plus a copyable template.",
    category: "OEM & private label",
    published: "2026-05-18",
    keywords: ["HNB OEM brief", "OEM brief template", "private label brief", "HNB manufacturing quote"],
    answer:
      "A good HNB OEM brief covers seven points: destination market, product type, flavours, target device, packaging, estimated volume and timeline. The more complete the brief, the faster and more accurate the manufacturer's proposal.",
    takeaways: [
      "A complete brief gets a **faster, more accurate** proposal.",
      "Cover **market, product, flavours, device, packaging, volume and timeline**.",
      "Be honest about **volume**, since it shapes pricing and planning.",
      "Use the template below and send it through the [quote form](/quote).",
    ],
    sections: [
      {
        heading: "The seven elements",
        blocks: [
          {
            type: "table",
            head: ["Element", "What to include"],
            rows: [
              ["Market", "Destination country or countries, and your sales channels"],
              ["Product type", "Tobacco sticks, herbal sticks or both; private label or OEM"],
              ["Flavours", "Shortlisted flavours, or flavour directions to develop"],
              ["Device", "Device(s) used in your market, or whether you need device supply"],
              ["Packaging", "Pack format, branding status, market-specific requirements"],
              ["Volume", "Estimated first order and monthly or annual volume"],
              ["Timeline", "Target launch date and any regulatory milestones"],
            ],
          },
        ],
      },
      {
        heading: "Copyable brief template",
        blocks: [
          {
            type: "list",
            items: [
              "**Company and role:** (brand owner, importer, distributor, retail chain)",
              "**Destination market(s):**",
              "**Product type:** tobacco / herbal / both; private label / OEM",
              "**Flavours of interest:** (for example Amber, Menthol, Grapeel, Peppermint)",
              "**Target device:**",
              "**Packaging:** artwork ready / needs development; market requirements",
              "**Estimated volume:** first order, then monthly or annual",
              "**Target launch date:**",
              "**Documentation needed for import:**",
              "**Questions or special requirements:**",
            ],
          },
        ],
      },
      {
        heading: "Tips for a stronger brief",
        blocks: [
          {
            type: "list",
            items: [
              "Shortlist flavours from the actual range: see [tobacco sticks](/tobacco-sticks) and [herbal sticks](/herbal-sticks).",
              "Add the products to your quote list so they arrive with the brief.",
              "Share any regulatory constraints you already know about.",
              "If volumes are uncertain, give a range and explain your rollout plan. See [MOQ and volume planning](/blog/hnb-moq-and-volume-planning).",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What should an HNB OEM brief include?",
        answer: "Destination market, product type, flavours, target device, packaging requirements, estimated volume and timeline.",
      },
      {
        question: "How do I send a brief to KOKEN?",
        answer: "Add products to your quote list and submit the quote form with your brief, or email sales@koken-inc.cn.",
      },
    ],
    related: ["how-to-request-an-hnb-quote", "oem-vs-private-label-hnb", "hnb-moq-and-volume-planning"],
  },
  {
    slug: "hnb-moq-and-volume-planning",
    title: "HNB MOQs and Volume Planning: A Buyer's Guide",
    description:
      "How minimum order quantities work for heat-not-burn sticks, what drives them, and how to plan first orders and reorders without overstocking.",
    category: "OEM & private label",
    published: "2026-07-06",
    keywords: ["HNB MOQ", "minimum order quantity heated tobacco", "HNB volume planning", "bulk HNB order"],
    answer:
      "HNB minimum order quantities (MOQs) are set by production efficiency, packaging print runs and flavour changeovers. Plan your first order around realistic sell-through for a few launch flavours, then reorder based on sales data.",
    takeaways: [
      "MOQs are driven by **production runs**, **packaging print runs** and **flavour changeovers**.",
      "Private-label packaging often sets the **effective minimum**.",
      "Fewer flavours at launch means **deeper stock** per flavour for the same budget.",
      "Share a **volume range and rollout plan** in your brief for realistic proposals.",
    ],
    sections: [
      {
        heading: "What drives an MOQ",
        blocks: [
          {
            type: "list",
            items: [
              "**Production runs:** switching flavours requires changeovers, so very small runs are inefficient.",
              "**Packaging:** custom printed packs and cartons have their own minimum print quantities.",
              "**Materials:** granules and components are prepared in batches.",
              "**Market specifics:** market-specific packs or markings add separate runs.",
            ],
          },
        ],
      },
      {
        heading: "Planning a first order",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "Estimate monthly sell-through per channel, conservatively.",
              "Decide how many months of stock you need to cover shipping time plus a safety buffer.",
              "Focus the launch on a few flavours across different families (see [flavour profiles](/blog/hnb-flavour-profiles-explained)).",
              "Check the result against the manufacturer's minimums and adjust flavours or timing.",
            ],
          },
        ],
      },
      {
        heading: "Reorders",
        blocks: [
          {
            type: "p",
            text: "Track sell-through by flavour weekly. Reorder when remaining stock covers less than the full lead time (production plus shipping) plus your buffer. Drop or replace slow flavours rather than reordering everything evenly.",
          },
        ],
      },
      {
        heading: "Ask for a programme-based proposal",
        blocks: [
          {
            type: "p",
            text: "KOKEN quotes per programme, based on market, flavours, packaging and volume. Share a volume range and rollout plan in your [OEM brief](/blog/how-to-write-an-hnb-oem-brief) and submit it through the [quote form](/quote).",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What is an MOQ in HNB manufacturing?",
        answer: "The MOQ is the minimum order quantity a manufacturer can produce efficiently, driven by production runs, packaging print runs and flavour changeovers.",
      },
      {
        question: "Does KOKEN publish MOQs?",
        answer: "KOKEN provides minimums and pricing per programme, based on your market, flavours, packaging and volume. Submit a quote request to receive them.",
      },
    ],
    related: ["how-to-write-an-hnb-oem-brief", "building-an-hnb-product-range", "how-to-request-an-hnb-quote"],
  },
];
