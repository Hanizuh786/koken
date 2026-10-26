import { faqSchema, type FaqItem } from "@/lib/site";
import JsonLd from "./JsonLd";

export default function Faq({
  items,
  title = "Frequently asked questions",
  eyebrow = "FAQ",
}: {
  items: FaqItem[];
  title?: string;
  eyebrow?: string;
}) {
  return (
    <section className="sectionPad faqSection" aria-labelledby="faq-heading">
      <JsonLd data={faqSchema(items)} />
      <div className="sectionHead">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id="faq-heading">{title}</h2>
      </div>
      <div className="faqList">
        {items.map((item) => (
          <details key={item.question}>
            <summary>
              <h3>{item.question}</h3>
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
