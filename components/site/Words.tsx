import { cn } from "@/lib/utils";

/**
 * Heading text that rises word by word when it scrolls into view (see `[data-reveal-words]` in site.css).
 * The words are ordinary text in the HTML; the animation is only a visual layer on top.
 */
export default function Words({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, index) => (
        <span key={index}>
          <span className="word" style={{ "--w": index } as React.CSSProperties}>
            {word}
          </span>
          {index < words.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}

interface SectionHeadingProps {
  id?: string;
  title: string;
  lead?: React.ReactNode;
  as?: "h1" | "h2";
  className?: string;
  /** Text colour of the lead on dark sections */
  onNavy?: boolean;
}

export function SectionHeading({ id, title, lead, as: Tag = "h2", className, onNavy }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <Tag id={id} className={Tag === "h1" ? "type-h1" : "type-h2"} data-reveal-words>
        <Words text={title} />
      </Tag>
      {lead && (
        <p className={cn("type-lead measure mt-5", onNavy ? "text-cloud" : "text-muted")} data-reveal style={{ "--i": 1 } as React.CSSProperties}>
          {lead}
        </p>
      )}
    </div>
  );
}
