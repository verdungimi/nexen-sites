import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/site/Container";
import { ButtonLink } from "@/components/site/Button";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Köszönjük, megkaptuk",
  description: "Megkaptuk az üzeneted. Hamarosan jelentkezünk.",
  alternates: { canonical: "/thank-you" },
  robots: { index: false },
};

const NEXT_STEPS = [
  { title: "Nézd meg, hogyan dolgozunk", href: "/folyamat", label: "A folyamat" },
  { title: "Olvasd el a gyakori kérdéseket", href: "/gyik", label: "Gyakori kérdések" },
  { title: "Nézd meg a munkáinkat", href: "/portfolio", label: "Munkáink" },
];

export default function ThankYouPage() {
  return (
    <section className="on-navy bg-navy pb-20 pt-12 text-white sm:pb-28 sm:pt-20">
      <Container className="max-w-3xl">
        <h1 className="type-h1">Köszönjük, megkaptuk</h1>
        <p className="type-lead mt-6 text-cloud">
          Hamarosan jelentkezünk e-mailben vagy telefonon. Ha sürgős, hívj {CONTACT.hours} között:{" "}
          <a href={`tel:${CONTACT.phoneHref}`} className="link whitespace-nowrap">
            {CONTACT.phone}
          </a>
        </p>

        <h2 className="type-h3 mt-14">Addig is</h2>
        <ul className="mt-5 border-b border-navy-line">
          {NEXT_STEPS.map((step) => (
            <li key={step.href} className="flex flex-col gap-1 border-t border-navy-line py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <span className="font-semibold">{step.title}</span>
              <Link href={step.href} className="link inline-flex min-h-11 items-center self-start sm:self-auto">
                {step.label}
              </Link>
            </li>
          ))}
        </ul>

        <ButtonLink href="/" variant="outlineOnNavy" className="mt-10">
          Vissza a főoldalra
        </ButtonLink>
      </Container>
    </section>
  );
}
