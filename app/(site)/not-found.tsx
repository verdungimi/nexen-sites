import Container from "@/components/site/Container";
import { ButtonLink } from "@/components/site/Button";
import { CTA_HREF, CTA_LABEL } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="on-navy bg-navy pb-24 pt-14 text-white sm:pb-32 sm:pt-24">
      <Container className="max-w-3xl">
        <p className="font-semibold text-sky">404</p>
        <h1 className="type-h1 mt-3">Ez az oldal nem található</h1>
        <p className="type-lead mt-6 text-cloud">Lehet, hogy elírás van a címben, vagy az oldal már máshol van. Innen biztosan továbbjutsz:</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg" variant="outlineOnNavy">
            Vissza a főoldalra
          </ButtonLink>
          <ButtonLink href={CTA_HREF} size="lg">
            {CTA_LABEL}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
