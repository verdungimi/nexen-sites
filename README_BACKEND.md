# Backend Dokumentáció

## Áttekintés

A weboldal backend rendszere Next.js API Routes-t használ, amelyek a következő funkciókat biztosítják:

- Email küldés (Resend integráció)
- Időpontfoglalás kezelése
- Kapcsolatfelvétel kezelése
- Adatvalidáció
- Adatbázis integráció (később)

## API Endpoints

### 0. Test Endpoints

**GET `/api/email-status`** - Email konfiguráció ellenőrzése

**GET `/api/test-booking`** - Teszt email küldése (booking formátumban)

### 1. Booking API (`/api/booking`)

**POST** - Új időpontfoglalás létrehozása

**Request Body:**
```json
{
  "name": "Kovács János",
  "company": "Kovács Kft",
  "email": "kovacs@example.com",
  "phone": "+36 70 123 4567",
  "purpose": "Weboldal fejlesztés",
  "deadline": "2024-02-15",
  "description": "Részletes leírás...",
  "selectedDate": "2024-01-20",
  "selectedTime": "14:00",
  "privacyAccepted": true
}
```

**Response:**
```json
{
  "success": true,
  "message": "Időpontfoglalás sikeresen elküldve",
  "messageId": "email-id"
}
```

**GET** - Időpontfoglalások lekérése (admin - authentication szükséges)

### 2. Contact API (`/api/contact`)

**POST** - Kapcsolatfelvétel küldése

**Request Body:**
```json
{
  "name": "Kovács János",
  "email": "kovacs@example.com",
  "subject": "Kérdés",
  "message": "Üzenet szövege..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Üzenet sikeresen elküldve",
  "messageId": "email-id"
}
```

## Email Konfiguráció

### Resend használata (ajánlott)

1. Regisztrálj a [Resend](https://resend.com)-en
2. Hozz létre egy API key-t
3. Add hozzá a `.env` fájlhoz:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
EMAIL_FROM=noreply@yourdomain.com
ADMIN_EMAIL=info@nexensites.hu
```

### Development mód

Ha nincs beállítva `RESEND_API_KEY`, a rendszer development módban működik:
- Az emailek a konzolra kerülnek ki
- Nincs tényleges email küldés

## Telepítés

1. Telepítsd a szükséges csomagokat (ha kell):
```bash
npm install resend
```

2. Hozd létre a `.env` fájlt a `.env.example` alapján

3. Állítsd be az email szolgáltatást

## Validáció

A backend automatikusan validálja:
- Email formátum
- Telefonszám formátum (magyar)
- Kötelező mezők
- Szöveg sanitizálás (XSS védelem)

## Következő lépések

- [ ] Adatbázis integráció (Prisma + PostgreSQL)
- [ ] Authentication (admin felülethez)
- [ ] Rate limiting
- [ ] Logging
- [ ] Error tracking (Sentry)

## Biztonság

- Input sanitizálás
- Email validáció
- CORS beállítások (ha szükséges)
- Rate limiting (később)

