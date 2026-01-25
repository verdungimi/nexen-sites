"use client";

import { useState } from "react";
import FinAIHero from "@/components/FinAIHero";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
              className="bg-gray-900/50 border-gray-800"
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
              className="bg-gray-900/50 border-gray-800"
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
              className="bg-gray-900/50 border-gray-800"
            />
          </div>
          {submitStatus.type && (
            <div
              className={`p-4 rounded-lg ${
                submitStatus.type === "success"
                  ? "bg-green-900/30 border border-green-700 text-green-400"
                  : "bg-red-900/30 border border-red-700 text-red-400"
              }`}
            >
              {submitStatus.message}
            </div>
          )}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#50AEDF] to-[#7C5CFF] hover:from-[#4098cc] hover:to-[#6b4dd1] text-white border-0"
          >
            {isSubmitting ? "Küldés..." : "Küldés"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default function KapcsolatPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center relative pt-32 pb-12 px-4">
        <FinAIHero />
        
        <div className="max-w-6xl mx-auto relative z-10" style={{ pointerEvents: 'auto' }}>
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Kapcsolat
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              Lépj velünk kapcsolatba – válaszolunk 24 órán belül
            </p>
          </div>
          
          {/* Quick contact info visible immediately */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-12">
            <div className="bg-[#0F1620]/50 backdrop-blur-sm border border-[rgba(255,255,255,0.1)] rounded-xl p-4 text-center hover:border-[#50AEDF]/50 transition-all">
              <Mail className="w-8 h-8 text-[#50AEDF] mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-1">Email</h3>
              <a href="mailto:info@nexensites.hu" className="text-[#50AEDF] hover:text-[#4098cc] text-sm transition-colors">
                info@nexensites.hu
              </a>
            </div>
            <div className="bg-[#0F1620]/50 backdrop-blur-sm border border-[rgba(255,255,255,0.1)] rounded-xl p-4 text-center hover:border-[#7C5CFF]/50 transition-all">
              <Phone className="w-8 h-8 text-[#50AEDF] mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-1">Telefon</h3>
              <a href="tel:+36705767845" className="text-[#50AEDF] hover:text-[#4098cc] text-sm transition-colors">
                +36 70 576 7845
              </a>
            </div>
            <div className="bg-[#0F1620]/50 backdrop-blur-sm border border-[rgba(255,255,255,0.1)] rounded-xl p-4 text-center hover:border-[#50AEDF]/50 transition-all">
              <MapPin className="w-8 h-8 text-[#50AEDF] mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-1">Helyszín</h3>
              <p className="text-gray-400 text-sm">Kecskemét</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Section id="contact" className="!pb-48 md:!pb-56">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#EAF0FF] mb-4">
              Lépj velünk kapcsolatba
            </h2>
            <p className="text-lg text-[#A8B3C7] max-w-2xl mx-auto">
              Írj nekünk üzenetet, vagy foglalj időpontot konzultációra
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
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
              <div className="bg-[#0F1620] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 hover:border-[#50AEDF]/30 hover:shadow-[0_0_20px_rgba(80,174,223,0.2)] transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#50AEDF]/20 to-[#7C5CFF]/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#50AEDF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#EAF0FF] mb-2">Email</h3>
                    <a href="mailto:info@nexensites.hu" className="text-[#A8B3C7] hover:text-[#50AEDF] transition-colors">
                      info@nexensites.hu
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#0F1620] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 hover:border-[#7C5CFF]/30 hover:shadow-[0_0_20px_rgba(124,92,255,0.2)] transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#50AEDF]/20 to-[#7C5CFF]/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#50AEDF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#EAF0FF] mb-2">Telefon</h3>
                    <a href="tel:+36705767845" className="text-[#A8B3C7] hover:text-[#50AEDF] transition-colors">
                      +36 70 576 7845
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#0F1620] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 hover:border-[#50AEDF]/30 hover:shadow-[0_0_20px_rgba(80,174,223,0.2)] transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#50AEDF]/20 to-[#7C5CFF]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#50AEDF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#EAF0FF] mb-2">Helyszín</h3>
                    <p className="text-[#A8B3C7]">
                      Kecskemét, Magyarország
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <CTAButton href="/book" variant="primary" className="w-full text-base py-5">
                  Időpont Foglalása
                </CTAButton>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
}
