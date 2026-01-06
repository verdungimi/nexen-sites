import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import FinAIHero from "@/components/FinAIHero";
import ProcessTimeline from "@/components/ProcessTimeline";
import FAQAccordion from "@/components/FAQAccordion";
import TestimonialCard from "@/components/TestimonialCard";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Nexen Sites — Prémium weboldal 10 nap alatt",
  description: "Gyorsan tervezünk és építünk prémium weboldalakat, káosz nélkül. Weboldal vagy landing page 10 nap alatt.",
  keywords: [
    "nexen",
    "nexen weboldal",
    "weboldal készítés",
    "weboldalak készítése",
    "weboldal 10 nap alatt",
    "prémium weboldal",
    "landing page",
    "nexen sites",
  ],
  openGraph: {
    title: "Nexen Sites — Prémium weboldal 10 nap alatt",
    description: "Gyorsan tervezünk és építünk prémium weboldalakat, káosz nélkül. Weboldal vagy landing page 10 nap alatt.",
    type: "website",
    url: "https://nexensites.hu",
  },
  alternates: {
    canonical: "https://nexensites.hu",
  },
};

const faqItems = [
  {
    question: "Mi kell tőled?",
    answer: "Logo fájlok, márkaszinvek (ha vannak), szövegek/tartalom, és bármilyen specifikus követelmény. Szükség esetén segítünk tartalmat szerezni is.",
  },
  {
    question: "Foglalkoztok a szövegekkel?",
    answer: "Igen, finomhangoljuk és optimalizáljuk a szövegeidet a wireframe fázisban. Ha még nincsenek szövegeid, veled együtt készítjük el őket.",
  },
  {
    question: "Mi van, ha változtatni szeretnék?",
    answer: "Egy javítási kört tartalmazunk a design fázisban, és ésszerű változtatásokat tudunk alkalmazni a fejlesztés során. Nagyobb scope változások meghosszabbíthatják a határidőt.",
  },
  {
    question: "Integrálhattok eszközöket?",
    answer: "Igen, integrálhatunk gyakori eszközöket, mint kapcsolati űrlapok, analytics, foglalási rendszerek stb. Összetett integrációk kiegészítőként elérhetőek.",
  },
  {
    question: "Milyen platformra építitek?",
    answer: "Modern, gyors technológiák, amelyek SEO-barátak és könnyen karbantarthatók. Kiválasztjuk a legjobb tech stacket az igényeidhez, és teljes dokumentációt adunk.",
  },
  {
    question: "Kinek NEM ajánljuk?",
    answer: "Ha kiterjedt egyedi fejlesztésre, e-commerce-re több száz termékkel, vagy folyamatos design iterációkra van szükséged, a 10 napos modellünk lehet, hogy nem ideális. Beszéljük meg az igényeidet.",
  },
];

const testimonials = [
  {
    name: "Kovács Péter",
    business: "Alapító, TechCo",
    testimonial: "Pontosan időben készült el. A weboldal professzionálisan néz ki és jól konvertál. Nincs oda-vissza káosz.",
  },
  {
    name: "Nagy Anna",
    business: "Tulajdonos, Helyi Étterem",
    testimonial: "Gyors, professzionális, és a végeredmény felülmúlta az elvárásokat. A 10 napos határidő játékmódosító volt.",
  },
  {
    name: "Horváth Tamás",
    business: "Ügyvezető, ConsultCo",
    testimonial: "Minőségi munka, nincs késés, remek kommunikáció. A weboldal drágán néz ki és tökéletesen működik.",
  },
];

