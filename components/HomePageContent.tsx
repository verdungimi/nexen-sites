"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, ArrowRight, Clock, Shield, Sparkles, Zap, Rocket } from "lucide-react";
import HomePageStructuredData from "@/components/HomePageStructuredData";

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
      
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center relative pt-20 pb-16 px-4 overflow-hidden">
        {/* Background Gradient Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-[#50AEDF]/10 via-transparent to-[#7C5CFF]/10"></div>
        
        <div className="container-custom max-w-5xl text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Professzionális{" "}
              <span className="bg-gradient-to-r from-[#50AEDF] to-[#7C5CFF] bg-clip-text text-transparent">
                weboldal
              </span>{" "}
              10 nap alatt.
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Modern, gyors és üzleti célokra optimalizált weboldalakat készítünk –
              <br className="hidden md:block" />
              fizess csak akkor, ha elégedett vagy.
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="text-lg px-8 py-6">
                Kezdjük el a közös munkát
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Miért válassz minket Section */}
      <section id="why" className="py-20 relative">
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
      <section id="process" className="py-20 relative bg-gray-900/30">
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
      <section id="packages" className="py-20 relative">
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
                    <Button
                      variant={pkg.highlighted ? "default" : "outline"}
                      className="w-full"
                    >
                      Érdekel ez a csomag
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfólió Section */}
      <section id="portfolio" className="py-20 relative bg-gray-900/30">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Portfólió
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Nézd meg, mit készítettünk ügyfeleinknek
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 aspect-video hover:shadow-xl hover:shadow-[#50AEDF]/20 transition-all duration-300 cursor-pointer border border-gray-800 hover:border-[#50AEDF]/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#50AEDF]/20 to-[#7C5CFF]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    Projekt {item}
                  </span>
                </div>
                <div className="w-full h-full bg-gradient-to-br from-gray-700/50 to-gray-800/50" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Rólunk Section */}
      <section id="about" className="py-20 relative">
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
      <section id="contact" className="py-20 relative bg-gray-900/30">
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
