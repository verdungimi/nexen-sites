import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/site/Container";
import { ButtonLink } from "@/components/site/Button";

export const metadata: Metadata = {
  title: "Lefoglaltad az időpontot",
  description:
    "Megkaptuk a konzultációs foglalásodat. Hamarosan jelentkezünk, hogy visszaigazoljuk az időpontot és elküldjük a konzultáció linkjét.",
  alternates: {
    canonical: "/thank-you",
  },
  robots: { index: false },
};

const NEXT_STEPS = [
  { title: "Gondold át a számaidat", href: "/#kalkulator", label: "Megtérülés-kalkulátor" },
  { title: "Nézd meg, hogyan dolgozunk", href: "/folyamat", label: "A folyamat" },
  { title: "Olvasd el a gyakori kérdéseket", href: "/gyik", label: "Gyakori kérdések" },
];

export default function ThankYouPage() {
  return (
    <section className="bg-graphite pb-20 pt-32 sm:pb-24 sm:pt-40 lg:pb-32">
      <Container>
        <div className="max-w-3xl">
          <h1 className="type-display">Lefoglaltad az időpontot</h1>
          <p className="type-lead measure mt-6">
            Köszönjük. Hamarosan jelentkezünk e-mailben vagy telefonon, hogy visszaigazoljuk az időpontot és elküldjük a
            konzultáció linkjét.
          </p>

          <h2 className="type-h3 mt-16">Addig is</h2>
          <ul className="mt-6 border-b border-rule">
            {NEXT_STEPS.map((step) => (
              <li
                key={step.href}
                className="flex flex-col gap-1 border-t border-rule py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <span className="font-semibold text-bone">{step.title}</span>
                <Link
                  href={step.href}
                  className="inline-flex min-h-11 items-center self-start text-bone underline decoration-rule underline-offset-4 transition-colors hover:decoration-brass sm:self-auto"
                >
                  {step.label}
                </Link>
              </li>
            ))}
          </ul>

          <ButtonLink href="/" variant="quiet" className="mt-10">
            Vissza a főoldalra
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
