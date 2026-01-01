"use client";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  background?: "white" | "gray" | "gradient" | "blue" | "purple" | "pink" | "pattern" | "none";
}

export default function Section({ id, children, className = "", background = "white" }: SectionProps) {
  // All sections use the same seamless background - no visual breaks
  return (
    <section id={id} className={`py-16 md:py-24 relative section-space-overlay ${className}`}>
      <div className="container-custom relative z-[5]" style={{ pointerEvents: 'auto' }}>
        {children}
      </div>
    </section>
  );
}
