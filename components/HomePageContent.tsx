"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, ArrowRight, Clock, Shield, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import FinAIHero from "@/components/FinAIHero";
import HomePageStructuredData from "@/components/HomePageStructuredData";
import DarkVeil from "@/components/DarkVeil.jsx";
import "@/components/DarkVeil.css";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: "success",
          message: "Üzenet sikeresen elküldve! Hamarosan felvesszük veled a kapcsolatot.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Hiba történt. Kérjük, próbáld újra.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Hiba történt az üzenet küldése során. Kérjük, próbáld később.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-gray-800 hover:border-gray-700 transition-colors">
      <CardHeader>
        <CardTitle>Küldj üzenetet</CardTitle>
        <CardDescription>Írj nekünk, és hamarosan válaszolunk!</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Neved"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Email címed"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="Üzeneted"
              rows={6}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            />
          </div>
          {submitStatus.message && (
            <div
              className={`p-3 rounded-lg text-sm ${
                submitStatus.type === "success"
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : "bg-red-500/20 text-red-400 border border-red-500/30"
              }`}
            >
              {submitStatus.message}
            </div>
          )}
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Küldés..." : "Küldés"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default function HomePageContent() {
  return (
    <>
      <HomePageStructuredData />
      
      {/* Hero Section - Fin AI Style */}
      <section className="min-h-screen flex items-center justify-center relative pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-6 overflow-hidden">
        {/* DarkVeil - Only on desktop */}
        <div className="hidden md:block fixed inset-0 w-full h-full" style={{ zIndex: 1, pointerEvents: 'none' }}>
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
        
        <div className="max-w-7xl mx-auto relative z-20 w-full" style={{ pointerEvents: 'auto' }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
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
            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 md:mb-8 leading-[1.1] tracking-tight break-words">
              <span className="inline-block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-fade-in whitespace-nowrap">
                Professzionális
              </span>
              <span className="block bg-gradient-to-r from-[#7C5CFF] via-[#50AEDF] to-[#7C5CFF] bg-clip-text text-transparent mt-1 md:mt-2 animate-fade-in-delay">
                weboldal
              </span>
              <span className="block text-white mt-1 md:mt-2 animate-fade-in-delay-2">
                10 nap alatt, kockázat nélkül.
              </span>
            </h1>

            {/* Subheadline - Minimal */}
            <p className="hero-subtitle text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 md:mb-12 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-delay-2 px-2">
              Modern, gyors és eredményorientált weboldalakat készítünk vállalkozásoknak – fizetsz csak akkor, ha elégedett vagy.
            </p>

            {/* CTAs - Minimal */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-16 animate-fade-in-delay-2 px-2">
              <CTAButton href="/#contact" variant="primary" className="text-sm md:text-base px-8 md:px-10 py-4 md:py-5 w-full sm:w-auto min-w-[180px] md:min-w-[200px]">
                Kérj ingyenes konzultációt
              </CTAButton>
              <CTAButton href="/packages" variant="secondary" className="text-sm md:text-base px-8 md:px-10 py-4 md:py-5 w-full sm:w-auto min-w-[180px] md:min-w-[200px]">
                Csomagok Megtekintése
              </CTAButton>
            </div>

            {/* Trust badges - Enhanced style with animations */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-12 mt-12 md:mt-20 px-2">
              <div className="text-center px-6 py-4 md:px-8 md:py-6 backdrop-blur-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl shadow-lg hover:border-[#7C5CFF]/50 hover:shadow-[0_0_30px_rgba(124,92,255,0.3)] hover:scale-105 transition-all duration-500 animate-float-up group">
                <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 group-hover:text-[#7C5CFF] transition-colors duration-500 group-hover:scale-110 transition-transform duration-300">10</div>
                <div className="text-xs md:text-sm lg:text-base text-[#EAF0FF] font-semibold">Napos szállítás</div>
              </div>
              <div className="text-center px-6 py-4 md:px-8 md:py-6 backdrop-blur-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl shadow-lg hover:border-[#50AEDF]/50 hover:shadow-[0_0_30px_rgba(80,174,223,0.3)] hover:scale-105 transition-all duration-500 animate-float-up-delay-1 group">
                <div className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#7C5CFF] to-[#50AEDF] bg-clip-text text-transparent mb-2 group-hover:from-[#50AEDF] group-hover:to-[#7C5CFF] transition-all duration-500 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-xs md:text-sm lg:text-base text-[#EAF0FF] font-semibold">Prémium minőség</div>
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

      {/* Miért válassz minket Section */}
      <section id="why" className="py-20 relative z-10">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Miért a NexenSites?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Amiért számos vállalkozás bízik bennünk
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Clock,
                title: "10 nap alatt kész projekt",
                description: "Teljes projekt átadás 10 napon belül – gyors, de nem sietősen.",
              },
              {
                icon: Shield,
                title: "Elégedettségi garancia",
                description: "Fizess csak akkor, ha elégedett vagy az eredménnyel.",
              },
              {
                icon: Sparkles,
                title: "Teljesen egyedi design",
                description: "Minden weboldal egyedi, üzletedre szabott megjelenéssel.",
              },
              {
                icon: Zap,
                title: "SEO & mobiloptimalizált",
                description: "Kész a teljesítésre az első naptól, minden eszközön.",
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full border-gray-800 hover:border-[#50AEDF]/50 hover:shadow-lg hover:shadow-[#50AEDF]/10 transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#50AEDF]/20 to-[#7C5CFF]/20 flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-[#50AEDF]" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-gray-400">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* A folyamat Section */}
      <section id="process" className="py-20 relative bg-gray-900/30 z-10">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              A folyamat
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Egyszerű, átlátható lépések az eredményig
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connection line - hidden on mobile */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#50AEDF]/50 to-transparent" />
            
            <div className="grid md:grid-cols-4 gap-8 relative">
              {[
                {
                  step: "01",
                  title: "Konzultáció",
                  description: "Megbeszéljük a célokat, vállalkozásod arculatát és igényeidet, hogy tökéletesen megértsük a víziódat.",
                },
                {
                  step: "02",
                  title: "Tervezés és fejlesztés",
                  description: "Csapatunk egyedi dizájnt készít és modern technológiákkal építi fel a weboldaladat.",
                },
                {
                  step: "03",
                  title: "Tesztelés és visszajelzés",
                  description: "Átnézed a weboldalt, visszajelzést adsz, mi pedig finomítjuk a részleteket.",
                },
                {
                  step: "04",
                  title: "Indítás és támogatás",
                  description: "Elindítjuk a weboldaladat és biztosítjuk, hogy minden tökéletesen működjön.",
                },
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#50AEDF] to-[#7C5CFF] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10 shadow-lg shadow-[#50AEDF]/30">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {process.title}
                  </h3>
                  <p className="text-gray-400">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Csomagok Section */}
      <section id="packages" className="py-20 relative z-10">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Válaszd ki a csomagod
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Minden vállalkozásnak megfelelő megoldás
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Starter",
                description: "Kisebb vállalkozásoknak és egyéni vállalkozóknak.",
                features: [
                  "Egy oldalas design",
                  "Mobilbarát verzió",
                  "Kapcsolati űrlap",
                  "Alap SEO beállítás",
                  "10 napos szállítás",
                ],
                highlighted: false,
              },
              {
                name: "Profi",
                description: "Növekvő vállalkozásoknak, akik több oldalra és funkcióra van szükségük.",
                features: [
                  "3-5 oldalas weboldal",
                  "Egyedi design",
                  "CMS integráció",
                  "Fejlett SEO",
                  "Analytics beállítás",
                  "Egyedi animációk",
                  "10 napos szállítás",
                ],
                highlighted: true,
              },
              {
                name: "Prémium",
                description: "Kialakult vállalkozásoknak, akik komplex megoldást keresnek.",
                features: [
                  "7-10 oldalas weboldal",
                  "Teljes SEO optimalizálás",
                  "Egyedi integrációk",
                  "Prémium animációk",
                  "Folyamatos támogatás",
                  "10 napos szállítás",
                ],
                highlighted: false,
              },
            ].map((pkg, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
              >
                <Card
                  className={`h-full transition-all duration-300 ${
                    pkg.highlighted
                      ? "border-2 border-[#50AEDF] shadow-xl shadow-[#50AEDF]/20 scale-105"
                      : "border-gray-800 hover:border-gray-700"
                  }`}
                >
                  <CardHeader>
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      {pkg.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-[#50AEDF] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <CTAButton
                      href="/kapcsolat"
                      variant={pkg.highlighted ? "primary" : "secondary"}
                      className="w-full"
                    >
                      Érdekel ez a csomag
                    </CTAButton>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rólunk Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Rólunk
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Célunk, hogy vállalkozásod online jelenléte olyan legyen, ami valóban értékes ügyfeleket hoz. 
              Nem csak weboldalt készítünk – <span className="text-[#50AEDF] font-semibold">eredményt építünk</span>.
              <br /><br />
              Tapasztalt csapatunk minden projektet egyedi figyelemmel kezel, és az üzleti célokra fókuszálva 
              dolgozik. Megbízható partnere vagyunk a sikeres online megjelenéshez.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Kapcsolat Section */}
      <section id="contact" className="py-20 relative bg-gray-900/30 z-10">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Lépj kapcsolatba velünk
            </h2>
            <p className="text-lg text-gray-400">
              Készen állsz a projekted elkezdésére? Beszéljük meg!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <ContactForm />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Elérhetőségek
                </h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <p className="font-semibold mb-1 text-white">Email</p>
                    <a
                      href="mailto:info@nexensites.hu"
                      className="text-[#50AEDF] hover:text-[#4098cc] transition-colors"
                    >
                      info@nexensites.hu
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-white">Telefon</p>
                    <a
                      href="tel:+36705767845"
                      className="text-[#50AEDF] hover:text-[#4098cc] transition-colors"
                    >
                      +36 70 576 7845
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-white">Helyszín</p>
                    <p className="text-gray-400">Kecskemét, Magyarország</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
