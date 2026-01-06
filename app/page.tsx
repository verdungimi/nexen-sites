import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import ZoldhazHeroBackground from "@/components/ZoldhazHeroBackground";
import ZoldhazLogo from "@/components/ZoldhazLogo";
import SafeImage from "@/components/SafeImage";

// Facebook képek és munkák képei
const heroImages = [
  "/images/zoldhaz fb kep 1.jpg",
  "/images/zoldhaz fb kep 2.jpg",
  "/images/zoldhaz fb kep 3.jpg",
];

const workImages = [
  "/images/zoldhaz fb kep 1.jpg",
  "/images/zoldhaz fb kep 2.jpg",
  "/images/zoldhaz fb kep 3.jpg",
  "/images/zoldhaz fb kep 4.jpg",
];

const aboutImage = "/images/zoldhaz fb kep 4.jpg";

export const metadata: Metadata = {
  title: "Zöldház Energy Kft. | Klíma, Villanyszerelés, Napelem, Fűtőpanel, Padlófűtés",
  description: "Professzionális klíma szerelés, villanyszerelés, napelem telepítés, norvég fűtőpanel és dán padlófűtés Medgyesegyházán és környékén.",
  openGraph: {
    title: "Zöldház Energy Kft. | Energiahatékony megoldások",
    description: "Klíma, villanyszerelés, napelem, fűtőpanel és padlófűtés egy helyen.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Creative with Logo */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-24 px-4 overflow-hidden mb-0">
        <ZoldhazHeroBackground />
        
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content with Logo */}
            <div className="text-left">
              {/* Logo */}
              <div className="mb-8">
                <ZoldhazLogo variant="hero" />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Energiahatékony megoldások
                <span className="block text-[#86FD22] mt-2">otthonába és vállalkozásába</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Klíma, villanyszerelés, napelem, fűtőpanel és padlófűtés egy helyen. Modern, környezetbarát technológiák tapasztalt szakembereinktől.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                  href="#kapcsolat" 
                  className="px-8 py-4 bg-[#435936] hover:bg-[#4a6540] text-white rounded-lg transition-all duration-300 font-semibold text-center shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  Ingyenes Ajánlatkérés
                </a>
                <Link 
                  href="/termekek" 
                  className="px-8 py-4 bg-[#86FD22] hover:bg-[#7ae01f] text-[#435936] rounded-lg transition-all duration-300 font-semibold text-center shadow-lg hover:shadow-xl hover:scale-105 transform relative overflow-hidden group"
                >
                  <span className="relative z-10">Klíma Akció</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#86FD22] to-[#7ae01f] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
                <a 
                  href="tel:+36307312493" 
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-[#435936] text-white hover:bg-white/20 hover:border-[#86FD22] rounded-lg transition-all duration-300 font-semibold text-center hover:scale-105 transform"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Hívás most
                  </span>
                </a>
              </div>
              
              {/* Highlighted Offer Banner */}
              <div className="mb-8 p-6 bg-gradient-to-r from-[#435936]/20 to-[#86FD22]/20 border-2 border-[#86FD22]/50 rounded-xl backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#86FD22] rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#435936]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">INGYENES PADLÁSFÖDÉM SZIGETELÉS BÉKÉS MEGYÉBEN</h3>
                  </div>
                </div>
              </div>
              
              {/* Trust indicators */}
              <div className="flex gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-2xl font-bold text-[#86FD22]">2023</div>
                  <div className="text-sm text-gray-400">Alapítás</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#86FD22]">100%</div>
                  <div className="text-sm text-gray-400">Elégedettség</div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Large Image Gallery */}
            <div className="hidden lg:block relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Image 1 */}
                <div className="aspect-square rounded-xl border border-[#435936]/30 overflow-hidden shadow-lg relative">
                  <SafeImage
                    src={heroImages[0]}
                    alt="Zöldház Energy munkák"
                    className="object-cover"
                    sizes="(max-width: 1024px) 0vw, 25vw"
                  />
                </div>
                
                {/* Image 2 */}
                <div className="aspect-square rounded-xl border border-[#435936]/30 overflow-hidden shadow-lg relative">
                  <SafeImage
                    src={heroImages[1]}
                    alt="Zöldház Energy munkák"
                    className="object-cover"
                    sizes="(max-width: 1024px) 0vw, 25vw"
                  />
                </div>
                
                {/* Image 3 - Larger */}
                <div className="col-span-2 aspect-[2/1] rounded-xl border border-[#435936]/30 overflow-hidden shadow-lg relative">
                  <SafeImage
                    src={heroImages[2]}
                    alt="Zöldház Energy főkép"
                    className="object-cover"
                    sizes="(max-width: 1024px) 0vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Professional with Subtle Background */}
      <Section id="szolgaltatasok" className="bg-gray-50 relative overflow-hidden">
        {/* Unified background with visible motif */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
          {/* Visible geometric pattern */}
          <div 
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `
                repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(67, 89, 54, 0.1) 20px, rgba(67, 89, 54, 0.1) 21px),
                repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(134, 253, 34, 0.08) 20px, rgba(134, 253, 34, 0.08) 21px)
              `,
            }}
          ></div>
          {/* Dot pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `radial-gradient(circle at 3px 3px, #435936 1.5px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}
          ></div>
          {/* Decorative elements - more visible */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#435936]/8 rounded-full blur-3xl -mt-64 -ml-64"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#86FD22]/8 rounded-full blur-3xl -mb-64 -mr-64"></div>
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#435936]/6 rounded-full blur-3xl -ml-48"></div>
          <div className="absolute bottom-1/2 right-0 w-[400px] h-[400px] bg-[#86FD22]/6 rounded-full blur-3xl -mr-48"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-[#86FD22]/20 text-[#435936] text-sm font-bold rounded-full border border-[#86FD22]/30">
                SZOLGÁLTATÁSAINK
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Szolgáltatásaink
            </h2>
            <p className="text-lg text-gray-800 max-w-2xl mx-auto font-medium">
              Modern, energiahatékony megoldások otthonodhoz és vállalkozásodhoz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 - Klíma - Highlighted */}
            <Link href="/termekek" className="bg-white border-2 border-[#86FD22] rounded-xl p-8 hover:border-[#435936] hover:shadow-2xl transition-all duration-300 group relative overflow-hidden shadow-lg transform hover:scale-105">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#86FD22]/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-[#86FD22] text-[#435936] text-xs font-bold rounded-full">AKCIÓ</span>
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-[#435936] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#86FD22] transition-colors shadow-lg transform group-hover:rotate-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Klíma értékesítés, szerelés
                </h3>
                <p className="text-gray-800 leading-relaxed mb-4 font-medium">
                  Modern klímaberendezések értékesítése és professzionális telepítése. Lakossági és ipari megoldások.
                </p>
                <span className="inline-flex items-center text-[#435936] font-semibold group-hover:text-[#86FD22] transition-colors">
                  Részletek
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Service 2 - Villanyszerelés */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#435936] hover:shadow-xl transition-all duration-300 group relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#86FD22]/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-[#435936] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#86FD22] transition-colors shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Villanyszerelés
                </h3>
                <p className="text-gray-800 leading-relaxed font-medium">
                  Lakossági és ipari villanyszerelési munkák. Biztonságos, megbízható megoldások tapasztalt szakembereinktől.
                </p>
              </div>
            </div>

            {/* Service 3 - Napelem */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#435936] hover:shadow-xl transition-all duration-300 group relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#86FD22]/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-[#435936] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#86FD22] transition-colors shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Napelem értékesítés, telepítés
                </h3>
                <p className="text-gray-800 leading-relaxed font-medium">
                  Napenergia rendszerek tervezése, értékesítése és telepítése. Környezetbarát, költséghatékony megoldás.
                </p>
              </div>
            </div>

            {/* Service 4 - Norvég fűtőpanel */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#435936] hover:shadow-xl transition-all duration-300 group relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#86FD22]/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-[#435936] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#86FD22] transition-colors shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Norvég fűtőpanel
                </h3>
                <p className="text-gray-800 leading-relaxed font-medium">
                  Norvég fűtőpanelek értékesítése és beüzemelése. Modern, hatékony fűtési megoldás.
                </p>
              </div>
            </div>

            {/* Service 5 - Dán padlófűtés */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#435936] hover:shadow-xl transition-all duration-300 group relative overflow-hidden shadow-sm md:col-span-2 lg:col-span-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#86FD22]/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-[#435936] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#86FD22] transition-colors shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Dán padlófűtés
                </h3>
                <p className="text-gray-800 leading-relaxed font-medium">
                  Dán padlófűtési rendszerek értékesítése és telepítése. Kényelmes, energiatakarékos fűtés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Gallery Section - Facebook Images with Professional Background */}
      <Section id="munkaink" className="bg-gray-50 relative overflow-hidden">
        {/* Unified background with visible motif */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
          {/* Visible geometric pattern */}
          <div 
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `
                repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(67, 89, 54, 0.1) 20px, rgba(67, 89, 54, 0.1) 21px),
                repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(134, 253, 34, 0.08) 20px, rgba(134, 253, 34, 0.08) 21px)
              `,
            }}
          ></div>
          {/* Dot pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `radial-gradient(circle at 3px 3px, #435936 1.5px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}
          ></div>
          {/* Decorative elements - more visible */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#435936]/8 rounded-full blur-3xl -mt-64 -ml-64"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#86FD22]/8 rounded-full blur-3xl -mb-64 -mr-64"></div>
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#435936]/6 rounded-full blur-3xl -ml-48"></div>
          <div className="absolute bottom-1/2 right-0 w-[400px] h-[400px] bg-[#86FD22]/6 rounded-full blur-3xl -mr-48"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-[#86FD22]/20 text-[#435936] text-sm font-bold rounded-full border border-[#86FD22]/30">
                PORTFÓLIÓ
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Munkáink
            </h2>
            <p className="text-lg text-gray-800 font-medium">
              Tekintse meg korábbi projektjeinket
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workImages.map((imageSrc, i) => (
              <div key={i} className="aspect-square rounded-xl border border-gray-300 overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 group relative">
                <SafeImage
                  src={imageSrc}
                  alt={`Zöldház Energy munkák - ${i + 1}`}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* About Section - Professional Layout with Image */}
      <Section className="bg-gray-50 relative overflow-hidden">
        {/* Unified background with visible motif */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
          {/* Visible geometric pattern */}
          <div 
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `
                repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(67, 89, 54, 0.1) 20px, rgba(67, 89, 54, 0.1) 21px),
                repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(134, 253, 34, 0.08) 20px, rgba(134, 253, 34, 0.08) 21px)
              `,
            }}
          ></div>
          {/* Dot pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `radial-gradient(circle at 3px 3px, #435936 1.5px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}
          ></div>
          {/* Decorative elements - more visible */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#435936]/8 rounded-full blur-3xl -mt-64 -ml-64"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#86FD22]/8 rounded-full blur-3xl -mb-64 -mr-64"></div>
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#435936]/6 rounded-full blur-3xl -ml-48"></div>
          <div className="absolute bottom-1/2 right-0 w-[400px] h-[400px] bg-[#86FD22]/6 rounded-full blur-3xl -mr-48"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl border-2 border-[#435936]/20 overflow-hidden shadow-xl relative transform hover:scale-105 transition-transform duration-300">
                <SafeImage
                  src={aboutImage}
                  alt="Zöldház Energy Kft. csapat"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-[#86FD22]/20 text-[#435936] text-sm font-bold rounded-full border border-[#86FD22]/30">
                  RÓLUNK
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Rólunk
              </h2>
              <div className="space-y-4 text-gray-800">
                <p className="leading-relaxed font-medium">
                  A <strong className="text-[#435936] font-bold">Zöldház Energy Kft.</strong> 2023-ban alakult, és azóta is aktívan működik Medgyesegyházán és környékén. Célunk, hogy modern, energiahatékony megoldásokat nyújtsunk ügyfeleinknek.
                </p>
                <p className="leading-relaxed font-medium">
                  Vállalkozásunk széleskörű szolgáltatásokat kínál: klíma szereléstől a villanyszerelésen át a napelem telepítésig, a norvég fűtőpanelek és dán padlófűtési rendszerek beüzemeléséig.
                </p>
                <p className="leading-relaxed font-medium">
                  Tapasztalt csapatunk garantálja, hogy minden munkát precízen, határidőre és a legjobb minőségben végezzünk el.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-[#435936]/10 to-[#86FD22]/10 border-2 border-[#435936]/30 rounded-xl transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-black text-[#435936] mb-2">2023</div>
                  <div className="text-sm font-semibold text-gray-800">Alapítás éve</div>
                </div>
                <div className="p-6 bg-gradient-to-br from-[#86FD22]/10 to-[#435936]/10 border-2 border-[#86FD22]/30 rounded-xl transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-black text-[#435936] mb-2">100%</div>
                  <div className="text-sm font-semibold text-gray-800">Elégedett ügyfél</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Us - Creative Cards with Professional Background */}
      <Section className="bg-gray-50 relative overflow-hidden">
        {/* Unified background with visible motif */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
          {/* Visible geometric pattern */}
          <div 
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `
                repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(67, 89, 54, 0.1) 20px, rgba(67, 89, 54, 0.1) 21px),
                repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(134, 253, 34, 0.08) 20px, rgba(134, 253, 34, 0.08) 21px)
              `,
            }}
          ></div>
          {/* Dot pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `radial-gradient(circle at 3px 3px, #435936 1.5px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}
          ></div>
          {/* Decorative elements - more visible */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#435936]/8 rounded-full blur-3xl -mt-64 -ml-64"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#86FD22]/8 rounded-full blur-3xl -mb-64 -mr-64"></div>
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#435936]/6 rounded-full blur-3xl -ml-48"></div>
          <div className="absolute bottom-1/2 right-0 w-[400px] h-[400px] bg-[#86FD22]/6 rounded-full blur-3xl -mr-48"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-[#86FD22]/20 text-[#435936] text-sm font-bold rounded-full border border-[#86FD22]/30">
                ELŐNYÖK
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Miért válasszon minket?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center hover:border-[#435936] hover:shadow-2xl transition-all duration-300 shadow-sm transform hover:scale-105 group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#435936] to-[#86FD22] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Szakértői munka</h3>
              <p className="text-gray-800 font-medium">Tapasztalt szakembereink garantálják a minőségi munkavégzést.</p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center hover:border-[#435936] hover:shadow-2xl transition-all duration-300 shadow-sm transform hover:scale-105 group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#86FD22] to-[#435936] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gyors reagálás</h3>
              <p className="text-gray-800 font-medium">Sürgősségi esetekben is gyorsan elérhetőek vagyunk.</p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center hover:border-[#435936] hover:shadow-2xl transition-all duration-300 shadow-sm transform hover:scale-105 group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#435936] to-[#86FD22] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Versenyképes árak</h3>
              <p className="text-gray-800 font-medium">Átlátható árazás, nincsenek rejtett költségek.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section - Professional Form */}
      <Section id="kapcsolat" className="bg-gray-50 relative overflow-hidden">
        {/* Unified background with visible motif */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
          {/* Visible geometric pattern */}
          <div 
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `
                repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(67, 89, 54, 0.1) 20px, rgba(67, 89, 54, 0.1) 21px),
                repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(134, 253, 34, 0.08) 20px, rgba(134, 253, 34, 0.08) 21px)
              `,
            }}
          ></div>
          {/* Dot pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `radial-gradient(circle at 3px 3px, #435936 1.5px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}
          ></div>
          {/* Decorative elements - more visible */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#435936]/8 rounded-full blur-3xl -mt-64 -ml-64"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#86FD22]/8 rounded-full blur-3xl -mb-64 -mr-64"></div>
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#435936]/6 rounded-full blur-3xl -ml-48"></div>
          <div className="absolute bottom-1/2 right-0 w-[400px] h-[400px] bg-[#86FD22]/6 rounded-full blur-3xl -mr-48"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-[#86FD22]/20 text-[#435936] text-sm font-bold rounded-full border border-[#86FD22]/30">
                KAPCSOLAT
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Kapcsolat
            </h2>
            <p className="text-lg text-gray-800 max-w-2xl mx-auto font-medium">
              Várjuk megkeresését! Szívesen válaszolunk kérdéseire és készítünk ingyenes ajánlatot.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg hover:border-[#435936] hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#435936] to-[#86FD22] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Telefon</h3>
                    <a href="tel:+36307312493" className="text-[#435936] hover:text-[#86FD22] transition-colors text-xl font-bold">
                      +36 30 731 2493
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg hover:border-[#435936] hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#86FD22] to-[#435936] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                    <a href="mailto:zoldhazenergykft@gmail.com" className="text-[#435936] hover:text-[#86FD22] transition-colors text-lg font-medium break-all">
                      zoldhazenergykft@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg hover:border-[#435936] hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#435936] to-[#86FD22] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Székhely</h3>
                    <p className="text-gray-800 font-medium">
                      5666 Medgyesegyháza<br />
                      Fáy András utca 31.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg hover:border-[#435936] hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#86FD22] to-[#435936] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Facebook</h3>
                    <a 
                      href="https://www.facebook.com/zoldhazenergy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#435936] hover:text-[#86FD22] transition-colors text-lg font-medium"
                    >
                      www.facebook.com/zoldhazenergy
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Küldjön üzenetet</h3>
              <form action="/api/contact" method="POST" className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-2">
                    Név
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-[#435936] focus:ring-2 focus:ring-[#435936]/20 transition-colors"
                    placeholder="Teljes név"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-[#435936] focus:ring-2 focus:ring-[#435936]/20 transition-colors"
                    placeholder="email@pelda.hu"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-800 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-[#435936] focus:ring-2 focus:ring-[#435936]/20 transition-colors"
                    placeholder="+36 30 123 4567"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-2">
                    Üzenet
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-[#435936] focus:ring-2 focus:ring-[#435936]/20 transition-colors resize-none"
                    placeholder="Írja le, miben segíthetünk..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-[#435936] hover:bg-[#4a6540] text-white rounded-lg transition-all duration-300 font-semibold text-lg shadow-md"
                >
                  Üzenet küldése
                </button>
              </form>
            </div>
          </div>
        </div>
      </Section>

      {/* Opening Hours */}
      <Section className="bg-gray-50 relative overflow-hidden">
        {/* Professional background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gray-50"></div>
          {/* Subtle pattern */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #435936 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          ></div>
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#435936]/5 rounded-full blur-3xl -mt-48"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#86FD22]/5 rounded-full blur-3xl -mb-48"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Nyitvatartás</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-lg font-semibold text-[#435936] mb-2">Hétfő - Csütörtök</h3>
                <p className="text-gray-800 font-medium">10:00 - 14:00</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#435936] mb-2">Péntek</h3>
                <p className="text-gray-800 font-medium">10:00 - 14:00</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#435936] mb-2">Szombat - Vasárnap</h3>
                <p className="text-gray-800 font-medium">Zárva</p>
                <p className="text-gray-500 text-sm mt-1">Sürgősségi esetekben elérhetőek!</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
