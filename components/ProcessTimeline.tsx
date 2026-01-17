"use client";

import { useEffect, useRef, useState } from "react";

export default function ProcessTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress from section top entering viewport to section bottom leaving viewport
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      // Progress calculation: section starts when it enters viewport, ends when it leaves
      const scrollStart = windowHeight; // When section top reaches viewport bottom
      const scrollEnd = -sectionHeight; // When section bottom reaches viewport top
      const scrollRange = scrollStart - scrollEnd;
      const scrolled = scrollStart - sectionTop;
      
      const progress = Math.max(0, Math.min(1, scrolled / scrollRange));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const steps = [
    { day: "1", title: "1. nap: Kickoff + anyagok", desc: "Összegyűjtjük az igényeket, begyűjtjük a márkaanyagokat, és felállítjuk a projekt infrastruktúráját." },
    { day: "2-3", title: "2-3. nap: Vázlat + szöveg", desc: "Először a struktúra és a tartalom. Vázlatokat készítünk és finomhangoljuk a szövegeket, mielőtt a design elkezdődne." },
    { day: "4-6", title: "4-6. nap: Vizuális design", desc: "Vizuális design fázis egy javítási körrel, hogy tökéletesítsük a megjelenést és az érzést." },
    { day: "7-9", title: "7-9. nap: Fejlesztés + tesztelés", desc: "Fejlesztés, tesztelés különböző eszközökön, és végső finomhangolás, hogy minden tökéletesen működjön." },
    { day: "10", title: "10. nap: Indítás + átadás", desc: "Végső ellenőrzés, telepítés és átadás. A weboldalad élő lesz, időben, minden alkalommal." },
  ];

  return (
    <div ref={sectionRef} className="relative">
      <div ref={timelineRef} className="space-y-12 relative">
        {/* Scroll progress line - single vertical line for entire timeline */}
        <div className="absolute left-6 top-10 bottom-0 w-1 bg-[#7C5CFF]/30 hidden md:block rounded-full">
          {/* Progress fill */}
          <div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#7C5CFF] via-[#50AEDF] to-[#7C5CFF] transition-all duration-75 ease-out rounded-full"
            style={{
              height: `${scrollProgress * 100}%`,
              boxShadow: '0 0 15px rgba(124, 92, 255, 0.8), 0 0 30px rgba(80, 174, 223, 0.6)',
            }}
          />
        </div>

        {steps.map((step, idx) => (
          <div key={idx} className="flex gap-6 items-start relative">
            <div className="flex-shrink-0 w-10 h-10 bg-[#7C5CFF] rounded-full flex items-center justify-center text-white font-bold text-xs shadow-[0_0_15px_rgba(124,92,255,0.4)] z-10 border-2 border-[#0a0a0a]">
              {step.day}
            </div>
            <div className="flex-1 bg-[#0F1620] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 transition-all duration-300 hover:border-[rgba(255,255,255,0.2)]">
              <h3 className="text-xl font-bold mb-2 text-[#EAF0FF]">{step.title}</h3>
              <p className="text-[#A8B3C7] leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

