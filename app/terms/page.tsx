import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Általános Szerződési Feltételek | Zöldház Energy Kft.",
  description: "Zöldház Energy Kft. általános szerződési feltételei",
};

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center pt-32 pb-16 px-4 overflow-hidden bg-gradient-to-br from-[#0f1a0f] via-[#1a2e1a] to-[#0f1a0f]">
        <div className="max-w-4xl mx-auto relative z-10 w-full text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            <span className="text-[#86FD22]">Általános</span>
            <span className="block text-white mt-2">Szerződési Feltételek</span>
          </h1>
          <p className="text-lg text-gray-300">
            Zöldház Energy Kft. általános szerződési feltételei
          </p>
        </div>
      </section>

      {/* Content Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <section className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">1. Szolgáltatás leírása</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                A <strong className="text-[#435936]">Zöldház Energy Kft.</strong> (a továbbiakban: Szolgáltató) a következő szolgáltatásokat nyújtja:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-base leading-relaxed">
                <li>Klíma értékesítés és szerelés</li>
                <li>Lakossági és ipari villanyszerelés</li>
                <li>Napelem értékesítés és telepítés</li>
                <li>Norvég fűtőpanel értékesítés és beüzemelés</li>
                <li>Dán padlófűtés értékesítés és telepítés</li>
                <li>Karbantartási és javítási munkák</li>
              </ul>
            </section>

            <section className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">2. Árazás és fizetés</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                <strong className="text-[#435936]">Fizetési mód:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-base leading-relaxed">
                <li>Az árak telepített árak, alapszereléssel értendők</li>
                <li>A fizetés készpénzben, bankkártyával vagy banki átutalással történhet</li>
                <li>A számlát a munkavégzés után állítjuk ki</li>
                <li>Előlegfizetés esetén a munkavégzés előtt részletes ajánlatot készítünk</li>
              </ul>
            </section>

            <section className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">3. Munkavégzés és határidők</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                A munkavégzés időpontját az ügyféllel egyeztetjük. A pontos határidő a munkakör méretétől és összetettségétől függ.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                Sürgősségi munkák esetén igyekszünk a lehető leggyorsabban reagálni, azonban a pontos időpontot a munkakör függvényében egyeztetjük.
              </p>
            </section>

            <section className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">4. Garancia</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                A Szolgáltató garanciát vállal a munkavégzés minőségére:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-base leading-relaxed">
                <li>Az elvégzett munkákra 12 hónap garanciát vállalunk</li>
                <li>A garancia a munkavégzés befejezésétől számít</li>
                <li>A garancia nem terjed ki az ügyfél által okozott károkra vagy nem megfelelő használatra</li>
                <li>Garancia esetén azonnal értesítjük az ügyfelet és igyekszünk a lehető leggyorsabban javítani</li>
              </ul>
            </section>

            <section className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">5. Felelősség korlátozása</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                A Szolgáltató felelőssége a szerződésben meghatározott szolgáltatásokra korlátozódik. A Szolgáltató nem vállal felelősséget:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-base leading-relaxed">
                <li>Harmadik fél által okozott károkért</li>
                <li>Természeti katasztrófák vagy vis maior események miatt bekövetkező károkért</li>
                <li>Az ügyfél által nem megfelelően használt berendezések miatt bekövetkező károkért</li>
                <li>Az ügyfél által biztosított anyagok minőségéért</li>
              </ul>
            </section>

            <section className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">6. Reklamáció</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Reklamáció esetén az ügyfél az alábbi elérhetőségeken jelezheti problémáját:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-base leading-relaxed">
                <li>Email: <a href="mailto:zoldhazenergykft@gmail.com" className="text-[#435936] hover:text-[#86FD22] underline">zoldhazenergykft@gmail.com</a></li>
                <li>Telefon: <a href="tel:+36307312493" className="text-[#435936] hover:text-[#86FD22] underline">+36 30 731 2493</a></li>
              </ul>
              <p className="text-gray-700 text-base leading-relaxed mt-4">
                A reklamációt 8 napon belül megvizsgáljuk és válaszolunk rá.
              </p>
            </section>

            <section className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">7. Adatvédelem</h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Az adatkezelésről részletes tájékoztatást az{" "}
                <Link href="/privacy" className="text-[#435936] hover:text-[#86FD22] underline font-semibold">
                  Adatvédelmi tájékoztatóban
                </Link>{" "}
                találsz.
              </p>
            </section>

            <section className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">8. Kapcsolat</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Kérdéseiddel, reklamációiddal az alábbi elérhetőségeken fordulhatsz hozzánk:
              </p>
              <div className="text-gray-700 text-base leading-relaxed space-y-2">
                <p>
                  <strong className="text-[#435936]">Zöldház Energy Kft.</strong>
                </p>
                <p>
                  <strong className="text-[#435936]">Székhely:</strong> 5666 Medgyesegyháza, Fáy András utca 31.
                </p>
                <p>
                  <strong className="text-[#435936]">Email:</strong>{" "}
                  <a href="mailto:zoldhazenergykft@gmail.com" className="text-[#435936] hover:text-[#86FD22] underline">
                    zoldhazenergykft@gmail.com
                  </a>
                </p>
                <p>
                  <strong className="text-[#435936]">Telefon:</strong>{" "}
                  <a href="tel:+36307312493" className="text-[#435936] hover:text-[#86FD22] underline">
                    +36 30 731 2493
                  </a>
                </p>
                <p>
                  <strong className="text-[#435936]">Facebook:</strong>{" "}
                  <a href="https://www.facebook.com/zoldhazenergy" target="_blank" rel="noopener noreferrer" className="text-[#435936] hover:text-[#86FD22] underline">
                    www.facebook.com/zoldhazenergy
                  </a>
                </p>
              </div>
            </section>

            <section className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <p className="text-gray-600 text-sm">
                <strong className="text-[#435936]">Utolsó frissítés:</strong> {new Date().getFullYear()}
              </p>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}
