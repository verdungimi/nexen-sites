import Link from "next/link";
import { CONTACT, CTA_HREF, CTA_LABEL, FOOTER_GROUPS, LEGAL } from "@/lib/site";
import { ButtonLink } from "./Button";
import Container from "./Container";
import CookieSettingsButton from "./CookieSettingsButton";
import { LogoStatic } from "./Logo";

export default function Footer() {
  return (
    <footer className="on-navy border-t border-navy-line bg-navy pb-28 pt-16 text-white sm:pb-12 sm:pt-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <LogoStatic />
            <p className="mt-5 max-w-sm text-cloud">
              Egyedi kódú weboldalak kis- és középvállalkozásoknak, az egész országban. Előbb megnézed az ingyenes demót,
              és csak akkor fizetsz, ha tetszik.
            </p>
            <ButtonLink href={CTA_HREF} className="mt-7">
              {CTA_LABEL}
            </ButtonLink>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8 lg:pl-8">
            {FOOTER_GROUPS.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h2 className="font-bold">{group.title}</h2>
                <ul className="mt-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="inline-flex min-h-10 items-center text-cloud transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  {group.title === "Jogi oldalak" && (
                    <li>
                      <CookieSettingsButton />
                    </li>
                  )}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-navy-line pt-8 text-[0.9375rem] text-cloud md:grid-cols-2">
          <address className="not-italic leading-relaxed">
            <span className="block">
              Telefon:{" "}
              <a href={`tel:${CONTACT.phoneHref}`} className="font-semibold text-white hover:text-sky">
                {CONTACT.phone}
              </a>{" "}
              ({CONTACT.hours})
            </span>
            <span className="block">
              E-mail:{" "}
              <a href={`mailto:${CONTACT.email}`} className="font-semibold text-white hover:text-sky">
                {CONTACT.email}
              </a>
            </span>
            <span className="block">
              <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-sky">
                Facebook-oldalunk
              </a>
            </span>
          </address>
          <p className="leading-relaxed md:text-right">
            A Nexen Sites {LEGAL.name} márkaneve.
            <span className="block">Székhely: {LEGAL.address}</span>
            <span className="block">
              Adószám: {LEGAL.taxNumber}, nyilvántartási szám: {LEGAL.registryNumber}
            </span>
            <span className="mt-3 block">© {new Date().getFullYear()} Nexen Sites</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
