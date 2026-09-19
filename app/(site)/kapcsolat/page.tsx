import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import { ButtonLink } from "@/components/site/Button";
import { CONTACT } from "@/lib/site";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Kapcsolat",
  description:
    "Kérdésed van? Írj vagy hívj, egy munkanapon belül válaszolunk. Ha már tudod, hogy új weboldalt szeretnél, foglalj egy online konzultációt.",
  alternates: {
    canonical: "/kapcsolat",
  },
};

const linkClass =
  "inline-flex min-h-11 items-center text-bone underline decoration-rule underline-offset-4 transition-colors hover:decoration-brass";

export default function KapcsolatPage() {
  const rows: { term: string; detail: React.ReactNode }[] = [
    {
      term: "Telefon",
      detail: (
        <a href={`tel:${CONTACT.phoneHref}`} className={linkClass}>
          {CONTACT.phone}
        </a>
      ),
    },
    {
      term: "E-mail",
      detail: (
        <a href={`mailto:${CONTACT.email}`} className={`${linkClass} break-all`}>
          {CONTACT.email}
        </a>
      ),
    },
    {
      term: "Iroda",
      detail: (
        <>
          <span className="inline-flex min-h-11 items-center text-bone">{CONTACT.city}</span>
          <p className="text-fog">A konzultációk online zajlanak, az ország bármely részéről.</p>
        </>
      ),
    },
    {
      term: "Elérhetőség",
      detail: <span className="inline-flex min-h-11 items-center text-bone">Hétfőtől péntekig, 9 és 18 óra között</span>,
    },
    {
      term: "Facebook",
      detail: (
        <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className={linkClass}>
          Nexen Sites a Facebookon
          <span className="sr-only"> (új lapon nyílik meg)</span>
        </a>
      ),
    },
  ];

  return (
    <>
      <PageHero
        title="Kapcsolat"
        lead="Ha már tudod, hogy új weboldalt szeretnél, a leggyorsabb egy konzultáció. Ha csak kérdésed van, írj vagy hívj, egy munkanapon belül válaszolunk."
        actions={
          <ButtonLink href="/book" size="lg">
            Konzultációt kérek
          </ButtonLink>
        }
      />

      <Section aria-labelledby="elerhetosegek">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-16">
          <div className="lg:col-span-5">
            <h2 id="elerhetosegek" className="type-h3">
              Elérhetőségek
            </h2>
            <dl className="mt-6 border-b border-rule">
              {rows.map((row) => (
                <div
                  key={row.term}
                  className="reveal grid gap-x-6 border-t border-rule py-3 sm:grid-cols-[8rem_1fr] sm:items-baseline lg:grid-cols-1 xl:grid-cols-[8rem_1fr]"
                >
                  <dt className="pt-2 text-fog sm:pt-0 lg:pt-2 xl:pt-0">{row.term}</dt>
                  <dd className="min-w-0">{row.detail}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
