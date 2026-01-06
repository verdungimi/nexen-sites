# Logo használati útmutató

## Logo fájl elhelyezése

Helyezd el a Zöldház Energy Kft. logóját (amit a Facebook oldalukról letöltesz) a következő néven:

**`zoldhaz-logo.png`** vagy **`zoldhaz-logo.jpg`**

A fájlt a `public/images/` mappába kell elhelyezni.

## Hogyan töltsd le a logót:

1. **Facebook oldalról:**
   - Nyisd meg: https://www.facebook.com/zoldhazenergy
   - Kattints jobb gombbal a profilképre/logóra
   - "Kép mentése másként..."
   - Nevezd át: `zoldhaz-logo.png`
   - Mentsd el a `public/images/` mappába

2. **Alternatíva:**
   - Ha a logó más formátumban van (JPG, SVG), nevezd át `zoldhaz-logo.png`-re vagy `zoldhaz-logo.jpg`-re
   - A komponens automatikusan felismeri a PNG és JPG formátumokat

## Használat

A logo automatikusan megjelenik:
- **Navbar-ban** (fejléc)
- **Hero szekcióban** (főoldal)
- **Footer-ben** (lábjegyzet)

Ha a logo kép hiányzik, a komponens automatikusan egy SVG fallback logót mutat.

