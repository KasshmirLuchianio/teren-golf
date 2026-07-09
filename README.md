# Golf Club Valea Verde — Website de prezentare

Website static (HTML/CSS/JS, fără build tools) pentru un teren de golf cu
pensiune: homepage, pagină teren de golf, pagină cazare, galerie, prețuri
și contact/rezervare. Optimizat pentru mobil, ușor de găzduit pe orice
hosting simplu (nu necesită server Node.js sau bază de date).

## Structură

```
index.html                 Homepage (hero 3D + foto)
teren-de-golf.html         Pagină teren de golf
cazare.html                Pagină cazare / pensiune
galerie.html               Galerie foto (filtre pe categorii + lightbox)
preturi.html               Prețuri și pachete
contact.html               Formular de rezervare + hartă + contact
partials/                  Header și footer comune, încărcate automat
assets/css/style.css       Design system premium (glassmorphism, gold, noise)
assets/js/config.js        Datele de contact/site — un singur loc de editat
assets/js/include.js       Încarcă header/footer și aplică datele din config.js
assets/js/hero3d.js        Scena 3D din hero (Three.js): minge de golf, inel
                           auriu, particule; fallback static pe mobil
assets/js/fx.js            Reveal cu stagger, tilt 3D pe carduri, contoare,
                           parallax pe hero-urile interioare
assets/js/main.js          Filtre galerie, lightbox, formular
assets/js/vendor/three.min.js  Three.js r160 (local, fără CDN)
assets/img/                Fotografii generate AI (Higgsfield, soul_location)
```

> **Notă imagini:** fotografiile din `assets/img/` sunt generate cu AI ca
> imagini de prezentare premium. Înlocuiește-le cu fotografii reale ale
> terenului atunci când clientul le furnizează — păstrează aceleași nume de
> fișiere și nu trebuie modificat nimic în cod.

## Ce trebuie completat înainte de livrare către client

### 1. Datele de contact (`assets/js/config.js`)
Editează un singur fișier pentru a actualiza peste tot în site:
- `name`, `tagline` — numele real al terenului de golf
- `phoneDisplay` / `phoneHref` — numărul de telefon real
- `whatsappNumber` — numărul de WhatsApp (fără `+`, ex: `40712345678`)
- `email` — adresa de email reală
- `address` — adresa completă
- `mapQuery` — adresa sau numele locației, folosită pentru harta Google
  (nu necesită cheie API — funcționează automat din adresă)
- `facebookUrl`, `instagramUrl` — linkurile către rețelele sociale
- `formEndpoint` — vezi pasul 2 mai jos

### 2. Formularul de rezervare
Formularul trimite datele prin [Formspree](https://formspree.io) (gratuit
până la 50 de mesaje/lună — suficient pentru un site de prezentare):

1. Creează un cont gratuit pe formspree.io
2. Creează un formular nou și copiază endpoint-ul (arată așa:
   `https://formspree.io/f/xxxxxxx`)
3. Înlocuiește `formEndpoint` din `assets/js/config.js` cu acel link

Dacă preferi altă soluție (email direct, alt serviciu), doar schimbă
logica din `initForm()` în `assets/js/main.js`.

### 3. Fotografii reale
Site-ul folosește fotografii generate cu AI (Higgsfield) în `assets/img/`.
Când clientul furnizează fotografii reale ale terenului, înlocuiește
fișierele păstrând aceleași nume (`hero-golf.jpg`, `fairway.jpg`,
`aerial.jpg` etc.) — nu e nevoie de nicio modificare în cod. Lightbox-ul
citește automat imaginea din fiecare `.gallery-item`.

### 4. Textele
Toate textele sunt scrise generic, pregătite să fie personalizate cu
informații reale despre teren (număr de găuri, dotări, camere de cazare,
prețuri reale etc.). Caută în fiecare pagină HTML și actualizează.

## Testare locală

Fiindcă header-ul și footer-ul se încarcă automat din `partials/` prin
JavaScript (`fetch`), site-ul trebuie rulat printr-un mic server local
(nu funcționează deschizând fișierul direct cu dublu-click, din cauza
restricțiilor de securitate ale browserului):

```bash
# din folderul proiectului
python3 -m http.server 8000
# apoi deschide http://localhost:8000 în browser
```

## Publicare (domeniu + hosting)

Site-ul este 100% static, deci poate fi găzduit oriunde:

- **Hosting clasic (cPanel/FTP)** — încarcă toate fișierele prin FTP în
  folderul `public_html` al domeniului.
- **Netlify / Vercel / GitHub Pages** — conectează repository-ul și
  publică automat (gratuit, cu HTTPS inclus).

După publicare, actualizează `mapQuery` din `config.js` cu adresa exactă,
pentru ca harta Google să indice locația corectă.
