import type { Metadata } from "next";
import Container from "@/components/site/Container";
import { CONTACT } from "@/lib/site";
import BookingForm from "./BookingForm";

export const metadata: Metadata = {
  title: "Konzultáció foglalása",
  description:
    "Foglalj egy online konzultációt: átnézzük a céged helyzetét és a mostani weboldaladat. A beszélgetés után írásos ajánlatot kapsz, ha van értelme együtt dolgozni.",
  alternates: {
    canonical: "/book",
  },
};

const EXPECTATIONS = [
  {
    title: "Kérdezünk, nem prezentálunk",
    text: "A céged, az ügyfeleid és a mostani ügyfélszerzésed a téma.",
  },
  {
    title: "Őszinte válasz",
    text: "Ha nem mi vagyunk a jó megoldás, megmondjuk.",
  },
  {
    title: "Nincs kötelezettség",
    text: "A konzultáció után döntesz.",
  },
];

const linkClass = "text-bone underline decoration-rule underline-offset-4 transition-colors hover:decoration-brass";

export default function BookPage() {
  return (
    <section className="bg-graphite pb-20 pt-32 sm:pb-24 sm:pt-40 lg:pb-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-16">
          <div className="lg:col-span-5">
            <div className="lg:[@media(min-height:50rem)]:sticky lg:[@media(min-height:50rem)]:top-32">
              <h1 className="type-h2">Foglalj egy online konzultációt</h1>
              <p className="type-lead measure mt-5">
                Átnézzük a céged helyzetét, a mostani weboldaladat és azt, hogy mit kellene elérnie. A beszélgetés után
                írásos ajánlatot kapsz, ha van értelme együtt dolgozni.
              </p>

              <h2 className="wdth-title mt-12 text-xl font-semibold">Mire számíts</h2>
              <ul className="mt-4 border-b border-rule">
                {EXPECTATIONS.map((item) => (
                  <li key={item.title} className="border-t border-rule py-4">
                    <h3 className="font-semibold text-bone">{item.title}</h3>
                    <p className="mt-1 text-fog">{item.text}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <h2 className="wdth-title text-xl font-semibold">Inkább telefonálnál?</h2>
                <p className="mt-3 text-fog">
                  Hívj a{" "}
                  <a href={`tel:${CONTACT.phoneHref}`} className={`${linkClass} whitespace-nowrap`}>
                    {CONTACT.phone}
                  </a>{" "}
                  számon, vagy írj a{" "}
                  <a href={`mailto:${CONTACT.email}`} className={`${linkClass} whitespace-nowrap`}>
                    {CONTACT.email}
                  </a>{" "}
                  címre.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <BookingForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
