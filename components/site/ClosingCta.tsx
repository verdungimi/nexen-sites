import { CONTACT } from "@/lib/site";
import { ButtonLink } from "./Button";
import Container from "./Container";

interface ClosingCtaProps {
  title?: React.ReactNode;
  lead?: React.ReactNode;
}

/** Last block before the footer on most pages: one clear next step plus a direct line. */
export default function ClosingCta({
  title = "Nézzük meg, mit veszít most a weboldalad.",
  lead = "Egy online konzultáción átnézzük a mostani oldaladat és az ügyfélszerzésedet. Ha nem mi vagyunk a jó megoldás, azt is elmondjuk.",
}: ClosingCtaProps) {
  return (
    <section className="border-t border-rule bg-graphite-raised py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 className="type-h2">{title}</h2>
            <p className="type-lead measure mt-5">{lead}</p>
          </div>
          <div className="flex flex-col items-start gap-4 lg:col-span-4 lg:items-end">
            <ButtonLink href="/book" size="lg">
              Konzultációt foglalok
            </ButtonLink>
            <p className="text-fog">
              Vagy hívj:{" "}
              <a href={`tel:${CONTACT.phoneHref}`} className="text-bone underline decoration-rule underline-offset-4 hover:decoration-brass">
                {CONTACT.phone}
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
