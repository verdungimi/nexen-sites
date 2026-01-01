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

### Vercel (ajánlott)

1. Push-old a kódot egy Git repository-ba
2. Import-old a projektet Vercel-en
3. Vercel automatikusan felismeri a Next.js projektet és buildeli

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
