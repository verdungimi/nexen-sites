"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href.startsWith("#")) {
      const targetId = href.slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        const offset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    } else if (href.includes("#")) {
      const [path, hash] = href.split("#");
      if (window.location.pathname === path) {
        const target = document.getElementById(hash);
        if (target) {
          const offset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      } else {
        window.location.href = href;
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl md:text-3xl font-bold text-white">
              Nexen<span className="text-[#50AEDF]">Sites</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, "/")}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Főoldal
            </a>
            <a
              href="/#process"
              onClick={(e) => handleLinkClick(e, "/#process")}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Folyamat
            </a>
            <a
              href="/#packages"
              onClick={(e) => handleLinkClick(e, "/#packages")}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Csomagok
            </a>
            <a
              href="/#about"
              onClick={(e) => handleLinkClick(e, "/#about")}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Rólunk
            </a>
            <a
              href="/#contact"
              onClick={(e) => handleLinkClick(e, "/#contact")}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Kapcsolat
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-[#50AEDF] to-[#7C5CFF] hover:from-[#4098cc] hover:to-[#6b4dd1] text-white border-0"
            >
              <a href="/#contact" onClick={(e) => handleLinkClick(e, "/#contact")}>
                Kérj ingyenes konzultációt
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-gray-800 transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-gray-800 mt-2">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, "/")}
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors font-medium"
            >
              Főoldal
            </a>
            <a
              href="/#process"
              onClick={(e) => handleLinkClick(e, "/#process")}
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors font-medium"
            >
              Folyamat
            </a>
            <a
              href="/#packages"
              onClick={(e) => handleLinkClick(e, "/#packages")}
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors font-medium"
            >
              Csomagok
            </a>
            <a
              href="/#about"
              onClick={(e) => handleLinkClick(e, "/#about")}
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors font-medium"
            >
              Rólunk
            </a>
            <a
              href="/#contact"
              onClick={(e) => handleLinkClick(e, "/#contact")}
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors font-medium"
            >
              Kapcsolat
            </a>
            <div className="pt-2">
              <Button 
                asChild 
                className="w-full bg-gradient-to-r from-[#50AEDF] to-[#7C5CFF] hover:from-[#4098cc] hover:to-[#6b4dd1] text-white border-0"
              >
                <a href="/#contact" onClick={(e) => handleLinkClick(e, "/#contact")}>
                  Kérj ingyenes konzultációt
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
