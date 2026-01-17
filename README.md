# Nexen Sites

Modern, gyors, konverzióra optimalizált marketing weboldal a "Weboldal 10 nap alatt" ajánlattal.

## Technológia

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **React 18**

## Telepítés és futtatás

### Előfeltételek

- Node.js 18+ telepítve
- npm vagy yarn

### Lépések

1. Telepítsd a függőségeket:
```bash
npm install
```

2. Futtasd a fejlesztői szervert:
```bash
npm run dev
```

3. Nyisd meg a böngészőben: [http://localhost:3000](http://localhost:3000)

### Éles környezet build

```bash
npm run build
npm start
```

## Projekt struktúra

```
├── app/                    # Next.js App Router oldalak
│   ├── page.tsx           # Főoldal (/)
│   ├── book/              # Időpontfoglalás oldal (/book)
│   ├── thank-you/         # Köszönő oldal (/thank-you)
│   ├── privacy/           # Adatvédelmi tájékoztató (/privacy)
│   ├── terms/             # ÁSZF (/terms)
│   ├── layout.tsx         # Fő layout
│   └── globals.css        # Globális stílusok
├── components/            # Újrafelhasználható komponensek
│   ├── Navbar.tsx         # Navigációs sáv
│   ├── Footer.tsx         # Lábléc
│   ├── CTAButton.tsx      # CTA gomb komponens
│   ├── Section.tsx        # Szekció wrapper
│   ├── FAQAccordion.tsx   # GYIK accordion
│   └── TestimonialCard.tsx # Vélemény kártya
└── public/                # Statikus fájlok (ha van)
```

## Tartalom szerkesztése

### Kapcsolati információk módosítása

A kapcsolati adatok több helyen találhatók:

1. **Footer** (`components/Footer.tsx`):
   - Email: `info@nexensites.hu`
   - Telefon: `+36 70 576 7845`
   - Város: `Budapest`

2. **Navbar** (`components/Navbar.tsx`):
   - Cégnév: `Nexen Sites`

3. **Homepage** (`app/page.tsx`):
   - Kapcsolat szekcióban

### Social media linkek módosítása

A Footer komponensben (`components/Footer.tsx`) találhatók a social media linkek:

```tsx
<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
  Facebook
</a>
```

Cseréld le a `https://facebook.com` részt a tényleges profilod linkjére.

### Árak módosítása

A főoldal (`app/page.tsx`) "Árak és csomagok" szekciójában találhatók az árak:

- **Start:** 299,000 Ft
- **Pro:** 499,000 Ft
- **Max:** 699,000 Ft

Keresd a `id="arak"` szekciót és módosítsd az árakat.

### GYIK módosítása

A GYIK szekció (`app/page.tsx`) az `FAQAccordion` komponenst használja. Keresd a `id="gyik"` szekciót és módosítsd a kérdéseket és válaszokat.

### Vélemények módosítása

A főoldal "Mit mondanak rólunk" szekciójában találhatók a vélemények. Keresd a `TestimonialCard` komponenseket és módosítsd a tartalmat.

### Időpontfoglalási form mezők

Az időpontfoglalási oldal (`app/book/page.tsx`) form mezőit itt tudod módosítani. A form jelenleg localStorage-ba ment, majd átirányít a thank-you oldalra.

**API integrációhoz:** Hozz létre egy API route-ot (`app/api/booking/route.ts`), majd módosítsd a `handleSubmit` függvényt a `app/book/page.tsx` fájlban:

```typescript
await fetch('/api/booking', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});
```

## SEO és Analytics

### SEO metadata

Minden oldal tartalmaz SEO metadata-t. Az oldalakon található `export const metadata` objektumokban módosíthatod:
- Title
- Description
- OpenGraph címkék

### Analytics

Az analytics kód placeholderként a homepage alján található (kommentben). Hozzáadásához:

1. Távolítsd el a kommenteket
2. Cseréld le a `GA_MEASUREMENT_ID`-t a tényleges Google Analytics ID-dra
3. Vagy használj más analytics megoldást (pl. Plausible, Fathom)

## Testreszabás

### Színek

A Tailwind konfiguráció (`tailwind.config.ts`) tartalmaz egy `primary` színpalettát. Módosítsd a színeket itt, és automatikusan frissülnek az összes komponensben.

### Fontok

A font a `app/layout.tsx`-ben van beállítva (jelenleg Inter). Módosíthatod vagy hozzáadhatsz más fontokat.

### Stílusok

A globális stílusok az `app/globals.css`-ben találhatók. Tailwind utility osztályokat használunk a komponensekben.

## Jogi tartalom

⚠️ **FONTOS:** Az adatvédelmi tájékoztató (`/privacy`) és az ÁSZF (`/terms`) **sablon szövegek**. Mielőtt élesben használod:

1. Javasolt egy jogász vagy adatvédelmi szakértő felülvizsgálata
2. Igazítsd a tényleges adatkezelési gyakorlathoz
3. Ellenőrizd a GDPR és magyar jogszabályoknak való megfelelőséget

## Deployment

### Automatikus Deployment beállítása (Vercel)

A weboldal automatikusan frissül, amikor push-olsz a GitHub repository-ba. Két módszer közül választhatsz:

#### 1. Vercel GitHub Integration (Ajánlott - Legegyszerűbb)

1. Menj a [Vercel Dashboard](https://vercel.com/dashboard)-ra
2. Válaszd ki a `nexen-sites` projektet
3. Menj a **Settings** → **Git** menüpontra
4. Győződj meg róla, hogy a GitHub repository össze van kötve
5. Ha nincs összekötve, kattints az **Connect Git Repository** gombra
6. Válaszd ki a `verdungimi/nexen-sites` repository-t
7. A Vercel automatikusan deployol minden push után a `main` branch-re

**Kész!** Mostantól minden alkalommal, amikor push-olsz a GitHub-ba, a Vercel automatikusan frissíti a weboldalt.

#### 2. GitHub Actions használata (Alternatíva)

Ha a Vercel GitHub Integration nem működik, használhatod a GitHub Actions workflow-t:

1. Menj a [Vercel Dashboard](https://vercel.com/dashboard)-ra
2. Válaszd ki a projektet → **Settings** → **General**
3. Másold ki a következő értékeket:
   - **Vercel Token** (Settings → Tokens)
   - **Org ID** (Settings → General)
   - **Project ID** (Settings → General)

4. Menj a GitHub repository-hoz → **Settings** → **Secrets and variables** → **Actions**
5. Add hozzá a következő Secrets-eket:
   - `VERCEL_TOKEN` - A Vercel token
   - `VERCEL_ORG_ID` - Az Organization ID
   - `VERCEL_PROJECT_ID` - A Project ID

6. Mostantól minden push a `main` branch-re automatikusan deployolni fogja a weboldalt.

### Helyi változtatások deployolása

#### PowerShell használatával (Windows):

```powershell
.\scripts\deploy.ps1
```

#### Node.js használatával:

```bash
npm run deploy
```

Ez a script:
1. Ellenőrzi a változtatásokat
2. Commit-olja a változtatásokat
3. Push-olja a GitHub-ba
4. A Vercel automatikusan deployol

#### Manuális deployment:

```bash
git add .
git commit -m "Változtatások leírása"
git push
```

### Egyéb platformok

A projekt bármilyen Node.js hosting szolgáltatáson futtatható, amely támogatja a Next.js-t:
- Netlify
- AWS Amplify
- Railway
- stb.

## Támogatás

Kérdéseid esetén: info@nexensites.hu

## Licenc

Ez a projekt privát használatra készült.
