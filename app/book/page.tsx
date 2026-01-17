"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import FinAIHero from "@/components/FinAIHero";

export default function BookPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      purpose: formData.get("purpose"),
      deadline: formData.get("deadline"),
      description: formData.get("description"),
      privacyAccepted: formData.get("privacy") === "on",
    };

    // Validation
    const newErrors: Record<string, string> = {};
    if (!data.name) newErrors.name = "A név kötelező";
    if (!data.email) newErrors.email = "Az email kötelező";
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email as string)) {
      newErrors.email = "Érvénytelen email cím";
    }
    if (!data.phone) newErrors.phone = "A telefonszám kötelező";
    if (!data.privacyAccepted) newErrors.privacy = "Az adatvédelmi tájékoztató elfogadása kötelező";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    // Save to localStorage for calendar page
    localStorage.setItem("bookingData", JSON.stringify(data));

    // Navigate to calendar page
    try {
      router.push("/calendar");
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ submit: "Hiba történt. Kérjük, próbáld újra." });
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen relative pt-24 pb-16 px-4 overflow-hidden">
      <FinAIHero />
      
      <div className="max-w-2xl mx-auto relative z-10" style={{ pointerEvents: 'auto' }}>
        <div className="text-center mb-16 pb-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white leading-tight">
            <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Időpont
            </span>
            <span className="block bg-gradient-to-r from-[#7C5CFF] via-[#50AEDF] to-[#7C5CFF] bg-clip-text text-transparent mt-2 leading-tight">
              Foglalása
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#A8B3C7] mb-4 max-w-2xl mx-auto font-light leading-relaxed">
            Töltsd ki az űrlapot, és felvesszük veled a kapcsolatot, hogy megbeszéljük a projekt részleteit és a lehetőségeket.
          </p>
          <p className="text-sm text-[#7C5CFF] mt-4 font-medium">
            ⚠️ Ezzel az ajánlattal havonta csak 3 új ügyfelet vállalunk.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#0F1620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl shadow-lg p-8 md:p-10">
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-[#EAF0FF] mb-2">
                Név <span className="text-[#ED5096]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={`w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border rounded-xl text-white placeholder-[#A8B3C7] focus:ring-2 focus:ring-[#7C5CFF] focus:border-[#7C5CFF] transition-all ${
                  errors.name ? "border-[#ED5096]" : "border-[rgba(255,255,255,0.1)]"
                }`}
                placeholder="Pl. Kovács János"
              />
              {errors.name && <p className="mt-1 text-sm text-[#ED5096]">{errors.name}</p>}
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-[#EAF0FF] mb-2">
                Cégnév
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl text-white placeholder-[#A8B3C7] focus:ring-2 focus:ring-[#7C5CFF] focus:border-[#7C5CFF] transition-all"
                placeholder="Pl. Kovács Kft."
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#EAF0FF] mb-2">
                Email <span className="text-[#ED5096]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={`w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border rounded-xl text-white placeholder-[#A8B3C7] focus:ring-2 focus:ring-[#7C5CFF] focus:border-[#7C5CFF] transition-all ${
                  errors.email ? "border-[#ED5096]" : "border-[rgba(255,255,255,0.1)]"
                }`}
                placeholder="pelda@email.hu"
              />
              {errors.email && <p className="mt-1 text-sm text-[#ED5096]">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-[#EAF0FF] mb-2">
                Telefonszám <span className="text-[#ED5096]">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="+36 70 123 4567"
                className={`w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border rounded-xl text-white placeholder-[#A8B3C7] focus:ring-2 focus:ring-[#7C5CFF] focus:border-[#7C5CFF] transition-all ${
                  errors.phone ? "border-[#ED5096]" : "border-[rgba(255,255,255,0.1)]"
                }`}
              />
              {errors.phone && <p className="mt-1 text-sm text-[#ED5096]">{errors.phone}</p>}
            </div>

            {/* Purpose */}
            <div>
              <label htmlFor="purpose" className="block text-sm font-semibold text-[#EAF0FF] mb-2">
                Weboldal célja
              </label>
              <select
                id="purpose"
                name="purpose"
                className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl text-white focus:ring-2 focus:ring-[#7C5CFF] focus:border-[#7C5CFF] transition-all"
              >
                <option value="" className="bg-[#0F1620]">Válassz...</option>
                <option value="landing" className="bg-[#0F1620]">Landing Page</option>
                <option value="corporate" className="bg-[#0F1620]">Céges weboldal</option>
                <option value="expansion" className="bg-[#0F1620]">Bővítés</option>
                <option value="unknown" className="bg-[#0F1620]">Nem tudom</option>
              </select>
            </div>

            {/* Deadline */}
            <div>
              <label htmlFor="deadline" className="block text-sm font-semibold text-[#EAF0FF] mb-2">
                Határidő
              </label>
              <select
                id="deadline"
                name="deadline"
                className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl text-white focus:ring-2 focus:ring-[#7C5CFF] focus:border-[#7C5CFF] transition-all"
              >
                <option value="" className="bg-[#0F1620]">Válassz...</option>
                <option value="asap" className="bg-[#0F1620]">ASAP</option>
                <option value="1-2weeks" className="bg-[#0F1620]">1-2 hét</option>
                <option value="1month+" className="bg-[#0F1620]">1 hónap+</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-[#EAF0FF] mb-2">
                Rövid leírás
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl text-white placeholder-[#A8B3C7] focus:ring-2 focus:ring-[#7C5CFF] focus:border-[#7C5CFF] transition-all resize-none"
                placeholder="Írj röviden arról, milyen weboldalt szeretnél..."
              ></textarea>
            </div>

            {/* Privacy Checkbox */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="privacy"
                  required
                  className={`mt-1 w-5 h-5 bg-[rgba(255,255,255,0.05)] border rounded text-[#7C5CFF] focus:ring-[#7C5CFF] focus:ring-2 cursor-pointer ${
                    errors.privacy ? "border-[#ED5096]" : "border-[rgba(255,255,255,0.1)]"
                  }`}
                />
                <span className="text-sm text-[#A8B3C7] leading-relaxed">
                  Elfogadom az{" "}
                  <a href="/privacy" target="_blank" className="text-[#7C5CFF] hover:text-[#50AEDF] underline transition-colors">
                    Adatvédelmi tájékoztatót
                  </a>{" "}
                  <span className="text-[#ED5096]">*</span>
                </span>
              </label>
              {errors.privacy && <p className="mt-1 text-sm text-[#ED5096]">{errors.privacy}</p>}
            </div>

            {/* Submit Error */}
            {errors.submit && (
              <div className="bg-[rgba(237,80,150,0.1)] border border-[#ED5096]/30 rounded-xl p-4">
                <p className="text-sm text-[#ED5096]">{errors.submit}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-[#7C5CFF] to-[#50AEDF] text-white rounded-xl font-semibold text-base hover:shadow-[0_0_30px_rgba(124,92,255,0.6)] hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#7C5CFF] focus:ring-offset-2 focus:ring-offset-[#0F1620] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
            >
              {isSubmitting ? "Küldés..." : "Időpontot kérek"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
