"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ZoldhazLogoProps {
  variant?: "navbar" | "hero" | "footer";
  showText?: boolean;
  className?: string;
}

export default function ZoldhazLogo({ variant = "navbar", showText = true, className = "" }: ZoldhazLogoProps) {
  const [imageError, setImageError] = useState(false);

  const sizes = {
    navbar: { width: 40, height: 40, textSize: "text-xl md:text-2xl" },
    hero: { width: 200, height: 120, textSize: "text-2xl md:text-3xl" },
    footer: { width: 120, height: 72, textSize: "text-lg" },
  };

  const size = sizes[variant];

  const logoContent = (
    <div className={`flex items-center gap-2 ${className}`}>
      {!imageError ? (
        <Image
          src="/images/zoldhaz logo.jpg"
          alt="Zöldház Energy Kft. logo"
          width={size.width}
          height={size.height}
          className="object-contain flex-shrink-0 brightness-0 invert"
          unoptimized
          onError={() => {
            setImageError(true);
            console.error("Logo image failed to load");
          }}
          priority={variant === "hero"}
        />
      ) : (
        // Fallback SVG logo if image not found
        <svg width={size.width} height={size.height} viewBox="0 0 200 120" className="flex-shrink-0">
          <path d="M20 80 L50 50 L80 80 Z" fill="#86FD22" />
          <path d="M120 70 L150 40 L180 70 Z" fill="#86FD22" />
          <rect x="70" y="50" width="60" height="40" fill="#435936" />
          <path d="M70 50 L100 30 L130 50 Z" fill="#435936" />
          <rect x="80" y="60" width="8" height="8" fill="#86FD22" />
          <rect x="112" y="60" width="8" height="8" fill="#86FD22" />
          <rect x="95" y="70" width="10" height="20" fill="#435936" />
          <rect x="125" y="45" width="8" height="12" fill="#435936" />
          <path d="M0 95 Q50 85 100 95 T200 95 L200 120 L0 120 Z" fill="#86FD22" />
          <path d="M0 105 Q50 100 100 105 T200 105 L200 120 L0 120 Z" fill="#435936" />
          <path d="M180 85 Q185 75 190 85 Q185 90 180 85" fill="#86FD22" />
          <path d="M185 88 Q188 82 191 88 Q188 92 185 88" fill="#435936" />
        </svg>
      )}
      {showText && (
        <span className={`font-black inline-flex ${size.textSize}`}>
          <span className="text-[#86FD22] inline-block">Zöld</span>
          <span className="text-[#435936] inline-block">ház</span>
          {variant === "hero" && <span className="text-white inline-block ml-1">Energy Kft.</span>}
          {variant !== "hero" && <span className="text-white inline-block ml-1">Energy</span>}
        </span>
      )}
    </div>
  );

  if (variant === "footer") {
    return logoContent;
  }

  return (
    <Link href="/" className="group">
      {logoContent}
    </Link>
  );
}

