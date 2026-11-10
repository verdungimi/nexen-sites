import { LEGAL_REVIEW_PENDING } from "@/lib/site";
import Container from "./Container";
import PageHero from "./PageHero";

interface LegalPageProps {
  title: string;
  path: string;
  crumbLabel: string;
  answer: string;
  /** Human-readable date of the last change, e.g. "2026. november 10." */
  updated: string;
  children: React.ReactNode;
}

/** Shared frame of the four legal pages: page header, review notice, long-form text. */
export default function LegalPage({ title, path, crumbLabel, answer, updated, children }: LegalPageProps) {
  return (
    <>
      <PageHero title={title} crumbs={[{ href: path, label: crumbLabel }]} answer={answer} />
      <Container className="max-w-4xl py-12 sm:py-16">
        {LEGAL_REVIEW_PENDING && (
          <p className="mb-10 rounded-2xl border-[1.5px] border-dashed border-mid bg-mist p-5 font-semibold">
            [IMI: ezt a szöveget az újraépítéskor átírtuk, és jogász még nem nézte át. Élesítés előtt jogi átnézés kell. A jelzés a lib/site.ts
            fájlban, a LEGAL_REVIEW_PENDING értékkel kapcsolható ki.]
          </p>
        )}
        <p className="mb-8 text-muted">Utolsó módosítás: {updated}</p>
        <div className="prose-nexen max-w-[44rem]">{children}</div>
      </Container>
    </>
  );
}
