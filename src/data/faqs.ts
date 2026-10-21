import type { FaqItem } from "@/lib/site";

// Answers lead with a direct one- or two-sentence reply so they can be quoted
// verbatim by search snippets and AI assistants (SEO checklist #32, #36, #104).
export const generalFaqs: FaqItem[] = [
  {
    question: "Who is KOKEN International FZ-LLC?",
    answer:
      "KOKEN International FZ-LLC is the official patent and licence holder for HNB (heat-not-burn) production in the UAE. The company is based in Al Hamra Industrial Zone-FZ, Ras Al Khaimah, and supplies granules manufacturing, tobacco and herbal sticks, OEM and private-label programmes to B2B buyers worldwide.",
  },
  {
    question: "What does KOKEN manufacture?",
    answer:
      "KOKEN manufactures HNB granules and heat-not-burn sticks. The current range includes 7 tobacco stick flavours and 6 tobacco-free, nicotine-free herbal stick flavours, plus compatible device and private-label packaging programmes.",
  },
  {
    question: "Where is KOKEN located?",
    answer:
      "KOKEN International FZ-LLC is located in Al Hamra Industrial Zone-FZ, Ras Al Khaimah, United Arab Emirates, and serves lawful B2B enquiries from international markets.",
  },
  {
    question: "Does KOKEN offer OEM and private-label HNB manufacturing?",
    answer:
      "Yes. KOKEN supports brand owners, importers and distributors with OEM and private-label HNB programmes, covering flavour selection, granules manufacturing, packaging direction and bulk supply.",
  },
  {
    question: "Who can buy from KOKEN?",
    answer:
      "KOKEN works only with businesses: brand owners, importers, wholesalers, retail chain buyers and OEM clients making lawful adult-market enquiries. KOKEN does not sell to consumers.",
  },
  {
    question: "How do I request a quote from KOKEN?",
    answer:
      "Add products to your quote list on the KOKEN website and submit the enquiry form with your company, target market, estimated volume and packaging requirements. You can also email sales@koken-inc.cn or message +971 56 505 3048 on WhatsApp.",
  },
  {
    question: "Are prices listed on the KOKEN website?",
    answer:
      "No. Pricing is provided on request because it depends on product mix, volume, packaging and destination market. Submit a request for quote to receive a market-specific proposal.",
  },
  {
    question: "Does KOKEN handle import compliance for my market?",
    answer:
      "Product availability, labelling, compliance and import requirements vary by jurisdiction. Buyers are responsible for confirming local regulations; share your destination market in the enquiry so KOKEN can advise on a suitable product and packaging pathway.",
  },
];

export const tobaccoFaqs: FaqItem[] = [
  {
    question: "What are heated tobacco sticks?",
    answer:
      "Heated tobacco sticks are tobacco consumables designed for heat-not-burn (HNB) devices, which heat tobacco rather than burning it. KOKEN produces them in the UAE for authorised B2B distribution.",
  },
  {
    question: "Which tobacco stick flavours does KOKEN offer?",
    answer:
      "KOKEN offers 7 tobacco stick flavours: Amber, Blue, Silver, Classic Tobacco, Blueberry, Vanilla and Menthol, ranging from warm classic tobacco to fresh menthol profiles.",
  },
  {
    question: "Can KOKEN tobacco sticks be private labelled?",
    answer:
      "Yes. Every tobacco stick flavour can be discussed for OEM or private-label packaging, subject to the regulations of the destination market.",
  },
];

export const herbalFaqs: FaqItem[] = [
  {
    question: "What are herbal HNB sticks?",
    answer:
      "Herbal HNB sticks are tobacco-free, nicotine-free consumables for heat-not-burn devices, made from plant-based material with added flavour instead of tobacco.",
  },
  {
    question: "Do KOKEN herbal sticks contain nicotine or tobacco?",
    answer:
      "No. KOKEN herbal sticks contain 0 nicotine and no tobacco extract.",
  },
  {
    question: "Which herbal stick flavours does KOKEN offer?",
    answer:
      // Peppermint hidden for now: "KOKEN offers 6 herbal stick flavours: Grapeel (grapefruit peel), Blueberry, Peppermint, Mango, Coffee and Lemon.",
      "KOKEN offers 5 herbal stick flavours: Grapeel (grapefruit peel), Blueberry, Mango, Coffee and Lemon.",
  },
];

export const brandingFaqs: FaqItem[] = [
  {
    question: "What is private-label HNB manufacturing?",
    answer:
      "Private-label HNB manufacturing means KOKEN produces heat-not-burn sticks that are sold under your brand name and packaging, so you can launch a range without building your own production line.",
  },
  {
    question: "What should I include in an OEM brief?",
    answer:
      "Include your destination market, product category (tobacco or herbal), preferred flavours, projected volume, packaging direction and launch timetable. This lets KOKEN prepare a relevant manufacturing proposal.",
  },
];

export const deviceFaqs: FaqItem[] = [
  {
    question: "Does KOKEN supply HNB devices?",
    answer:
      "KOKEN discusses compatible device supply as part of a complete HNB programme alongside sticks, granules and packaging. Share your target market and volume in a quote request to start the conversation.",
  },
];
