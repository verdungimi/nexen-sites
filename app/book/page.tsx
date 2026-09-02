"use client";

import { useState, useMemo, FormEvent } from "react";
import { useRouter } from "next/navigation";
import FinAIHero from "@/components/FinAIHero";

const TIME_SLOTS = ["09:00", "11:00", "13:00", "15:00", "17:00"];

function getAvailableDays(count: number) {
  const days: Date[] = [];
  const cursor = new Date();
  cursor.setDate(cursor.getDate() + 1);
  while (days.length < count) {
    const day = cursor.getDay();
    if (day !== 0 && day !== 6) {
      days.push(new Date(cursor));
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return days;
}

export default function BookPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const availableDays = useMemo(() => getAvailableDays(10), []);

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
      selectedDate: selectedDate ? selectedDate.toISOString() : undefined,
      selectedTime: selectedTime || undefined,
    };

    // Validation
    const newErrors: Record<string, string> = {};
    if (!data.name) newErrors.name = "A név kötelező";
    if (!data.email) newErrors.email = "Az email kötelező";
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email as string)) {
      newErrors.email = "Érvénytelen email cím";
    }
    if (!data.phone) newErrors.phone = "A telefonszám kötelező";
    if (!selectedDate || !selectedTime) newErrors.timeslot = "Válassz egy előnyben részesített időpontot";
    if (!data.privacyAccepted) newErrors.privacy = "Az adatvédelmi tájékoztató elfogadása kötelező";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    // Send email directly via API
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        // Handle validation errors
        if (result.errors) {
          setErrors(result.errors);
        } else {
          const errorMessage = result.error || result.details || result.message || "Hiba történt az email küldése során. Kérjük, próbáld újra.";
          setErrors({ submit: errorMessage });
        }
        setIsSubmitting(false);
        return;
      }

      // Success - redirect to thank you page
      router.push("/thank-you");
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
            <span className="block text-[#F3EFE6]">
              Időpont
            </span>
            <span className="block text-[#F2A93B] mt-2 leading-tight">
              Foglalása
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#A69F91] mb-4 max-w-2xl mx-auto font-light leading-relaxed">
            Töltsd ki az űrlapot, és felvesszük veled a kapcsolatot, hogy megbeszéljük a projekt részleteit és a lehetőségeket.
          </p>
          <p className="text-base text-[#A69F91] mt-2 max-w-2xl mx-auto font-light">
            Hamarosan felvesszük veled a kapcsolatot az általad megadott elérhetőségeken.
          </p>
          <p className="text-sm text-[#F2A93B] mt-4 font-medium">
            ⚠️ Ezzel az ajánlattal havonta csak 3 új ügyfelet vállalunk.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#17151C]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl shadow-lg p-8 md:p-10">
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-[#F3EFE6] mb-2">
                Név <span className="text-[#EF4444]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={`w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border rounded-xl text-white placeholder-[#A69F91] focus:ring-2 focus:ring-[#F2A93B] focus:border-[#F2A93B] transition-all ${
                  errors.name ? "border-[#EF4444]" : "border-[rgba(255,255,255,0.1)]"
                }`}
                placeholder="Pl. Kovács János"
              />
              {errors.name && <p className="mt-1 text-sm text-[#EF4444]">{errors.name}</p>}
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-[#F3EFE6] mb-2">
                Cégnév
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl text-white placeholder-[#A69F91] focus:ring-2 focus:ring-[#F2A93B] focus:border-[#F2A93B] transition-all"
                placeholder="Pl. Kovács Kft."
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#F3EFE6] mb-2">
                Email <span className="text-[#EF4444]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={`w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border rounded-xl text-white placeholder-[#A69F91] focus:ring-2 focus:ring-[#F2A93B] focus:border-[#F2A93B] transition-all ${
                  errors.email ? "border-[#EF4444]" : "border-[rgba(255,255,255,0.1)]"
                }`}
                placeholder="pelda@email.hu"
              />
              {errors.email && <p className="mt-1 text-sm text-[#EF4444]">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-[#F3EFE6] mb-2">
                Telefonszám <span className="text-[#EF4444]">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="+36 70 123 4567"
                className={`w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border rounded-xl text-white placeholder-[#A69F91] focus:ring-2 focus:ring-[#F2A93B] focus:border-[#F2A93B] transition-all ${
                  errors.phone ? "border-[#EF4444]" : "border-[rgba(255,255,255,0.1)]"
                }`}
              />
              {errors.phone && <p className="mt-1 text-sm text-[#EF4444]">{errors.phone}</p>}
            </div>

            {/* Date & Time Picker */}
            <div>
              <label className="block text-sm font-semibold text-[#F3EFE6] mb-2">
                Előnyben részesített időpont <span className="text-[#EF4444]">*</span>
              </label>
              <p className="text-xs text-[#A69F91] mb-3">
                Válassz egy napot és időpontot – a konzultációt ekkorra próbáljuk egyeztetni, majd emailben/telefonon visszaigazoljuk.
              </p>

              <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
                {availableDays.map((day) => {
                  const isSelected = selectedDate?.toDateString() === day.toDateString();
                  return (
                    <button
                      key={day.toISOString()}
                      type="button"
                      onClick={() => {
                        setSelectedDate(day);
                        setSelectedTime(null);
                      }}
                      className={`flex-shrink-0 flex flex-col items-center justify-center w-16 h-16 rounded-xl border transition-all ${
                        isSelected
                          ? "bg-gradient-to-br from-[#F2A93B] to-[#2DD4BF] border-transparent text-white"
                          : "bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.1)] text-[#F3EFE6] hover:border-[#F2A93B]/50"
                      }`}
                    >
                      <span className="text-[10px] uppercase tracking-wide opacity-80">
                        {day.toLocaleDateString("hu-HU", { weekday: "short" })}
                      </span>
                      <span className="text-lg font-bold leading-none mt-1">{day.getDate()}</span>
                      <span className="text-[10px] opacity-80">
                        {day.toLocaleDateString("hu-HU", { month: "short" })}
                      </span>
                    </button>
                  );
                })}
              </div>

              {selectedDate && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                        selectedTime === slot
                          ? "bg-[#F2A93B] border-transparent text-[#0a0a0a]"
                          : "bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.1)] text-[#F3EFE6] hover:border-[#2DD4BF]/50"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              )}

              {errors.timeslot && <p className="mt-2 text-sm text-[#EF4444]">{errors.timeslot}</p>}
            </div>

            {/* Purpose */}
            <div>
              <label htmlFor="purpose" className="block text-sm font-semibold text-[#F3EFE6] mb-2">
                Weboldal célja
              </label>
              <select
                id="purpose"
                name="purpose"
                className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl text-white focus:ring-2 focus:ring-[#F2A93B] focus:border-[#F2A93B] transition-all"
              >
                <option value="" className="bg-[#17151C]">Válassz...</option>
                <option value="landing" className="bg-[#17151C]">Landing Page</option>
                <option value="corporate" className="bg-[#17151C]">Céges weboldal</option>
                <option value="expansion" className="bg-[#17151C]">Bővítés</option>
                <option value="unknown" className="bg-[#17151C]">Nem tudom</option>
              </select>
            </div>

            {/* Deadline */}
            <div>
              <label htmlFor="deadline" className="block text-sm font-semibold text-[#F3EFE6] mb-2">
                Határidő
              </label>
              <select
                id="deadline"
                name="deadline"
                className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl text-white focus:ring-2 focus:ring-[#F2A93B] focus:border-[#F2A93B] transition-all"
              >
                <option value="" className="bg-[#17151C]">Válassz...</option>
                <option value="asap" className="bg-[#17151C]">ASAP</option>
                <option value="1-2weeks" className="bg-[#17151C]">1-2 hét</option>
                <option value="1month+" className="bg-[#17151C]">1 hónap+</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-[#F3EFE6] mb-2">
                Rövid leírás
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl text-white placeholder-[#A69F91] focus:ring-2 focus:ring-[#F2A93B] focus:border-[#F2A93B] transition-all resize-none"
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
                  className={`mt-1 w-5 h-5 bg-[rgba(255,255,255,0.05)] border rounded text-[#F2A93B] focus:ring-[#F2A93B] focus:ring-2 cursor-pointer ${
                    errors.privacy ? "border-[#EF4444]" : "border-[rgba(255,255,255,0.1)]"
                  }`}
                />
                <span className="text-sm text-[#A69F91] leading-relaxed">
                  Elfogadom az{" "}
                  <a href="/privacy" target="_blank" className="text-[#F2A93B] hover:text-[#2DD4BF] underline transition-colors">
                    Adatvédelmi tájékoztatót
                  </a>{" "}
                  <span className="text-[#EF4444]">*</span>
                </span>
              </label>
              {errors.privacy && <p className="mt-1 text-sm text-[#EF4444]">{errors.privacy}</p>}
            </div>

            {/* Submit Error */}
            {errors.submit && (
              <div className="bg-[rgba(239,68,68,0.1)] border border-[#EF4444]/30 rounded-xl p-4">
                <p className="text-sm text-[#EF4444]">{errors.submit}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-[#F2A93B] text-[#0a0a0a] rounded-lg font-semibold text-base hover:bg-[#f0b658] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F2A93B] focus:ring-offset-2 focus:ring-offset-[#17151C] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Küldés..." : "Időpontot kérek"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
