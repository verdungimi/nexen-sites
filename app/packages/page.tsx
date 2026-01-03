import type { Metadata } from "next";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "További csomagok | Nexen Sites",
  description: "Exclusive és egyedi csomagok prémium ügyfeleinknek.",
};

export default function PackagesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#EAF0FF]">
            További csomagok
          </h1>
          <p className="text-xl text-[#A8B3C7] mb-8">
            Exclusive és egyedi megoldások prémium ügyfeleinknek
          </p>
          <Link href="/#pricing" className="text-[#7C5CFF] hover:text-[#50AEDF] transition-colors">
            ← Vissza az alap csomagokhoz
          </Link>
        </div>
      </Section>

      {/* Packages */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Exclusive Package */}
            <div className="group relative bg-gradient-to-br from-[#1a0a0a] to-[#2a1a1a] border-2 border-[rgba(220,20,60,0.5)] rounded-3xl p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#DC143C] hover:shadow-[0_0_60px_rgba(220,20,60,0.5),0_0_120px_rgba(255,215,0,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/10 via-[#FFD700]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -top-4 right-4 bg-gradient-to-r from-[#DC143C] to-[#FFD700] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                EXCLUSIVE
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#DC143C] to-[#FFD700] bg-clip-text text-transparent">
                  Exclusive Csomag
                </h3>
                <div className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#DC143C] to-[#FFD700] bg-clip-text text-transparent">
                  Ár: Egyedi ajánlat
                </div>
                <p className="text-[#A8B3C7] mb-8 text-lg">
                  Teljes egyedi megoldás, minden benne van amit csak elképzelhetsz
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFD700] font-bold text-lg group-hover:text-[#DC143C] transition-colors">✓</span>
                    <span className="text-[#EAF0FF] text-base">Korlátlan oldalszám</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFD700] font-bold text-lg group-hover:text-[#DC143C] transition-colors">✓</span>
                    <span className="text-[#EAF0FF] text-base">Teljes egyedi design és UX</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFD700] font-bold text-lg group-hover:text-[#DC143C] transition-colors">✓</span>
                    <span className="text-[#EAF0FF] text-base">Prémium animációk és interakciók</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFD700] font-bold text-lg group-hover:text-[#DC143C] transition-colors">✓</span>
                    <span className="text-[#EAF0FF] text-base">Teljes SEO optimalizálás</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFD700] font-bold text-lg group-hover:text-[#DC143C] transition-colors">✓</span>
                    <span className="text-[#EAF0FF] text-base">Egyedi integrációk (CRM, payment, stb.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFD700] font-bold text-lg group-hover:text-[#DC143C] transition-colors">✓</span>
                    <span className="text-[#EAF0FF] text-base">Teljes tartalomkezelési rendszer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFD700] font-bold text-lg group-hover:text-[#DC143C] transition-colors">✓</span>
                    <span className="text-[#EAF0FF] text-base">E-commerce funkcionalitás</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFD700] font-bold text-lg group-hover:text-[#DC143C] transition-colors">✓</span>
                    <span className="text-[#EAF0FF] text-base">Multi-language támogatás</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFD700] font-bold text-lg group-hover:text-[#DC143C] transition-colors">✓</span>
                    <span className="text-[#EAF0FF] text-base">Prémium analytics és tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFD700] font-bold text-lg group-hover:text-[#DC143C] transition-colors">✓</span>
                    <span className="text-[#EAF0FF] text-base">24/7 prioritásos támogatás</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFD700] font-bold text-lg group-hover:text-[#DC143C] transition-colors">✓</span>
                    <span className="text-[#EAF0FF] text-base">Havi karbantartás és frissítések</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFD700] font-bold text-lg group-hover:text-[#DC143C] transition-colors">✓</span>
                    <span className="text-[#EAF0FF] text-base">Egyedi fejlesztési igények</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFD700] font-bold text-lg group-hover:text-[#DC143C] transition-colors">✓</span>
                    <span className="text-[#EAF0FF] text-base">Garantált határidő</span>
                  </li>
                </ul>
                
                <CTAButton href="/book" variant="primary" className="w-full text-base py-4">
                  Kapcsolatfelvétel
                </CTAButton>
              </div>
            </div>

            {/* Landing Page Package */}
            <div className="group relative bg-[#0F1620] border-2 border-[#50AEDF]/40 rounded-3xl p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#50AEDF] hover:shadow-[0_0_50px_rgba(80,174,223,0.4)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#50AEDF]/10 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4 text-[#EAF0FF] group-hover:text-[#50AEDF] transition-colors">
                  Landing Page Csomag
                </h3>
                <div className="text-4xl font-bold mb-2 text-[#EAF0FF] group-hover:text-[#50AEDF] transition-colors">
                  350 000 Ft
                </div>
                <p className="text-[#A8B3C7] mb-8 text-lg">
                  Konverzióra optimalizált, egyoldalas landing page
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-[#50AEDF] font-bold text-lg">✓</span>
                    <span className="text-[#EAF0FF] text-base">Egyoldalas, konverzióra optimalizált design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#50AEDF] font-bold text-lg">✓</span>
                    <span className="text-[#EAF0FF] text-base">Hero szekció prémium animációkkal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#50AEDF] font-bold text-lg">✓</span>
                    <span className="text-[#EAF0FF] text-base">Szolgáltatások/bővebben szekció</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#50AEDF] font-bold text-lg">✓</span>
                    <span className="text-[#EAF0FF] text-base">Árazás/táblázat</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#50AEDF] font-bold text-lg">✓</span>
                    <span className="text-[#EAF0FF] text-base">Testimonials/ügyfél vélemények</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#50AEDF] font-bold text-lg">✓</span>
                    <span className="text-[#EAF0FF] text-base">GYIK (FAQ) szekció</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#50AEDF] font-bold text-lg">✓</span>
                    <span className="text-[#EAF0FF] text-base">Kapcsolatfelvételi űrlap</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#50AEDF] font-bold text-lg">✓</span>
                    <span className="text-[#EAF0FF] text-base">Mobilbarát, reszponzív design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#50AEDF] font-bold text-lg">✓</span>
                    <span className="text-[#EAF0FF] text-base">Gyors betöltési idő optimalizálás</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#50AEDF] font-bold text-lg">✓</span>
                    <span className="text-[#EAF0FF] text-base">Analytics beállítás</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#50AEDF] font-bold text-lg">✓</span>
                    <span className="text-[#EAF0FF] text-base">10 napos szállítási garancia</span>
                  </li>
                </ul>
                
                <CTAButton href="/book" variant="secondary" className="w-full text-base py-4">
                  Időpont Foglalása
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

