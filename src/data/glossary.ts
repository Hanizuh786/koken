export type GlossaryEntry = { term: string; definition: string; link?: { href: string; label: string } };

export const glossaryId = (term: string) =>
  term.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const glossary: GlossaryEntry[] = [
  {
    term: "Heat-not-burn (HNB)",
    definition:
      "Heat-not-burn (HNB) is a product category in which a device heats a consumable stick to a temperature below combustion, producing an aerosol instead of smoke from burning.",
  },
  {
    term: "Heated tobacco stick",
    definition:
      "A heated tobacco stick is a tobacco-based consumable designed to be used in an HNB device rather than lit like a cigarette.",
    link: { href: "/tobacco-sticks", label: "See KOKEN tobacco sticks" },
  },
  {
    term: "Herbal stick",
    definition:
      "A herbal stick is a tobacco-free HNB consumable made from plant-based material and flavourings. KOKEN herbal sticks contain 0 nicotine and no tobacco extract.",
    link: { href: "/herbal-sticks", label: "See KOKEN herbal sticks" },
  },
  {
    term: "HNB granules",
    definition:
      "HNB granules are the processed base material that fills heat-not-burn sticks. Granules manufacturing determines the consistency and flavour delivery of the finished stick.",
  },
  {
    term: "HNB device",
    definition: "An HNB device is the electronic heater that a heat-not-burn stick is inserted into.",
    link: { href: "/devices", label: "Discuss device supply" },
  },
  {
    term: "OEM manufacturing",
    definition:
      "OEM (original equipment manufacturer) manufacturing means a producer makes products to a client's specification, which the client then sells under its own brand.",
  },
  {
    term: "Private label",
    definition:
      "Private label means products made by one company and sold under another company's brand name and packaging.",
    link: { href: "/custom-branding", label: "Explore KOKEN private label" },
  },
  {
    term: "RFQ (request for quote)",
    definition:
      "An RFQ is a formal request a business buyer sends to a supplier asking for pricing on specific products, volumes and terms.",
    link: { href: "/quote", label: "Send KOKEN an RFQ" },
  },
  {
    term: "Free zone (FZ-LLC)",
    definition:
      "An FZ-LLC is a limited liability company registered in a UAE free zone. KOKEN International FZ-LLC operates from Al Hamra Industrial Zone-FZ in Ras Al Khaimah.",
  },
  {
    term: "Flavour profile",
    definition:
      "A flavour profile describes a product's aroma, body and finish, for example 'high aroma, medium bodied, hint of cocoa'.",
  },
];
