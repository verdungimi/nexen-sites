# Klíma Képek

Ebbe a mappába tedd be a klíma képeket a következő nevekkel:

1. **klima-samsung-ar35.jpg** - Samsung AR35 klíma képe (indoor és outdoor egység)
2. **klima-midea-one.jpg** - MDV by Midea One klíma képe
3. **klima-midea-xtreme.jpg** - Midea Xtreme Save klíma képe
4. **klima-midea-breezeless.jpg** - Midea BreezeleSS E klíma képe
5. **klima-midea-all-easy.jpg** - Midea All Easy Pro klíma képe
6. **klima-gree-comfort.jpg** - Gree Comfort Plus klíma képe
7. **klima-daewoo.jpg** - Daewoo Split Klíma képe

## Hogyan töltsd le a képeket:

### 1. módszer: Facebook posztból
- Nyisd meg a Facebook posztot a klíma akcióval
- Kattints jobb gombbal a képre → "Kép mentése másként..."
- Nevezd át a megfelelő névre (pl. `klima-samsung-ar35.jpg`)
- Mentsd el a `public/images/` mappába

### 2. módszer: Plakátról
- Nyisd meg a plakát képet
- Vágd ki az egyes klíma képeket (indoor + outdoor egységek)
- Mentsd el a megfelelő nevekkel a `public/images/` mappába

### 3. módszer: Webes keresés
- Keress rá Google-ban: "[Klíma név] split air conditioner image"
- Töltsd le a képet és nevezd át megfelelően
- Mentsd el a `public/images/` mappába

**Fontos:**
- A képek formátuma: JPG vagy PNG
- Ajánlott méret: minimum 800x600px
- A képeknek tartalmazniuk kell az indoor és outdoor egységeket (ahogy a plakáton látható)
- Ha egy kép hiányzik, a weboldal egy placeholder-t fog mutatni

**Automatikus letöltés (opcionális):**
Futtasd a scriptet: `node scripts/download-klima-images.js`
Ez letölt placeholder képeket, amiket később le lehet cserélni a valódi képekre.

