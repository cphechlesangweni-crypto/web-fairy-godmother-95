import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionHeading from "./SectionHeading";

export interface FAQItem {
  q: string;
  a: string | string[];
}

interface Props {
  eyebrow?: string;
  title: string;
  items: FAQItem[];
}

export default function FAQ({ eyebrow = "FAQ", title, items }: Props) {
  return (
    <section className="container py-20 md:py-28">
      <SectionHeading eyebrow={eyebrow} title={title} align="center" />
      <div className="max-w-3xl mx-auto mt-12">
        <Accordion type="single" collapsible className="space-y-3">
          {items.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border rounded-xl px-6 bg-card shadow-soft data-[state=open]:shadow-elegant transition-shadow"
            >
              <AccordionTrigger className="text-left font-medium text-secondary text-base md:text-lg hover:no-underline py-5">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {Array.isArray(item.a) ? (
                  <ul className="space-y-2">
                    {item.a.map((line, j) => (
                      <li key={j} className="flex gap-2.5">
                        <span className="text-primary mt-1.5 shrink-0">▸</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>{item.a}</p>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
