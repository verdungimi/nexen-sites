"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSectionClick = (sectionId: string) => {
    const currentPath = window.location.pathname;
    if (currentPath === "/" || currentPath === "") {
      const target = document.getElementById(sectionId);
      if (target) {
        const offset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-auto">
      <div className="container-custom py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Főoldal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Főoldal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-[#50AEDF] transition-colors text-sm"
                >
                  Főoldal
                </Link>
              </li>
              <li>
                <a
                  href="/#process"
                  className="text-gray-400 hover:text-[#50AEDF] transition-colors text-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionClick("process");
                  }}
                >
                  Folyamat
                </a>
              </li>
              <li>
                <a
                  href="/#packages"
                  className="text-gray-400 hover:text-[#50AEDF] transition-colors text-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionClick("packages");
                  }}
                >
                  Csomagok
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-gray-400 hover:text-[#50AEDF] transition-colors text-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionClick("contact");
                  }}
                >
                  Kapcsolat
                </a>
              </li>
            </ul>
          </div>

          {/* Csomagok */}
          <div>
            <h3 className="font-semibold text-white mb-4">Csomagok</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#packages"
                  className="text-gray-400 hover:text-[#50AEDF] transition-colors text-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionClick("packages");
                  }}
                >
                  Csomagok megtekintése
                </a>
              </li>
              <li>
                <a
                  href="/#portfolio"
                  className="text-gray-400 hover:text-[#50AEDF] transition-colors text-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionClick("portfolio");
                  }}
                >
                  Portfólió
                </a>
              </li>
            </ul>
          </div>

          {/* Adatvédelem */}
          <div>
            <h3 className="font-semibold text-white mb-4">Adatvédelem</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-[#50AEDF] transition-colors text-sm"
                >
                  Adatvédelmi tájékoztató
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-[#50AEDF] transition-colors text-sm"
                >
                  Általános Szerződési Feltételek
                </Link>
              </li>
            </ul>
          </div>

          {/* Kapcsolat */}
          <div>
            <h3 className="font-semibold text-white mb-4">Kapcsolat</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>NexenSites</li>
              <li>Kecskemét, Magyarország</li>
              <li>
                <a
                  href="mailto:info@nexensites.hu"
                  className="hover:text-[#50AEDF] transition-colors"
                >
                  info@nexensites.hu
                </a>
              </li>
              <li>
                <a
                  href="tel:+36705767845"
                  className="hover:text-[#50AEDF] transition-colors"
                >
                  +36 70 576 7845
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} NexenSites. Minden jog fenntartva.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61585984076838"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#50AEDF] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
