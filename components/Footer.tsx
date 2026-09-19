import Link from "next/link";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import { LogoStatic } from "@/components/site/Logo";
import { ButtonLink } from "@/components/site/Button";
import CookieSettingsButton from "@/components/site/CookieSettingsButton";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";
import { CONTACT, CTA } from "@/lib/site";

// Layout adapted from the 21st.dev "Hover Footer". Link labels differ from the header's on purpose (SEO: no repeated anchor texts).
const COLUMNS = [
  {
    title: "Együttműködés",
    links: [
      { href: "/packages", label: "Csomagok" },
      { href: "/folyamat", label: "Hogyan dolgozunk" },
      { href: "/portfolio", label: "Munkáink" },
      { href: "/#kalkulator", label: "Kalkulátor" },
    ],
  },
  {
    title: "Stúdió",
    links: [
      { href: "/rolunk", label: "Rólunk" },
      { href: "/blog", label: "Cikkek" },
      { href: "/gyik", label: "Gyakori kérdések" },
      { href: "/kapcsolat", label: "Elérhetőségek" },
    ],
  },
  {
    title: "Jogi információk",
    links: [
      { href: "/terms", label: "ÁSZF" },
      { href: "/privacy", label: "Adatvédelem" },
      { href: "/cookies", label: "Cookie-k" },
    ],
  },
];

const linkClass = "inline-flex min-h-10 items-center text-fog transition-colors duration-200 hover:text-brass";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mx-3 mb-3 overflow-hidden rounded-3xl border border-rule bg-graphite sm:mx-6 sm:mb-6">
      <div className="relative z-40 mx-auto max-w-site px-6 py-12 sm:px-10 lg:px-14 lg:py-14">
        <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="flex flex-col items-start gap-5 lg:col-span-3">
            <LogoStatic />
            <p className="max-w-xs text-fog">
              Weboldalak bejáratott szolgáltató cégeknek. Kecskemétről dolgozunk, az egész országnak.
            </p>
            <ButtonLink href="/book" variant="secondary">
              {CTA.footer}
            </ButtonLink>
          </div>

          {/* Link columns */}
          {COLUMNS.map((column) => (
            <div key={column.title} className="lg:col-span-2">
              <p className="mb-4 text-[0.9375rem] font-semibold text-bone">{column.title}</p>
              <ul className="space-y-1">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
                {column.title === "Jogi információk" && (
                  <li>
                    <CookieSettingsButton className="hover:text-brass" />
                  </li>
                )}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="mb-4 text-[0.9375rem] font-semibold text-bone">Elérhetőség</p>
            <ul className="space-y-1">
              <li>
                <a href={`tel:${CONTACT.phoneHref}`} className={`${linkClass} gap-3 whitespace-nowrap`}>
                  <Phone aria-hidden="true" size={18} className="flex-none text-brass" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className={`${linkClass} gap-3 [overflow-wrap:anywhere]`}>
                  <Mail aria-hidden="true" size={18} className="flex-none text-brass" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex min-h-10 items-center gap-3 text-fog">
                <MapPin aria-hidden="true" size={18} className="flex-none text-brass" />
                {CONTACT.city}
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-rule" />

        <div className="flex flex-col items-start justify-between gap-5 pt-8 text-[0.9375rem] text-fog md:flex-row md:items-center">
          <a
            href={CONTACT.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nexen Sites a Facebookon"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-rule text-fog transition-colors duration-200 hover:border-brass hover:text-brass"
          >
            <Facebook aria-hidden="true" size={20} />
          </a>
          <p>© {year} Nexen Sites. Minden jog fenntartva.</p>
          <p>Hétfőtől péntekig, 9 és 18 óra között érsz el minket.</p>
        </div>
      </div>

      {/* Hover text effect: decorative, large screens only */}
      <div className="-mt-10 hidden h-[18rem] lg:flex xl:h-[22rem]">
        <TextHoverEffect text="Nexen" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
