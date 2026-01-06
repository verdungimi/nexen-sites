"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import FinAIHero from "@/components/FinAIHero";

export default function CalendarPage() {
  const router = useRouter();
  const [bookingData, setBookingData] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("bookingData");
    if (data) {
      setBookingData(JSON.parse(data));
    } else {
      // If no booking data, redirect back to booking page
      router.push("/book");
    }
  }, [router]);

  const handleDateSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    if (!selectedDate || !selectedTime) {
      setErrors({ datetime: "Kérjük, válassz dátumot és időpontot!" });
      setIsSubmitting(false);
      return;
    }

    try {
      const payload = {
        ...bookingData,
        selectedDate,
        selectedTime,
      };

      console.log("Sending booking request:", payload);

      const response = await fetch("/api/send-booking-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("Response status:", response.status, response.statusText);

      const result = await response.json();
      console.log("Response data:", result);

      if (!response.ok || !result.success) {
        // Handle validation errors
        if (result.errors) {
          setErrors(result.errors);
        } else {
          const errorMessage = result.error || result.details || result.message || "Hiba történt az email küldése során. Kérjük, próbáld újra.";
          console.error("Booking error:", errorMessage);
          console.error("Full error response:", result);
          setErrors({ 
            submit: `Email küldési hiba: ${errorMessage}. Kérjük, ellenőrizd a konfigurációt vagy próbáld újra később.`
          });
        }
        setIsSubmitting(false);
        return;
      }

      console.log("Booking successful!");
      setIsSuccess(true);
      // Clear localStorage after successful submission
      localStorage.removeItem("bookingData");
      
      // Redirect to thank you page after 3 seconds
      setTimeout(() => {
        router.push("/thank-you");
      }, 3000);
    } catch (error) {
      console.error("Error submitting date:", error);
      const errorMessage = error instanceof Error 
        ? error.message 
        : "Hiba történt. Kérjük, próbáld újra.";
      setErrors({ 
        submit: errorMessage
      });
      setIsSubmitting(false);
    }
  };

  // Generate available time slots
  const timeSlots = [];
  for (let hour = 9; hour <= 17; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const timeString = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
      timeSlots.push(timeString);
    }
  }

  // Get minimum date (today)
  const today = new Date();
  const minDate = today.toISOString().split("T")[0];

  if (!bookingData) {
    return (
      <section className="min-h-screen relative pt-24 pb-16 px-4 overflow-hidden">
        <FinAIHero />
        <div className="max-w-2xl mx-auto relative z-10 text-center">
          <p className="text-white">Betöltés...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen relative pt-24 pb-16 px-4 overflow-hidden">
      <FinAIHero />
      
      <div className="max-w-5xl mx-auto relative z-10" style={{ pointerEvents: 'auto' }}>
        <div className="text-center mb-12 pb-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white leading-tight">
            <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Időpont
            </span>
            <span className="block bg-gradient-to-r from-[#7C5CFF] via-[#50AEDF] to-[#7C5CFF] bg-clip-text text-transparent mt-2 leading-tight">
              Választása
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#A8B3C7] mb-4 max-w-2xl mx-auto font-light leading-relaxed">
            Válassz egy dátumot és időpontot, amikor szeretnél találkozni velünk.
          </p>
        </div>

        {isSuccess ? (
          <div className="bg-[#0F1620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl shadow-lg p-8 md:p-10 text-center">
            <div className="mb-6">
              <svg
                className="w-16 h-16 text-[#7C5CFF] mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Sikeres időpontfoglalás!
            </h2>
            <p className="text-lg text-[#A8B3C7] mb-6">
              Emailt küldtünk a részletekről. Hamarosan átirányítunk...
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Google Calendar Embed */}
            <div className="bg-[#0F1620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl shadow-lg p-6">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                Naptár
              </h2>
              <div className="aspect-square w-full rounded-xl overflow-hidden mb-4">
                <iframe
                  src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FBudapest&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0"
                  style={{ border: 0, width: "100%", height: "100%" }}
                  frameBorder="0"
                  scrolling="no"
                ></iframe>
              </div>
              <a
                href="https://calendar.app.google/vzsa7ELQRad7jjFu8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 bg-gradient-to-r from-[#7C5CFF] to-[#50AEDF] text-white rounded-xl font-semibold text-sm hover:shadow-[0_0_30px_rgba(124,92,255,0.6)] hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#7C5CFF] focus:ring-offset-2 focus:ring-offset-[#0F1620] flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Időpont foglalása Google Calendar-ban
              </a>
            </div>

            {/* Date and Time Selection Form */}
            <div className="bg-[#0F1620]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl shadow-lg p-8 md:p-10">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
                Válassz időpontot
              </h2>
              
              <form onSubmit={handleDateSubmit} className="space-y-6">
                {/* Date Selection */}
                <div>
                  <label htmlFor="date" className="block text-sm font-semibold text-[#EAF0FF] mb-2">
                    Dátum <span className="text-[#ED5096]">*</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    min={minDate}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className={`w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border rounded-xl text-white focus:ring-2 focus:ring-[#7C5CFF] focus:border-[#7C5CFF] transition-all ${
                      errors.datetime ? "border-[#ED5096]" : "border-[rgba(255,255,255,0.1)]"
                    }`}
                  />
                  {errors.datetime && <p className="mt-1 text-sm text-[#ED5096]">{errors.datetime}</p>}
                </div>

                {/* Time Selection */}
                <div>
                  <label htmlFor="time" className="block text-sm font-semibold text-[#EAF0FF] mb-2">
                    Időpont <span className="text-[#ED5096]">*</span>
                  </label>
                  <select
                    id="time"
                    name="time"
                    required
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className={`w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border rounded-xl text-white focus:ring-2 focus:ring-[#7C5CFF] focus:border-[#7C5CFF] transition-all ${
                      errors.datetime ? "border-[#ED5096]" : "border-[rgba(255,255,255,0.1)]"
                    }`}
                  >
                    <option value="" className="bg-[#0F1620]">Válassz időpontot...</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time} className="bg-[#0F1620]">
                        {time}
                      </option>
                    ))}
                  </select>
                  {errors.datetime && !selectedDate && <p className="mt-1 text-sm text-[#ED5096]">{errors.datetime}</p>}
                </div>

                {/* Booking Summary */}
                <div className="bg-[rgba(124,92,255,0.1)] border border-[rgba(124,92,255,0.3)] rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-[#EAF0FF] mb-2">Foglalás összefoglalója</h3>
                  <div className="text-sm text-[#A8B3C7] space-y-1">
                    <p><span className="text-white">Név:</span> {bookingData.name}</p>
                    {bookingData.company && <p><span className="text-white">Cég:</span> {bookingData.company}</p>}
                    <p><span className="text-white">Email:</span> {bookingData.email}</p>
                    <p><span className="text-white">Telefon:</span> {bookingData.phone}</p>
                  </div>
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
                  {isSubmitting ? "Küldés..." : "Időpont megerősítése"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

