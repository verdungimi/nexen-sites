import Image from "next/image";
import { cn } from "@/lib/utils";

/** Abstract page skeleton shown inside a frame while there is no real screenshot yet. Decorative only. */
function Skeleton({ compact }: { compact?: boolean }) {
  return (
    <div aria-hidden="true" className={cn("flex h-full flex-col bg-mist", compact ? "gap-2 p-3" : "gap-4 p-6 sm:p-8")}>
      <div className="flex items-center justify-between">
        <span className={cn("rounded bg-navy/80", compact ? "h-2 w-8" : "h-3 w-20")} />
        <span className={cn("rounded-full bg-sky", compact ? "h-2.5 w-7" : "h-5 w-20")} />
      </div>
      <div className={cn("flex flex-col", compact ? "mt-2 gap-1.5" : "mt-4 gap-3")}>
        <span className={cn("rounded bg-navy", compact ? "h-3 w-11/12" : "h-7 w-10/12")} />
        <span className={cn("rounded bg-navy", compact ? "h-3 w-8/12" : "h-7 w-7/12")} />
        <span className={cn("rounded bg-line-strong", compact ? "mt-1 h-1.5 w-full" : "mt-2 h-2.5 w-9/12")} />
        <span className={cn("rounded bg-line-strong", compact ? "h-1.5 w-10/12" : "h-2.5 w-6/12")} />
      </div>
      <div className={cn("grow rounded-xl bg-white", compact ? "mt-1" : "mt-2")} />
    </div>
  );
}

interface FrameProps {
  /** Screenshot in public/. Without it the frame shows a marked placeholder. */
  image?: string;
  alt?: string;
  domain?: string;
  placeholder?: string;
  onNavy?: boolean;
  priority?: boolean;
  className?: string;
}

/** Browser window frame for a desktop screenshot. */
export function BrowserFrame({ image, alt = "", domain, placeholder, onNavy, priority, className }: FrameProps) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-2xl border",
        onNavy ? "border-navy-line bg-navy-raised" : "border-line-strong bg-white shadow-[0_24px_60px_-30px_rgba(11,30,63,0.35)]",
        className
      )}
    >
      <div className={cn("flex h-10 items-center gap-3 px-4", onNavy ? "" : "border-b border-line bg-mist")}>
        <span aria-hidden="true" className="flex gap-1.5">
          {[0, 1, 2].map((dot) => (
            <span key={dot} className={cn("h-2.5 w-2.5 rounded-full", onNavy ? "bg-[#3A5A93]" : "bg-line-strong")} />
          ))}
        </span>
        <span
          className={cn(
            "flex h-6 min-w-0 grow items-center truncate rounded-full px-3 text-xs",
            onNavy ? "bg-navy text-cloud" : "bg-white text-muted"
          )}
        >
          {domain ?? "[IMI: az ügyfél domainje]"}
        </span>
      </div>
      <div className="relative aspect-[16/10]">
        {image ? (
          <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 560px, 92vw" className="object-cover object-top" priority={priority} />
        ) : (
          <>
            <Skeleton />
            <figcaption className="absolute inset-x-0 bottom-0 bg-navy/90 px-4 py-2.5 text-center text-[0.8125rem] font-semibold text-white">
              {placeholder ?? "[IMI: egy elkészült munka képernyőképe]"}
            </figcaption>
          </>
        )}
      </div>
    </figure>
  );
}

/** Phone frame for a mobile screenshot. */
export function PhoneFrame({ image, alt = "", onNavy, className }: FrameProps) {
  return (
    <div
      className={cn(
        "relative aspect-[9/18.5] overflow-hidden rounded-[1.75rem] border-[6px] bg-white",
        onNavy ? "border-[#23417A]" : "border-navy shadow-[0_24px_50px_-24px_rgba(11,30,63,0.5)]",
        className
      )}
    >
      {image ? <Image src={image} alt={alt} fill sizes="180px" className="object-cover object-top" /> : <Skeleton compact />}
    </div>
  );
}
