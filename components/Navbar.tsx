"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-4 z-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center h-14 px-4 md:px-6 gap-3 relative">
          <Link href="/" className="group flex-shrink-0 nexen-logo-wrapper">
            <span className="text-2xl md:text-3xl font-black inline-flex">
              <span className="nexen-logo-ne logo-wave-1 inline-block">NE</span>
              <span className="nexen-logo-x logo-wave-2 inline-block">X</span>
              <span className="nexen-logo-en logo-wave-3 inline-block">EN</span>
            </span>
          </Link>
          
          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center space-x-2 flex-1 justify-center absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="px-5 py-2.5 backdrop-blur-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl text-white hover:text-[#7C5CFF] hover:bg-[rgba(255,255,255,0.06)] hover:border-[#7C5CFF]/30 hover:scale-105 transition-all duration-300 text-sm font-semibold shadow-lg">
              Kezdőlap
            </Link>
            <a href="#process" className="px-5 py-2.5 backdrop-blur-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl text-white hover:text-[#7C5CFF] hover:bg-[rgba(255,255,255,0.06)] hover:border-[#7C5CFF]/30 hover:scale-105 transition-all duration-300 text-sm font-semibold shadow-lg" onClick={(e) => {
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
            <a href="#pricing" className="px-5 py-2.5 backdrop-blur-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl text-white hover:text-[#7C5CFF] hover:bg-[rgba(255,255,255,0.06)] hover:border-[#7C5CFF]/30 hover:scale-105 transition-all duration-300 text-sm font-semibold shadow-lg" onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById('pricing');
              if (target) {
                const offset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}>
              Árazás
            </a>
            <Link href="/blog" className="px-5 py-2.5 backdrop-blur-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl text-white hover:text-[#7C5CFF] hover:bg-[rgba(255,255,255,0.06)] hover:border-[#7C5CFF]/30 hover:scale-105 transition-all duration-300 text-sm font-semibold shadow-lg">
              Blog
            </Link>
            <a href="#faq" className="px-5 py-2.5 backdrop-blur-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl text-white hover:text-[#7C5CFF] hover:bg-[rgba(255,255,255,0.06)] hover:border-[#7C5CFF]/30 hover:scale-105 transition-all duration-300 text-sm font-semibold shadow-lg" onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById('faq');
              if (target) {
                const offset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}>
              GYIK
            </a>
            <a href="/#contact" className="px-5 py-2.5 backdrop-blur-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl text-white hover:text-[#7C5CFF] hover:bg-[rgba(255,255,255,0.06)] hover:border-[#7C5CFF]/30 hover:scale-105 transition-all duration-300 text-sm font-semibold shadow-lg" onClick={(e) => {
              e.preventDefault();
              const currentPath = window.location.pathname;
              if (currentPath === '/' || currentPath === '') {
                // Ha a főoldalon vagyunk, görgessünk a contact szekcióhoz
                const target = document.getElementById('contact');
                if (target) {
                  const offset = 100;
                  const elementPosition = target.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              } else {
                // Ha más oldalon vagyunk, navigáljunk a főoldalra a contact szekcióval
                window.location.href = '/#contact';
              }
            }}>
              Kapcsolat
            </a>
          </div>

          {/* CTA Button - Right */}
          <div className="hidden md:block flex-shrink-0 ml-auto">
            <Link href="/book" className="px-7 py-3 bg-gradient-to-r from-[#7C5CFF] to-[#50AEDF] text-white rounded-xl hover:shadow-[0_0_30px_rgba(124,92,255,0.7)] hover:scale-105 transition-all duration-300 font-semibold text-base shadow-lg">
              Időpont Foglalása
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-[rgba(255,255,255,0.1)] transition-colors"
            aria-label="Menu"
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
          <div className="md:hidden py-4 space-y-3 mt-4">
            <Link href="/" className="block px-4 py-2.5 backdrop-blur-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl text-white hover:text-[#7C5CFF] hover:bg-[rgba(255,255,255,0.06)] hover:border-[#7C5CFF]/30 hover:scale-105 transition-all duration-300 text-sm font-semibold shadow-lg" onClick={() => setIsOpen(false)}>
              Kezdőlap
            </Link>
            <a href="#process" className="block px-4 py-2.5 backdrop-blur-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl text-white hover:text-[#7C5CFF] hover:bg-[rgba(255,255,255,0.06)] hover:border-[#7C5CFF]/30 hover:scale-105 transition-all duration-300 text-sm font-semibold shadow-lg" onClick={(e) => {
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
            <a href="#pricing" className="block px-4 py-2.5 backdrop-blur-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl text-white hover:text-[#7C5CFF] hover:bg-[rgba(255,255,255,0.06)] hover:border-[#7C5CFF]/30 hover:scale-105 transition-all duration-300 text-sm font-semibold shadow-lg" onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              const target = document.getElementById('pricing');
              if (target) {
                const offset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}>
              Árazás
            </a>
            <Link href="/blog" className="block px-4 py-2.5 backdrop-blur-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl text-white hover:text-[#7C5CFF] hover:bg-[rgba(255,255,255,0.06)] hover:border-[#7C5CFF]/30 hover:scale-105 transition-all duration-300 text-sm font-semibold shadow-lg" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
            <a href="#faq" className="block px-4 py-2.5 backdrop-blur-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl text-white hover:text-[#7C5CFF] hover:bg-[rgba(255,255,255,0.06)] hover:border-[#7C5CFF]/30 hover:scale-105 transition-all duration-300 text-sm font-semibold shadow-lg" onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              const target = document.getElementById('faq');
              if (target) {
                const offset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}>
              GYIK
            </a>
            <a href="/#contact" className="block px-4 py-2.5 backdrop-blur-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl text-white hover:text-[#7C5CFF] hover:bg-[rgba(255,255,255,0.06)] hover:border-[#7C5CFF]/30 hover:scale-105 transition-all duration-300 text-sm font-semibold shadow-lg" onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              const currentPath = window.location.pathname;
              if (currentPath === '/' || currentPath === '') {
                // Ha a főoldalon vagyunk, görgessünk a contact szekcióhoz
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
                // Ha más oldalon vagyunk, navigáljunk a főoldalra a contact szekcióval
                window.location.href = '/#contact';
              }
            }}>
              Kapcsolat
            </a>
            <Link href="/book" className="block px-5 py-2.5 bg-gradient-to-r from-[#7C5CFF] to-[#50AEDF] text-white rounded-xl hover:shadow-[0_0_25px_rgba(124,92,255,0.6)] hover:scale-105 transition-all duration-300 font-medium text-xs text-center shadow-lg" onClick={() => setIsOpen(false)}>
              Időpont Foglalása
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
