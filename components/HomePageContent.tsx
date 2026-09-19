import FAQAccordion from "@/components/FAQAccordion";
import BuildTimelapse from "@/components/home/BuildTimelapse";
import ContactForm from "@/components/home/ContactForm";
import { ButtonLink } from "@/components/site/Button";
import Container from "@/components/site/Container";
import PricingTiers from "@/components/site/PricingTiers";
import ProcessTimeline from "@/components/site/ProcessTimeline";
import RoiCalculator from "@/components/site/RoiCalculator";
import Section from "@/components/site/Section";
import SectionIntro from "@/components/site/SectionIntro";
import { FAQ_ITEMS, PRINCIPLES, PROCESS_STEPS } from "@/lib/content";
import { CONTACT, CTA } from "@/lib/site";

const HERO_FACTS = ["Az első működő változat 3 munkanap alatt", "A végösszeget a jóváhagyás után fizeted"];

const PROBLEMS = [
  {
    title: "Ajánlásból jön a munka, de az ajánlott ügyfél is rád keres.",
    text: "Amit ott talál, az dönti el, felhív-e. Egy tíz éve készült vagy sablonos oldal azt üzeni, hogy a munkád is átlagos, pedig nem az.",
  },
  {
    title: "Hirdetésre költesz, de kevés az ajánlatkérés.",
    text: "A kattintást kifizeted, aztán a látogató egy olyan oldalra érkezik, ami nem mondja meg, miért éppen te, és nem könnyíti meg, hogy időpontot kérjen.",
  },
  {
    title: "Sok a rossz érdeklődő, kevés a jó.",
    text: "Ha az oldal nem szűr, azok is hívnak, akiknek nincs rád kerete. Az idő, amit velük töltesz, a jó ügyfelektől megy el.",
  },
];

const contactLinkClasses =
  "wdth-title inline-flex min-h-11 items-center rounded-md text-lg font-semibold text-bone underline decoration-rule underline-offset-[6px] transition-colors hover:decoration-brass sm:text-xl";

