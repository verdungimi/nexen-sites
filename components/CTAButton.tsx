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
  const baseStyles = "inline-block px-6 py-3 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] active:opacity-80";

  const variantStyles = {
    primary: "bg-[#F2A93B] text-[#0a0a0a] hover:bg-[#f0b658] focus:ring-[#F2A93B]",
    secondary: "bg-transparent text-[#F3EFE6] border border-white/15 hover:border-white/30 hover:bg-white/5 focus:ring-[#F2A93B]",
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
