import type { Metadata } from "next";
import { ButtonLink } from "@/components/site/Button";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";
import { CONTACT, CTA_HREF, CTA_LABEL, LEGAL } from "@/lib/site";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Kapcsolat: telefon, e-mail, üzenet",
  description:
    "Nexen Sites elérhetőségek: +36 70 576 7845, hétfőtől péntekig 9–18 óra, verdung.imi@gmail.com. Az egész országban dolgozunk, online.",
  alternates: { canonical: "/kapcsolat" },
};

const rowClass = "flex flex-col gap-1 border-t border-line py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8";
const valueClass = "font-display text-[1.375rem] font-semibold leading-snug sm:text-right";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Kapcsolat"
        crumbs={[{ href: "/kapcsolat", label: "Kapcsolat" }]}
        answer={`A Nexen Sitest telefonon a ${CONTACT.phone} számon éred el, ${CONTACT.hours} között, e-mailben pedig a ${CONTACT.email} címen. A kapcsolattartó ${CONTACT.person}. Az egész országban dolgozunk, online, a székhelyünk Kecskeméten van. Ha weboldalt szeretnél, a leggyorsabb út az ingyenes demo kérése.`}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={`tel:${CONTACT.phoneHref}`} size="lg">
            Hívás: {CONTACT.phone}
          </ButtonLink>
          <ButtonLink href={CTA_HREF} size="lg" variant="outlineOnNavy">
            {CTA_LABEL}
          </ButtonLink>
        </div>
      </PageHero>

      <Section aria-labelledby="elerhetoseg-cim">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6 lg:pr-8">
            <h2 id="elerhetoseg-cim" className="type-h2" data-reveal>
              Elérhetőségek
            </h2>
            <dl className="mt-8 border-b border-line" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
              <div className={rowClass}>
                <dt className="text-muted">Telefon</dt>
                <dd className={valueClass}>
                  <a href={`tel:${CONTACT.phoneHref}`} className="hover:text-mid">
                    {CONTACT.phone}
                  </a>
                </dd>
              </div>
              <div className={rowClass}>
                <dt className="text-muted">Mikor hívhatsz</dt>
                <dd className={valueClass}>Hétfőtől péntekig 9–18 óra</dd>
              </div>
              <div className={rowClass}>
                <dt className="text-muted">E-mail</dt>
                <dd className={`${valueClass} break-all`}>
                  <a href={`mailto:${CONTACT.email}`} className="hover:text-mid">
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
              <div className={rowClass}>
                <dt className="text-muted">Kapcsolattartó</dt>
                <dd className={valueClass}>{CONTACT.person}</dd>
              </div>
              <div className={rowClass}>
                <dt className="text-muted">Hol dolgozunk</dt>
                <dd className={valueClass}>Egész Magyarország, online</dd>
              </div>
              <div className={rowClass}>
                <dt className="text-muted">Székhely</dt>
                <dd className={valueClass}>{LEGAL.address}</dd>
              </div>
            </dl>
            <p className="mt-6 text-muted" data-reveal style={{ "--i": 2 } as React.CSSProperties}>
              Megtalálsz minket a{" "}
              <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="link">
                Facebookon
              </a>{" "}
              is. Ha inkább időpontot egyeztetnél,{" "}
              <a href="/book" className="link">
                foglalj online konzultációt
              </a>
              .
            </p>
          </div>

          <div className="lg:col-span-6" data-reveal data-hide-sticky>
            <div className="rounded-[1.75rem] border-[1.5px] border-line-strong p-5 sm:p-8">
              <h2 className="type-h3 !text-[1.75rem]">Írj pár sort</h2>
              <p className="mb-6 mt-2 text-muted">Egy munkanapon belül válaszolunk.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
