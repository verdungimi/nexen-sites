# Képek hozzáadása

Ez a mappa tartalmazza a weboldal statikus képeit.

## Szükséges képek:

### 1. Open Graph Image (`og-image.jpg`)
- **Méret:** 1200x630 pixel
- **Formátum:** JPG vagy PNG
- **Tartalom:** Nexen Sites branding, "Weboldal Készítés 10 Nap Alatt" szöveg
- **Használat:** Social media megosztásokhoz (Facebook, Twitter, LinkedIn)

### 2. Logo (`logo.png`)
- **Méret:** Minimum 512x512 pixel (nagyobb is lehet, de legyen négyzetes)
- **Formátum:** PNG (átlátszó háttérrel)
- **Tartalom:** Nexen Sites logó
- **Használat:** Structured data-ban és különböző helyeken a weboldalon

### 3. Favicon (`favicon.ico`)
- **Méret:** 16x16, 32x32, 48x48 pixel (multi-size ICO fájl)
- **Formátum:** ICO
- **Tartalom:** Nexen Sites ikon
- **Használat:** Böngésző tab ikon

### 4. Apple Touch Icon (`apple-touch-icon.png`)
- **Méret:** 180x180 pixel
- **Formátum:** PNG
- **Tartalom:** Nexen Sites ikon
- **Használat:** iOS eszközökön home screen ikon

## Képoptimalizálás tippek:

1. **Tömörítés:** Használj képtömörítő eszközt (pl. TinyPNG, Squoosh)
2. **WebP formátum:** Next.js automatikusan WebP formátumba konvertálja a képeket
3. **Lazy loading:** A Next.js Image komponens automatikusan lazy loading-ot használ

## Hogyan adhatod hozzá a képeket:

1. Helyezd el a képeket ebben a mappában (`public/`)
2. A képek elérhetők lesznek a `/og-image.jpg`, `/logo.png` stb. útvonalakon
3. A Next.js automatikusan optimalizálja őket

