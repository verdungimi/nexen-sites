"use client";

import FinAIHero from "@/components/FinAIHero";
import CTAButton from "@/components/CTAButton";

export default function ThankYouPage() {
  return (
    <section className="min-h-screen relative pt-24 pb-16 px-4 overflow-hidden">
      <FinAIHero />
      <div className="max-w-2xl mx-auto relative z-10 text-center" style={{ pointerEvents: 'auto' }}>
        <div className="bg-[#17151C]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl shadow-lg p-8 md:p-12">
          <div className="mb-6">
            <svg
              className="w-16 h-16 text-[#F2A93B] mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Köszönjük az érdeklődésed!
          </h1>
          <p className="text-lg text-[#A69F91] mb-6">
            Megkaptuk az adataidat. Hamarosan felvesszük veled a kapcsolatot a megadott elérhetőségeken, hogy megbeszéljük a projekt részleteit.
          </p>
          <p className="text-base text-[#A69F91] mb-8">
            Ha sürgős a kérdésed, írj nekünk közvetlenül:{" "}
            <a href="mailto:verdung.imi@gmail.com" className="text-[#F2A93B] hover:text-[#2DD4BF] underline font-medium transition-colors">
              verdung.imi@gmail.com
            </a>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/" variant="primary">
              Vissza a kezdőlapra
            </CTAButton>
            <CTAButton href="/book" variant="secondary">
              Új kérés küldése
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
