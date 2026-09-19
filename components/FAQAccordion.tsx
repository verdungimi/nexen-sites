"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  /** Index opened on first render; null keeps everything closed */
  defaultOpen?: number | null;
}

export default function FAQAccordion({ items, defaultOpen = 0 }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <div className="border-t border-rule">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-q-${index}`;
        const panelId = `${baseId}-a-${index}`;

        return (
          <div key={item.question} className="reveal border-b border-rule">
            <h3>
              <button
                id={buttonId}
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="group flex w-full items-start justify-between gap-6 py-6 text-left"
              >
                <span className="wdth-title text-lg font-semibold leading-snug text-bone sm:text-xl">{item.question}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "relative mt-1 h-6 w-6 flex-none rounded-full border border-rule transition-colors duration-200 group-hover:border-fog",
                    isOpen && "border-brass group-hover:border-brass"
                  )}
                >
                  <span className="absolute left-1/2 top-1/2 h-px w-2.5 -translate-x-1/2 -translate-y-1/2 bg-bone" />
                  <span
                    className={cn(
                      "absolute left-1/2 top-1/2 h-2.5 w-px -translate-x-1/2 -translate-y-1/2 bg-bone transition-transform duration-200",
                      isOpen && "scale-y-0"
                    )}
                  />
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
              <p className="measure pb-7 text-fog">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
