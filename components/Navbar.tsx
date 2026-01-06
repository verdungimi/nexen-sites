"use client";

import Link from "next/link";
import { useState } from "react";
import ZoldhazLogo from "./ZoldhazLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-4 z-50 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Navbar background with blur */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl"></div>
        <div className="flex items-center h-16 px-4 md:px-6 gap-3 relative">
          <ZoldhazLogo variant="navbar" />
          
          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center space-x-2 flex-1 justify-center absolute left-1/2 transform -translate-x-1/2 flex-nowrap">
            <Link href="/" className="px-4 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white hover:text-[#86FD22] hover:bg-white/10 hover:border-[#86FD22]/30 transition-all duration-300 text-sm font-semibold whitespace-nowrap">
              Kezdőlap
            </Link>
            <Link href="/termekek" className="px-4 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white hover:text-[#86FD22] hover:bg-white/10 hover:border-[#86FD22]/30 transition-all duration-300 text-sm font-semibold whitespace-nowrap">
              Termékek
            </Link>
            <a href="#szolgaltatasok" className="px-4 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white hover:text-[#86FD22] hover:bg-white/10 hover:border-[#86FD22]/30 transition-all duration-300 text-sm font-semibold whitespace-nowrap" onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById('szolgaltatasok');
              if (target) {
                const offset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}>
              Szolgáltatások
            </a>
            <a href="#munkaink" className="px-4 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white hover:text-[#86FD22] hover:bg-white/10 hover:border-[#86FD22]/30 transition-all duration-300 text-sm font-semibold whitespace-nowrap" onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById('munkaink');
              if (target) {
                const offset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}>
              Munkáink
            </a>
            <a href="#kapcsolat" className="px-4 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white hover:text-[#86FD22] hover:bg-white/10 hover:border-[#86FD22]/30 transition-all duration-300 text-sm font-semibold whitespace-nowrap" onClick={(e) => {
              e.preventDefault();
              const currentPath = window.location.pathname;
              if (currentPath === '/' || currentPath === '') {
                const target = document.getElementById('kapcsolat');
                if (target) {
                  const offset = 100;
                  const elementPosition = target.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              } else {
                window.location.href = '/#kapcsolat';
              }
            }}>
              Kapcsolat
            </a>
          </div>

          {/* CTA Button - Right */}
          <div className="hidden md:block flex-shrink-0 ml-auto">
            <a href="#kapcsolat" className="px-7 py-3 bg-[#435936] hover:bg-[#4a6540] text-white rounded-lg transition-all duration-300 font-semibold text-base shadow-lg" onClick={(e) => {
              e.preventDefault();
              const currentPath = window.location.pathname;
              if (currentPath === '/' || currentPath === '') {
                const target = document.getElementById('kapcsolat');
                if (target) {
                  const offset = 100;
                  const elementPosition = target.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              } else {
                window.location.href = '/#kapcsolat';
              }
            }}>
              Ajánlatkérés
            </a>
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
          <div className="md:hidden py-4 space-y-3 mt-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl px-4">
            <Link href="/" className="block px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white hover:text-[#86FD22] hover:bg-white/10 transition-all duration-300 text-sm font-semibold" onClick={() => setIsOpen(false)}>
              Kezdőlap
            </Link>
            <Link href="/termekek" className="block px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white hover:text-[#86FD22] hover:bg-white/10 transition-all duration-300 text-sm font-semibold" onClick={() => setIsOpen(false)}>
              Termékek
            </Link>
            <a href="#szolgaltatasok" className="block px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white hover:text-[#86FD22] hover:bg-white/10 transition-all duration-300 text-sm font-semibold" onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              const target = document.getElementById('szolgaltatasok');
              if (target) {
                const offset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}>
              Szolgáltatások
            </a>
            <a href="#munkaink" className="block px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white hover:text-[#86FD22] hover:bg-white/10 transition-all duration-300 text-sm font-semibold" onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              const target = document.getElementById('munkaink');
              if (target) {
                const offset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}>
              Munkáink
            </a>
            <a href="#kapcsolat" className="block px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white hover:text-[#86FD22] hover:bg-white/10 transition-all duration-300 text-sm font-semibold" onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              const currentPath = window.location.pathname;
              if (currentPath === '/' || currentPath === '') {
                setTimeout(() => {
                  const target = document.getElementById('kapcsolat');
                  if (target) {
                    const offset = 100;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }, 100);
              } else {
                window.location.href = '/#kapcsolat';
              }
            }}>
              Kapcsolat
            </a>
            <a href="#kapcsolat" className="block px-5 py-2.5 bg-[#435936] hover:bg-[#4a6540] text-white rounded-lg transition-all duration-300 font-medium text-sm text-center" onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              const currentPath = window.location.pathname;
              if (currentPath === '/' || currentPath === '') {
                setTimeout(() => {
                  const target = document.getElementById('kapcsolat');
                  if (target) {
                    const offset = 100;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }, 100);
              } else {
                window.location.href = '/#kapcsolat';
              }
            }}>
              Ajánlatkérés
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
