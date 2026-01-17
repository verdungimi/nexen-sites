"use client";

import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export default function CTAButton({ href, children, variant = "primary", className = "", onClick }: CTAButtonProps) {
  const baseStyles = "inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105 active:scale-95";
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-[#7C5CFF] to-[#50AEDF] text-white hover:shadow-[0_0_30px_rgba(124,92,255,0.5)] focus:ring-[#7C5CFF] shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-300",
    secondary: "bg-[#0F1620] text-white border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.2)] focus:ring-[#7C5CFF] shadow-lg hover:shadow-xl backdrop-blur-sm transition-all duration-300",
  };

  if (href.startsWith("#")) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offset = 80; // Navbar height offset
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      if (onClick) onClick();
    };

    return (
      <a
        href={href}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
