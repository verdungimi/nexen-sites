"use client";

import Link from "next/link";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";

export default function ThankYouPage() {
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
            Köszönjük az érdeklődésed!
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Megkaptuk az adataidat. Hamarosan felvesszük veled a kapcsolatot a megadott elérhetőségeken, hogy megbeszéljük a projekt részleteit.
          </p>
          <p className="text-base text-gray-600 mb-8">
            Ha sürgős a kérdésed, írj nekünk közvetlenül:{" "}
            <a href="mailto:info@nexensites.hu" className="text-primary-500 hover:underline font-medium">
              info@nexensites.hu
            </a>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/" variant="primary">
              Vissza a kezdőlapra
            </CTAButton>
            <CTAButton href="/book" variant="secondary">
              Új kérés küldése
            </CTAButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
