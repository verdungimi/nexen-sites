# 🚀 Automatikus Deployment Útmutató

Ez az útmutató segít beállítani az automatikus deploymentet a Vercel-re.

## ⚡ Gyors beállítás (5 perc)

### 1. lépés: Vercel GitHub Integration beállítása

1. Menj a [Vercel Dashboard](https://vercel.com/dashboard)-ra és jelentkezz be
2. Válaszd ki a **nexen-sites** projektet (vagy hozd létre, ha még nincs)
3. Kattints a **Settings** fülre
4. Menj a **Git** szekcióba
5. Ha még nincs összekötve:
   - Kattints az **Connect Git Repository** gombra
   - Válaszd ki a **verdungimi/nexen-sites** repository-t
   - Engedélyezd a hozzáférést
6. Győződj meg róla, hogy a **Production Branch** beállítva van `main`-re

**Kész!** Mostantól minden push a `main` branch-re automatikusan deployolni fogja a weboldalt.

## 📝 Hogyan használd

### Változtatások deployolása

#### Opció 1: PowerShell script használata (Windows)

```powershell
.\scripts\deploy.ps1
```

A script megkérdezi a commit üzenetet, majd automatikusan:
- Hozzáadja a változtatásokat
- Commit-olja őket
- Push-olja a GitHub-ba
- A Vercel automatikusan deployol

#### Opció 2: Node.js script használata

```bash
npm run deploy
```

#### Opció 3: Manuális Git parancsok

```bash
git add .
git commit -m "Változtatások leírása"
git push
```

### Deployment státusz ellenőrzése

1. **Vercel Dashboard**: [vercel.com/dashboard](https://vercel.com/dashboard)
   - Látod az összes deployment-et
   - Látod a build státuszát
   - Látod a deployment URL-eket

2. **GitHub Actions**: [github.com/verdungimi/nexen-sites/actions](https://github.com/verdungimi/nexen-sites/actions)
   - Ha GitHub Actions-t használsz, itt láthatod a workflow futtatásokat

## 🔧 Hibaelhárítás

### A deployment nem indul el automatikusan

1. **Ellenőrizd a Vercel beállításokat:**
   - Settings → Git → Győződj meg róla, hogy a repository össze van kötve
   - Settings → Git → Production Branch legyen `main`

2. **Ellenőrizd a GitHub repository-t:**
   - Győződj meg róla, hogy push-oltál a `main` branch-re
   - Nézd meg a GitHub repository Actions fülét

3. **Vercel token ellenőrzése (ha GitHub Actions-t használsz):**
   - GitHub → Settings → Secrets → Ellenőrizd, hogy a `VERCEL_TOKEN` be van-e állítva

### Build hiba esetén

1. Menj a Vercel Dashboard-ra
2. Kattints a deployment-re
3. Nézd meg a build logokat
4. Gyakori problémák:
   - Hiányzó függőségek → Ellenőrizd a `package.json`-t
   - TypeScript hibák → Futtasd: `npm run lint`
   - Environment változók hiánya → Vercel Settings → Environment Variables

## 📚 További információk

- [Vercel Dokumentáció](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GitHub Actions Dokumentáció](https://docs.github.com/en/actions)

## 💡 Tippek

- **Preview Deployments**: Minden pull request automatikusan kap egy preview URL-t
- **Rollback**: Ha valami nem jó, a Vercel Dashboard-on visszaállíthatod egy korábbi verzióra
- **Environment Variables**: Használj environment változókat a Vercel Settings-ben titkos adatokhoz

