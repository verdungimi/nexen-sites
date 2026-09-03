import type { Metadata } from "next";
import TermekekContent from "./TermekekContent";

export const metadata: Metadata = {
  title: "Termékek | Zöldház Energy",
  description: "Zöldház Energy klímaberendezések és termékek kínálata.",
  alternates: {
    canonical: "https://nexensites.hu/termekek",
  },
};

export default function TermekekPage() {
  return <TermekekContent />;
}
