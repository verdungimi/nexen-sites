import type { ProcessStep } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * The process as a numbered vertical timeline. The numbers are real: the steps happen in this order.
 * The connecting line draws itself when the list scrolls into view.
 */
export default function ProcessList({ steps, onNavy }: { steps: ProcessStep[]; onNavy?: boolean }) {
  return (
    <ol className="relative" data-reveal-group>
      <span
        aria-hidden="true"
        className={cn("draw-line absolute bottom-6 left-[1.3125rem] top-6 w-[2px] sm:left-[1.5625rem]", onNavy ? "bg-navy-line" : "bg-line-strong")}
      />
      {steps.map((step, index) => (
        <li key={step.title} className="relative flex gap-5 pb-10 last:pb-0 sm:gap-8" data-reveal style={{ "--i": index } as React.CSSProperties}>
          <span
            aria-hidden="true"
            className={cn(
              "relative z-10 flex h-11 w-11 flex-none items-center justify-center rounded-full font-display text-xl font-semibold sm:h-[3.25rem] sm:w-[3.25rem] sm:text-2xl",
              onNavy ? "bg-sky text-navy" : "bg-navy text-white"
            )}
          >
            {index + 1}
          </span>
          <div className="pt-1.5 sm:pt-2.5">
            <p className={cn("text-[0.9375rem] font-semibold", onNavy ? "text-sky" : "text-mid")}>{step.when}</p>
            <h3 className="type-h3 mt-1">{step.title}</h3>
            <p className={cn("measure mt-2", onNavy ? "text-cloud" : "text-muted")}>{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
