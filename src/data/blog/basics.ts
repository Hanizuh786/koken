import type { BlogPost } from "./types";

export const basicsPosts: BlogPost[] = [
  {
    slug: "what-is-heat-not-burn-hnb",
    title: "What Is Heat-Not-Burn (HNB)? A Plain-English Guide",
    description:
      "Heat-not-burn (HNB) explained: how heated sticks and devices work, what the stick contains, and how tobacco and herbal HNB products differ.",
    category: "HNB basics",
    published: "2026-01-12",
    updated: "2026-10-20",
    keywords: ["what is heat-not-burn", "HNB meaning", "heated tobacco explained", "HNB sticks", "heat not burn device"],
    answer:
      "Heat-not-burn (HNB) is a product category in which an electronic device heats a specially made stick below the temperature of combustion, so the material releases an aerosol instead of being burned to create smoke. The stick can contain tobacco or, in herbal versions, plant material with no tobacco or nicotine.",
    takeaways: [
      "HNB products **heat** a consumable stick rather than setting it alight.",
      "A complete HNB product has two parts: the **device** (heater) and the **stick** (consumable).",
      "Sticks are made from processed **granules** or cast material packed into a paper-wrapped rod with filter segments.",
      "**Herbal HNB sticks** use plant material instead of tobacco and can be nicotine-free.",
      "HNB products are **not risk free** and are regulated differently from country to country.",
    ],
    sections: [
      {
        heading: "How heat-not-burn works",
        blocks: [
          {
            type: "p",
            text: "A conventional cigarette is lit at the tip, and the tobacco burns. Heat-not-burn takes a different approach: a battery-powered device warms a heating element, usually a blade, pin or surrounding chamber, and the user inserts a stick into it. The element raises the temperature of the stick's filling enough to release flavour and aerosol, but the device is designed to stay below the point where the material combusts.",
          },
          {
            type: "p",
            text: "Because there is no flame, there is no ash and no burning ember. When the session ends, the used stick is removed and discarded, and the device is recharged or reused for the next stick.",
          },
        ],
      },
      {
        heading: "The two parts of every HNB product",
        blocks: [
          {
            type: "table",
            caption: "HNB system components",
            head: ["Component", "What it does", "Who typically makes it"],
            rows: [
              ["Device", "Holds the battery, control electronics and heating element; controls temperature and session length.", "Electronics manufacturers and device brands"],
              ["Stick (consumable)", "Contains the tobacco or herbal filling, filter segments and wrapping paper; delivers flavour and aerosol.", "Stick and granules manufacturers such as [KOKEN](/about)"],
            ],
          },
          {
            type: "p",
            text: "Sticks must be physically and thermally compatible with the device they are used in. That is why buyers planning a range should think about the [device and stick together](/insights/hnb-stick-and-device-compatibility) from the start.",
          },
        ],
      },
      {
        heading: "What is inside an HNB stick?",
        blocks: [
          {
            type: "p",
            text: "Looking from the tip to the mouth end, a typical heated stick contains a filling section, one or more cooling or support segments, and a filter, all wrapped in paper. The filling is the part that matters most for taste. It is commonly made from [HNB granules](/insights/what-are-hnb-granules) or a cast sheet of processed material, combined with humectants that help produce aerosol when heated, and flavourings.",
          },
          {
            type: "list",
            items: [
              "**Tobacco sticks:** the filling is based on processed tobacco. See KOKEN's [heated tobacco stick range](/tobacco-sticks).",
              "**Herbal sticks:** the filling is based on non-tobacco plant material, and can be made with zero nicotine. See KOKEN's [herbal stick range](/herbal-sticks).",
            ],
          },
        ],
      },
      {
        heading: "Tobacco HNB vs herbal HNB",
        blocks: [
          {
            type: "p",
            text: "Both formats work with the same heat-not-burn principle, and both can be offered in a range of flavours. The difference is the base material. Herbal sticks give brands a tobacco-free line that can sit alongside a tobacco range, which is useful in markets where regulations or consumer demand differ between the two. Our guide to [herbal HNB sticks](/insights/what-are-herbal-hnb-sticks) covers this in more detail.",
          },
        ],
      },
      {
        heading: "Is heat-not-burn regulated?",
        blocks: [
          {
            type: "p",
            text: "Yes. Most countries regulate heated tobacco products, and many also have rules on herbal smoking or heating products. Requirements can cover product registration, ingredients, health warnings, packaging, taxation and where products can be sold. Some markets restrict or ban HNB products entirely. Anyone importing or distributing HNB products should confirm local rules first; our [import compliance checklist](/insights/importing-hnb-products-compliance-checklist) is a good starting point.",
          },
          {
            type: "quote",
            text: "HNB products are not risk free and are intended for adults only. Heating rather than burning does not make a product safe.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What does HNB stand for?",
        answer: "HNB stands for heat-not-burn, a category of products that heat a consumable stick instead of burning it.",
      },
      {
        question: "Do HNB sticks burn?",
        answer: "No. HNB devices are designed to heat the stick below combustion temperature, so the filling is not set alight and produces no ash.",
      },
      {
        question: "Can HNB sticks be nicotine-free?",
        answer: "Yes. Herbal HNB sticks use plant material instead of tobacco and can be made with zero nicotine, like KOKEN's herbal stick range.",
      },
    ],
    related: ["heated-tobacco-vs-cigarettes-vs-e-cigarettes", "what-are-hnb-granules", "what-are-herbal-hnb-sticks"],
  },
  {
    slug: "heated-tobacco-vs-cigarettes-vs-e-cigarettes",
    title: "Heated Tobacco vs Cigarettes vs Vapes: Key Differences",
    description:
      "A side-by-side comparison of heated tobacco, conventional cigarettes and e-cigarettes: how each works, what it contains and how each is regulated.",
    category: "HNB basics",
    published: "2026-01-26",
    keywords: ["heated tobacco vs cigarettes", "heat not burn vs vape", "HNB vs e-cigarette", "difference heated tobacco"],
    answer:
      "Cigarettes burn tobacco, e-cigarettes heat a liquid, and heated tobacco products heat solid tobacco in a stick without burning it. The three categories differ in the material used, the device needed and, in most countries, the regulations that apply to them.",
    takeaways: [
      "**Cigarettes** combust tobacco; **HNB** heats solid material; **e-cigarettes** vaporise a liquid.",
      "HNB uses a solid stick, so it is closer to a cigarette in format but needs an electronic device.",
      "Most markets classify and tax the three categories differently.",
      "Herbal HNB sticks add a fourth option: solid, heated and tobacco-free.",
    ],
    sections: [
      {
        heading: "Comparison at a glance",
        blocks: [
          {
            type: "table",
            caption: "How the main categories compare",
            head: ["", "Cigarettes", "Heated tobacco (HNB)", "E-cigarettes"],
            rows: [
              ["Material", "Cut tobacco", "Processed tobacco in a stick", "Liquid (e-liquid)"],
              ["How it is used", "Lit with a flame", "Inserted into a heating device", "Liquid heated by a coil or element"],
              ["Combustion", "Yes", "No (designed to heat below combustion)", "No"],
              ["Device needed", "No", "Yes, an HNB heater", "Yes, a vape device"],
              ["Ash", "Yes", "No", "No"],
              ["Consumable format", "Cigarette", "Stick", "Pod, cartridge or bottle"],
            ],
          },
        ],
      },
      {
        heading: "How heated tobacco differs from cigarettes",
        blocks: [
          {
            type: "p",
            text: "Both use solid tobacco and both come as a paper-wrapped rod with a filter, which is why HNB sticks can look similar to short cigarettes. The difference is how the tobacco is used. A cigarette is lit and burns. An HNB stick is placed in a device that heats it in a controlled way, so the tobacco is warmed rather than burned. The tobacco in an HNB stick is also processed differently, usually into [granules](/insights/what-are-hnb-granules) or a cast sheet, so that it releases flavour and aerosol at lower temperatures.",
          },
        ],
      },
      {
        heading: "How heated tobacco differs from e-cigarettes",
        blocks: [
          {
            type: "p",
            text: "E-cigarettes do not contain tobacco leaf. They heat a liquid that typically contains propylene glycol, glycerine, flavourings and, in many products, nicotine. HNB products use a solid stick. For buyers, this changes almost everything downstream: the manufacturing process, the packaging format, shelf life considerations, and which regulations apply.",
          },
        ],
      },
      {
        heading: "Where herbal HNB sticks fit",
        blocks: [
          {
            type: "p",
            text: "Herbal sticks use the same heat-not-burn format but replace tobacco with plant material. KOKEN's [herbal sticks](/herbal-sticks) contain 0 nicotine and no tobacco extract. This gives distributors a solid-format, tobacco-free product line that works with HNB devices.",
          },
        ],
      },
      {
        heading: "Why the category matters for regulation",
        blocks: [
          {
            type: "p",
            text: "Regulators usually treat each category separately. A market might allow e-cigarettes but restrict heated tobacco, or tax heated tobacco differently from cigarettes. Herbal products may fall under another set of rules again. Before planning a launch, confirm which category your product falls into in each destination market, and what that means for registration, labelling and tax. See our [compliance checklist](/insights/importing-hnb-products-compliance-checklist).",
          },
          {
            type: "quote",
            text: "None of these products is risk free. This comparison describes how the products work, not their health effects.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is heated tobacco the same as vaping?",
        answer: "No. Vaping heats a liquid, while heated tobacco heats solid tobacco in a stick. They use different devices and are usually regulated as different categories.",
      },
      {
        question: "Do heated tobacco sticks contain real tobacco?",
        answer: "Yes. Heated tobacco sticks contain processed tobacco. Herbal HNB sticks are the tobacco-free alternative in the same format.",
      },
      {
        question: "Can HNB sticks be used without a device?",
        answer: "No. HNB sticks are designed to be heated in a compatible device and are not meant to be lit like a cigarette.",
      },
    ],
    related: ["what-is-heat-not-burn-hnb", "what-are-herbal-hnb-sticks", "importing-hnb-products-compliance-checklist"],
  },
  {
    slug: "what-are-herbal-hnb-sticks",
    title: "Herbal HNB Sticks: What They Are and Who Buys Them",
    description:
      "Herbal heat-not-burn sticks explained: tobacco-free, nicotine-free consumables for HNB devices. Ingredients, flavours and why distributors add them.",
    category: "Products & flavours",
    published: "2026-02-09",
    keywords: ["herbal HNB sticks", "tobacco-free heated sticks", "nicotine-free heat sticks", "herbal heat not burn"],
    answer:
      "Herbal HNB sticks are tobacco-free consumables for heat-not-burn devices. Instead of tobacco they contain plant-based material with added flavour, and they can be made with zero nicotine, as in KOKEN's herbal range.",
    takeaways: [
      "Herbal sticks use the **same format** as heated tobacco sticks but contain **no tobacco**.",
      "KOKEN herbal sticks contain **0 nicotine and no tobacco extract**.",
      "They let distributors offer a **tobacco-free line** in the HNB category.",
      "Flavour drives the category: citrus, fruit, mint and coffee are common directions.",
    ],
    sections: [
      {
        heading: "What is in a herbal stick?",
        blocks: [
          {
            type: "p",
            text: "A herbal stick replaces the tobacco filling of a heated stick with a plant-based filling. That base is processed so it heats evenly and carries flavour, then combined with humectants and flavourings. The rest of the stick, including filter and cooling segments and the paper wrap, follows the same construction as a tobacco stick so it fits HNB devices.",
          },
        ],
      },
      {
        heading: "Why distributors add herbal sticks to their range",
        blocks: [
          {
            type: "list",
            items: [
              "**A tobacco-free option** for customers and retailers who want one in the HNB category.",
              "**Flavour variety**, from bright citrus to roasted coffee, that complements a tobacco range.",
              "**Different regulatory treatment** in some markets, which can open different channels. Always check local rules.",
              "**Simple private-label extension:** the same packaging and branding system can cover both lines.",
            ],
          },
        ],
      },
      {
        heading: "KOKEN's herbal stick flavours",
        blocks: [
          {
            type: "table",
            caption: "KOKEN herbal range (0 nicotine, no tobacco extract)",
            head: ["Flavour", "Profile"],
            rows: [
              ["[Grapeel](/products/grapeel-herbal-sticks)", "Grapefruit peel: vibrant zest, a touch of natural bitterness, clean finish"],
              ["[Blueberry](/products/blueberry-herbal-sticks)", "Sweet blueberry with a smooth, fruity berry character"],
              ["[Peppermint](/products/peppermint-herbal-sticks)", "Smooth, moderate mint with a refreshing finish"],
              ["[Mango](/products/mango-herbal-sticks)", "Sweet tropical mango, juicy and warm"],
              ["[Coffee](/products/coffee-herbal-sticks)", "Rich roasted coffee with a warm finish"],
              ["[Lemon](/products/lemon-herbal-sticks)", "Fresh, tangy lemon with a bright citrus finish"],
            ],
          },
        ],
      },
      {
        heading: "Herbal sticks and regulation",
        blocks: [
          {
            type: "p",
            text: "Tobacco-free does not mean unregulated. Many markets have specific rules for herbal smoking or heating products covering labelling, ingredients, age restrictions and sale channels. Confirm the classification in each destination market before importing. Our [import compliance checklist](/insights/importing-hnb-products-compliance-checklist) lists the questions to ask.",
          },
        ],
      },
      {
        heading: "Planning a herbal line",
        blocks: [
          {
            type: "p",
            text: "Start with three or four flavours that cover different directions (for example citrus, fruit and mint) and add more as sales data comes in. Our guide to [building an HNB product range](/insights/building-an-hnb-product-range) covers how to balance tobacco and herbal SKUs. When you are ready, add the flavours to your [quote list](/quote).",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do herbal HNB sticks contain nicotine?",
        answer: "They can be made without it. KOKEN herbal sticks contain 0 nicotine and no tobacco extract.",
      },
      {
        question: "Do herbal sticks work in heated tobacco devices?",
        answer: "Herbal sticks are built in the same format as heated tobacco sticks. Confirm compatibility with your specific target device with the manufacturer before ordering.",
      },
      {
        question: "Can herbal sticks be private labelled?",
        answer: "Yes. KOKEN supplies its herbal sticks for OEM and private-label programmes as well as bulk supply.",
      },
    ],
    related: ["hnb-flavour-profiles-explained", "building-an-hnb-product-range", "what-is-heat-not-burn-hnb"],
  },
  {
    slug: "hnb-flavour-profiles-explained",
    title: "HNB Flavour Profiles Explained: Aroma, Body and Finish",
    description:
      "How to read an HNB flavour profile: what aroma, body and finish mean, and how to compare tobacco and herbal stick flavours when building a range.",
    category: "Products & flavours",
    published: "2026-03-02",
    keywords: ["HNB flavour profile", "heated tobacco flavours", "tobacco stick flavours", "herbal stick flavours"],
    answer:
      "An HNB flavour profile describes a stick in three parts: aroma (how intense and what character the scent has), body (how full or light it feels) and finish (the impression it leaves, such as clean, warm or cooling). Comparing flavours on these three points makes it easier to build a balanced range.",
    takeaways: [
      "**Aroma** describes intensity and character, from \"high aroma\" to \"balanced\".",
      "**Body** describes weight: light, medium or full.",
      "**Finish** describes the after-impression: clean, warm, cooling or tangy.",
      "A good range covers **different directions** rather than several similar flavours.",
    ],
    sections: [
      {
        heading: "The three parts of a flavour profile",
        blocks: [
          {
            type: "list",
            items: [
              "**Aroma:** the intensity and type of scent. A \"high aroma\" profile is more pronounced; \"balanced\" sits in the middle.",
              "**Body:** how full the flavour feels, from soft or light to medium or full-bodied.",
              "**Finish:** the impression after each draw, for example a clean citrus finish or a warm, roasted one.",
            ],
          },
        ],
      },
      {
        heading: "Reading KOKEN's tobacco stick profiles",
        blocks: [
          {
            type: "table",
            caption: "KOKEN tobacco stick range",
            head: ["Flavour", "Aroma", "Body", "Signature note"],
            rows: [
              ["[Amber](/products/amber-tobacco-sticks)", "High aroma", "Medium bodied", "Hint of cocoa"],
              ["[Blue](/products/blue-tobacco-sticks)", "Fresh aroma", "Medium bodied", "Menthol experience"],
              ["[Silver](/products/silver-tobacco-sticks)", "Balanced aroma", "Medium bodied", "Hints of spice and vanilla"],
              ["[Classic Tobacco](/products/tobacco-classic-sticks)", "Rounded aroma", "Medium bodied", "Deep tobacco"],
              ["[Blueberry](/products/blueberry-tobacco-sticks)", "High aroma", "Full bodied", "Blueberry aroma"],
              ["[Vanilla](/products/vanilla-tobacco-sticks)", "Smooth aroma", "Soft body", "Vanilla direction"],
              ["[Menthol](/products/menthol-tobacco-sticks)", "Cool menthol aroma", "Clean, balanced body", "Refreshing finish"],
            ],
          },
        ],
      },
      {
        heading: "Flavour families to cover",
        blocks: [
          {
            type: "p",
            text: "Most HNB ranges are built from a handful of flavour families. Covering several of them gives retailers something for different preferences without duplicating SKUs.",
          },
          {
            type: "list",
            items: [
              "**Classic tobacco:** rounded, familiar tobacco character (Amber, Classic Tobacco, Silver).",
              "**Fresh and cooling:** menthol and mint directions (Blue, Menthol, herbal Peppermint).",
              "**Sweet and dessert:** vanilla and similar soft profiles (Vanilla).",
              "**Fruit:** berry and tropical directions (tobacco Blueberry, herbal Blueberry and Mango).",
              "**Citrus:** bright, tangy profiles (herbal Grapeel and Lemon).",
              "**Roasted:** coffee and similar warm profiles (herbal Coffee).",
            ],
          },
        ],
      },
      {
        heading: "How to use profiles when choosing SKUs",
        blocks: [
          {
            type: "p",
            text: "Shortlist one flavour per family that suits your market, then check each against local flavour rules, since some jurisdictions restrict characterising flavours such as menthol or fruit. Request samples where possible, and plan to review sell-through after launch. Our guide to [building an HNB product range](/insights/building-an-hnb-product-range) walks through this step by step.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What does \"medium bodied\" mean for HNB sticks?",
        answer: "It describes a flavour that feels neither light nor heavy, sitting in the middle of the range between soft-bodied and full-bodied profiles.",
      },
      {
        question: "Are flavoured heated tobacco sticks allowed everywhere?",
        answer: "No. Some markets restrict characterising flavours such as menthol or fruit in tobacco products. Check local rules before choosing flavours.",
      },
      {
        question: "How many flavours should a new HNB range launch with?",
        answer: "Many brands launch with three to five flavours covering different families, such as classic tobacco, menthol and one fruit or sweet option, then expand based on sales.",
      },
    ],
    related: ["building-an-hnb-product-range", "what-are-herbal-hnb-sticks", "how-to-launch-a-private-label-hnb-brand"],
  },
  {
    slug: "hnb-stick-and-device-compatibility",
    title: "HNB Stick and Device Compatibility: What to Check",
    description:
      "Why HNB sticks must match the device they are used with, which specifications to compare, and how to plan stick and device supply together.",
    category: "HNB basics",
    published: "2026-03-16",
    keywords: ["HNB device compatibility", "heated stick compatibility", "HNB device supply", "heat not burn device"],
    answer:
      "An HNB stick only performs as intended in a device it was designed for. Buyers should confirm the heating method, stick dimensions and heating profile match before ordering, and ideally plan stick and device supply together.",
    takeaways: [
      "Compatibility depends on **heating method**, **stick dimensions** and **temperature profile**.",
      "A mismatch can cause poor flavour, uneven heating or sticks that do not fit.",
      "Always **test samples** in the target device before a bulk order.",
      "Planning devices and sticks **together** reduces launch risk.",
    ],
    sections: [
      {
        heading: "Why compatibility matters",
        blocks: [
          {
            type: "p",
            text: "The stick and device are engineered as a pair. The device delivers heat in a specific way, and the stick's filling, length and diameter are designed around that. If the two do not match, the user experience suffers: the flavour may be weak or harsh, the stick may heat unevenly, or it may not fit the heating chamber at all.",
          },
        ],
      },
      {
        heading: "What to check",
        blocks: [
          {
            type: "table",
            caption: "Compatibility checkpoints",
            head: ["Checkpoint", "Why it matters"],
            rows: [
              ["Heating method", "Blade or pin heaters heat from inside the stick; chamber or induction heaters heat from around or within it. Fillings are tuned for one approach."],
              ["Stick length and diameter", "Determines whether the stick fits the chamber and sits at the correct depth."],
              ["Temperature and session profile", "The filling must release flavour within the device's temperature range and session length."],
              ["Filter and cooling segments", "Affect draw resistance and aerosol temperature in that device."],
            ],
          },
        ],
      },
      {
        heading: "How to test compatibility",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "Tell the manufacturer which device or devices your market uses.",
              "Request samples of each shortlisted flavour.",
              "Test sticks in the target device for fit, draw, flavour and consistency across a full session.",
              "Record results and share feedback before confirming the order.",
            ],
          },
        ],
      },
      {
        heading: "Planning stick and device supply together",
        blocks: [
          {
            type: "p",
            text: "If you are launching a full programme rather than sticks for an existing installed base of devices, it is simpler to source the device and consumables together. KOKEN discusses [compatible device supply](/devices) alongside [tobacco](/tobacco-sticks) and [herbal](/herbal-sticks) sticks so the whole programme is planned as one. Include your device requirements in your [quote request](/quote).",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can any HNB stick be used in any HNB device?",
        answer: "No. Sticks are designed for specific heating methods and dimensions. Always confirm compatibility with the target device.",
      },
      {
        question: "Does KOKEN supply HNB devices?",
        answer: "KOKEN discusses compatible device supply as part of a complete HNB programme. Include your device needs in a quote request.",
      },
    ],
    related: ["what-is-heat-not-burn-hnb", "how-hnb-sticks-are-made", "building-an-hnb-product-range"],
  },
];
