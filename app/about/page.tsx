import type { Metadata } from "next";
import FinAIHero from "@/components/FinAIHero";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Rólunk | Nexen Sites",
  description: "Ismerd meg a Nexen Sites csapatát és a 3 napos weboldal szállítási rendszerünket.",
  openGraph: {
    title: "Rólunk | Nexen Sites",
    description: "Ismerd meg a Nexen Sites csapatát és a 3 napos weboldal szállítási rendszerünket.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-24 pb-16 px-4 overflow-hidden">
        <FinAIHero />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center" style={{ pointerEvents: 'auto' }}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
            <span className="block text-[#F3EFE6]">
              Rólunk
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            A Nexen Sites egy modern weboldal fejlesztő csapat, amely 3 nap alatt prémium minőségű weboldalakat készít.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <Section id="mission">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#F3EFE6]">
            Küldetésünk
          </h2>
          <div className="bg-[#17151C] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 md:p-12 mb-12">
            <p className="text-lg text-[#A69F91] leading-relaxed mb-6">
              A Nexen Sites célja, hogy minden vállalkozó számára elérhetővé tegyük a prémium minőségű weboldalakat. 
              Hiszünk abban, hogy egy modern, gyors és mobilbarát weboldal nem kell, hogy hónapokig tartó projekt legyen.
            </p>
            <p className="text-lg text-[#A69F91] leading-relaxed">
              A 3 napos szállítási rendszerünkkel garantáljuk, hogy ügyfeleink gyorsan online jelenléthez juthassanak, 
              miközben a minőség és a prémium megjelenés mindig az első helyen áll.
            </p>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section id="values">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#F3EFE6]">
            Értékeink
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#17151C] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 text-center hover:border-[#F2A93B]/50 transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-4 text-[#F3EFE6]">Gyorsaság</h3>
              <p className="text-[#A69F91] leading-relaxed">
                3 nap alatt kész weboldal, fix határidővel. Nincs várakozás, nincs késés.
              </p>
            </div>
            <div className="bg-[#17151C] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 text-center hover:border-[#2DD4BF]/50 transition-all duration-300">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-4 text-[#F3EFE6]">Minőség</h3>
              <p className="text-[#A69F91] leading-relaxed">
                Prémium design, modern technológiák, és tökéletes működés minden eszközön.
              </p>
            </div>
            <div className="bg-[#17151C] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 text-center hover:border-[#F2A93B]/50 transition-all duration-300">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-4 text-[#F3EFE6]">Megbízhatóság</h3>
              <p className="text-[#A69F91] leading-relaxed">
                Átlátható kommunikáció, tiszta határidők, és folyamatos támogatás.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section id="our-process">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#F3EFE6]">
            Hogyan dolgozunk?
          </h2>
          <div className="space-y-6">
            <div className="bg-[#17151C] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#F2A93B] rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#F3EFE6]">Kickoff és anyaggyűjtés</h3>
                  <p className="text-[#A69F91] leading-relaxed">
                    Az első napon összegyűjtjük az igényeket és a szükséges anyagokat (logo, szövegek, képek).
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#17151C] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#F2A93B] rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#F3EFE6]">Design és fejlesztés</h3>
                  <p className="text-[#A69F91] leading-relaxed">
                    A következő napokban készítjük el a vázlatokat, a design-t, majd fejlesztjük a weboldalt.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#17151C] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#F2A93B] rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#F3EFE6]">Tesztelés és indítás</h3>
                  <p className="text-[#A69F91] leading-relaxed">
                    Az utolsó napokban teszteljük, finomhangoljuk, majd élőre helyezzük a weboldalt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section id="cta">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#F3EFE6]">
            Készen állsz a weboldaladra?
          </h2>
          <p className="text-lg text-[#A69F91] mb-8 max-w-2xl mx-auto">
            Foglalj időpontot még ma, és 3 nap múlva már élő lesz a prémium weboldalad.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTAButton href="/book" variant="primary" className="text-base px-10 py-5">
              Időpont Foglalása
            </CTAButton>
            <CTAButton href="/#pricing" variant="secondary" className="text-base px-10 py-5">
              Árak Megtekintése
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}

