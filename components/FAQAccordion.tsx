"use client";

import { useState, useRef, useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    // Blur all buttons when openIndex changes
    buttonRefs.current.forEach((ref, index) => {
      if (ref && openIndex !== index) {
        ref.blur();
      }
    });
  }, [openIndex]);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border-2 border-white/20 rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm shadow-depth-1 hover:shadow-depth-2 transition-all duration-300"
        >
          <button
            ref={(el) => (buttonRefs.current[index] = el)}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            onMouseLeave={() => {
              if (openIndex !== index) {
                buttonRefs.current[index]?.blur();
              }
            }}
            className={`w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-all duration-300 focus:outline-none rounded-t-xl ${
              openIndex === index
                ? "focus:ring-2 focus:ring-[#7C5CFF] focus:ring-inset"
                : "focus:ring-0"
            }`}
            aria-expanded={openIndex === index}
          >
            <span className="font-bold text-white pr-4 text-lg">{item.question}</span>
            <svg
              className={`w-5 h-5 text-white/70 flex-shrink-0 transition-transform ${
                openIndex === index ? "transform rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-6 text-white/90 leading-relaxed text-base font-medium bg-white/5 rounded-b-xl drop-shadow-sm">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
