import type { Metadata } from "next";
import LegalPage from "@/components/site/LegalPage";
import { CONTACT, LEGAL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impresszum",
  description: "A nexensites.hu üzemeltetőjének és tárhelyszolgáltatójának adatai: név, székhely, adószám, nyilvántartási szám, elérhetőségek.",
  alternates: { canonical: "/impresszum" },
};

export default function ImprintPage() {
  return (
    <LegalPage
      title="Impresszum"
      path="/impresszum"
      crumbLabel="Impresszum"
      updated="2026. november 10."
      answer={`A nexensites.hu weboldalt ${LEGAL.name} üzemelteti, Nexen Sites márkanéven. Székhely: ${LEGAL.address} Adószám: ${LEGAL.taxNumber}. Nyilvántartási szám: ${LEGAL.registryNumber}. A weboldal tárhelyszolgáltatója a Vercel Inc. Az alábbiakban minden adatot megtalálsz, amit a jogszabály előír.`}
    >
      <h2>A szolgáltató adatai</h2>
      <table>
        <tbody>
          <tr>
            <th scope="row">Név</th>
            <td>{LEGAL.name}</td>
          </tr>
          <tr>
            <th scope="row">Márkanév</th>
            <td>Nexen Sites</td>
          </tr>
          <tr>
            <th scope="row">Székhely</th>
            <td>{LEGAL.address}</td>
          </tr>
          <tr>
            <th scope="row">Adószám</th>
            <td>{LEGAL.taxNumber}</td>
          </tr>
          <tr>
            <th scope="row">Nyilvántartási szám</th>
            <td>{LEGAL.registryNumber}</td>
          </tr>
          <tr>
            <th scope="row">Kapcsolattartó</th>
            <td>{CONTACT.person}</td>
          </tr>
          <tr>
            <th scope="row">Telefon</th>
            <td>
              <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a> ({CONTACT.hours})
            </td>
          </tr>
          <tr>
            <th scope="row">E-mail</th>
            <td>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </td>
          </tr>
          <tr>
            <th scope="row">Weboldal</th>
            <td>{SITE_URL.replace("https://", "")}</td>
          </tr>
        </tbody>
      </table>

      <h2>A tárhelyszolgáltató adatai</h2>
      <table>
        <tbody>
          <tr>
            <th scope="row">Név</th>
            <td>Vercel Inc.</td>
          </tr>
          <tr>
            <th scope="row">Cím</th>
            <td>440 N Barranca Avenue #4133, Covina, CA 91723, Amerikai Egyesült Államok</td>
          </tr>
          <tr>
            <th scope="row">E-mail</th>
            <td>
              <a href="mailto:privacy@vercel.com">privacy@vercel.com</a>
            </td>
          </tr>
          <tr>
            <th scope="row">Weboldal</th>
            <td>
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
                vercel.com
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Szerzői jogok</h2>
      <p>
        A weboldal szövegei, grafikái és kódja szerzői jogi védelem alatt állnak. Felhasználásukhoz a szolgáltató előzetes írásbeli engedélye
        szükséges, kivéve az idézést a forrás megjelölésével.
      </p>

      <h2>Kapcsolódó dokumentumok</h2>
      <ul>
        <li>
          <a href="/terms">Általános szerződési feltételek</a>
        </li>
        <li>
          <a href="/privacy">Adatkezelési tájékoztató</a>
        </li>
        <li>
          <a href="/cookies">Cookie tájékoztató</a>
        </li>
      </ul>
    </LegalPage>
  );
}
