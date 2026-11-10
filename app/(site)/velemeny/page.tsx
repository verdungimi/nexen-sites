import type { Metadata } from "next";
import { Star } from "lucide-react";
import { ButtonLink } from "@/components/site/Button";
import Container from "@/components/site/Container";
import { CONTACT, GOOGLE_REVIEW_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Írj véleményt a Nexen Sitesról",
  description: "Ha dolgoztunk együtt, kérünk, írd meg a véleményed a Google-ön. Két perc, és sokat segít.",
  alternates: { canonical: "/velemeny" },
  // A link sent to existing clients, not a page to rank
  robots: { index: false, follow: true },
};

const STEPS = [
  "Koppints a gombra, megnyílik a Google értékelő ablaka.",
  "Válaszd ki, hány csillagot adsz.",
  "Írd le pár mondatban, milyen volt velünk dolgozni, és mit készítettünk neked.",
];

/** Short page that takes existing clients to the Google review form. */
export default function ReviewPage() {
  return (
    <section className="on-navy bg-navy pb-20 pt-10 text-white sm:pb-28 sm:pt-16">
      <Container className="max-w-3xl">
        <div className="flex gap-1.5 text-sky" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((star) => (
            <Star key={star} className="h-7 w-7 fill-current" />
          ))}
        </div>
        <h1 className="type-h1 mt-6">Elmondanád, milyen volt velünk dolgozni?</h1>
        <p className="type-lead mt-6 text-cloud">
          Egy Google-értékelés két perc, nekünk pedig sokat segít: ebből látják mások, hogy valódi ügyfeleknek dolgozunk. Az őszinte véleményedet
          kérjük, akkor is, ha valamin javítanál.
        </p>

        <ol className="mt-10 border-b border-navy-line">
          {STEPS.map((step, index) => (
            <li key={step} className="flex gap-5 border-t border-navy-line py-5">
              <span aria-hidden="true" className="font-display text-2xl font-semibold leading-none text-sky">
                {index + 1}
              </span>
              <span className="text-lg">{step}</span>
            </li>
          ))}
        </ol>

        <div className="mt-10">
          {GOOGLE_REVIEW_URL ? (
            <ButtonLink href={GOOGLE_REVIEW_URL} size="lg" className="w-full sm:w-auto">
              Megírom a véleményem a Google-ön
            </ButtonLink>
          ) : (
            <p className="rounded-2xl border-[1.5px] border-dashed border-cloud/70 p-5 font-semibold">
              [IMI: ide kerül a Google cégprofil értékelő linkje. Add meg a NEXT_PUBLIC_GOOGLE_REVIEW_URL környezeti változóban, és megjelenik a gomb.]
            </p>
          )}
        </div>

        <p className="mt-8 text-cloud">
          Elakadtál, vagy inkább nekünk mondanád el? Hívj:{" "}
          <a href={`tel:${CONTACT.phoneHref}`} className="link whitespace-nowrap">
            {CONTACT.phone}
          </a>
        </p>
      </Container>
    </section>
  );
}
