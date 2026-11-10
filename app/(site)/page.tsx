import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { ButtonLink } from "@/components/site/Button";
import Container from "@/components/site/Container";
import DemoForm from "@/components/site/DemoForm";
import { BrowserFrame, PhoneFrame } from "@/components/site/DeviceFrame";
import Faq from "@/components/site/Faq";
import JsonLd from "@/components/site/JsonLd";
import ProcessList from "@/components/site/ProcessList";
import Quiz from "@/components/site/Quiz";
import Section from "@/components/site/Section";
import { CareBand, TierCards } from "@/components/site/Tiers";
import { SectionHeading } from "@/components/site/Words";
import WorksGrid from "@/components/site/WorksGrid";
import { BENEFITS, HOME_FAQ, NO_PRICE_NOTE, PROCESS_STEPS, SHORT_STEPS } from "@/lib/content";
import { BRAND, CONTACT, CTA_LABEL, SITE_URL } from "@/lib/site";
import { WORKS } from "@/lib/works";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

function Hero() {
  const work = WORKS[0];
  return (
    <section className="on-navy overflow-hidden bg-navy text-white">
      <Container className="grid items-center gap-x-14 gap-y-12 pb-14 pt-8 sm:pt-14 lg:grid-cols-12 lg:pb-20 lg:pt-16">
        <div className="lg:col-span-7">
          <h1 className="hero-fade text-base font-semibold leading-snug text-sky sm:text-lg" style={{ "--d": "0.05s" } as React.CSSProperties}>
            Weboldalkészítés kis- és középvállalkozásoknak
          </h1>
          <p className="type-display mt-4">
            <span className="hero-line">Előbb megnézed.</span>
            <span className="hero-line">Utána fizetsz.</span>
          </p>
          <p className="hero-slide type-lead mt-7 max-w-[34rem] text-cloud">
            Egy napon belül elkészítjük a céged demo weboldalát, ingyen. Ha tetszik, szerződünk. Ha nem, nem fizetsz semmit.
          </p>
          <div className="hero-fade mt-9 flex flex-col gap-x-7 gap-y-4 sm:flex-row sm:items-center" style={{ "--d": "0.7s" } as React.CSSProperties}>
            <ButtonLink href="#kerdessor" size="lg">
              {CTA_LABEL}
            </ButtonLink>
            <p className="text-center text-cloud sm:text-left">
              vagy hívj:{" "}
              <a href={`tel:${CONTACT.phoneHref}`} className="link whitespace-nowrap">
                {CONTACT.phone}
              </a>
            </p>
          </div>
        </div>

        <div className="hero-fade relative pb-8 pl-10 sm:pl-14 lg:col-span-5" style={{ "--d": "0.4s" } as React.CSSProperties}>
          <BrowserFrame
            onNavy
            priority
            image={work?.desktopImage}
            alt={work ? `${work.name} weboldala asztali nézetben` : ""}
            domain={work?.domain}
          />
          <PhoneFrame
            onNavy
            image={work?.mobileImage}
            alt={work ? `${work.name} weboldala mobilon` : ""}
            className="absolute bottom-0 left-0 w-[30%] max-w-[9.5rem]"
          />
        </div>
      </Container>

      <Container className="pb-14 sm:pb-20">
        <ol className="grid gap-x-10 md:grid-cols-3">
          {SHORT_STEPS.map((step, index) => (
            <li key={step.title} className="flex gap-5 border-t border-navy-line py-6" data-reveal style={{ "--i": index } as React.CSSProperties}>
              <span aria-hidden="true" className="font-display text-3xl font-semibold leading-none text-sky">
                {index + 1}
              </span>
              <div>
                <h2 className="text-lg font-bold leading-snug">{step.title}</h2>
                <p className="mt-1.5 text-cloud">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: SITE_URL,
            name: BRAND,
            inLanguage: "hu",
            publisher: { "@id": `${SITE_URL}/#business` },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: HOME_FAQ.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          },
        ]}
      />

      <Hero />

      <Section id="munkaink" aria-labelledby="munkaink-cim">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading id="munkaink-cim" title="Munkáink" lead="Elkészült weboldalak, ahogy az ügyfeleink látogatói látják őket." />
          <Link href="/portfolio" className="link link-block self-start sm:self-auto">
            Az összes munkánk
          </Link>
        </div>
        <div className="mt-12">
          <WorksGrid limit={3} />
        </div>
      </Section>

      <Section id="igy-mukodik" tone="mist" aria-labelledby="folyamat-cim">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                id="folyamat-cim"
                title="Így működik, a kérdéssortól az élesítésig"
                lead="A demóért és a demóig semmit nem kell fizetned. Fizetni csak akkor kell, ha a demo tetszik, és megkötjük a szerződést."
              />
              <Link href="/folyamat" className="link link-block mt-7">
                A folyamat részletesen
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ProcessList steps={PROCESS_STEPS} />
          </div>
        </div>
      </Section>

      <Section id="mit-kapsz" tone="navy" aria-labelledby="mit-kapsz-cim">
        <SectionHeading id="mit-kapsz-cim" title="Mit kapsz?" lead="Nem funkciólistát, hanem egy weboldalt, ami megkeresést hoz, és a tiéd." onNavy />
        <ul className="mt-12 grid gap-x-12 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, index) => (
            <li key={benefit.title} className="border-t border-navy-line py-7" data-reveal style={{ "--i": index % 3 } as React.CSSProperties}>
              <h3 className="type-h3">{benefit.title}</h3>
              <p className="mt-3 text-cloud">{benefit.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-cloud" data-reveal>
          A GEO-ról bővebben:{" "}
          <Link href="/geo" className="link">
            mit jelent, hogy az AI is megtalál?
          </Link>
        </p>
      </Section>

      <Section id="kerdessor" tone="mist" aria-labelledby="kerdessor-cim">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <SectionHeading
              id="kerdessor-cim"
              title="Öt kérdés, és megmondjuk, melyik csomag való neked"
              lead="Koppints a válaszokra. A végén megkapod az ajánlásunkat egy mondatos indoklással, és ott kérheted el az ingyenes demót."
            />
            <ul className="mt-7 space-y-3" data-reveal style={{ "--i": 2 } as React.CSSProperties}>
              {["Nincs csúszka, nincs hosszú űrlap", "Árbevételt és keretet nem kérdezünk", "Kb. 30 másodperc"].map((item) => (
                <li key={item} className="flex gap-3">
                  <Check aria-hidden="true" strokeWidth={2.6} className="mt-1 h-5 w-5 flex-none text-mid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6 lg:col-start-7" data-reveal>
            <Quiz surface="white" />
          </div>
        </div>
      </Section>

      <Section id="csomagok" aria-labelledby="csomagok-cim">
        <SectionHeading id="csomagok-cim" title="Három csomag, mindegyikben szövegírással" lead={NO_PRICE_NOTE} />
        <div className="mt-12">
          <TierCards />
          <CareBand />
        </div>
        <Link href="/packages" className="link link-block mt-8">
          A csomagok részletesen
        </Link>
      </Section>

      <Section id="gyik" tone="mist" aria-labelledby="gyik-cim">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading id="gyik-cim" title="Gyakori kérdések" />
              <Link href="/gyik" className="link link-block mt-6">
                Az összes kérdés és válasz
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Faq items={HOME_FAQ} />
          </div>
        </div>
      </Section>

      <Section id="demo" tone="navy" aria-labelledby="demo-cim">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6 lg:pr-8">
            <SectionHeading
              id="demo-cim"
              title="Kérd el az ingyenes demót"
              lead="Töltsd ki az űrlapot, és egy napon belül elkészítjük a demo weboldalt a saját cégedre. Ha kitöltötted a kérdéssort, a válaszaid automatikusan hozzákerülnek."
              onNavy
            />
            <ul className="mt-8 space-y-3.5" data-reveal style={{ "--i": 2 } as React.CSSProperties}>
              {[
                "A demóért és a demóig semmit nem fizetsz",
                "Ha nem tetszik, nincs semmilyen kötelezettséged",
                "Egyedi kód, nem sablon, és a végén a tiéd lesz",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-lg">
                  <Check aria-hidden="true" strokeWidth={2.8} className="mt-1 h-5 w-5 flex-none text-sky" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-9 text-cloud" data-reveal style={{ "--i": 3 } as React.CSSProperties}>
              Inkább beszélnél? Hívj {CONTACT.hours} között:{" "}
              <a href={`tel:${CONTACT.phoneHref}`} className="link whitespace-nowrap">
                {CONTACT.phone}
              </a>
            </p>
          </div>
          <div className="lg:col-span-6" data-reveal data-hide-sticky>
            <DemoForm idPrefix="zaro" onNavy />
          </div>
        </div>
      </Section>
    </>
  );
}
