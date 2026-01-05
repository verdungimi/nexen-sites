# SEO Beállítási Útmutató

Ez az útmutató segít beállítani a Google Search Console-t, Google Analytics-t és a szükséges képeket.

## 1. Google Search Console Beállítása

### Lépések:

1. **Regisztráció:**
   - Menj a [Google Search Console](https://search.google.com/search-console) oldalra
   - Jelentkezz be Google fiókkal

2. **Property hozzáadása:**
   - Kattints az "Add Property" gombra
   - Válaszd a "URL prefix" opciót
   - Add meg: `https://nexensites.hu`
   - Kattints a "Continue" gombra

3. **Verifikáció:**
   - Válaszd a "HTML tag" verifikációs módszert
   - Másold ki a `content` értékét (pl. `abc123xyz...`)
   - Add hozzá a Vercel Environment Variables-hez:
     - **Név:** `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
     - **Érték:** A másolt verifikációs kód (csak a kód, nem a teljes meta tag)
   - Kattints a "Verify" gombra

4. **Sitemap beküldése:**
   - A verifikáció után menj a "Sitemaps" menüpontra
   - Add meg: `sitemap.xml`
   - Kattints a "Submit" gombra

### Vercel Environment Variable hozzáadása:

1. Menj a [Vercel Dashboard](https://vercel.com/dashboard)-ra
2. Válaszd ki a `nexen-sites` projektet
3. Menj a **Settings** → **Environment Variables** menüpontra
4. Add hozzá:
   - **Key:** `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
   - **Value:** A Google Search Console verifikációs kódja
5. Kattints a "Save" gombra
6. **Fontos:** Redeployold a projektet (Settings → Deployments → Redeploy)

## 2. Google Analytics Beállítása

### Lépések:

1. **Regisztráció:**
   - Menj a [Google Analytics](https://analytics.google.com/) oldalra
   - Jelentkezz be Google fiókkal

2. **Property létrehozása:**
   - Kattints az "Admin" (fogaskerék ikon) gombra
   - Válaszd a "Create Property" opciót
   - Add meg a property nevet: `Nexen Sites`
   - Válaszd az időzónát: `(GMT+01:00) Budapest`
   - Válaszd a pénznemet: `Hungarian Forint (HUF)`
   - Kattints a "Next" gombra

3. **Üzleti információk:**
   - Töltsd ki az üzleti információkat
   - Kattints a "Create" gombra

4. **Measurement ID másolása:**
   - A property létrehozása után másold ki a **Measurement ID**-t (pl. `G-XXXXXXXXXX`)
   - Add hozzá a Vercel Environment Variables-hez:
     - **Név:** `NEXT_PUBLIC_GA_MEASUREMENT_ID`
     - **Érték:** A Measurement ID (pl. `G-XXXXXXXXXX`)

5. **Data Stream beállítása:**
   - Válaszd a "Web" opciót
   - Add meg a weboldal URL-t: `https://nexensites.hu`
   - Add meg a stream nevet: `Nexen Sites Website`
   - Kattints a "Create stream" gombra

### Vercel Environment Variable hozzáadása:

1. Menj a [Vercel Dashboard](https://vercel.com/dashboard)-ra
2. Válaszd ki a `nexen-sites` projektet
3. Menj a **Settings** → **Environment Variables** menüpontra
4. Add hozzá:
   - **Key:** `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value:** A Google Analytics Measurement ID (pl. `G-XXXXXXXXXX`)
5. Kattints a "Save" gombra
6. **Fontos:** Redeployold a projektet

### Cookie Consent:

A Google Analytics automatikusan tiszteletben tartja a cookie consent beállításokat. Ha a felhasználó nem fogadja el az analytics cookie-kat, az Analytics nem töltődik be.

## 3. Képek Hozzáadása

### Szükséges képek:

1. **Open Graph Image** (`/public/og-image.jpg`)
   - Méret: 1200x630 pixel
   - Formátum: JPG vagy PNG
   - Tartalom: Nexen Sites branding, "Weboldal Készítés 10 Nap Alatt" szöveg

2. **Logo** (`/public/logo.png`)
   - Méret: Minimum 512x512 pixel (négyzetes)
   - Formátum: PNG (átlátszó háttérrel)
   - Tartalom: Nexen Sites logó

3. **Favicon** (`/public/favicon.ico`)
   - Méret: 16x16, 32x32, 48x48 pixel (multi-size ICO fájl)
   - Formátum: ICO
   - Tartalom: Nexen Sites ikon

4. **Apple Touch Icon** (`/public/apple-touch-icon.png`)
   - Méret: 180x180 pixel
   - Formátum: PNG
   - Tartalom: Nexen Sites ikon

### Hogyan add hozzá:

1. Helyezd el a képeket a `public/` mappában
2. A képek automatikusan elérhetők lesznek a `/og-image.jpg`, `/logo.png` stb. útvonalakon
3. A Next.js automatikusan optimalizálja őket

### Képoptimalizálás tippek:

- Használj képtömörítő eszközt (pl. [TinyPNG](https://tinypng.com/), [Squoosh](https://squoosh.app/))
- A Next.js automatikusan WebP formátumba konvertálja a képeket
- A Next.js Image komponens automatikusan lazy loading-ot használ

## 4. Ellenőrzés

### Google Search Console:

1. Menj a Google Search Console-ba
2. Ellenőrizd, hogy a sitemap be van-e küldve és feldolgozva
3. Nézd meg a "Coverage" jelentést, hogy vannak-e hibák
4. Ellenőrizd a "Performance" jelentést, hogy jönnek-e a keresések

### Google Analytics:

1. Menj a Google Analytics-ba
2. Válaszd ki a property-t
3. Menj a "Realtime" jelentéshez
4. Nyisd meg a weboldalt egy másik böngészőben vagy inkognitó módban
5. Ellenőrizd, hogy megjelenik-e a látogatás a Realtime jelentésben

### SEO ellenőrzés:

1. Használd a [Google Rich Results Test](https://search.google.com/test/rich-results) eszközt
2. Add meg a weboldal URL-t
3. Ellenőrizd, hogy a structured data helyesen van-e beállítva

2. Használd a [PageSpeed Insights](https://pagespeed.web.dev/) eszközt
3. Add meg a weboldal URL-t
4. Nézd meg a teljesítmény és SEO pontszámokat

## 5. További SEO Tippek

### Tartalom:

- **Rendszeres blog posztok:** Publikálj minőségi, releváns tartalmat a blogban
- **Kulcsszavak:** Használd természetesen a kulcsszavakat a tartalomban
- **Belső linkelés:** Linkeld össze a kapcsolódó oldalakat
- **Külső linkek:** Szerezz minőségi backlink-eket más weboldalakról

### Technikai SEO:

- **Gyors betöltés:** A Next.js automatikusan optimalizálja a teljesítményt
- **Mobilbarát:** A weboldal responsive, mobilbarát
- **HTTPS:** A Vercel automatikusan biztosítja a HTTPS-t
- **Structured Data:** Már be van állítva (Organization, Service, LocalBusiness, FAQPage)

### Közösségi média:

- **Open Graph:** Már be van állítva, csak add hozzá az `og-image.jpg` képet
- **Twitter Cards:** Már be van állítva
- **Social Media Linkek:** Frissítsd a Footer-ben lévő social media linkeket

## 6. Monitoring

### Rendszeres ellenőrzések:

- **Hetente:** Nézd meg a Google Search Console Performance jelentést
- **Havonta:** Nézd meg a Google Analytics jelentéseket
- **Negyedévente:** Frissítsd a tartalmat, publikálj új blog posztokat

### Hasznos eszközök:

- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Schema.org Validator](https://validator.schema.org/)

## Kész!

Most már minden be van állítva az SEO optimalizáláshoz. A weboldal most jobban szerepelhet a keresőkben a "nexen", "nexen weboldal" és "weboldalak készítése" kifejezésekre.

