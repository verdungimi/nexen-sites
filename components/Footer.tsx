import Link from "next/link";
import { LogoStatic } from "@/components/site/Logo";
import Container from "@/components/site/Container";
import { ButtonLink } from "@/components/site/Button";
import { CONTACT, CTA } from "@/lib/site";
import CookieSettingsButton from "@/components/site/CookieSettingsButton";

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

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule bg-graphite">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <LogoStatic />
            <p className="mt-5 max-w-xs text-fog">
              Weboldalak bejáratott szolgáltató cégeknek. Kecskemétről dolgozunk, az egész országnak.
            </p>
            <ButtonLink href="/book" variant="secondary" className="mt-7">
              {CTA.footer}
            </ButtonLink>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-[repeat(3,minmax(0,1fr))_minmax(0,1.45fr)] lg:gap-8">
            {COLUMNS.map((column) => (
              <div key={column.title}>
                <p className="text-[0.9375rem] font-semibold text-bone">{column.title}</p>
                <ul className="mt-4 space-y-1">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-flex min-h-10 items-center text-fog transition-colors hover:text-bone"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  {column.title === "Jogi információk" && (
                    <li>
                      <CookieSettingsButton />
                    </li>
                  )}
                </ul>
              </div>
            ))}

            <div>
              <p className="text-[0.9375rem] font-semibold text-bone">Elérhetőség</p>
              <address className="mt-4 space-y-1 not-italic">
                <a href={`tel:${CONTACT.phoneHref}`} className="flex min-h-10 items-center whitespace-nowrap text-fog transition-colors hover:text-bone">
                  {CONTACT.phone}
                </a>
                <a href={`mailto:${CONTACT.email}`} className="flex min-h-10 items-center text-fog transition-colors hover:text-bone">
                  {CONTACT.email}
                </a>
                <p className="flex min-h-10 items-center text-fog">{CONTACT.city}</p>
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-10 items-center text-fog transition-colors hover:text-bone"
                >
                  Facebook
                </a>
              </address>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-rule pt-8 text-[0.9375rem] text-fog sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Nexen Sites. Minden jog fenntartva.</p>
          <p>Hétfőtől péntekig, 9 és 18 óra között érsz el minket.</p>
        </div>
      </Container>
    </footer>
  );
}
