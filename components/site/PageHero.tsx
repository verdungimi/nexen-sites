import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import Container from "./Container";
import JsonLd from "./JsonLd";
import Words from "./Words";

interface Crumb {
  href: string;
  label: string;
}

interface PageHeroProps {
  title: string;
  /** The 40–60 word direct answer the page opens with (important for AI search engines) */
  answer: React.ReactNode;
  /** Path from the home page to this page, the page itself last */
  crumbs: Crumb[];
  children?: React.ReactNode;
}

/** Dark blue page header for inner pages: breadcrumb, H1 and an answer-first opening paragraph. */
export default function PageHero({ title, answer, crumbs, children }: PageHeroProps) {
  const trail = [{ href: "/", label: "Főoldal" }, ...crumbs];
  return (
    <section className="on-navy bg-navy pb-14 pt-8 text-white sm:pb-20 sm:pt-12">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: trail.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.label,
            item: crumb.href === "/" ? SITE_URL : `${SITE_URL}${crumb.href}`,
          })),
        }}
      />
      <Container>
        <nav aria-label="Morzsamenü" className="text-[0.9375rem] text-cloud">
          <ol className="flex flex-wrap items-center gap-x-2">
            {trail.map((crumb, index) => {
              const last = index === trail.length - 1;
              return (
                <li key={crumb.href} className="flex items-center gap-x-2">
                  {last ? (
                    <span aria-current="page" className="inline-flex min-h-10 items-center text-white">
                      {crumb.label}
                    </span>
                  ) : (
                    <>
                      <Link href={crumb.href} className="inline-flex min-h-10 items-center underline decoration-navy-line underline-offset-4 hover:text-white">
                        {crumb.label}
                      </Link>
                      <span aria-hidden="true">/</span>
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
        <h1 className="type-h1 mt-6 max-w-4xl" data-reveal-words>
          <Words text={title} />
        </h1>
        <p className="type-lead mt-6 max-w-[42rem] text-cloud" data-reveal style={{ "--i": 2 } as React.CSSProperties}>
          {answer}
        </p>
        {children && (
          <div className="mt-9" data-reveal style={{ "--i": 3 } as React.CSSProperties}>
            {children}
          </div>
        )}
      </Container>
    </section>
  );
}
