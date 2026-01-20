"use client";

import { useState } from "react";
import FinAIHero from "@/components/FinAIHero";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
  {
    question: "Mennyi idő alatt készül el a weboldal?",
    answer: "A Nexen Sites weboldal készítés 10 nap alatt készül el. Fix határidővel dolgozunk, garantálva a minőséget.",
  },
  {
    question: "Mi történik az átadás után?",
    answer: "30 napig ingyenes bugfix támogatást nyújtunk. A folyamatos karbantartás és frissítések opcionális havi szolgáltatásként elérhetőek.",
  },
];

export default function GyikPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center relative pt-24 pb-16 px-4 overflow-hidden">
        <FinAIHero />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center" style={{ pointerEvents: 'auto' }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Gyakran Ismételt Kérdések
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Válaszok a leggyakrabban feltett kérdésekre a weboldal készítésről, folyamatról és szolgáltatásainkról.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <Section id="faq-content">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <FAQAccordion items={faqItems} />
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section id="cta">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#EAF0FF]">
              Nem találtad a választ a kérdésedre?
            </h2>
            <p className="text-lg text-[#A8B3C7] mb-8 max-w-2xl mx-auto">
              Lépj velünk kapcsolatba, és szívesen válaszolunk minden további kérdésedre.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CTAButton href="/kapcsolat" variant="primary" className="text-base px-10 py-5">
                Kapcsolatfelvétel
              </CTAButton>
              <CTAButton href="/book" variant="secondary" className="text-base px-10 py-5">
                Időpont Foglalása
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
