"use client";

import Link from "next/link";
import { useState } from "react";
import { MouseEvent } from "react";

const navLinkClass =
  "text-sm font-medium text-[#A69F91] hover:text-[#F3EFE6] transition-colors duration-200 whitespace-nowrap px-3 py-2";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 px-4 md:px-6 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center h-16 gap-3 relative">
          <Link href="/" className="flex-shrink-0">
            <span className="text-xl md:text-2xl font-bold text-[#F3EFE6]">
              NEXEN
            </span>
          </Link>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center flex-1 justify-center">
            <Link href="/" className={navLinkClass}>
              Kezdőlap
            </Link>
            <a href="#process" className={navLinkClass} onClick={(e: MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              const target = document.getElementById('process');
              if (target) {
                const offset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}>
              Folyamat
            </a>
            <a href="#packages" className={navLinkClass} onClick={(e: MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              const target = document.getElementById('packages');
              if (target) {
                const offset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}>
              Árazás
            </a>
            <Link href="/blog" className={navLinkClass}>
              Blog
            </Link>
            <Link href="/rolunk" className={navLinkClass}>
              Rólunk
            </Link>
            <Link href="/gyik" className={navLinkClass}>
              GYIK
            </Link>
            <a href="/#contact" className={navLinkClass} onClick={(e: MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              const currentPath = window.location.pathname;
              if (currentPath === '/' || currentPath === '') {
                const target = document.getElementById('contact');
                if (target) {
                  const offset = 100;
                  const elementPosition = target.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              } else {
                window.location.href = '/#contact';
              }
            }}>
              Kapcsolat
            </a>
          </div>

          {/* CTA Button - Right */}
          <div className="hidden md:block flex-shrink-0 ml-auto">
            <Link href="/book" className="px-5 py-2.5 bg-[#F2A93B] text-[#0a0a0a] rounded-lg hover:bg-[#f0b658] active:bg-[#d99424] transition-colors duration-200 font-semibold text-sm">
              Időpont Foglalása
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden -mr-2 p-3 rounded-lg text-[#F3EFE6] active:bg-white/10 transition-colors"
            aria-label={isOpen ? "Menü bezárása" : "Menü megnyitása"}
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-3 space-y-1 border-t border-white/10">
            <Link href="/" className="block px-3 py-3 rounded-lg text-[#F3EFE6] active:bg-white/5 transition-colors text-base font-medium" onClick={() => setIsOpen(false)}>
              Kezdőlap
            </Link>
            <a href="#process" className="block px-3 py-3 rounded-lg text-[#F3EFE6] active:bg-white/5 transition-colors text-base font-medium" onClick={(e: MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              setIsOpen(false);
              const target = document.getElementById('process');
              if (target) {
                const offset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}>
              Folyamat
            </a>
            <a href="#packages" className="block px-3 py-3 rounded-lg text-[#F3EFE6] active:bg-white/5 transition-colors text-base font-medium" onClick={(e: MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              setIsOpen(false);
              const target = document.getElementById('packages');
              if (target) {
                const offset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}>
              Árazás
            </a>
            <Link href="/blog" className="block px-3 py-3 rounded-lg text-[#F3EFE6] active:bg-white/5 transition-colors text-base font-medium" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
            <Link href="/rolunk" className="block px-3 py-3 rounded-lg text-[#F3EFE6] active:bg-white/5 transition-colors text-base font-medium" onClick={() => setIsOpen(false)}>
              Rólunk
            </Link>
            <Link href="/gyik" className="block px-3 py-3 rounded-lg text-[#F3EFE6] active:bg-white/5 transition-colors text-base font-medium" onClick={() => setIsOpen(false)}>
              GYIK
            </Link>
            <a href="/#contact" className="block px-3 py-3 rounded-lg text-[#F3EFE6] active:bg-white/5 transition-colors text-base font-medium" onClick={(e: MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              setIsOpen(false);
              const currentPath = window.location.pathname;
              if (currentPath === '/' || currentPath === '') {
                setTimeout(() => {
                  const target = document.getElementById('contact');
                  if (target) {
                    const offset = 100;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }, 100);
              } else {
                window.location.href = '/#contact';
              }
            }}>
              Kapcsolat
            </a>
            <Link href="/book" className="block mt-2 px-4 py-3 bg-[#F2A93B] text-[#0a0a0a] rounded-lg active:bg-[#d99424] transition-colors font-semibold text-base text-center" onClick={() => setIsOpen(false)}>
              Időpont Foglalása
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