const workProjects = [
  {
    title: "Helyi szolgáltatás landing",
    description: "Landing page egy helyi otthonszolgáltató cégnek, ami több leadet szeretne elkapni.",
    result: "Eredmény: 40% növekedés az érdeklődésekben",
  },
  {
    title: "Tanácsadó weboldal",
    description: "Professzionális weboldal egy független tanácsadónak, aki hitelességet próbál építeni.",
    result: "Eredmény: Egyértelmű pozicionálás, jobb konverziók",
  },
  {
    title: "Kisvállalkozás weboldal",
    description: "Többoldalas weboldal egy növekvő kiskereskedelmi vállalkozásnak, ami bővíti online jelenlétét.",
    result: "Eredmény: Modern márka jelenlét",
  },
  {
    title: "Lead generáló oldal",
    description: "Magas konverziójú landing page egy B2B szolgáltató cégnek, ami a lead rögzítésre fókuszál.",
    result: "Eredmény: Jobb lead minőség",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 px-4 overflow-hidden">
        <FinAIHero />
        
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-left">
              <p className="text-sm md:text-base font-semibold text-[#7C5CFF] mb-4 uppercase tracking-wider">
                Prémium weboldal szállítás
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white leading-tight">
                Prémium weboldal{" "}
                <span className="bg-gradient-to-r from-[#7C5CFF] to-[#50AEDF] bg-clip-text text-transparent">
                  10 nap alatt
                </span>
                .
              </h1>
              <p className="text-lg md:text-xl text-[#A8B3C7] mb-8 leading-relaxed">
                Tiszta design, konverzióközpontú struktúra és egy drágán kinéző weboldal — hetek kiesés nélkül.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/book"
                  className="px-8 py-4 bg-gradient-to-r from-[#7C5CFF] to-[#50AEDF] text-white rounded-xl font-semibold text-center hover:shadow-[0_0_30px_rgba(124,92,255,0.6)] hover:scale-105 transition-all duration-300"
                >
                  Foglalj időpontot
                </Link>
                <Link
                  href="#work"
                  className="px-8 py-4 bg-[rgba(255,255,255,0.1)] backdrop-blur-sm border-2 border-[rgba(255,255,255,0.2)] text-white rounded-xl font-semibold text-center hover:bg-[rgba(255,255,255,0.2)] transition-all duration-300"
                >
                  Példák megtekintése
                </Link>
              </div>
              <div className="mt-8">
                <p className="text-sm text-[#A8B3C7] mb-4">Alapítók és helyi vállalkozások bíznak bennünk</p>
                <div className="flex flex-wrap gap-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="px-4 py-2 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-sm text-[#A8B3C7]"
                    >
                      Ügyfél {i}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Preview Card */}
            <div className="hidden lg:block">
              <div className="bg-[#0F1620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ED5096]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#50AEDF]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#7C5CFF]"></div>
                  </div>
                  <div className="px-3 py-1 bg-gradient-to-r from-[#7C5CFF] to-[#50AEDF] text-white text-xs font-bold rounded-full">
                    Szállítás: 10. nap
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="h-4 bg-[rgba(255,255,255,0.1)] rounded w-full"></div>
                  <div className="h-4 bg-[rgba(255,255,255,0.1)] rounded w-3/4"></div>
                  <div className="h-32 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded"></div>
                  <div className="h-4 bg-[rgba(255,255,255,0.1)] rounded w-full"></div>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-[rgba(124,92,255,0.2)] text-[#7C5CFF] text-xs rounded-full">Mobilbarát</span>
                  <span className="px-3 py-1 bg-[rgba(80,174,223,0.2)] text-[#50AEDF] text-xs rounded-full">Gyors betöltés</span>
                  <span className="px-3 py-1 bg-[rgba(124,92,255,0.2)] text-[#7C5CFF] text-xs rounded-full">Konverzióra kész</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Section id="services">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-[#EAF0FF]">
            Minden, amire szükséged van. Semmi, amire nem.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0F1620] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 hover:border-[#7C5CFF]/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-[#EAF0FF]">Prémium kinézetű design</h3>
              <p className="text-[#A8B3C7] mb-4 leading-relaxed">
                Modern, tiszta esztétika, ami drágán és megbízhatóan mutatja be a márkádat.
              </p>
              <p className="text-sm text-[#7C5CFF] font-semibold">Egyértelműség, ami konvertál</p>
            </div>
            <div className="bg-[#0F1620] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 hover:border-[#7C5CFF]/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-[#EAF0FF]">Gyorsan építjük, káosz nélkül</h3>
              <p className="text-[#A8B3C7] mb-4 leading-relaxed">
                Strukturált folyamat, egyértelmű kommunikáció, időben történő szállítás. Nincs végtelen újragondolás vagy scope creep.
              </p>
              <p className="text-sm text-[#7C5CFF] font-semibold">Gyorsaság, amire számíthatsz</p>
            </div>
            <div className="bg-[#0F1620] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 hover:border-[#7C5CFF]/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-[#EAF0FF]">Konverzióra épített struktúra</h3>
              <p className="text-[#A8B3C7] mb-4 leading-relaxed">
                Stratégiai elrendezés és üzenetküldés, ami a látogatókat vásárlókká alakítja.
              </p>
              <p className="text-sm text-[#7C5CFF] font-semibold">Eredmények, amik számítanak</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section id="process" className="bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-[#EAF0FF]">
            Hogyan szállítunk 10 nap alatt
          </h2>
          <ProcessTimeline />
        </div>
      </Section>

      {/* Work Section */}
      <Section id="work">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-[#EAF0FF]">
            Legutóbbi munkák
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {workProjects.map((project, index) => (
              <div
                key={index}
                className="bg-[#0F1620] border border-[rgba(255,255,255,0.1)] rounded-2xl overflow-hidden hover:border-[#7C5CFF]/50 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-[#7C5CFF]/20 to-[#50AEDF]/20 flex items-center justify-center">
                  <div className="text-[#A8B3C7] text-sm">Projekt képe</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#EAF0FF]">{project.title}</h3>
                  <p className="text-[#A8B3C7] mb-4 leading-relaxed">{project.description}</p>
                  <p className="text-sm text-[#7C5CFF] font-semibold">{project.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Pricing Section */}
      <Section id="pricing" className="bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-[#EAF0FF]">
            Válaszd ki a szintet
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Starter */}
            <div className="bg-[#0F1620] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[#EAF0FF]">Starter</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">799 000</span>
                <span className="text-[#A8B3C7] ml-2">Ft</span>
              </div>
              <p className="text-[#A8B3C7] mb-6">1 oldalas landing</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C5CFF]">✓</span>
                  <span className="text-[#A8B3C7]">Egyoldalas design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C5CFF]">✓</span>
                  <span className="text-[#A8B3C7]">Mobilbarát</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C5CFF]">✓</span>
                  <span className="text-[#A8B3C7]">Kapcsolati űrlap</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C5CFF]">✓</span>
                  <span className="text-[#A8B3C7]">Alap SEO beállítás</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C5CFF]">✓</span>
                  <span className="text-[#A8B3C7]">10 napos szállítás</span>
                </li>
              </ul>
              <Link
                href="/book"
                className="block w-full px-6 py-3 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] text-white rounded-xl font-semibold text-center hover:bg-[rgba(255,255,255,0.2)] transition-all duration-300"
              >
                Kezdjük el
              </Link>
            </div>

            {/* Standard - Featured */}
            <div className="bg-gradient-to-br from-[#0F1620] to-[#1a0f2e] border-2 border-[#7C5CFF] rounded-2xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#7C5CFF] to-[#50AEDF] text-white text-sm font-bold rounded-full">
                Legnépszerűbb
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#EAF0FF] mt-4">Standard</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">1 299 000</span>
                <span className="text-[#A8B3C7] ml-2">Ft</span>
              </div>
              <p className="text-[#A8B3C7] mb-6">3–5 oldalas weboldal</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C5CFF]">✓</span>
                  <span className="text-[#A8B3C7]">3–5 oldalas design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C5CFF]">✓</span>
                  <span className="text-[#A8B3C7]">Haladó SEO</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C5CFF]">✓</span>
                  <span className="text-[#A8B3C7]">Egyedi animációk</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C5CFF]">✓</span>
                  <span className="text-[#A8B3C7]">Tartalomkezelés</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C5CFF]">✓</span>
                  <span className="text-[#A8B3C7]">Analytics beállítás</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C5CFF]">✓</span>
                  <span className="text-[#A8B3C7]">10 napos szállítás</span>
                </li>
              </ul>
              <Link
                href="/book"
                className="block w-full px-6 py-3 bg-gradient-to-r from-[#7C5CFF] to-[#50AEDF] text-white rounded-xl font-semibold text-center hover:shadow-[0_0_30px_rgba(124,92,255,0.6)] transition-all duration-300"
              >
                Foglalj időpontot
              </Link>
            </div>

            {/* Pro */}
            <div className="bg-[#0F1620] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[#EAF0FF]">Pro</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">1 999 000</span>
                <span className="text-[#A8B3C7] ml-2">Ft</span>
              </div>
              <p className="text-[#A8B3C7] mb-6">Teljes weboldal + extrák</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C5CFF]">✓</span>
                  <span className="text-[#A8B3C7]">7–10 oldalas design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C5CFF]">✓</span>
                  <span className="text-[#A8B3C7]">Teljes SEO optimalizálás</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C5CFF]">✓</span>
                  <span className="text-[#A8B3C7]">Egyedi integrációk</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C5CFF]">✓</span>
                  <span className="text-[#A8B3C7]">Prémium animációk</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C5CFF]">✓</span>
                  <span className="text-[#A8B3C7]">Folyamatos támogatás</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C5CFF]">✓</span>
                  <span className="text-[#A8B3C7]">10 napos szállítás</span>
                </li>
              </ul>
              <Link
                href="/book"
                className="block w-full px-6 py-3 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] text-white rounded-xl font-semibold text-center hover:bg-[rgba(255,255,255,0.2)] transition-all duration-300"
              >
                Kezdjük el
              </Link>
            </div>
          </div>
          <div className="text-center">
            <p className="text-[#A8B3C7]">
              <strong className="text-white">10 napos szállítási garancia</strong> — ha lecsúszik a határidő, 20%-ot visszafizetünk.
            </p>
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section id="testimonials">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-[#EAF0FF]">
            Mit mondanak az ügyfelek
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                business={testimonial.business}
                testimonial={testimonial.testimonial}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq" className="bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-[#EAF0FF]">
            Kérdések, válaszok
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </Section>

      {/* CTA Section */}
      <Section id="contact" className="bg-gradient-to-br from-[#7C5CFF]/20 via-[#50AEDF]/20 to-[#7C5CFF]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#EAF0FF]">
            Szeretnéd, hogy 10 nap alatt élő legyen?
          </h2>
          <p className="text-lg md:text-xl text-[#A8B3C7] mb-8">
            Ha van egyértelmű ajánlatod, szállítunk egy prémium kinézetű, működő weboldalt.
          </p>
          <CTAButton href="/book">Foglalj időpontot</CTAButton>
        </div>
      </Section>
    </>
  );
}
