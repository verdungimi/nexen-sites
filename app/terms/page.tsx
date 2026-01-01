import type { Metadata } from "next";
import FinAIHero from "@/components/FinAIHero";

export const metadata: Metadata = {
  title: "Általános Szerződési Feltételek | Nexen Sites",
  description: "Nexen Sites általános szerződési feltételei",
};

export default function TermsPage() {
  return (
    <section className="min-h-screen relative pt-24 pb-16 px-4 overflow-hidden">
      <FinAIHero />
      
      <div className="max-w-4xl mx-auto relative z-10" style={{ pointerEvents: 'auto' }}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-12 text-white leading-tight">
          <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Általános
          </span>
          <span className="block bg-gradient-to-r from-[#7C5CFF] via-[#50AEDF] to-[#7C5CFF] bg-clip-text text-transparent mt-2">
            Szerződési Feltételek
          </span>
        </h1>

        <div className="space-y-10">
          <section className="bg-[#0F1620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Szolgáltatás leírása</h2>
            <p className="text-white text-lg leading-relaxed mb-4">
              Nexen Sites (a továbbiakban: Szolgáltató) weboldal tervezési és fejlesztési szolgáltatást nyújt vállalkozásoknak és magánszemélyeknek. A szolgáltatás magában foglalja:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-white text-lg leading-relaxed">
              <li>Weboldal tervezése és fejlesztése</li>
              <li>Mobilbarát, reszponzív design készítése</li>
              <li>SEO alapok beállítása</li>
              <li>Copywriting támogatás (ha a csomag része)</li>
              <li>Weboldal publikálása és átadása</li>
            </ul>
          </section>

          <section className="bg-[#0F1620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. Határidők és feltételek</h2>
            <h3 className="text-xl md:text-2xl font-semibold text-white mt-6 mb-4">2.1. 10 napos határidő feltételei</h3>
            <p className="text-white text-lg leading-relaxed mb-4">
              A 10 napos szállítási határidő akkor tartható, ha az alábbi feltételek teljesülnek:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-white text-lg leading-relaxed">
              <li>Az ügyfél minden szükséges anyagot (logo, szöveg, képek, referenciák) a kickoff meeting után 48 órán belül átad.</li>
              <li>Az ügyfél a designon maximum 2 módosítási kört kér.</li>
              <li>Az ügyfél időben válaszol a egyeztetésekre és kérdésekre.</li>
              <li>A projekt scope-ja nem változik a folyamat során.</li>
            </ul>
            <p className="mt-6 text-white text-lg leading-relaxed">
              Ha ezek a feltételek nem teljesülnek, a határidő eltolódhat.
            </p>
          </section>

          <section className="bg-[#0F1620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. Fizetés, számlázás</h2>
            <p className="text-white text-lg leading-relaxed mb-4">
              <strong className="text-white">Fizetési mód:</strong>
            </p>
            <p className="text-white text-lg leading-relaxed mb-6">
              A teljes összeg (100%) előre fizetendő a szerződéskötéskor, a projekt megkezdése előtt.
            </p>
            <p className="text-white text-lg leading-relaxed">
              A fizetés banki átutalással vagy számlafizetéssel történik. A számlát elektronikusan állítjuk ki és küldjük el.
            </p>
          </section>

          <section className="bg-[#0F1620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. Módosítási körök</h2>
            <p className="text-white text-lg leading-relaxed">
              A 10 napos csomagokban maximum 2 módosítási kör van beleértve a designon. További módosítások esetén a Szolgáltató külön díjat számol fel, amit előre egyeztetünk az ügyféllel.
            </p>
          </section>

          <section className="bg-[#0F1620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. Extra funkciók</h2>
            <p className="text-white text-lg leading-relaxed mb-4">
              Az alábbi funkciók nem tartoznak a 10 napos csomagokhoz, és külön egyeztetés és árazás tárgyát képezik:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-white text-lg leading-relaxed">
              <li>Webshop (e-commerce funkciók)</li>
              <li>Komplex kalkulátorok vagy egyedi interaktív eszközök</li>
              <li>Egyedi backend fejlesztés</li>
              <li>Többnyelvű weboldal (2+ nyelv)</li>
              <li>Harmadik fél integrációk (pl. CRM, fizetési rendszerek)</li>
            </ul>
          </section>

          <section className="bg-[#0F1620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">6. Felelősség korlátozása</h2>
            <p className="text-white text-lg leading-relaxed mb-4">
              A Szolgáltató felelőssége a szerződésben meghatározott szolgáltatásokra korlátozódik. A Szolgáltató nem vállal felelősséget:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-white text-lg leading-relaxed">
              <li>Az ügyfél által biztosított tartalom pontosságáért</li>
              <li>Harmadik fél szolgáltatásainak (pl. hosting, domain) hibáiért</li>
              <li>Az ügyfél által késedelmesen vagy hiányosan megadott anyagok miatt bekövetkező késésekért</li>
            </ul>
          </section>

          <section className="bg-[#0F1620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">7. Szerzői jogok</h2>
            <p className="text-white text-lg leading-relaxed">
              A kész weboldal szerzői joga az átadást követően az ügyfélre száll át. A Szolgáltató megtarthatja a portfóliójában mutatás céljából screenshot-okat vagy linkeket a weboldalhoz (hacsak az ügyfél erre nem mond le írásban).
            </p>
          </section>

          <section className="bg-[#0F1620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">8. Visszavonás, visszatérítés</h2>
            <p className="text-white text-lg leading-relaxed mb-4">
              Az ügyfél a szerződés megkötését követő 14 napon belül, indoklás nélkül visszavonhatja szerződését. Ebben az esetben a már kifizetett előleget (ha van) visszatérítjük.
            </p>
            <p className="text-white text-lg leading-relaxed">
              Ha a projekt megkezdésre került az ügyfél kérésére, a Szolgáltató a már elvégzett munkáért arányosan számlázhat.
            </p>
          </section>

          <section className="bg-[#0F1620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">9. Adatvédelem</h2>
            <p className="text-white text-lg leading-relaxed">
              Az adatkezelésről részletes tájékoztatást az{" "}
              <a href="/privacy" className="text-[#7C5CFF] hover:text-[#50AEDF] underline transition-colors font-semibold">
                Adatvédelmi tájékoztatóban
              </a>{" "}
              találsz.
            </p>
          </section>

          <section className="bg-[#0F1620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">10. Kapcsolat</h2>
            <p className="text-white text-lg leading-relaxed mb-4">
              Kérdéseiddel, reklamációiddal az alábbi elérhetőségeken fordulhatsz hozzánk:
            </p>
            <p className="text-white text-lg leading-relaxed">
              <strong className="text-white">Email:</strong>{" "}
              <a href="mailto:verdungimre@nexensites.hu" className="text-[#7C5CFF] hover:text-[#50AEDF] underline transition-colors">
                verdungimre@nexensites.hu
              </a>
              <br />
              <strong className="text-white">Telefon:</strong> +36 70 576 7845
              <br />
              <strong className="text-white">Székhely:</strong> Kecskemét
            </p>
          </section>

          <section className="bg-[#0F1620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 md:p-10">
            <p className="text-gray-300 text-base">
              <strong className="text-white">Utolsó frissítés:</strong> {new Date().getFullYear()}
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
