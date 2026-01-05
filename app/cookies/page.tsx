import type { Metadata } from "next";
import FinAIHero from "@/components/FinAIHero";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Cookie tájékoztató | Nexen Sites",
  description: "Nexen Sites cookie tájékoztatója - információ a weboldal által használt cookie-król",
};

export default function CookiesPage() {
  return (
    <>
      <section className="min-h-screen relative pt-24 pb-16 px-4 overflow-hidden">
        <FinAIHero />
        
        <div className="max-w-4xl mx-auto relative z-10" style={{ pointerEvents: 'auto' }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-12 text-white leading-tight">
            <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Cookie
            </span>
            <span className="block bg-gradient-to-r from-[#7C5CFF] via-[#50AEDF] to-[#7C5CFF] bg-clip-text text-transparent mt-2">
              Tájékoztató
            </span>
          </h1>

          <div className="space-y-10">
            <Section>
              <div className="bg-[#0F1620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Mi az a cookie?</h2>
                <p className="text-[#A8B3C7] text-lg leading-relaxed mb-4">
                  A cookie-k kis szöveges fájlok, amelyeket a weboldal a böngésződbe helyez el, 
                  amikor meglátogatod. Ezek segítenek a weboldalnak megjegyezni a beállításaidat 
                  és biztosítják a weboldal megfelelő működését.
                </p>
                <p className="text-[#A8B3C7] text-lg leading-relaxed">
                  A cookie-k lehetővé teszik, hogy a weboldal emlékezzen a bejelentkezési adataidra, 
                  a nyelvi beállításaidra, és más preferenciákra, így nem kell minden alkalommal 
                  újra beállítanod őket.
                </p>
              </div>
            </Section>

            <Section>
              <div className="bg-[#0F1620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Milyen cookie-kat használunk?</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">1. Szükséges cookie-k</h3>
                    <p className="text-[#A8B3C7] text-lg leading-relaxed mb-2">
                      Ezek a cookie-k elengedhetetlenek a weboldal működéséhez. Nem kapcsolhatók ki, 
                      mert a weboldal ezek nélkül nem működne megfelelően.
                    </p>
                    <ul className="list-disc list-inside text-[#A8B3C7] space-y-2 ml-4">
                      <li>Munkamenet kezelés</li>
                      <li>Biztonsági funkciók</li>
                      <li>Alapvető weboldal funkciók</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">2. Analitikai cookie-k</h3>
                    <p className="text-[#A8B3C7] text-lg leading-relaxed mb-2">
                      Ezek a cookie-k segítenek megérteni, hogyan használják a látogatók a weboldalt. 
                      Anonim adatokat gyűjtenek, hogy javíthassuk a weboldal teljesítményét és felhasználói élményét.
                    </p>
                    <ul className="list-disc list-inside text-[#A8B3C7] space-y-2 ml-4">
                      <li>Látogatottsági statisztikák</li>
                      <li>Oldalhasználati adatok</li>
                      <li>Teljesítmény mérések</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">3. Marketing cookie-k</h3>
                    <p className="text-[#A8B3C7] text-lg leading-relaxed mb-2">
                      Ezek a cookie-k a reklámok személyre szabásához és a marketing kampányok 
                      hatékonyságának méréséhez használatosak.
                    </p>
                    <ul className="list-disc list-inside text-[#A8B3C7] space-y-2 ml-4">
                      <li>Reklám személyre szabás</li>
                      <li>Kampány követés</li>
                      <li>Visszatérő látogatók azonosítása</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Section>

            <Section>
              <div className="bg-[#0F1620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Cookie-k kezelése</h2>
                <p className="text-[#A8B3C7] text-lg leading-relaxed mb-4">
                  A böngésződ beállításaiban bármikor módosíthatod vagy törölheted a cookie-kat. 
                  Azonban fontos tudni, hogy ha letiltod a szükséges cookie-kat, 
                  a weboldal egyes funkciói nem fognak megfelelően működni.
                </p>
                <p className="text-[#A8B3C7] text-lg leading-relaxed mb-4">
                  A weboldal cookie banner-jén keresztül is kezelheted a cookie beállításaidat. 
                  Bármikor visszatérhetsz a beállításokhoz, és módosíthatod a preferenciáidat.
                </p>
                <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl p-4 mt-4">
                  <p className="text-[#A8B3C7] text-sm">
                    <strong className="text-white">Tipp:</strong> A legtöbb böngészőben a Beállítások → 
                    Adatvédelem és biztonság → Cookie-k menüpontban találod a cookie beállításokat.
                  </p>
                </div>
              </div>
            </Section>

            <Section>
              <div className="bg-[#0F1620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Harmadik fél cookie-k</h2>
                <p className="text-[#A8B3C7] text-lg leading-relaxed mb-4">
                  Weboldalunk esetleg harmadik fél szolgáltatásokat is használhat, amelyek saját cookie-kat 
                  helyeznek el. Ezek a szolgáltatások saját adatvédelmi irányelveiket követik.
                </p>
                <p className="text-[#A8B3C7] text-lg leading-relaxed">
                  További információkért látogasd meg az{" "}
                  <a href="/privacy" className="text-[#7C5CFF] hover:text-[#50AEDF] underline">
                    Adatvédelmi tájékoztatónkat
                  </a>
                  .
                </p>
              </div>
            </Section>

            <Section>
              <div className="bg-[#0F1620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Kapcsolat</h2>
                <p className="text-[#A8B3C7] text-lg leading-relaxed mb-4">
                  Ha kérdésed van a cookie-kkal kapcsolatban, kérjük, vedd fel velünk a kapcsolatot:
                </p>
                <div className="space-y-2 text-[#A8B3C7]">
                  <p>
                    <strong className="text-white">Email:</strong>{" "}
                    <a href="mailto:info@nexensites.hu" className="text-[#7C5CFF] hover:text-[#50AEDF] underline">
                      info@nexensites.hu
                    </a>
                  </p>
                  <p>
                    <strong className="text-white">Telefon:</strong> +36 70 576 7845
                  </p>
                </div>
              </div>
            </Section>

            <div className="text-center pt-8">
              <p className="text-[#A8B3C7] text-sm">
                Utolsó frissítés: {new Date().toLocaleDateString("hu-HU", { year: "numeric", month: "long", day: "numeric" })}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