function Hero() {
  return (
    <section className="bg-graphite pb-20 pt-32 sm:pb-24 sm:pt-40 lg:pb-28 lg:pt-32">
      <Container>
        <h1 className="type-display max-w-5xl">Weboldalkészítés szolgáltató cégeknek</h1>

        <div className="mt-10 grid gap-14 sm:mt-12 lg:mt-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          <div className="lg:col-span-5">
            <p className="type-lead measure">
              A jól fizető ügyfél rád keres, mielőtt felhívna. Ha az oldalad olcsóbbnak mutat, mint amilyen a munkád, a
              versenytársat hívja. Bejáratott szolgáltató cégeknek építünk weboldalt, amitől a jó ügyfél már az első
              hívás előtt téged választ.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3">
              <ButtonLink href="/book" size="lg">
                {CTA.hero}
              </ButtonLink>
              <ButtonLink href="/folyamat" variant="quiet">
                Megnézem a folyamatot
              </ButtonLink>
            </div>
            <ul className="mt-10 space-y-3">
              {HERO_FACTS.map((fact) => (
                <li key={fact} className="flex items-center gap-3 text-bone/90">
                  <span aria-hidden="true" className="h-px w-4 flex-none bg-brass" />
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-drift lg:col-span-7">
            <BuildTimelapse />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function HomePageContent() {
  return (
    <>
      <Hero />

      <Section id="problems" aria-labelledby="problems-title">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionIntro
                id="problems-title"
                title="Ahol most ügyfelet veszítesz"
                lead="Ezt a hármat halljuk a legtöbbször a konzultációkon."
              />
            </div>
          </div>
          <ul className="lg:col-span-6 lg:col-start-7">
            {PROBLEMS.map((problem) => (
              <li key={problem.title} className="reveal border-t border-rule pb-12 pt-8 last:pb-0 sm:pb-14 sm:pt-10">
                <h3 className="type-h3">{problem.title}</h3>
                <p className="measure mt-4 text-fog">{problem.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="kalkulator" tone="raised" aria-labelledby="kalkulator-title">
        <SectionIntro
          id="kalkulator-title"
          title="Mennyit ér neked egy jobb weboldal?"
          lead="Írd be a saját számaidat. A kalkulátor megmutatja, mennyi bevétel marad most az asztalon, ha az oldalad kevesebb látogatóból csinál ajánlatkérést, mint amennyiből tudna."
        />
        <div className="mt-12 lg:mt-14">
          <RoiCalculator />
        </div>
      </Section>

      <Section id="packages" aria-labelledby="packages-title">
        <SectionIntro
          id="packages-title"
          title="Három módon dolgozhatunk együtt"
          lead="Árat a konzultáció után adunk, írásban, mert a terjedelem a céged helyzetétől függ. A csomagok azt mutatják meg, mekkora munkáról beszélünk."
        />
        <div className="mt-14 lg:mt-24">
          <PricingTiers />
        </div>
        <ButtonLink href="/packages" variant="quiet" className="mt-6">
          A csomagok részletesen
        </ButtonLink>
      </Section>

      <Section id="process" tone="raised" aria-labelledby="process-title">
        <SectionIntro
          id="process-title"
          title="Három munkanap az első élő változatig"
          lead="Gyorsan dolgozunk, de nem kapkodva: a konzultáción mindent összegyűjtünk, ami kell, így a munkanapokat építésre fordítjuk, nem várakozásra."
        />
        <div className="mt-14 lg:mt-16">
          <ProcessTimeline steps={PROCESS_STEPS} showDetails={false} />
        </div>
        <ButtonLink href="/folyamat" variant="quiet" className="mt-12">
          A teljes folyamat
        </ButtonLink>
      </Section>

      <Section id="about" aria-labelledby="about-title">
        <SectionIntro
          id="about-title"
          title="Stúdió, nem futószalag"
          lead="Kis csapatként végezzük a weboldalkészítést, szándékosan. Így minden projektet ugyanazok visznek végig a konzultációtól az élesítésig."
        />
        <ul className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:gap-x-16 lg:gap-y-14">
          {PRINCIPLES.map((principle) => (
            <li key={principle.title} className="reveal border-t border-rule pt-6">
              <h3 className="type-h3">{principle.title}</h3>
              <p className="measure mt-3 text-fog">{principle.text}</p>
            </li>
          ))}
        </ul>
        <ButtonLink href="/rolunk" variant="quiet" className="mt-12">
          Bővebben a stúdióról
        </ButtonLink>
      </Section>

      <Section id="faq" tone="raised" aria-labelledby="faq-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2 id="faq-title" className="type-h2">
                Gyakori kérdések
              </h2>
              <ButtonLink href="/gyik" variant="quiet" className="mt-6">
                Az összes kérdés
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <FAQAccordion items={FAQ_ITEMS.slice(0, 5)} />
          </div>
        </div>
      </Section>

      <Section id="contact" aria-labelledby="contact-title">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6 lg:pr-10">
            <h2 id="contact-title" className="type-h2">
              Beszéljünk a te weboldaladról.
            </h2>
            <p className="type-lead measure mt-5">
              Foglalj egy online konzultációt, vagy írj pár sort, és egy munkanapon belül válaszolunk.
            </p>
            <ButtonLink href="/book" size="lg" className="mt-9">
              {CTA.contact}
            </ButtonLink>

            <dl className="mt-12 border-t border-rule">
              <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-b border-rule py-4">
                <dt className="text-fog">Telefon</dt>
                <dd>
                  <a href={`tel:${CONTACT.phoneHref}`} className={contactLinkClasses}>
                    {CONTACT.phone}
                  </a>
                </dd>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-b border-rule py-4">
                <dt className="text-fog">E-mail</dt>
                <dd>
                  <a href={`mailto:${CONTACT.email}`} className={contactLinkClasses}>
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="reveal-pop rounded-[1.25rem] border border-rule bg-graphite-raised p-6 sm:p-8 lg:p-10">
              <p className="type-h3">Írj pár sort</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
