import type { Metadata } from "next";
import FinAIHero from "@/components/FinAIHero";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Rólunk | Nexen Sites",
  description: "Ismerd meg a Nexen Sites csapatát, értékeinket és küldetésünket. Modern weboldal fejlesztés 10 nap alatt.",
  openGraph: {
    title: "Rólunk | Nexen Sites",
    description: "Ismerd meg a Nexen Sites csapatát, értékeinket és küldetésünket. Modern weboldal fejlesztés 10 nap alatt.",
    type: "website",
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
            <div className="inline-flex items-center justify-center px-5 py-3 bg-gradient-to-r from-[#FFD700]/30 via-[#FFD700]/40 to-[#FFD700]/30 border-2 border-[#FFD700] rounded-xl shadow-[0_0_30px_rgba(255,215,0,0.6)]">
              <span className="text-lg md:text-xl font-bold text-white tracking-wide">Prémium minőség</span>
              <span className="text-lg md:text-xl font-bold text-white mx-1.5 tracking-wide">•</span>
              <span className="text-lg md:text-xl font-bold text-white tracking-wide">10 nap alatt</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-fade-in">
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
            <div className="text-center px-8 py-6 backdrop-blur-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl shadow-lg hover:border-[#FFD700]/50 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:scale-105 transition-all duration-500 animate-float-up group">
              <div className="text-4xl md:text-5xl font-black text-[#FFD700] mb-2 group-hover:scale-110 transition-transform duration-300">10</div>
              <div className="text-sm md:text-base text-[#EAF0FF] font-semibold">Napos szállítás</div>
            </div>
            <div className="text-center px-8 py-6 backdrop-blur-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl shadow-lg hover:border-[#FFD700]/50 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:scale-105 transition-all duration-500 animate-float-up-delay-1 group">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-sm md:text-base text-[#EAF0FF] font-semibold">Prémium minőség</div>
            </div>
            <div className="text-center px-8 py-6 backdrop-blur-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl shadow-lg hover:border-[#FFD700]/50 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:scale-105 transition-all duration-500 animate-float-up-delay-2 group">
              <div className="text-4xl md:text-5xl font-black text-[#FFD700] mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-sm md:text-base text-[#EAF0FF] font-semibold">Támogatás</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <Section id="story">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#EAF0FF] animate-fade-in">
            Történetünk
          </h2>
          <div className="bg-[#0F1620] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 md:p-12 mb-12 animate-slide-up hover:border-[#7C5CFF]/30 hover:shadow-[0_0_30px_rgba(124,92,255,0.2)] transition-all duration-500">
            <p className="text-lg text-[#A8B3C7] leading-relaxed mb-6">
              A Nexen Sites 2024-ben jött létre azzal a céllal, hogy forradalmasítsa a weboldal fejlesztés világát. 
              Láttuk, hogy sok vállalkozó hónapokig vár egy egyszerű weboldalra, miközben a modern technológiák lehetővé teszik, 
              hogy ezt sokkal gyorsabban és hatékonyabban megoldjuk.
            </p>
            <p className="text-lg text-[#A8B3C7] leading-relaxed mb-6">
              A 10 napos szállítási rendszerünk nem kompromisszum a minőséggel. Minden weboldalunkat a legmodernebb technológiákkal 
              készítjük el, prémium design-nal és tökéletes működéssel. Hiszünk abban, hogy a gyorsaság és a minőség együtt járhat.
            </p>
            <p className="text-lg text-[#A8B3C7] leading-relaxed">
              Ma már számos elégedett ügyfelünk van, akik büszkén mutathatják be modern, gyors és konverzióra optimalizált weboldalukat.
            </p>
          </div>
        </div>
      </Section>

      {/* Team Values Section */}
      <Section id="values">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#EAF0FF] animate-fade-in">
            Értékeink
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-2xl p-8 text-center border border-[rgba(255,215,0,0.3)] hover:border-[rgba(255,215,0,0.6)] hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] transition-all duration-300 animate-float-up group gold-gradient-bg">
              <div className="absolute inset-0 opacity-30 gold-shine-overlay"></div>
              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
                <h3 className="text-xl font-bold mb-4 text-[#FFD700]">Gyorsaság</h3>
                <p className="text-[#EAF0FF] leading-relaxed">
                  10 nap alatt kész weboldal, fix határidővel. Nincs várakozás, nincs késés. 
                  Amikor azt mondjuk 10 nap, akkor 10 nap.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl p-8 text-center border border-[rgba(255,215,0,0.3)] hover:border-[rgba(255,215,0,0.6)] hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] transition-all duration-300 animate-float-up-delay-1 group gold-gradient-bg" style={{ animationDelay: '0.5s' }}>
              <div className="absolute inset-0 opacity-30 gold-shine-overlay" style={{ animationDelay: '0.5s' }}></div>
              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">✨</div>
                <h3 className="text-xl font-bold mb-4 text-[#FFD700]">Minőség</h3>
                <p className="text-[#EAF0FF] leading-relaxed">
                  Prémium design, modern technológiák, 
                  és tökéletes működés minden eszközön - mobil, tablet, desktop.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl p-8 text-center border border-[rgba(255,215,0,0.3)] hover:border-[rgba(255,215,0,0.6)] hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] transition-all duration-300 animate-float-up-delay-2 group gold-gradient-bg" style={{ animationDelay: '1s' }}>
              <div className="absolute inset-0 opacity-30 gold-shine-overlay" style={{ animationDelay: '1s' }}></div>
              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🤝</div>
                <h3 className="text-xl font-bold mb-4 text-[#FFD700]">Megbízhatóság</h3>
                <p className="text-[#EAF0FF] leading-relaxed">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#EAF0FF] animate-fade-in">
            Miért válassz minket?
          </h2>
          <div className="space-y-6">
            <div className="bg-[#0F1620] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 md:p-8 animate-slide-up hover:border-[#7C5CFF]/30 hover:shadow-[0_0_20px_rgba(124,92,255,0.2)] transition-all duration-500 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#7C5CFF] to-[#50AEDF] rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#EAF0FF]">10 napos garantált szállítás</h3>
                  <p className="text-[#A8B3C7] leading-relaxed">
                    Nem ígérgetünk, hanem garantáljuk. Ha 10 nap alatt nem készül el a weboldal, 
                    akkor ingyenesen dolgozunk tovább.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#0F1620] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 md:p-8 animate-slide-up hover:border-[#50AEDF]/30 hover:shadow-[0_0_20px_rgba(80,174,223,0.2)] transition-all duration-500 group" style={{ animationDelay: '0.1s', opacity: 0 }}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#7C5CFF] to-[#50AEDF] rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#EAF0FF]">Modern technológiák</h3>
                  <p className="text-[#A8B3C7] leading-relaxed">
                    Next.js, React, TypeScript - a legmodernebb technológiákat használjuk, 
                    hogy a weboldalad gyors, SEO-barát és könnyen karbantartható legyen.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#0F1620] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 md:p-8 animate-slide-up hover:border-[#7C5CFF]/30 hover:shadow-[0_0_20px_rgba(124,92,255,0.2)] transition-all duration-500 group" style={{ animationDelay: '0.2s', opacity: 0 }}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#7C5CFF] to-[#50AEDF] rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#EAF0FF]">Prémium design</h3>
                  <p className="text-[#A8B3C7] leading-relaxed">
                    Minden weboldalunk egyedi, modern design-nal készül. Nem sablonok, hanem 
                    a te vállalkozásodhoz igazított, egyedi megoldások.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#0F1620] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 md:p-8 animate-slide-up hover:border-[#50AEDF]/30 hover:shadow-[0_0_20px_rgba(80,174,223,0.2)] transition-all duration-500 group" style={{ animationDelay: '0.3s', opacity: 0 }}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#7C5CFF] to-[#50AEDF] rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#EAF0FF]">Folyamatos támogatás</h3>
                  <p className="text-[#A8B3C7] leading-relaxed">
                    Az átadás után sem hagyunk cserben. Segítünk a frissítésekben, 
                    módosításokban és bármilyen kérdésben, ami felmerül.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section id="stats">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#EAF0FF] animate-fade-in">
            Számokban
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-[#0F1620] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 text-center animate-float-up hover:border-[#7C5CFF]/50 hover:shadow-[0_0_30px_rgba(124,92,255,0.2)] transition-all duration-500 group">
              <div className="text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r from-[#7C5CFF] to-[#50AEDF] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                Számos
              </div>
              <p className="text-[#A8B3C7] text-sm md:text-base">Elégedett ügyfél</p>
            </div>
            <div className="bg-[#0F1620] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 text-center animate-float-up-delay-1 hover:border-[#50AEDF]/50 hover:shadow-[0_0_30px_rgba(80,174,223,0.2)] transition-all duration-500 group">
              <div className="text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r from-[#7C5CFF] to-[#50AEDF] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                10
              </div>
              <p className="text-[#A8B3C7] text-sm md:text-base">Napos szállítás</p>
            </div>
            <div className="bg-[#0F1620] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 text-center animate-float-up-delay-2 hover:border-[#7C5CFF]/50 hover:shadow-[0_0_30px_rgba(124,92,255,0.2)] transition-all duration-500 group">
              <div className="text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r from-[#7C5CFF] to-[#50AEDF] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <p className="text-[#A8B3C7] text-sm md:text-base">Garantált minőség</p>
            </div>
            <div className="bg-[#0F1620] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 text-center animate-float-up hover:border-[#50AEDF]/50 hover:shadow-[0_0_30px_rgba(80,174,223,0.2)] transition-all duration-500 group" style={{ animationDelay: '0.3s', opacity: 0 }}>
              <div className="text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r from-[#7C5CFF] to-[#50AEDF] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <p className="text-[#A8B3C7] text-sm md:text-base">Támogatás</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section id="cta">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#EAF0FF] animate-fade-in">
            Készen állsz a weboldaladra?
          </h2>
          <p className="text-lg text-[#A8B3C7] mb-8 max-w-2xl mx-auto animate-fade-in-delay">
            Foglalj időpontot még ma, és 10 nap múlva már élő lesz a prémium weboldalad. 
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

