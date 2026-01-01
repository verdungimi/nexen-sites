"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";

export default function ThankYouPage() {
  const [bookingData, setBookingData] = useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem("bookingData");
    if (data) {
      setBookingData(JSON.parse(data));
      // Clear after reading
      localStorage.removeItem("bookingData");
    }
  }, []);

  const copyToClipboard = () => {
    if (!bookingData) return;
    const summary = `Név: ${bookingData.name}\nCégnév: ${bookingData.company || "N/A"}\nEmail: ${bookingData.email}\nTelefon: ${bookingData.phone}\nWeboldal célja: ${bookingData.purpose || "N/A"}\nHatáridő: ${bookingData.deadline || "N/A"}\nLeírás: ${bookingData.description || "N/A"}`;
    navigator.clipboard.writeText(summary);
    alert("Összefoglaló másolva a vágólapra!");
  };

  return (
    <Section background="gradient" className="pt-24 pb-16 md:pt-32">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border border-gray-200">
          <div className="mb-6">
            <svg
              className="w-16 h-16 text-primary-600 mx-auto"
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

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Megkaptuk — hamarosan jelentkezünk.
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Ha gyorsítani akarsz: írd meg röviden, milyen weboldalt szeretnél, és küldd el e-mailben{" "}
            <a href="mailto:verdungimre@nexensites.hu" className="text-primary-500 hover:underline">
              verdungimre@nexensites.hu
            </a>
          </p>

          {bookingData && (
            <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Összefoglaló</h2>
                <button
                  onClick={copyToClipboard}
                  className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                >
                  Másolás
                </button>
              </div>
              <dl className="space-y-2 text-sm">
                <div>
                  <dt className="font-medium text-gray-700">Név:</dt>
                  <dd className="text-gray-900">{bookingData.name}</dd>
                </div>
                {bookingData.company && (
                  <div>
                    <dt className="font-medium text-gray-700">Cégnév:</dt>
                    <dd className="text-gray-900">{bookingData.company}</dd>
                  </div>
                )}
                <div>
                  <dt className="font-medium text-gray-700">Email:</dt>
                  <dd className="text-gray-900">{bookingData.email}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Telefon:</dt>
                  <dd className="text-gray-900">{bookingData.phone}</dd>
                </div>
                {bookingData.purpose && (
                  <div>
                    <dt className="font-medium text-gray-700">Weboldal célja:</dt>
                    <dd className="text-gray-900">
                      {bookingData.purpose === "landing" && "Landing"}
                      {bookingData.purpose === "corporate" && "Céges weboldal"}
                      {bookingData.purpose === "expansion" && "Bővítés"}
                      {bookingData.purpose === "unknown" && "Nem tudom"}
                    </dd>
                  </div>
                )}
                {bookingData.deadline && (
                  <div>
                    <dt className="font-medium text-gray-700">Határidő:</dt>
                    <dd className="text-gray-900">
                      {bookingData.deadline === "asap" && "ASAP"}
                      {bookingData.deadline === "1-2weeks" && "1-2 hét"}
                      {bookingData.deadline === "1month+" && "1 hónap+"}
                    </dd>
                  </div>
                )}
                {bookingData.description && (
                  <div>
                    <dt className="font-medium text-gray-700">Leírás:</dt>
                    <dd className="text-gray-900 whitespace-pre-wrap">{bookingData.description}</dd>
                  </div>
                )}
              </dl>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/" variant="primary">
              Vissza a kezdőlapra
            </CTAButton>
            <CTAButton href="/book" variant="secondary">
              Új időpont kérés
            </CTAButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
