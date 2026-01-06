import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";
import TestimonialCard from "@/components/TestimonialCard";
import FinAIHero from "@/components/FinAIHero";
import ProcessTimeline from "@/components/ProcessTimeline";
import HomePageStructuredData from "@/components/HomePageStructuredData";
import DarkVeil from "@/components/DarkVeil.jsx";
import "@/components/DarkVeil.css";

export const metadata: Metadata = {
  title: "Nexen Weboldal - Weboldal Készítés 10 Nap Alatt | Prémium Weboldalak",
  description: "Nexen Sites - Prémium weboldal készítés 10 nap alatt. Modern, gyors, mobilbarát weboldalak vállalkozásoknak. Weboldal készítés Budapest, weboldal fejlesztés. Nexen weboldal szolgáltatások.",
  keywords: [
    "nexen",
    "nexen weboldal",
    "weboldal készítés",
    "weboldalak készítése",
    "weboldal fejlesztés",
    "weboldal készítés budapest",
    "weboldal készítés 10 nap",
    "prémium weboldal",
    "modern weboldal",
    "mobilbarát weboldal",
    "nexen sites",
  ],
  openGraph: {
    title: "Nexen Weboldal - Weboldal Készítés 10 Nap Alatt",
    description: "Prémium weboldal készítés 10 nap alatt. Modern, gyors, mobilbarát weboldalak vállalkozásoknak.",
    type: "website",
    url: "https://nexensites.hu",
    siteName: "Nexen Sites",
    images: [
      {
        url: "https://nexensites.hu/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nexen Sites - Weboldal Készítés",
      },
    ],
    locale: "hu_HU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexen Weboldal - Weboldal Készítés 10 Nap Alatt",
    description: "Prémium weboldal készítés 10 nap alatt. Modern, gyors, mobilbarát weboldalak.",
  },
  alternates: {
    canonical: "https://nexensites.hu",
  },
};

