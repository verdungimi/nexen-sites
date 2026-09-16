import { cn } from "@/lib/utils";

interface SectionIntroProps {
  title: React.ReactNode;
  lead?: React.ReactNode;
  id?: string;
  as?: "h1" | "h2";
  className?: string;
}

/** Left-aligned section heading with an optional lead paragraph. */
export default function SectionIntro({ title, lead, id, as = "h2", className }: SectionIntroProps) {
  const Heading = as;
  return (
    <div className={cn("max-w-3xl", className)}>
      <Heading id={id} className={as === "h1" ? "type-display" : "type-h2"}>
        {title}
      </Heading>
      {lead && <p className="type-lead mt-5 measure">{lead}</p>}
    </div>
  );
}
