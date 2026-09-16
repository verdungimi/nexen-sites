import type { Metadata } from "next";
import FinAIHero from "@/components/FinAIHero";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import { Zap, Sparkles, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Rólunk | Nexen Sites - Weboldal Készítés",
  description: "Ismerd meg a Nexen Sites csapatát, értékeinket és küldetésünket. Nexen weboldal készítés - Modern weboldal fejlesztés 3 nap alatt. Weboldalak készítése vállalkozásoknak.",
  keywords: [
    "nexen",
    "nexen weboldal",
    "weboldal készítés",
    "weboldalak készítése",
    "rolunk",
    "nexen sites",
  ],
  openGraph: {
    title: "Rólunk | Nexen Sites - Weboldal Készítés",
    description: "Ismerd meg a Nexen Sites csapatát, értékeinket és küldetésünket. Modern weboldal fejlesztés 3 nap alatt.",
    type: "website",
    url: "https://nexensites.hu/rolunk",
  },
  alternates: {
    canonical: "https://nexensites.hu/rolunk",
  },
};

export default function RolunkPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-24 pb-16 px-4 overflow-hidden">
        <FinAIHero />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center" style={{ pointerEvents: 'auto' }}>
          {/* Badge */}
          <div className="mb-6 animate-fade-in flex justify-center">
            <div className="inline-flex items-center justify-center px-5 py-3 bg-gradient-to-r from-[#2DD4BF]/30 via-[#2DD4BF]/40 to-[#2DD4BF]/30 border-2 border-[#2DD4BF] rounded-xl">
              <span className="text-lg md:text-xl font-bold text-white tracking-wide">Prémium minőség</span>
              <span className="text-lg md:text-xl font-bold text-white mx-1.5 tracking-wide">•</span>
              <span className="text-lg md:text-xl font-bold text-white tracking-wide">3 nap alatt</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
            <span className="block text-[#F3EFE6] animate-fade-in">
              Rólunk
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-delay">
            A Nexen Sites egy fiatal, dinamikus csapat, amely a modern weboldal fejlesztésben specializálódott. 
            Célunk, hogy minden vállalkozó számára elérhetővé tegyük a prémium minőségű online jelenlétet.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-delay-2">
            <CTAButton href="/book" variant="primary" className="text-base px-10 py-5 min-w-[200px]">
              Időpont Foglalása
            </CTAButton>
            <CTAButton href="/packages" variant="secondary" className="text-base px-10 py-5 min-w-[200px]">
              Csomagok Megtekintése
            </CTAButton>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-20">
            <div className="text-center px-8 py-6 backdrop-blur-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl shadow-lg hover:border-[#2DD4BF]/50 hover:scale-105 transition-all duration-500 animate-float-up group">
              <div className="text-4xl md:text-5xl font-black text-[#2DD4BF] mb-2">3</div>
              <div className="text-sm md:text-base text-[#F3EFE6] font-semibold">Napos szállítás</div>
            </div>
            <div className="text-center px-8 py-6 backdrop-blur-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl shadow-lg hover:border-[#2DD4BF]/50 hover:scale-105 transition-all duration-500 animate-float-up-delay-1 group">
              <div className="text-4xl md:text-5xl font-black text-[#2DD4BF] mb-2">100%</div>
              <div className="text-sm md:text-base text-[#F3EFE6] font-semibold">Prémium minőség</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <Section id="story">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#F3EFE6] animate-fade-in">
            Történetünk
          </h2>
          <div className="bg-[#17151C] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 md:p-12 mb-12 animate-slide-up hover:border-[#F2A93B]/30 transition-all duration-500">
            <p className="text-lg text-[#A69F91] leading-relaxed mb-6">
              A Nexen Sites azért jött létre, hogy máshogy oldjuk meg a weboldal fejlesztést.
              Láttuk, hogy sok vállalkozó hónapokig vár egy egyszerű weboldalra, miközben a modern technológiák lehetővé teszik,
              hogy ezt sokkal gyorsabban és hatékonyabban megoldjuk.
            </p>
            <p className="text-lg text-[#A69F91] leading-relaxed">
              A 3 napos szállítási rendszerünk nem kompromisszum a minőséggel. Minden weboldalunkat a legmodernebb technológiákkal
              készítjük el, egyedi designnal és gondos odafigyeléssel a részletekre. Hiszünk abban, hogy a gyorsaság és a minőség együtt járhat.
            </p>
          </div>
        </div>
      </Section>

      {/* Team Values Section */}
      <Section id="values">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#F3EFE6] animate-fade-in">
            Értékeink
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-2xl p-8 text-center border border-[rgba(45,212,191,0.3)] hover:border-[rgba(45,212,191,0.6)] transition-all duration-300 animate-float-up group">
              <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-[#2DD4BF]/20 to-[#F2A93B]/20"></div>
              <div className="relative z-10">
                <Zap className="w-10 h-10 mb-4 mx-auto text-[#2DD4BF]" strokeWidth={1.5} />
                <h3 className="text-xl font-bold mb-4 text-[#2DD4BF]">Gyorsaság</h3>
                <p className="text-[#F3EFE6] leading-relaxed">
                  3 nap alatt kész weboldal, fix határidővel. Nincs várakozás, nincs késés. 
                  Amikor azt mondjuk 3 nap, akkor 3 nap.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl p-8 text-center border border-[rgba(45,212,191,0.3)] hover:border-[rgba(45,212,191,0.6)] transition-all duration-300 animate-float-up-delay-1 group" style={{ animationDelay: '0.5s' }}>
              <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-[#2DD4BF]/20 to-[#F2A93B]/20" style={{ animationDelay: '0.5s' }}></div>
              <div className="relative z-10">
                <Sparkles className="w-10 h-10 mb-4 mx-auto text-[#2DD4BF]" strokeWidth={1.5} />
                <h3 className="text-xl font-bold mb-4 text-[#2DD4BF]">Minőség</h3>
                <p className="text-[#F3EFE6] leading-relaxed">
                  Prémium design, modern technológiák, 
                  és tökéletes működés minden eszközön - mobil, tablet, desktop.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl p-8 text-center border border-[rgba(45,212,191,0.3)] hover:border-[rgba(45,212,191,0.6)] transition-all duration-300 animate-float-up-delay-2 group" style={{ animationDelay: '1s' }}>
              <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-[#2DD4BF]/20 to-[#F2A93B]/20" style={{ animationDelay: '1s' }}></div>
              <div className="relative z-10">
                <Handshake className="w-10 h-10 mb-4 mx-auto text-[#2DD4BF]" strokeWidth={1.5} />
                <h3 className="text-xl font-bold mb-4 text-[#2DD4BF]">Megbízhatóság</h3>
                <p className="text-[#F3EFE6] leading-relaxed">
                  Átlátható kommunikáció, tiszta határidők, és folyamatos támogatás. 
                  Nem csak a weboldalt adjuk át, hanem segítünk a sikerben is.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section id="why-us">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#F3EFE6] animate-fade-in">
            Miért válassz minket?
          </h2>
          <div className="space-y-6">
            <div className="bg-[#17151C] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 md:p-8 animate-slide-up hover:border-[#F2A93B]/30 transition-all duration-500 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F2A93B] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#F3EFE6]">3 napos garantált szállítás</h3>
                  <p className="text-[#A69F91] leading-relaxed">
                    Nem ígérgetünk, hanem garantáljuk. Ha 3 nap alatt nem készül el a weboldal, 
                    akkor ingyenesen dolgozunk tovább.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#17151C] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 md:p-8 animate-slide-up hover:border-[#2DD4BF]/30 transition-all duration-500 group" style={{ animationDelay: '0.1s', opacity: 0 }}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F2A93B] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#F3EFE6]">Modern technológiák</h3>
                  <p className="text-[#A69F91] leading-relaxed">
                    Next.js, React, TypeScript - a legmodernebb technológiákat használjuk, 
                    hogy a weboldalad gyors, SEO-barát és könnyen karbantartható legyen.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#17151C] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 md:p-8 animate-slide-up hover:border-[#F2A93B]/30 transition-all duration-500 group" style={{ animationDelay: '0.2s', opacity: 0 }}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F2A93B] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#F3EFE6]">Prémium design</h3>
                  <p className="text-[#A69F91] leading-relaxed">
                    Minden weboldalunk egyedi, modern designnal készül. Nem sablonok, hanem 
                    a te vállalkozásodhoz igazított, egyedi megoldások.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#17151C] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 md:p-8 animate-slide-up hover:border-[#2DD4BF]/30 transition-all duration-500 group" style={{ animationDelay: '0.3s', opacity: 0 }}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F2A93B] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#F3EFE6]">Folyamatos támogatás</h3>
                  <p className="text-[#A69F91] leading-relaxed">
                    Az átadás után sem hagyunk cserben. Segítünk a frissítésekben, 
                    módosításokban és bármilyen kérdésben, ami felmerül.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#F3EFE6] animate-fade-in">
            Készen állsz a weboldaladra?
          </h2>
          <p className="text-lg text-[#A69F91] mb-8 max-w-2xl mx-auto animate-fade-in-delay">
            Foglalj időpontot még ma, és 3 nap múlva már élő lesz a prémium weboldalad. 
            Ne várj tovább, kezdjük el még ma!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-delay-2">
            <CTAButton href="/book" variant="primary" className="text-base px-10 py-5">
              Időpont Foglalása
            </CTAButton>
            <CTAButton href="/packages" variant="secondary" className="text-base px-10 py-5">
              Csomagok Megtekintése
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}

