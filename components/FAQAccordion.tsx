"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const isFocused = focusedIndex === index;
        // Show ring if open (regardless of focus), or if focused and not closed yet
        const showRing = isOpen || isFocused;

        return (
          <div
            key={index}
            className="border-2 border-white/20 rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm shadow-depth-1 hover:shadow-depth-2 transition-all duration-300"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              onFocus={() => setFocusedIndex(index)}
              onBlur={() => {
                // Only remove focus if the item is closed
                if (!isOpen) {
                  setFocusedIndex(null);
                }
              }}
              onMouseLeave={() => {
                // Only remove focus if the item is closed
                if (!isOpen) {
                  setFocusedIndex(null);
                }
              }}
              className={`w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-all duration-300 focus:outline-none rounded-t-xl ${
                showRing
                  ? "ring-2 ring-[#7C5CFF] ring-inset"
                  : "ring-0"
              }`}
              aria-expanded={isOpen}
            >
              <span className="font-bold text-white pr-4 text-lg">{item.question}</span>
              <svg
                className={`w-5 h-5 text-white/70 flex-shrink-0 transition-transform ${
                  isOpen ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 text-white/90 leading-relaxed text-base font-medium bg-white/5 rounded-b-xl drop-shadow-sm">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