export default function HomePage() {
  return (
    <>
      <HomePageStructuredData />
      {/* Hero Section - Fin AI Style */}
      <section className="min-h-screen flex items-center justify-center relative pt-24 pb-16 px-4 overflow-hidden">
        <div className="fixed inset-0 w-full h-full" style={{ zIndex: 0, pointerEvents: 'none' }}>
          <DarkVeil
            hueShift={0}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={0.5}
            scanlineFrequency={0}
            warpAmount={0}
            resolutionScale={1}
          />
        </div>
        <FinAIHero />
        
        <div className="max-w-7xl mx-auto relative z-10" style={{ pointerEvents: 'auto' }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left side info - Hidden on mobile, visible on lg+ */}
            <div className="hidden lg:block lg:col-span-3 relative pr-4" style={{ minHeight: '600px' }}>
              <div className="absolute flex items-center justify-center w-40 h-40 animate-float" style={{ top: '8%', right: '12%', animationDelay: '0s' }}>
                <svg className="absolute inset-0 w-full h-full text-[#50AEDF] drop-shadow-[0_0_15px_rgba(80,174,223,0.6)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <h3 className="relative z-10 text-sm font-bold text-white text-center whitespace-nowrap drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">Mobilbarát</h3>
              </div>
              <div className="absolute flex items-center justify-center w-40 h-40 animate-float" style={{ top: '52%', right: '-5%', animationDelay: '1.5s' }}>
                <svg className="absolute inset-0 w-full h-full text-[#7C5CFF] drop-shadow-[0_0_15px_rgba(124,92,255,0.6)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="relative z-10 text-sm font-bold text-white text-center whitespace-nowrap drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">Gyors betöltés</h3>
              </div>
            </div>

            {/* Center content */}
            <div className="lg:col-span-6 text-center">
            {/* Large Typography - Fin AI Style */}
            <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-[0.95] tracking-tight">
              <div className="mb-6 animate-fade-in flex justify-center">
                <div className="inline-flex items-center justify-center px-5 py-3 bg-gradient-to-r from-[#ED5096]/30 via-[#ED5096]/40 to-[#ED5096]/30 border-2 border-[#ED5096] rounded-xl shadow-[0_0_30px_rgba(237,80,150,0.6)]">
                  <span className="text-lg md:text-xl font-bold text-white tracking-wide">3</span>
                  <span className="text-lg md:text-xl font-bold text-white mx-1.5 tracking-wide">ügyfél</span>
                  <span className="text-lg md:text-xl font-bold text-white tracking-wide">havonta</span>
                </div>
              </div>
              <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-fade-in">
                Prémium
              </span>
              <span className="block bg-gradient-to-r from-[#7C5CFF] via-[#50AEDF] to-[#7C5CFF] bg-clip-text text-transparent mt-2 animate-fade-in-delay">
                Weboldal
              </span>
              <span className="block text-white mt-2 animate-fade-in-delay-2">
                10 nap alatt
              </span>
            </h1>

            {/* Subheadline - Minimal */}
            <p className="hero-subtitle text-lg md:text-xl lg:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-delay-2">
              Nexen weboldal készítés - Modern weboldal, ami működik. 10 nap, fix határidő, prémium eredmény. Weboldalak készítése vállalkozásoknak.
            </p>

            {/* CTAs - Minimal */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-delay-2">
              <CTAButton href="/book" variant="primary" className="text-base px-10 py-5 min-w-[200px]">
                Időpont Foglalása
              </CTAButton>
              <CTAButton href="#pricing" variant="secondary" className="text-base px-10 py-5 min-w-[200px]">
                Árak Megtekintése
              </CTAButton>
            </div>

            {/* Trust badges - Enhanced style with animations */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-20">
              <div className="text-center px-8 py-6 backdrop-blur-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl shadow-lg hover:border-[#7C5CFF]/50 hover:shadow-[0_0_30px_rgba(124,92,255,0.3)] hover:scale-105 transition-all duration-500 animate-float-up group">
                <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-[#7C5CFF] transition-colors duration-500 group-hover:scale-110 transition-transform duration-300">10</div>
                <div className="text-sm md:text-base text-[#EAF0FF] font-semibold">Napos szállítás</div>
              </div>
              <div className="text-center px-8 py-6 backdrop-blur-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl shadow-lg hover:border-[#50AEDF]/50 hover:shadow-[0_0_30px_rgba(80,174,223,0.3)] hover:scale-105 transition-all duration-500 animate-float-up-delay-1 group">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#7C5CFF] to-[#50AEDF] bg-clip-text text-transparent mb-2 group-hover:from-[#50AEDF] group-hover:to-[#7C5CFF] transition-all duration-500 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-sm md:text-base text-[#EAF0FF] font-semibold">Prémium minőség</div>
              </div>
            </div>
            </div>

            {/* Right side info - Hidden on mobile, visible on lg+ */}
            <div className="hidden lg:block lg:col-span-3 relative pl-4" style={{ minHeight: '600px' }}>
              <div className="absolute flex items-center justify-center w-40 h-40 animate-float" style={{ top: '10%', left: '12%', animationDelay: '0.75s' }}>
                <svg className="absolute inset-0 w-full h-full text-[#7C5CFF] drop-shadow-[0_0_15px_rgba(124,92,255,0.6)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h3 className="relative z-10 text-sm font-bold text-white text-center whitespace-nowrap drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">SEO kész</h3>
              </div>
              <div className="absolute flex items-center justify-center w-40 h-40 animate-float" style={{ top: '55%', left: '-5%', animationDelay: '2.25s' }}>
                <svg className="absolute inset-0 w-full h-full text-[#50AEDF] drop-shadow-[0_0_15px_rgba(80,174,223,0.6)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="relative z-10 text-sm font-bold text-white text-center whitespace-nowrap drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">24/7 támogatás</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#EAF0FF]">
              Mit veszítesz el rossz weboldallal?
            </h2>
            <p className="text-lg text-[#A8B3C7] max-w-2xl mx-auto">
              Ezek a problémák közvetlenül a bevételbe és az üzleti eredményekbe fájnak
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 - Lost Revenue */}
            <div className="group relative bg-[#0F1620]/90 backdrop-blur-xl border-2 border-[rgba(237,80,150,0.3)] rounded-3xl p-8 md:p-10 transition-all duration-500 hover:border-[#ED5096] shadow-[0_0_25px_rgba(237,80,150,0.25)] hover:shadow-[0_0_45px_rgba(237,80,150,0.5)] hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ED5096]/10 via-transparent to-transparent rounded-3xl opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#ED5096] to-[#ED5096]/60 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-[#ED5096]/30">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-5 leading-tight">
                  Elveszett bevétel
                </h2>
                <p className="text-[#A8B3C7] leading-relaxed text-base">
                  A látogatók megjelennek a weboldalon, de nem válthatók leadekké.
                </p>
              </div>
            </div>

            {/* Card 2 - Wasted Ad Spend */}
            <div className="group relative bg-[#0F1620]/90 backdrop-blur-xl border-2 border-[rgba(237,80,150,0.3)] rounded-3xl p-8 md:p-10 transition-all duration-500 hover:border-[#ED5096] shadow-[0_0_25px_rgba(237,80,150,0.25)] hover:shadow-[0_0_45px_rgba(237,80,150,0.5)] hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ED5096]/10 via-transparent to-transparent rounded-3xl opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#ED5096] to-[#ED5096]/60 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-[#ED5096]/30">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-5 leading-tight">
                  Elpazarolt hirdetési költség
                </h2>
                <p className="text-[#A8B3C7] leading-relaxed text-base">
                  A hirdetések pénzt hoznak, de a weboldal nem zárja le a forgalmat.
                </p>
              </div>
            </div>

            {/* Card 3 - Low Trust & Cheap Perception */}
            <div className="group relative bg-[#0F1620]/90 backdrop-blur-xl border-2 border-[rgba(237,80,150,0.3)] rounded-3xl p-8 md:p-10 transition-all duration-500 hover:border-[#ED5096] shadow-[0_0_25px_rgba(237,80,150,0.25)] hover:shadow-[0_0_45px_rgba(237,80,150,0.5)] hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ED5096]/10 via-transparent to-transparent rounded-3xl opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#ED5096] to-[#ED5096]/60 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-[#ED5096]/30">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-5 leading-tight">
                  Alacsony megbízhatóság
                </h2>
                <p className="text-[#A8B3C7] leading-relaxed text-base">
                  A weboldal átlagos vagy elavult, alacsony minőségű leadeket és árfigyelőket vonz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Solutions */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#EAF0FF]">
              A megoldás
            </h2>
            <p className="text-lg text-[#A8B3C7] max-w-2xl mx-auto">
              Így oldjuk meg ezeket a problémákat
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Solution 1 */}
            <div className="group relative bg-gradient-to-br from-[#7C5CFF]/20 via-[#50AEDF]/20 to-[#7C5CFF]/20 backdrop-blur-xl border-2 border-[rgba(124,92,255,0.4)] rounded-3xl p-8 md:p-10 transition-all duration-500 hover:border-[#7C5CFF] hover:shadow-[0_0_45px_rgba(124,92,255,0.5)] hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C5CFF]/10 via-transparent to-transparent rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#7C5CFF] to-[#50AEDF] rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-[#7C5CFF]/40">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-5 leading-tight">
                  Konverziós struktúra
                </h2>
                <p className="text-white font-semibold leading-relaxed text-base">
                  Egyértelmű cselekvésre vezeti a látogatókat, így több leadet hoz.
                </p>
              </div>
            </div>

            {/* Solution 2 */}
            <div className="group relative bg-gradient-to-br from-[#7C5CFF]/20 via-[#50AEDF]/20 to-[#7C5CFF]/20 backdrop-blur-xl border-2 border-[rgba(124,92,255,0.4)] rounded-3xl p-8 md:p-10 transition-all duration-500 hover:border-[#7C5CFF] hover:shadow-[0_0_45px_rgba(124,92,255,0.5)] hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C5CFF]/10 via-transparent to-transparent rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#7C5CFF] to-[#50AEDF] rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-[#7C5CFF]/40">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-5 leading-tight">
                  Landing page logika
                </h2>
                <p className="text-white font-semibold leading-relaxed text-base">
                  Kifejezetten a fizetett forgalom támogatására épül, maximális ROI-val.
                </p>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="group relative bg-gradient-to-br from-[#7C5CFF]/20 via-[#50AEDF]/20 to-[#7C5CFF]/20 backdrop-blur-xl border-2 border-[rgba(124,92,255,0.4)] rounded-3xl p-8 md:p-10 transition-all duration-500 hover:border-[#7C5CFF] hover:shadow-[0_0_45px_rgba(124,92,255,0.5)] hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C5CFF]/10 via-transparent to-transparent rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#7C5CFF] to-[#50AEDF] rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-[#7C5CFF]/40">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-5 leading-tight">
                  Prémium design
                </h2>
                <p className="text-white font-semibold leading-relaxed text-base">
                  Kiszűri a nem minősített érdeklődőket, magasabb minőségű leadeket hoz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process Timeline */}
      <Section id="process">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#EAF0FF]">
              10 napos folyamat
            </h2>
            <p className="text-lg text-[#A8B3C7]">
              Tiszta lépések, átlátható kommunikáció, időben szállítás
            </p>
          </div>

          <ProcessTimeline />
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#EAF0FF]">
            Árazás
          </h2>
          <p className="text-lg text-[#A8B3C7]">
            Átlátható árazás, nincsenek meglepetések
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter */}
          <div className="group bg-[#0F1620] border border-[#50AEDF]/30 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#50AEDF] hover:shadow-[0_0_30px_rgba(80,174,223,0.3)]">
            <h3 className="text-xl font-bold mb-2 text-[#EAF0FF] group-hover:text-[#50AEDF] transition-colors">Kezdő</h3>
            <div className="text-3xl font-bold mb-4 text-[#EAF0FF] group-hover:text-[#50AEDF] transition-colors">
              299 000 Ft
            </div>
            <p className="text-[#A8B3C7] mb-6 text-sm">1 oldalas landing</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-[#50AEDF] font-bold">✓</span>
                <span className="text-[#A8B3C7] text-sm">Egy oldalas design</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#50AEDF] font-bold">✓</span>
                <span className="text-[#A8B3C7] text-sm">Mobilbarát</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#50AEDF] font-bold">✓</span>
                <span className="text-[#A8B3C7] text-sm">Kapcsolati űrlap</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#50AEDF] font-bold">✓</span>
                <span className="text-[#A8B3C7] text-sm">10 napos szállítás</span>
              </li>
            </ul>
            <CTAButton href="/book" variant="secondary" className="w-full text-sm">
              Kezdjük el
            </CTAButton>
          </div>

          {/* Standard - Featured */}
          <div className="bg-[#0F1620] border-2 border-[#7C5CFF] rounded-3xl p-10 relative hover:shadow-[0_0_30px_rgba(124,92,255,0.3)] transition-all duration-300 hover:-translate-y-1 md:scale-105 md:-mt-6 md:mb-6">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#7C5CFF] text-white text-xs font-bold px-4 py-1 rounded-full">
              Legnépszerűbb
            </div>
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold mb-3 text-[#EAF0FF]">Standard</h3>
              <div className="text-5xl font-bold mb-3 text-[#EAF0FF]">
                499 000 Ft
              </div>
              <p className="text-[#A8B3C7] text-sm">3-5 oldal</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-[#7C5CFF] font-bold">✓</span>
                <span className="text-[#A8B3C7] text-sm">3-5 oldalas design</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7C5CFF] font-bold">✓</span>
                <span className="text-[#A8B3C7] text-sm">Fejlett SEO</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7C5CFF] font-bold">✓</span>
                <span className="text-[#A8B3C7] text-sm">Egyedi animációk</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7C5CFF] font-bold">✓</span>
                <span className="text-[#A8B3C7] text-sm">Tartalomkezelés</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7C5CFF] font-bold">✓</span>
                <span className="text-[#A8B3C7] text-sm">Analytics beállítás</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7C5CFF] font-bold">✓</span>
                <span className="text-[#A8B3C7] text-sm">10 napos szállítás</span>
              </li>
            </ul>
            
            <CTAButton href="/book" variant="primary" className="w-full">
              Időpont Foglalása
            </CTAButton>
          </div>

          {/* Pro */}
          <div className="group relative bg-[#0F1620] border border-[rgba(255,215,0,0.3)] rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#FFD700] hover:shadow-[0_0_50px_rgba(255,215,0,0.5),0_0_100px_rgba(255,215,0,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 via-[#FFA500]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent group-hover:from-[#FFD700] group-hover:to-[#FFA500] transition-all">Pro</h3>
              <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent group-hover:from-[#FFD700] group-hover:to-[#FFA500] transition-all">
                799 000 Ft
              </div>
              <p className="text-[#A8B3C7] mb-6 text-sm">Teljes weboldal + extrák</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#FFD700] font-bold group-hover:text-[#FFA500] transition-colors">✓</span>
                  <span className="text-[#A8B3C7] text-sm">7-10 oldalas design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFD700] font-bold group-hover:text-[#FFA500] transition-colors">✓</span>
                  <span className="text-[#A8B3C7] text-sm">Teljes SEO optimalizálás</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFD700] font-bold group-hover:text-[#FFA500] transition-colors">✓</span>
                  <span className="text-[#A8B3C7] text-sm">Egyedi integrációk</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFD700] font-bold group-hover:text-[#FFA500] transition-colors">✓</span>
                  <span className="text-[#A8B3C7] text-sm">Prémium animációk</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFD700] font-bold group-hover:text-[#FFA500] transition-colors">✓</span>
                  <span className="text-[#A8B3C7] text-sm">Folyamatos támogatás</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFD700] font-bold group-hover:text-[#FFA500] transition-colors">✓</span>
                  <span className="text-[#A8B3C7] text-sm">10 napos szállítás</span>
                </li>
              </ul>
              <CTAButton href="/book" variant="secondary" className="w-full text-sm">
                Kezdjük el
              </CTAButton>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center space-y-6">
          <div className="bg-[#0F1620] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 inline-block">
            <p className="text-[#A8B3C7]">
              <strong className="text-[#EAF0FF]">10 napos szállítási garancia</strong> — ha lemaradunk a határidőről, 20%-ot visszatérítünk.
            </p>
          </div>
          <div>
            <CTAButton href="/packages" variant="secondary" className="text-base px-8 py-4">
              További csomagok megtekintése
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#EAF0FF]">
            Mit mondanak az ügyfeleink
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <TestimonialCard
            name="Kovács Péter"
            business="Tanácsadó"
            testimonial="10 nap alatt kész volt a weboldalam. Gyors, profi, és pontosan azt kaptam, amit vártam."
            result="Több érdeklődő, komolyabb megkeresések"
          />
          <TestimonialCard
            name="Nagy Anna"
            business="Fodrászszalon"
            testimonial="Végre van egy modern, mobilbarát weboldalam. A klienseim egyszerűen foglalhatnak időpontot."
            result="Növekvő online foglalások"
          />
          <TestimonialCard
            name="Horváth Tamás"
            business="E-commerce startup"
            testimonial="A landing page-ünk 10 nap alatt készült, és azonnal látható volt a különbség a konverzióban."
            result="Jobb konverziós arány"
          />
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#EAF0FF]">
              Gyakran ismételt kérdések
            </h2>
          </div>

          <FAQAccordion
            items={[
              {
                question: "Tényleg 10 nap alatt kész?",
                answer: "Igen, ha az anyagok (szöveg, logo, képek) a kickoff után 48 órán belül megérkeznek, és max. 2 kör módosításra van szükség a designban. A 10 napos határidő ezekkel a feltételekkel garantált.",
              },
              {
                question: "Mi kell tőlem hozzá?",
                answer: "Logo (vagy segítünk választani), színek, szöveg (vagy irányított kérdésekkel segítünk írni), referenciák/képek (ha van), és domain/tárhely hozzáférés (vagy ajánlunk megbízható partnereket).",
              },
              {
                question: "Van-e havi díj?",
                answer: "A weboldal elkészítése egyszeri díj. Ha szeretnéd, hogy karbantartjuk, frissítsük, biztonsági mentéseket készítsünk, akkor lehetőség van havi karbantartási csomagra is.",
              },
              {
                question: "Milyen rendszerben készül?",
                answer: "Modern, gyors technológiákat használunk (Next.js, React, TypeScript). A weboldal gyors, SEO-barát, és könnyen bővíthető lesz.",
              },
              {
                question: "Tudok később bővíteni?",
                answer: "Igen, természetesen! Bármikor kérhetsz új oldalakat, funkciókat vagy design frissítéseket. Egyeztetünk egyedi árazást.",
              },
              {
                question: "Mit tartalmaz a 10 napos csomag?",
                answer: "Design, fejlesztés, alap SEO, mobilbarát verzió, kapcsolati űrlap, és átadás dokumentációval. Extra funkciók (webshop, foglalási rendszer stb.) külön egyeztetendők.",
              },
            ]}
          />
        </div>
      </Section>

      {/* Final CTA */}
      <Section id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#EAF0FF]">
            Szeretnéd, hogy 10 nap múlva élőben legyen?
          </h2>
          <p className="text-xl text-[#A8B3C7] mb-8">
            Foglalj időpontot, beszéljük meg a projektedet és kezdjük el.
          </p>
          <div className="flex flex-col items-center gap-6">
            <CTAButton href="/book" variant="primary" className="text-lg px-8 py-4">
              Időpont Foglalása
            </CTAButton>
            
            {/* Availability Warning */}
            <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#ED5096]/20 via-[#ED5096]/30 to-[#ED5096]/20 border-2 border-[#ED5096] rounded-xl shadow-[0_0_30px_rgba(237,80,150,0.4)] animate-pulse">
              <svg className="w-6 h-6 text-[#ED5096] animate-bounce flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-white font-bold text-lg">
                Ebben a hónapban már csak <span className="text-[#ED5096] text-2xl font-black">3 hely</span> maradt!
              </span>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
