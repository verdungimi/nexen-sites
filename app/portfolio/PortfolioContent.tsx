"use client";

import dynamic from "next/dynamic";
import FinAIHero from "@/components/FinAIHero";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

// Dynamic import to prevent SSR issues with Convex
const Gallery = dynamic(() => import("@/components/Gallery"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center py-12">
      <div className="text-[#A69F91]">Betöltés...</div>
    </div>
  ),
});

// Gallery is dynamically imported with ssr: false to prevent Convex SSR issues

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function PortfolioContent() {
  const projectTypes = [
    {
      id: 1,
      title: "Vállalkozói weboldal",
      description: "Egy- vagy többoldalas bemutatkozó oldal kisvállalkozásoknak, alap SEO beállítással és mobilbarát designnal.",
      category: "Vállalkozás",
    },
    {
      id: 2,
      title: "Webshop",
      description: "Online áruház termékkatalógussal, kosárral és fizetési integrációval, amit magad is könnyen karban tudsz tartani.",
      category: "E-commerce",
    },
    {
      id: 3,
      title: "Landing page",
      description: "Egyetlen konverziós célra épített oldal egy kampányhoz vagy termékindításhoz, gyors betöltéssel.",
      category: "Landing page",
    },
    {
      id: 4,
      title: "Szakmai portfólió",
      description: "Egyedi designú bemutatkozó oldal szabadúszóknak és kreatív szakembereknek, saját munkák bemutatására.",
      category: "Portfólió",
    },
    {
      id: 5,
      title: "Szolgáltatói weboldal",
      description: "Foglalási vagy időpontkérési funkcióval kiegészített oldal szolgáltató vállalkozásoknak.",
      category: "Szolgáltatás",
    },
    {
      id: 6,
      title: "Egyedi webalkalmazás",
      description: "Testreszabott funkciókkal rendelkező weboldal, amikor a sablonmegoldások már nem elegendőek.",
      category: "Egyedi fejlesztés",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center relative pt-32 pb-12 px-4 overflow-hidden">
        <FinAIHero />
        
        <div className="max-w-6xl mx-auto relative z-10" style={{ pointerEvents: 'auto' }}>
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="block text-[#F3EFE6]">
                Amit építünk
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              Weboldal típusok, amikkel nap mint nap dolgozunk – mindegyik egyedi tervezéssel, 3 nap alatt.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <Section id="portfolio-grid">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFE6] mb-4">
              Weboldal típusok
            </h2>
            <p className="text-lg text-[#A69F91] max-w-2xl mx-auto">
              Bármelyik illik a vállalkozásodhoz, egyedi tervezéssel készítjük el
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projectTypes.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className="group"
              >
                <Card className="border-gray-800 hover:border-[#2DD4BF]/50 transition-all duration-300 overflow-hidden h-full flex flex-col">
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <span className="inline-block w-fit mb-4 px-3 py-1 bg-[#2DD4BF]/10 border border-[#2DD4BF]/30 rounded-md text-xs text-[#2DD4BF] font-semibold uppercase tracking-wide">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#F3EFE6] mb-2 group-hover:text-[#2DD4BF] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#A69F91] flex-grow">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Dynamic Gallery Section */}
      <Section id="gallery" className="bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#F3EFE6] mb-4">
              Galéria
            </h2>
            <p className="text-lg text-[#A69F91] max-w-2xl mx-auto">
              Elkészült munkáink képei, ahogy feltöltjük őket
            </p>
          </motion.div>
          <Gallery />
        </div>
      </Section>

      {/* CTA Section */}
      <Section id="cta" className="bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#F3EFE6]">
            Készen állsz a saját weboldaladra?
          </h2>
          <p className="text-lg text-[#A69F91] mb-8 max-w-2xl mx-auto">
            Foglalj időpontot még ma, és 3 nap múlva már élő lesz a prémium weboldalad.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
