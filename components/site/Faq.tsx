import type { FaqItem } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Questions and answers as native <details>. No JavaScript: the answers are in the HTML for search
 * engines and AI crawlers, and the open/close behaviour is the browser's own, keyboard included.
 */
export default function Faq({ items, onNavy, openFirst }: { items: FaqItem[]; onNavy?: boolean; openFirst?: boolean }) {
  return (
    <div className={cn("border-b", onNavy ? "border-navy-line" : "border-line")}>
      {items.map((item, index) => (
        <details
          key={item.question}
          open={openFirst && index === 0}
          className={cn("faq-item group border-t", onNavy ? "border-navy-line" : "border-line")}
          data-reveal
          style={{ "--i": Math.min(index, 5) } as React.CSSProperties}
        >
          <summary className="flex min-h-[4rem] cursor-pointer list-none items-center justify-between gap-5 py-4 [&::-webkit-details-marker]:hidden">
            <h3 className="font-display text-[1.25rem] font-semibold leading-snug sm:text-[1.375rem]">{item.question}</h3>
            <span
              aria-hidden="true"
              className={cn(
                "relative h-9 w-9 flex-none rounded-full border-[1.5px] transition-colors duration-200",
                onNavy ? "border-navy-line group-open:border-sky group-open:bg-sky" : "border-line-strong group-open:border-navy group-open:bg-navy"
              )}
            >
              <span className={cn("absolute left-1/2 top-1/2 h-[2px] w-3.5 -translate-x-1/2 -translate-y-1/2 rounded", onNavy ? "bg-white group-open:bg-navy" : "bg-navy group-open:bg-white")} />
              <span className={cn("absolute left-1/2 top-1/2 h-3.5 w-[2px] -translate-x-1/2 -translate-y-1/2 rounded transition-transform duration-200 group-open:rotate-90 group-open:opacity-0", onNavy ? "bg-white" : "bg-navy")} />
            </span>
          </summary>
          <p className={cn("measure pb-6 pr-10 text-[1.0625rem] leading-relaxed", onNavy ? "text-cloud" : "text-muted")}>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
