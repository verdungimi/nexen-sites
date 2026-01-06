"use client";

import Image from "next/image";
import { useState } from "react";

interface KlimaImageProps {
  src: string;
  alt: string;
  brand: string;
  price: string;
}

export default function KlimaImage({ src, alt, brand, price }: KlimaImageProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
      <div className="relative w-full h-full">
        {!imageError ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-32 h-32 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <p className="text-gray-500 text-sm">Klíma kép</p>
            </div>
          </div>
        )}
      </div>
      {/* Brand badge */}
      <div className="absolute top-4 left-4 px-3 py-1 bg-[#435936] text-white text-xs font-bold rounded-full z-10 shadow-md">
        {brand}
      </div>
      {/* Price badge */}
      <div className="absolute top-4 right-4 px-4 py-2 bg-[#86FD22] text-[#435936] text-lg font-black rounded-lg shadow-lg z-10">
        {price}
      </div>
    </div>
  );
}

