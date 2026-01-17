# 🔒 Biztonsági Beállítások - Weboldal Védelme

Ez az útmutató segít megvédeni a weboldalt, hogy csak te (vagy megbízható személyek) tudják módosítani.

## 🚨 Fontos Biztonsági Lépések

### 1. GitHub Repository Privátra Állítása

**Jelenleg a repository nyilvános (public), ami azt jelenti, hogy bárki láthatja és másolhatja a kódot.**

#### Lépések:

1. Menj a GitHub repository-hoz: https://github.com/verdungimi/nexen-sites
2. Kattints a **Settings** fülre (a repository tetején)
3. Görgess le a **Danger Zone** szekcióhoz
4. Kattints a **Change visibility** gombra
5. Válaszd a **Make private** opciót
6. Írd be a repository nevét a megerősítéshez: `verdungimi/nexen-sites`
7. Kattints a **I understand, change repository visibility** gombra

**⚠️ Figyelem:** Privát repository esetén:
- Csak te és a hozzáadott collaboratorok láthatják
- Vercel deployment továbbra is működik
- Ingyenes GitHub fiók esetén korlátlan privát repository-kat használhatsz

---

### 2. Collaborator Hozzáférés Korlátozása

Ha valakinek hozzáférést adtál, de már nem kell:

1. GitHub repository → **Settings** → **Collaborators**
2. Nézd meg, kiknek van hozzáférése
3. Ha valakit el kell távolítani, kattints a **X** mellett a nevüknél

---

### 3. Branch Protection Rules (Ajánlott!)

Ez megakadályozza, hogy bárki közvetlenül push-olhasson a `main` branch-re.

#### Lépések:

1. GitHub repository → **Settings** → **Branches**
2. Kattints az **Add branch protection rule** gombra
3. **Branch name pattern:** `main`
4. Jelöld be a következő opciókat:
   - ✅ **Require a pull request before merging**
     - ✅ **Require approvals** (1 vagy több)
   - ✅ **Require status checks to pass before merging**
   - ✅ **Require conversation resolution before merging**
   - ✅ **Do not allow bypassing the above settings** (még adminoknak sem)
   - ✅ **Restrict who can push to matching branches** (csak te)
5. Kattints a **Create** gombra

**Eredmény:** Mostantól:
- Nem lehet közvetlenül push-olni a `main` branch-re
- Pull Request kell minden változtatáshoz
- Te vagy a megbízható személyek kell, hogy jóváhagyják

---

### 4. SSH Kulcs Használata (Opcionális, de Ajánlott)

A jelszó helyett SSH kulcsot használj a git push-hoz.

#### Lépések:

1. **SSH kulcs generálása** (ha még nincs):
   ```powershell
   ssh-keygen -t ed25519 -C "info@nexensites.hu"
   ```
   - Nyomd meg az Enter-t az alapértelmezett helyhez
   - Opcionálisan adj meg egy jelszót

2. **SSH kulcs hozzáadása a GitHub-hoz:**
   - Másold ki a publikus kulcsot:
     ```powershell
     cat ~/.ssh/id_ed25519.pub
     ```
   - GitHub → **Settings** (profil) → **SSH and GPG keys** → **New SSH key**
   - Add meg a kulcsot

3. **Git remote URL módosítása SSH-re:**
   ```powershell
   git remote set-url origin git@github.com:verdungimi/nexen-sites.git
   ```

---

### 5. Vercel Deployment Beállítások

#### Deployment Protection:

1. Menj a [Vercel Dashboard](https://vercel.com/dashboard)-ra
2. Válaszd ki a **nexen-sites** projektet
3. **Settings** → **Git**
4. **Deployment Protection:**
   - ✅ **Only allow deployments from the main branch**
   - ✅ **Require approval for deployments** (opcionális, de ajánlott)

#### Vercel Project Access:

1. Vercel Dashboard → **Settings** → **Team** vagy **Access**
2. Ellenőrizd, kiknek van hozzáférése a projekthez
3. Távolítsd el azokat, akiknek nem kell

---

### 6. Git Credentials Biztonság

#### Windows Credential Manager:

Ha a Windows Credential Manager-ben van eltárolva a GitHub jelszó:

1. Nyisd meg a **Windows Credential Manager**-t
2. **Windows Credentials** → Keresd a `git:https://github.com` bejegyzést
3. Ellenőrizd, hogy csak a te fiókod van eltárolva

#### Personal Access Token (Ajánlott):

Ha jelszó helyett token-t használsz:

1. GitHub → **Settings** (profil) → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. **Generate new token (classic)**
3. Adj neki egy nevet: `nexen-sites-deployment`
4. Válaszd ki a jogosultságokat:
   - ✅ `repo` (teljes repository hozzáférés)
5. **Generate token**
6. **⚠️ MÁSOLD KI AZONNAL!** (csak egyszer látható)
7. Használd ezt a token-t a git push-hoz jelszó helyett

---

### 7. Kétfaktoros Hitelesítés (2FA) Beállítása

Ez a legfontosabb biztonsági lépés!

1. GitHub → **Settings** (profil) → **Password and authentication**
2. **Two-factor authentication** → **Enable two-factor authentication**
3. Kövesd az utasításokat (telefon app vagy SMS)

---

## ✅ Biztonsági Checklist

- [ ] Repository privátra állítva
- [ ] Branch protection rules beállítva
- [ ] Collaborator hozzáférések ellenőrizve
- [ ] SSH kulcs beállítva (vagy Personal Access Token)
- [ ] Vercel deployment protection beállítva
- [ ] Kétfaktoros hitelesítés (2FA) bekapcsolva
- [ ] Git credentials biztonságosak

---

## 🔍 Hogyan Ellenőrizd, Hogy Működik?

### Teszt: Próbálj meg push-olni közvetlenül

Ha branch protection van beállítva:
```powershell
git push origin main
```

**Várható eredmény:** Hibaüzenet, hogy nincs jogosultságod közvetlenül push-olni.

### Helyes módszer változtatásokhoz:

1. Hozz létre egy új branch-et:
   ```powershell
   git checkout -b feature/valtoztatas
   ```

2. Commit-old a változtatásokat:
   ```powershell
   git add .
   git commit -m "Változtatások leírása"
   ```

3. Push-old az új branch-re:
   ```powershell
   git push origin feature/valtoztatas
   ```

4. Hozz létre egy Pull Request-et a GitHub-on
5. Jóváhagyod a PR-t
6. Merge-eled a `main` branch-be

---

## 🆘 Ha Valaki Mégis Hozzáfér

### Gyors akciók:

1. **Változtasd meg a GitHub jelszavadat**
2. **Távolítsd el az összes SSH kulcsot** (Settings → SSH and GPG keys)
3. **Távolítsd el az összes Personal Access Token-t**
4. **Ellenőrizd a repository commit history-t** (lehet, hogy valaki módosított)
5. **Vercel Dashboard** → Nézd meg a deployment history-t

---

## 📞 További Segítség

Ha kérdésed van a biztonsági beállításokkal kapcsolatban:
- **GitHub Support:** https://support.github.com
- **Vercel Support:** https://vercel.com/support

---

**Utolsó frissítés:** 2024
