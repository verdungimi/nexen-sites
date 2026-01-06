"use client";

import Link from "next/link";
import ZoldhazLogo from "./ZoldhazLogo";

const handleSectionClick = (sectionId: string) => {
  const currentPath = window.location.pathname;
  if (currentPath === '/' || currentPath === '') {
    // Ha a főoldalon vagyunk, görgessünk a szekcióhoz
    const target = document.getElementById(sectionId);
    if (target) {
      const offset = 100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  } else {
    // Ha más oldalon vagyunk, navigáljunk a főoldalra a szekcióval
    window.location.href = `/#${sectionId}`;
  }
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t-2 border-gray-700 mt-auto relative z-[100]" style={{ position: 'relative', zIndex: 100, visibility: 'visible', opacity: 1, display: 'block' }}>
      <div className="container-custom py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Cég információk */}
          <div>
            <div className="mb-4">
              <ZoldhazLogo variant="footer" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Energiahatékony megoldások otthonába és vállalkozásába. Klíma, villanyszerelés, napelem, fűtőpanel és padlófűtés egy helyen.
            </p>
            {/* Social Media */}
            <div className="flex items-center gap-3">
              <a 
                href="https://www.facebook.com/zoldhazenergy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#86FD22] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Gyors linkek */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Gyors linkek</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#86FD22] transition-colors text-sm">
                  Főoldal
                </Link>
              </li>
              <li>
                <a href="/#szolgaltatasok" className="text-gray-400 hover:text-[#86FD22] transition-colors text-sm" onClick={(e) => {
                  e.preventDefault();
                  handleSectionClick('szolgaltatasok');
                }}>
                  Szolgáltatások
                </a>
              </li>
              <li>
                <Link href="/termekek" className="text-gray-400 hover:text-[#86FD22] transition-colors text-sm">
                  Termékek
                </Link>
              </li>
              <li>
                <a href="/#munkaink" className="text-gray-400 hover:text-[#86FD22] transition-colors text-sm" onClick={(e) => {
                  e.preventDefault();
                  handleSectionClick('munkaink');
                }}>
                  Munkáink
                </a>
              </li>
              <li>
                <a href="/#kapcsolat" className="text-gray-400 hover:text-[#86FD22] transition-colors text-sm" onClick={(e) => {
                  e.preventDefault();
                  handleSectionClick('kapcsolat');
                }}>
                  Kapcsolat
                </a>
              </li>
            </ul>
          </div>

          {/* Szolgáltatások */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Szolgáltatások</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400 text-sm">Klíma értékesítés, szerelés</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Villanyszerelés</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Napelem értékesítés, telepítés</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Norvég fűtőpanel</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Dán padlófűtés</span>
              </li>
            </ul>
          </div>

          {/* Kapcsolat és Nyitvatartás */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Kapcsolat</h3>
            <ul className="space-y-2 text-gray-400 text-sm mb-6">
              <li className="font-medium text-white">Zöldház Energy Kft.</li>
              <li>5666 Medgyesegyháza</li>
              <li>Fáy András utca 31.</li>
              <li>
                <a href="mailto:zoldhazenergykft@gmail.com" className="hover:text-[#86FD22] transition-colors break-all">
                  zoldhazenergykft@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+36307312493" className="hover:text-[#86FD22] transition-colors">
                  +36 30 731 2493
                </a>
              </li>
            </ul>
            
            <div>
              <h4 className="font-semibold text-white mb-2 text-sm">Nyitvatartás</h4>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>Hétfő - Csütörtök: 10:00 - 14:00</li>
                <li>Péntek: 10:00 - 14:00</li>
                <li>Szombat - Vasárnap: Zárva</li>
                <li className="text-gray-500 mt-2">Sürgősségi esetekben elérhetőek!</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal Links and Copyright */}
        <div className="border-t border-[rgba(255,255,255,0.1)] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <Link href="/terms" className="text-gray-400 hover:text-[#86FD22] transition-colors">
                ÁSZF
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-[#86FD22] transition-colors">
                Adatvédelmi tájékoztató
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-[#86FD22] transition-colors">
                Cookie tájékoztató
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} Zöldház Energy Kft. Minden jog fenntartva.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
