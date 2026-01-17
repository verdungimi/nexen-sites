import type { Metadata } from "next";
import FinAIHero from "@/components/FinAIHero";

export const metadata: Metadata = {
  title: "Adatvédelmi tájékoztató | Nexen Sites",
  description: "Nexen Sites adatvédelmi tájékoztatója",
};

export default function PrivacyPage() {
  return (
    <section className="min-h-screen relative pt-24 pb-16 px-4 overflow-hidden">
      <FinAIHero />
      
      <div className="max-w-4xl mx-auto relative z-10" style={{ pointerEvents: 'auto' }}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-12 text-white leading-tight">
          <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Adatvédelmi
          </span>
          <span className="block bg-gradient-to-r from-[#7C5CFF] via-[#50AEDF] to-[#7C5CFF] bg-clip-text text-transparent mt-2">
            Tájékoztató
          </span>
        </h1>

        <div className="space-y-10">
          <section className="bg-[#0F1620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Adatkezelő adatai</h2>
            <p className="text-white text-lg leading-relaxed">
              <strong className="text-white">Cégnév:</strong> Nexen Sites
              <br />
              <strong className="text-white">Székhely:</strong> Kecskemét
              <br />
              <strong className="text-white">Email:</strong>{" "}
              <a href="mailto:info@nexensites.hu" className="text-[#7C5CFF] hover:text-[#50AEDF] underline transition-colors">
                info@nexensites.hu
              </a>
              <br />
              <strong className="text-white">Telefon:</strong>{" "}
              <a href="tel:+36705767845" className="text-[#7C5CFF] hover:text-[#50AEDF] underline transition-colors">
                +36 70 576 7845
              </a>
            </p>
          </section>

          <section className="bg-[#0F1620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. Kezelt adatok köre</h2>
            <p className="text-white text-lg leading-relaxed mb-4">
              A kapcsolati űrlap kitöltésekor a következő adatokat kezeljük:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-white text-lg leading-relaxed">
              <li>Név</li>
              <li>Cégnév (ha megadva)</li>
              <li>Email cím</li>
              <li>Telefonszám</li>
              <li>Weboldal célja (ha megadva)</li>
              <li>Határidő (ha megadva)</li>
              <li>Rövid leírás (ha megadva)</li>
            </ul>
          </section>

          <section className="bg-[#0F1620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. Adatkezelés célja, jogalapja</h2>
            <p className="text-white text-lg leading-relaxed mb-4">
              <strong className="text-white">Adatkezelés célja:</strong> A kapcsolatfelvétel kezelése, az ügyfél kérésének megválaszolása, egyeztetés.
            </p>
            <p className="text-white text-lg leading-relaxed">
              <strong className="text-white">Jogalap:</strong> Az érintett hozzájárulása (GDPR 6. cikk (1) bekezdés a) pont) illetve az adatkezelő jogos érdeke (GDPR 6. cikk (1) bekezdés f) pont) – a kapcsolatfelvételi kérés kezelése.
            </p>
          </section>

          <section className="bg-[#0F1620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. Megőrzési idő</h2>
            <p className="text-white text-lg leading-relaxed">
              Az adatokat addig őrizzük meg, ameddig az adatkezelés célja fennáll, vagy az érintett kérésére törlésre kerülnek. Amennyiben szerződés jön létre, az adatokat a szerződés teljesítéséig és a szerződés megszűnését követően a számviteli törvény előírásainak megfelelően, általában 8 évig tároljuk.
            </p>
          </section>

          <section className="bg-[#0F1620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. Adattovábbítás / adatfeldolgozók</h2>
            <p className="text-white text-lg leading-relaxed">
              Az adatokat harmadik félnek nem továbbítjuk, kivéve, ha azt törvény írja elő. Az adatok tárolása során adatfeldolgozókat használhatunk (pl. hosting szolgáltató), akikkel adatfeldolgozási szerződés került megkötésre.
            </p>
          </section>

          <section className="bg-[#0F1620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">6. Érintetti jogok</h2>
            <p className="text-white text-lg leading-relaxed mb-4">Az érintett a következő jogokkal rendelkezik:</p>
            <ul className="list-disc pl-6 space-y-3 text-white text-lg leading-relaxed mb-6">
              <li>Hozzáférési jog</li>
              <li>Helyesbítési jog</li>
              <li>Törléshez való jog ("elfeledtetéshez való jog")</li>
              <li>Az adatkezelés korlátozásához való jog</li>
              <li>Az adathordozhatósághoz való jog</li>
              <li>Tiltakozási jog</li>
              <li>Hozzájárulás visszavonása</li>
            </ul>
            <p className="text-white text-lg leading-relaxed">
              Jogait gyakorolhatja az{" "}
              <a href="mailto:info@nexensites.hu" className="text-[#7C5CFF] hover:text-[#50AEDF] underline transition-colors font-semibold">
                info@nexensites.hu
              </a>{" "}
              email címen keresztül, vagy panaszt tehet az adatvédelmi hatóságnál (Nemzeti Adatvédelmi és Információszabadság Hatóság, NAIH).
            </p>
          </section>

          <section className="bg-[#0F1620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">7. Kapcsolat</h2>
            <p className="text-white text-lg leading-relaxed mb-4">
              Az adatkezeléssel kapcsolatos kérdéseivel az alábbi elérhetőségeken fordulhat hozzánk:
            </p>
            <p className="text-white text-lg leading-relaxed">
              <strong className="text-white">Email:</strong>{" "}
              <a href="mailto:info@nexensites.hu" className="text-[#7C5CFF] hover:text-[#50AEDF] underline transition-colors">
                info@nexensites.hu
              </a>
              <br />
              <strong className="text-white">Telefon:</strong>{" "}
              <a href="tel:+36705767845" className="text-[#7C5CFF] hover:text-[#50AEDF] underline transition-colors">
                +36 70 576 7845
              </a>
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
