import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Adatvédelmi tájékoztató | Zöldház Energy Kft.",
  description: "Zöldház Energy Kft. adatvédelmi tájékoztatója",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center pt-32 pb-16 px-4 overflow-hidden bg-gradient-to-br from-[#0f1a0f] via-[#1a2e1a] to-[#0f1a0f]">
        <div className="max-w-4xl mx-auto relative z-10 w-full text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            <span className="text-[#86FD22]">Adatvédelmi</span>
            <span className="block text-white mt-2">Tájékoztató</span>
          </h1>
          <p className="text-lg text-gray-300">
            Zöldház Energy Kft. adatvédelmi tájékoztatója
          </p>
        </div>
      </section>

      {/* Content Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <section className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">1. Adatkezelő adatai</h2>
              <div className="text-gray-700 text-base leading-relaxed space-y-2">
                <p>
                  <strong className="text-[#435936]">Cégnév:</strong> Zöldház Energy Kft.
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
              </div>
            </section>

            <section className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">2. Kezelt adatok köre</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                A kapcsolatfelvételi űrlap kitöltésekor vagy telefonos megkereséskor a következő adatokat kezeljük:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-base leading-relaxed">
                <li>Név</li>
                <li>Email cím</li>
                <li>Telefonszám</li>
                <li>Üzenet tartalma</li>
                <li>Szolgáltatás típusa (ha megadva)</li>
              </ul>
            </section>

            <section className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">3. Adatkezelés célja, jogalapja</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                <strong className="text-[#435936]">Adatkezelés célja:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-base leading-relaxed mb-4">
                <li>A kapcsolatfelvétel kezelése</li>
                <li>Az ügyfél kérésének megválaszolása</li>
                <li>Ajánlatkészítés</li>
                <li>Szolgáltatás nyújtása</li>
                <li>Szerződés teljesítése</li>
                <li>Számlázás</li>
              </ul>
              <p className="text-gray-700 text-base leading-relaxed">
                <strong className="text-[#435936]">Jogalap:</strong> Az érintett hozzájárulása (GDPR 6. cikk (1) bekezdés a) pont) illetve az adatkezelő jogos érdeke (GDPR 6. cikk (1) bekezdés f) pont) – a kapcsolatfelvételi kérés kezelése, szerződés teljesítése.
              </p>
            </section>

            <section className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">4. Megőrzési idő</h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Az adatokat addig őrizzük meg, ameddig az adatkezelés célja fennáll, vagy az érintett kérésére törlésre kerülnek. Amennyiben szerződés jön létre, az adatokat a szerződés teljesítéséig és a szerződés megszűnését követően a számviteli törvény előírásainak megfelelően, általában 8 évig tároljuk.
              </p>
            </section>

            <section className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">5. Adattovábbítás / adatfeldolgozók</h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Az adatokat harmadik félnek nem továbbítjuk, kivéve, ha azt törvény írja elő. Az adatok tárolása során adatfeldolgozókat használhatunk (pl. hosting szolgáltató, email szolgáltató), akikkel adatfeldolgozási szerződés került megkötésre.
              </p>
            </section>

            <section className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">6. Érintetti jogok</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">Az érintett a következő jogokkal rendelkezik:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-base leading-relaxed mb-6">
                <li><strong className="text-[#435936]">Hozzáférési jog:</strong> Tájékoztatást kérhet arról, hogy az Ön személyes adatait kezeljük-e</li>
                <li><strong className="text-[#435936]">Helyesbítési jog:</strong> Kérheti helytelen adatainak helyesbítését</li>
                <li><strong className="text-[#435936]">Törléshez való jog:</strong> Kérheti adatainak törlését</li>
                <li><strong className="text-[#435936]">Az adatkezelés korlátozásához való jog:</strong> Kérheti adatainak kezelésének korlátozását</li>
                <li><strong className="text-[#435936]">Az adathordozhatósághoz való jog:</strong> Kérheti adatainak más adatkezelőhöz való átadását</li>
                <li><strong className="text-[#435936]">Tiltakozási jog:</strong> Tiltakozhat adatainak kezelése ellen</li>
                <li><strong className="text-[#435936]">Hozzájárulás visszavonása:</strong> Bármikor visszavonhatja hozzájárulását</li>
              </ul>
              <p className="text-gray-700 text-base leading-relaxed">
                Jogait gyakorolhatja az{" "}
                <a href="mailto:zoldhazenergykft@gmail.com" className="text-[#435936] hover:text-[#86FD22] underline font-semibold">
                  zoldhazenergykft@gmail.com
                </a>{" "}
                email címen keresztül, vagy panaszt tehet az adatvédelmi hatóságnál (Nemzeti Adatvédelmi és Információszabadság Hatóság, NAIH).
              </p>
            </section>

            <section className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">7. Cookie-k használata</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Weboldalunk minimális cookie-kat használ a működés biztosítása érdekében. További információkért látogasd meg az{" "}
                <Link href="/cookies" className="text-[#435936] hover:text-[#86FD22] underline">
                  Cookie tájékoztatónkat
                </Link>.
              </p>
            </section>

            <section className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">8. Kapcsolat</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Az adatkezeléssel kapcsolatos kérdéseivel az alábbi elérhetőségeken fordulhat hozzánk:
              </p>
              <div className="text-gray-700 text-base leading-relaxed space-y-2">
                <p>
                  <strong className="text-[#435936]">Zöldház Energy Kft.</strong>
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
                  <strong className="text-[#435936]">Székhely:</strong> 5666 Medgyesegyháza, Fáy András utca 31.
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
