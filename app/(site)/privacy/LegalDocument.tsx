import { Fragment } from "react";
import PageHero from "@/components/site/PageHero";
import Section from "@/components/site/Section";

// Shared layout for the legal pages (/privacy, /terms, /cookies):
// a sticky table of contents on desktop and the text in `prose-nexen`.

export interface LegalSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface LegalDocumentProps {
  title: string;
  /** Shown under the title, e.g. "2026. szeptember 16." */
  effectiveDate: string;
  sections: LegalSection[];
}

export default function LegalDocument({ title, effectiveDate, sections }: LegalDocumentProps) {
  return (
    <>
      <PageHero title={title} lead={`Hatályos: ${effectiveDate}`} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <nav aria-labelledby="tartalomjegyzek" className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-28">
              <p id="tartalomjegyzek" className="font-semibold text-bone">
                Tartalom
              </p>
              <ol className="mt-3">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="flex min-h-11 items-center py-1 leading-snug text-fog transition-colors duration-200 hover:text-bone"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <div className="prose-nexen lg:col-span-8 lg:col-start-5 [&>h2:first-child]:mt-0">
            {sections.map((section) => (
              <Fragment key={section.id}>
                <h2 id={section.id}>{section.title}</h2>
                {section.content}
              </Fragment>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
