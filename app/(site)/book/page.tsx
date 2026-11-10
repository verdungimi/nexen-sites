import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import { CONTACT } from "@/lib/site";
import BookingForm from "./BookingForm";

export const metadata: Metadata = {
  title: "Konzultáció foglalása online",
  description:
    "Foglalj online konzultációt a Nexen Sitesszal. Válassz napot és időpontot hétfőtől péntekig, és megbeszéljük, milyen weboldal kell a cégednek.",
  alternates: { canonical: "/book" },
};

export default function BookingPage() {
  return (
    <>
      <PageHero
        title="Konzultáció foglalása"
        crumbs={[{ href: "/book", label: "Konzultáció foglalása" }]}
        answer="Itt online konzultációt foglalhatsz a Nexen Sitesszal: válassz egy napot és egy kezdési időpontot hétfőtől péntekig, add meg az elérhetőséged, és visszaigazoljuk. A beszélgetés semmire nem kötelez. Ha inkább rögtön látnád, mit építenénk neked, kérd az ingyenes demót."
      />

      <Section aria-labelledby="foglalas-cim">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <h2 id="foglalas-cim" className="type-h2" data-reveal>
              Mire jó a konzultáció?
            </h2>
            <ul className="mt-6 space-y-4 text-muted" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
              <li>Ha kérdésed van, mielőtt demót kérnél.</li>
              <li>Ha webshopról vagy nagyobb, egyedi igényről van szó.</li>
              <li>Ha a meglévő oldalad újratervezéséről beszélnél.</li>
            </ul>
            <p className="mt-8" data-reveal style={{ "--i": 2 } as React.CSSProperties}>
              Gyorsabb út:{" "}
              <Link href="/demo" className="link">
                kérd az ingyenes demót
              </Link>
              , vagy hívj:{" "}
              <a href={`tel:${CONTACT.phoneHref}`} className="link whitespace-nowrap">
                {CONTACT.phone}
              </a>
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6" data-hide-sticky>
            <BookingForm />
          </div>
        </div>
      </Section>
    </>
  );
}
