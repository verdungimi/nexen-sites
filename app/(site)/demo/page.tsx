import type { Metadata } from "next";
import { Check } from "lucide-react";
import Container from "@/components/site/Container";
import DemoForm from "@/components/site/DemoForm";
import Faq from "@/components/site/Faq";
import JsonLd from "@/components/site/JsonLd";
import Quiz from "@/components/site/Quiz";
import Section from "@/components/site/Section";
import { SectionHeading } from "@/components/site/Words";
import WorksGrid from "@/components/site/WorksGrid";
import { BENEFITS, HOME_FAQ, SHORT_STEPS } from "@/lib/content";
import { CONTACT, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ingyenes demo weboldal a cégedre",
  description:
    "Kérj ingyenes demo weboldalt a saját cégedre. Egy napon belül elkészül, és csak akkor fizetsz, ha tetszik. Öt kérdés, kb. 30 másodperc.",
  alternates: { canonical: "/demo" },
};

/** Landing page for the ads. The quiz is on the first screen; everything else answers doubts. */
export default function DemoPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Főoldal", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Ingyenes demo", item: `${SITE_URL}/demo` },
            ],
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

      <section className="on-navy bg-navy text-white">
        <Container className="grid gap-x-12 gap-y-9 pb-14 pt-8 sm:pt-12 lg:grid-cols-12 lg:items-start lg:pb-20 lg:pt-16">
          <div className="lg:col-span-6 lg:pt-6">
            <h1 className="hero-fade text-base font-semibold leading-snug text-sky sm:text-lg" style={{ "--d": "0.05s" } as React.CSSProperties}>
              Ingyenes demo weboldal a cégedre
            </h1>
            <p className="type-h1 mt-3 !text-[clamp(2.5rem,1.4rem+5.2vw,5rem)] !leading-[0.98]">
              <span className="hero-line">Előbb megnézed.</span>
              <span className="hero-line">Utána fizetsz.</span>
            </p>
            <p className="hero-fade type-lead mt-6 max-w-[32rem] text-cloud" style={{ "--d": "0.5s" } as React.CSSProperties}>
              A Nexen Sites egy napon belül elkészíti a céged demo weboldalát, ingyen és kötelezettség nélkül. A demóért és a demóig semmit nem
              kell fizetned. Ha tetszik, szerződünk, és az anyagaid átadása után három munkanapon belül élesítjük. Ha nem tetszik, nem fizetsz semmit.
            </p>
            <ul className="hero-fade mt-7 hidden space-y-3 lg:block" style={{ "--d": "0.65s" } as React.CSSProperties}>
              {["Egyedi kód, nem sablon", "A szöveget mi írjuk", "Az egész országban, online"].map((item) => (
                <li key={item} className="flex gap-3 text-lg">
                  <Check aria-hidden="true" strokeWidth={2.8} className="mt-1 h-5 w-5 flex-none text-sky" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div id="kerdessor" className="hero-fade scroll-mt-24 lg:col-span-6" style={{ "--d": "0.3s" } as React.CSSProperties}>
            <Quiz surface="white" />
          </div>
        </Container>
      </section>

      <Section aria-labelledby="lepesek-cim">
        <SectionHeading id="lepesek-cim" title="Három lépés, és látod a saját oldalad" />
        <ol className="mt-10 grid gap-x-10 md:grid-cols-3">
          {SHORT_STEPS.map((step, index) => (
            <li key={step.title} className="flex gap-5 border-t border-line py-6" data-reveal style={{ "--i": index } as React.CSSProperties}>
              <span aria-hidden="true" className="font-display text-3xl font-semibold leading-none text-mid">
                {index + 1}
              </span>
              <div>
                <h3 className="text-lg font-bold leading-snug">{step.title}</h3>
                <p className="mt-1.5 text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="mist" aria-labelledby="demo-munkak-cim">
        <SectionHeading id="demo-munkak-cim" title="Ilyen oldalakat építünk" lead="Elkészült weboldalak, ahogy az ügyfeleink látogatói látják őket." />
        <div className="mt-12">
          <WorksGrid limit={3} />
        </div>
      </Section>

      <Section tone="navy" aria-labelledby="demo-mit-kapsz-cim">
        <SectionHeading id="demo-mit-kapsz-cim" title="Mit kapsz, ha megrendeled?" onNavy />
        <ul className="mt-10 grid gap-x-12 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, index) => (
            <li key={benefit.title} className="border-t border-navy-line py-7" data-reveal style={{ "--i": index % 3 } as React.CSSProperties}>
              <h3 className="type-h3">{benefit.title}</h3>
              <p className="mt-3 text-cloud">{benefit.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section aria-labelledby="demo-gyik-cim">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <SectionHeading id="demo-gyik-cim" title="Amit a demóról kérdezni szoktak" />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Faq items={HOME_FAQ} />
          </div>
        </div>
      </Section>

      <Section id="urlap" tone="mist" aria-labelledby="demo-urlap-cim">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <SectionHeading
              id="demo-urlap-cim"
              title="Kérdések nélkül is kérheted"
              lead="Ha nem töltenéd ki a kérdéssort, elég az elérhetőséged. Egy napon belül jelentkezünk a demóval."
            />
            <p className="mt-8 text-muted" data-reveal>
              Inkább beszélnél? Hívj {CONTACT.hours} között:{" "}
              <a href={`tel:${CONTACT.phoneHref}`} className="link whitespace-nowrap">
                {CONTACT.phone}
              </a>
            </p>
          </div>
          <div className="rounded-[1.75rem] bg-white p-5 sm:p-8 lg:col-span-6 lg:col-start-7" data-reveal data-hide-sticky>
            <DemoForm idPrefix="demo-also" />
          </div>
        </div>
      </Section>
    </>
  );
}
