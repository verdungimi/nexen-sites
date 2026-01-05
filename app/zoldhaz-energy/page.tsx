import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import ZoldhazHero from "@/components/ZoldhazHero";

export const metadata: Metadata = {
  title: "Zöldház Energy Kft. | Víz-, Gáz-, Fűtés- és Légkondicionáló Szerelés",
  description: "Professzionális vízvezeték-, gáz-, fűtés- és légkondicionáló szerelési szolgáltatások Medgyesegyházán és környékén. Gyors, megbízható, szakértői munkavégzés.",
  openGraph: {
    title: "Zöldház Energy Kft. | Víz-, Gáz-, Fűtés- és Légkondicionáló Szerelés",
    description: "Professzionális vízvezeték-, gáz-, fűtés- és légkondicionáló szerelési szolgáltatások.",
    type: "website",
  },
};

export default function ZoldhazEnergyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-24 pb-16 px-4 overflow-hidden">
        <ZoldhazHero />
        
        <div className="max-w-7xl mx-auto relative z-10" style={{ pointerEvents: 'auto' }}>
          <div className="text-center">
            {/* Logo placeholder - replace with actual logo */}
            <div className="mb-8 animate-fade-in">
              <div className="inline-block p-6 bg-[rgba(67,89,54,0.2)] border-2 border-[#86FD22] rounded-2xl backdrop-blur-xl">
                <h1 className="text-4xl md:text-6xl font-black text-white">
                  <span className="text-[#86FD22]">Zöld</span>
                  <span className="text-[#435936]">ház</span>
                  <span className="text-white"> Energy</span>
                </h1>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-[0.95] tracking-tight">
              <span className="block bg-gradient-to-r from-white via-[#86FD22] to-white bg-clip-text text-transparent animate-fade-in">
                Professzionális
              </span>
              <span className="block bg-gradient-to-r from-[#86FD22] via-[#435936] to-[#86FD22] bg-clip-text text-transparent mt-2 animate-fade-in-delay">
                Szerelési Szolgáltatások
              </span>
              <span className="block text-white mt-2 animate-fade-in-delay-2">
                Medgyesegyházán és környékén
              </span>
            </h1>

            {/* Subheadline */}
            <p className="hero-subtitle text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-delay-2">
              Vízvezeték-, gáz-, fűtés- és légkondicionáló szerelés egy helyen. Gyors, megbízható, szakértői munkavégzés.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-delay-2">
              <a 
                href="#kapcsolat" 
                className="px-10 py-5 bg-gradient-to-r from-[#435936] to-[#86FD22] text-white rounded-xl hover:shadow-[0_0_30px_rgba(134,253,34,0.7)] hover:scale-105 transition-all duration-300 font-semibold text-base min-w-[200px] text-center"
              >
                Ajánlatkérés
              </a>
              <a 
                href="#szolgaltatasok" 
                className="px-10 py-5 bg-[rgba(67,89,54,0.3)] border-2 border-[#86FD22] text-white rounded-xl hover:bg-[rgba(67,89,54,0.5)] hover:scale-105 transition-all duration-300 font-semibold text-base min-w-[200px] text-center"
              >
                Szolgáltatások
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-20">
              <div className="text-center px-8 py-6 backdrop-blur-2xl bg-[rgba(67,89,54,0.2)] border border-[#86FD22]/30 rounded-2xl shadow-lg hover:border-[#86FD22] hover:shadow-[0_0_30px_rgba(134,253,34,0.3)] hover:scale-105 transition-all duration-500 animate-float-up group">
                <div className="text-4xl md:text-5xl font-black text-[#86FD22] mb-2 group-hover:scale-110 transition-transform duration-300">2023</div>
                <div className="text-sm md:text-base text-gray-300 font-semibold">Alapítás éve</div>
              </div>
              <div className="text-center px-8 py-6 backdrop-blur-2xl bg-[rgba(67,89,54,0.2)] border border-[#86FD22]/30 rounded-2xl shadow-lg hover:border-[#86FD22] hover:shadow-[0_0_30px_rgba(134,253,34,0.3)] hover:scale-105 transition-all duration-500 animate-float-up-delay-1 group">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#86FD22] to-[#435936] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-sm md:text-base text-gray-300 font-semibold">Elégedett ügyfél</div>
              </div>
              <div className="text-center px-8 py-6 backdrop-blur-2xl bg-[rgba(67,89,54,0.2)] border border-[#86FD22]/30 rounded-2xl shadow-lg hover:border-[#86FD22] hover:shadow-[0_0_30px_rgba(134,253,34,0.3)] hover:scale-105 transition-all duration-500 animate-float-up-delay-2 group">
                <div className="text-4xl md:text-5xl font-black text-[#86FD22] mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-sm md:text-base text-gray-300 font-semibold">Rendelkezésre állás</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Rólunk
              </h2>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                A <strong className="text-[#86FD22]">Zöldház Energy Kft.</strong> 2023-ban alakult, és azóta is aktívan működik Medgyesegyházán és környékén. Célunk, hogy professzionális, megbízható szerelési szolgáltatásokat nyújtsunk ügyfeleinknek.
              </p>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                Vállalkozásunk széleskörű szolgáltatásokat kínál: vízvezeték-szereléstől a gázszerelésen át a fűtésszerelésig és légkondicionáló berendezések telepítéséig és karbantartásáig.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Tapasztalt csapatunk garantálja, hogy minden munkát precízen, határidőre és a legjobb minőségben végezzünk el.
              </p>
            </div>
            <div className="relative">
              {/* Placeholder for company image - replace with actual image */}
              <div className="aspect-video bg-gradient-to-br from-[#435936] to-[#86FD22] rounded-2xl flex items-center justify-center border-2 border-[#86FD22]/30">
                <p className="text-white text-xl font-semibold">Cég képe</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="szolgaltatasok">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Szolgáltatásaink
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Átfogó szerelési megoldások otthonodhoz és vállalkozásodhoz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Service 1 - Vízvezeték-szerelés */}
            <div className="group relative bg-[#0F1620]/90 backdrop-blur-xl border-2 border-[rgba(67,89,54,0.5)] rounded-3xl p-8 transition-all duration-500 hover:border-[#86FD22] shadow-[0_0_25px_rgba(67,89,54,0.25)] hover:shadow-[0_0_45px_rgba(134,253,34,0.5)] hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#435936]/10 via-transparent to-transparent rounded-3xl opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#435936] to-[#86FD22] rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-[#86FD22]/30">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-black text-white mb-4 leading-tight">
                  Vízvezeték-szerelés
                </h3>
                <p className="text-gray-300 leading-relaxed text-base">
                  Teljes körű vízvezeték-szerelési munkák, javítások, karbantartás és sürgősségi beavatkozások.
                </p>
              </div>
            </div>

            {/* Service 2 - Gázszerelés */}
            <div className="group relative bg-[#0F1620]/90 backdrop-blur-xl border-2 border-[rgba(67,89,54,0.5)] rounded-3xl p-8 transition-all duration-500 hover:border-[#86FD22] shadow-[0_0_25px_rgba(67,89,54,0.25)] hover:shadow-[0_0_45px_rgba(134,253,34,0.5)] hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#435936]/10 via-transparent to-transparent rounded-3xl opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#435936] to-[#86FD22] rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-[#86FD22]/30">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-black text-white mb-4 leading-tight">
                  Gázszerelés
                </h3>
                <p className="text-gray-300 leading-relaxed text-base">
                  Biztonságos gázszerelési munkák, kazánok, gázkészülékek telepítése és karbantartása.
                </p>
              </div>
            </div>

            {/* Service 3 - Fűtésszerelés */}
            <div className="group relative bg-[#0F1620]/90 backdrop-blur-xl border-2 border-[rgba(67,89,54,0.5)] rounded-3xl p-8 transition-all duration-500 hover:border-[#86FD22] shadow-[0_0_25px_rgba(67,89,54,0.25)] hover:shadow-[0_0_45px_rgba(134,253,34,0.5)] hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#435936]/10 via-transparent to-transparent rounded-3xl opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#435936] to-[#86FD22] rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-[#86FD22]/30">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-black text-white mb-4 leading-tight">
                  Fűtésszerelés
                </h3>
                <p className="text-gray-300 leading-relaxed text-base">
                  Fűtési rendszerek telepítése, karbantartása, javítása és modernizálása.
                </p>
              </div>
            </div>

            {/* Service 4 - Légkondicionáló */}
            <div className="group relative bg-[#0F1620]/90 backdrop-blur-xl border-2 border-[rgba(67,89,54,0.5)] rounded-3xl p-8 transition-all duration-500 hover:border-[#86FD22] shadow-[0_0_25px_rgba(67,89,54,0.25)] hover:shadow-[0_0_45px_rgba(134,253,34,0.5)] hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#435936]/10 via-transparent to-transparent rounded-3xl opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#435936] to-[#86FD22] rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-[#86FD22]/30">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-black text-white mb-4 leading-tight">
                  Légkondicionáló
                </h3>
                <p className="text-gray-300 leading-relaxed text-base">
                  Légkondicionáló berendezések telepítése, karbantartása és javítása.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Miért válasszon minket?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Professzionális szolgáltatás, megbízhatóság és ügyfélközpontúság
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-[#0F1620]/50 border border-[#435936]/50 rounded-2xl hover:border-[#86FD22] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#435936] to-[#86FD22] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Szakértői munka</h3>
              <p className="text-gray-300">Tapasztalt szakembereink garantálják a minőségi munkavégzést.</p>
            </div>

            <div className="text-center p-8 bg-[#0F1620]/50 border border-[#435936]/50 rounded-2xl hover:border-[#86FD22] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#435936] to-[#86FD22] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Gyors reagálás</h3>
              <p className="text-gray-300">Sürgősségi esetekben is gyorsan elérhetőek vagyunk.</p>
            </div>

            <div className="text-center p-8 bg-[#0F1620]/50 border border-[#435936]/50 rounded-2xl hover:border-[#86FD22] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#435936] to-[#86FD22] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Versenyképes árak</h3>
              <p className="text-gray-300">Átlátható árazás, nincsenek rejtett költségek.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="kapcsolat">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Kapcsolat
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Várjuk megkeresését! Szívesen válaszolunk kérdéseire és készítünk ingyenes ajánlatot.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="p-6 bg-[#0F1620]/50 border border-[#435936]/50 rounded-2xl hover:border-[#86FD22] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#435936] to-[#86FD22] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Telefon</h3>
                    <a href="tel:+36307312493" className="text-[#86FD22] hover:text-[#86FD22]/80 transition-colors text-lg">
                      +36 30 731 2493
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[#0F1620]/50 border border-[#435936]/50 rounded-2xl hover:border-[#86FD22] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#435936] to-[#86FD22] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                    <a href="mailto:zoldhazenergykft@gmail.com" className="text-[#86FD22] hover:text-[#86FD22]/80 transition-colors text-lg break-all">
                      zoldhazenergykft@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[#0F1620]/50 border border-[#435936]/50 rounded-2xl hover:border-[#86FD22] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#435936] to-[#86FD22] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Székhely</h3>
                    <p className="text-gray-300 text-lg">
                      5666 Medgyesegyháza<br />
                      Fáy András utca 31.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[#0F1620]/50 border border-[#435936]/50 rounded-2xl hover:border-[#86FD22] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#435936] to-[#86FD22] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Facebook</h3>
                    <a 
                      href="https://www.facebook.com/zoldhazenergy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#86FD22] hover:text-[#86FD22]/80 transition-colors text-lg"
                    >
                      www.facebook.com/zoldhazenergy
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 bg-[#0F1620]/50 border border-[#435936]/50 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Küldjön üzenetet</h3>
              <form action="/api/contact" method="POST" className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Név
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-[#0F1620] border border-[#435936] rounded-lg text-white focus:outline-none focus:border-[#86FD22] transition-colors"
                    placeholder="Teljes név"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-[#0F1620] border border-[#435936] rounded-lg text-white focus:outline-none focus:border-[#86FD22] transition-colors"
                    placeholder="email@pelda.hu"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-[#0F1620] border border-[#435936] rounded-lg text-white focus:outline-none focus:border-[#86FD22] transition-colors"
                    placeholder="+36 30 123 4567"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Üzenet
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#0F1620] border border-[#435936] rounded-lg text-white focus:outline-none focus:border-[#86FD22] transition-colors resize-none"
                    placeholder="Írja le, miben segíthetünk..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-[#435936] to-[#86FD22] text-white rounded-lg hover:shadow-[0_0_30px_rgba(134,253,34,0.7)] hover:scale-105 transition-all duration-300 font-semibold text-lg"
                >
                  Üzenet küldése
                </button>
              </form>
            </div>
          </div>
        </div>
      </Section>

      {/* Opening Hours Section */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Nyitvatartás
          </h2>
          <div className="bg-[#0F1620]/50 border border-[#435936]/50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="text-xl font-bold text-[#86FD22] mb-4">Hétfő - Csütörtök</h3>
                <p className="text-gray-300 text-lg">10:00 - 14:00</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#86FD22] mb-4">Péntek</h3>
                <p className="text-gray-300 text-lg">10:00 - 14:00</p>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold text-[#86FD22] mb-4">Szombat - Vasárnap</h3>
                <p className="text-gray-300 text-lg">Zárva</p>
                <p className="text-gray-400 text-sm mt-2">Sürgősségi esetekben telefonon elérhetőek vagyunk!</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

