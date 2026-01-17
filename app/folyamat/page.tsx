"use client";

import FinAIHero from "@/components/FinAIHero";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function FolyamatPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center relative pt-32 pb-12 px-4 overflow-hidden">
        <FinAIHero />
        
        <div className="max-w-6xl mx-auto relative z-10" style={{ pointerEvents: 'auto' }}>
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                A folyamat
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              Egyszerű, átlátható lépések az eredményig – 10 nap alatt professzionális weboldal
            </p>
          </div>
          
          {/* Quick overview - 4 steps visible immediately */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
            {[
              { step: "01", title: "Konzultáció", icon: "💬" },
              { step: "02", title: "Tervezés", icon: "🎨" },
              { step: "03", title: "Tesztelés", icon: "✅" },
              { step: "04", title: "Indítás", icon: "🚀" },
            ].map((item, index) => (
              <div key={index} className="bg-[#0F1620]/50 backdrop-blur-sm border border-[rgba(255,255,255,0.1)] rounded-xl p-4 text-center hover:border-[#50AEDF]/50 transition-all">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-xs md:text-sm text-[#50AEDF] font-bold mb-1">{item.step}</div>
                <div className="text-sm md:text-base text-white font-semibold">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <Section id="process-steps">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#EAF0FF] mb-4">
              Hogyan dolgozunk?
            </h2>
            <p className="text-lg text-[#A8B3C7] max-w-2xl mx-auto">
              Négy egyszerű lépés, amely biztosítja, hogy a weboldalad pontosan az legyen, amit elképzeltél.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection line - hidden on mobile */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#50AEDF]/50 to-transparent" />
            
            <div className="grid md:grid-cols-4 gap-6 md:gap-8 relative">
              {[
                {
                  step: "01",
                  title: "Konzultáció",
                  description: "Az első napon megbeszéljük a célokat, vállalkozásod arculatát és igényeidet. Összegyűjtjük a szükséges anyagokat (logo, szövegek, képek), hogy tökéletesen megértsük a víziódat.",
                  icon: "💬",
                },
                {
                  step: "02",
                  title: "Tervezés és fejlesztés",
                  description: "A következő napokban készítjük el a vázlatokat, a designnal, majd fejlesztjük a weboldalt modern technológiákkal. Egyedi designnal készítünk, amely tökéletesen tükrözi a vállalkozásod.",
                  icon: "🎨",
                },
                {
                  step: "03",
                  title: "Tesztelés és visszajelzés",
                  description: "Átnézed a weboldalt, visszajelzést adsz, mi pedig finomhangoljuk a részleteket. Biztosítjuk, hogy minden tökéletesen működjön minden eszközön.",
                  icon: "✅",
                },
                {
                  step: "04",
                  title: "Indítás és támogatás",
                  description: "Az utolsó napokban élőre helyezzük a weboldalt, és biztosítjuk, hogy minden tökéletesen működjön. Az átadás után is folyamatos támogatást nyújtunk.",
                  icon: "🚀",
                },
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  className="text-center relative mb-8"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#50AEDF] to-[#7C5CFF] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10 shadow-lg shadow-[#50AEDF]/30">
                    {process.step}
                  </div>
                  <div className="text-4xl mb-3">{process.icon}</div>
                  <h3 className="text-xl font-semibold text-[#EAF0FF] mb-3">
                    {process.title}
                  </h3>
                  <p className="text-[#A8B3C7] leading-relaxed">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Timeline Section */}
      <Section id="timeline" className="bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#EAF0FF] mb-4">
              10 napos időzítés
            </h2>
            <p className="text-lg text-[#A8B3C7] max-w-2xl mx-auto">
              Részletesen, naponta hogyan haladunk
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              { days: "1-2. nap", title: "Kickoff és anyaggyűjtés", description: "Konzultáció, igények megfogalmazása, anyagok összegyűjtése" },
              { days: "3-6. nap", title: "Design és fejlesztés", description: "Vázlatok készítése, design véglegesítése, fejlesztés" },
              { days: "7-9. nap", title: "Tesztelés és finomhangolás", description: "Funkcionális tesztelés, visszajelzések feldolgozása, módosítások" },
              { days: "10. nap", title: "Indítás", description: "Végső ellenőrzés, élőre helyezés, dokumentáció átadása" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="bg-[#0F1620] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 md:p-8 hover:border-[#7C5CFF]/30 hover:shadow-[0_0_20px_rgba(124,92,255,0.2)] transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#7C5CFF] to-[#50AEDF] rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <div className="text-sm text-[#50AEDF] font-semibold mb-1">{item.days}</div>
                    <h3 className="text-xl font-bold mb-2 text-[#EAF0FF]">{item.title}</h3>
                    <p className="text-[#A8B3C7] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section id="cta">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#EAF0FF]">
            Készen állsz, hogy elindítsuk?
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
