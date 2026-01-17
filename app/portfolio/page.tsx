import type { Metadata } from "next";
import FinAIHero from "@/components/FinAIHero";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Portfólió | Nexen Sites - Weboldal Készítés",
  description: "Nézd meg az általunk készített weboldalakat. Prémium minőség, modern design, 10 napos szállítás.",
  keywords: [
    "nexen",
    "nexen weboldal",
    "portfólió",
    "weboldal példák",
    "nexen sites",
  ],
  openGraph: {
    title: "Portfólió | Nexen Sites - Weboldal Készítés",
    description: "Nézd meg az általunk készített weboldalakat. Prémium minőség, modern design, 10 napos szállítás.",
    type: "website",
    url: "https://nexensites.hu/portfolio",
  },
  alternates: {
    canonical: "https://nexensites.hu/portfolio",
  },
};

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

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "Modern Vállalkozás Weboldal",
      description: "Professzionális weboldal egy kisvállalkozás számára, modernebb design-nal és teljes SEO optimalizálással.",
      category: "Vállalkozás",
      image: "/api/placeholder/600/400",
    },
    {
      id: 2,
      title: "E-commerce Megoldás",
      description: "Teljes körű online áruház, fizetési integrációval és tartalomkezelő rendszerrel.",
      category: "E-commerce",
      image: "/api/placeholder/600/400",
    },
    {
      id: 3,
      title: "Landing Page Projekt",
      description: "Konverzióra optimalizált landing page egy marketing kampányhoz, prémium animációkkal.",
      category: "Landing Page",
      image: "/api/placeholder/600/400",
    },
    {
      id: 4,
      title: "Szakmai Portfólió",
      description: "Egyedi design-ú portfólió weboldal kreatív szakemberek számára, interaktív elemekkel.",
      category: "Portfólió",
      image: "/api/placeholder/600/400",
    },
    {
      id: 5,
      title: "Szolgáltatás Weboldal",
      description: "Modern, reszponzív weboldal szolgáltató vállalkozás számára, teljes tartalomkezelő rendszerrel.",
      category: "Szolgáltatás",
      image: "/api/placeholder/600/400",
    },
    {
      id: 6,
      title: "Közösségi Platform",
      description: "Interaktív közösségi platform egyedi funkciókkal és modern felhasználói élménnyel.",
      category: "Platform",
      image: "/api/placeholder/600/400",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-24 pb-16 px-4 overflow-hidden">
        <FinAIHero />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center" style={{ pointerEvents: 'auto' }}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Portfólió
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Nézd meg az általunk készített weboldalakat – prémium minőség, modern design
          </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#EAF0FF] mb-4">
              Munkáink
            </h2>
            <p className="text-lg text-[#A8B3C7] max-w-2xl mx-auto">
              Minden projekt egyedi, modern és eredményorientált megoldás
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className="group"
              >
                <Card className="border-gray-800 hover:border-[#50AEDF]/50 transition-all duration-300 overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 bg-gradient-to-br from-[#50AEDF]/20 to-[#7C5CFF]/20 overflow-hidden">
                    <div className="absolute inset-0 bg-gray-900/50 group-hover:bg-gray-900/30 transition-colors duration-300 flex items-center justify-center">
                      <div className="text-gray-600 text-sm">Projekt képe</div>
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-[#50AEDF]/20 border border-[#50AEDF]/40 rounded-full text-xs text-[#50AEDF] font-semibold">
                      {project.category}
                    </div>
                  </div>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-[#EAF0FF] mb-2 group-hover:text-[#50AEDF] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#A8B3C7] mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-[#50AEDF] font-semibold">
                      <span>Megtekintés</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section id="cta" className="bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#EAF0FF]">
            Készen állsz a saját weboldaladra?
          </h2>
          <p className="text-lg text-[#A8B3C7] mb-8 max-w-2xl mx-auto">
            Foglalj időpontot még ma, és 10 nap múlva már élő lesz a prémium weboldalad.
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
