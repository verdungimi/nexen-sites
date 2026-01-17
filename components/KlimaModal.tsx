"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface KlimaProduct {
  id: number;
  name: string;
  power: string;
  price: string;
  description: string;
  features: string[];
  brand: string;
  image: string;
}

interface KlimaModalProps {
  product: KlimaProduct | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function KlimaModal({ product, isOpen, onClose }: KlimaModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop with fade animation */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Modal content with scale and fade animation */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors shadow-lg"
          aria-label="Bezárás"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
          {/* Left side - Image */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={`${product.name} klíma - ${product.power}`}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Right side - Details */}
          <div className="space-y-6">
            {/* Brand badge */}
            <div>
              <span className="inline-block px-4 py-2 bg-[#435936] text-white text-sm font-bold rounded-full">
                {product.brand}
              </span>
            </div>

            {/* Title */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {product.name}
              </h2>
              <div className="flex items-center gap-3">
                <span className="px-4 py-2 bg-gray-100 text-gray-700 text-lg font-semibold rounded-full">
                  {product.power}
                </span>
                <span className="text-3xl font-black text-[#435936]">
                  {product.price}
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Leírás</h3>
              <p className="text-gray-700 leading-relaxed text-base">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Főbb jellemzők</h3>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-[#86FD22] flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional info */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Fontos információk</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#435936] font-bold mt-1">•</span>
                  <span>Telepített ár, alapszereléssel értendő</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#435936] font-bold mt-1">•</span>
                  <span>Otthonfelújítási programban akár 50% kedvezmény</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#435936] font-bold mt-1">•</span>
                  <span>Energiahatékonysági kedvezmény is igénybe vehető</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#435936] font-bold mt-1">•</span>
                  <span>Készletekről és egyéb akciókról érdeklődjön kollégáinknál</span>
                </li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="tel:+36307312493"
                className="flex-1 px-6 py-4 bg-[#435936] hover:bg-[#4a6540] text-white rounded-lg transition-all duration-300 font-semibold text-center shadow-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Hívás: +36 30 731 2493
                </span>
              </a>
              <a
                href="/#kapcsolat"
                className="flex-1 px-6 py-4 bg-white border-2 border-[#435936] text-[#435936] hover:bg-[#435936] hover:text-white rounded-lg transition-all duration-300 font-semibold text-center"
              >
                Ajánlatkérés
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes modal-in {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-modal-in {
          animation: modal-in 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
}

