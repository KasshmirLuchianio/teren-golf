# Golf Club Valea Verde — Website de prezentare

Website static (HTML/CSS/JS, fără build tools) pentru un teren de golf cu
pensiune: homepage, pagină teren de golf, pagină cazare, galerie, prețuri
și contact/rezervare. Optimizat pentru mobil, ușor de găzduit pe orice
hosting simplu (nu necesită server Node.js sau bază de date).

## Structură

```
index.html            Homepage
teren-de-golf.html    Pagină teren de golf
cazare.html           Pagină cazare / pensiune
galerie.html          Galerie foto/video (cu filtre pe categorii)
preturi.html          Prețuri și pachete
contact.html          Formular de rezervare + hartă + contact
partials/             Header și footer comune, încărcate automat
assets/css/style.css  Toate stilurile
assets/js/config.js   Datele de contact/site — un singur loc de editat
assets/js/include.js  Încarcă header/footer și aplică datele din config.js
assets/js/main.js     Meniu mobil, galerie, lightbox, formular
```

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
Toate imaginile sunt momentan **placeholder-e** (dreptunghiuri cu iconițe
și etichete de tipul „Fotografie teren — de adăugat"), special create
pentru a nu folosi poze de stock care nu reprezintă terenul real.

Pentru a le înlocui cu fotografii reale:
1. Pune pozele în `assets/img/`
2. Înlocuiește elementele `<div class="ph-image ...">...</div>` cu
   `<img src="assets/img/numele-pozei.jpg" alt="...">` în paginile HTML
3. Pentru galerie (`galerie.html`), la fel — înlocuiește placeholder-ul din
   fiecare `.gallery-item` cu `<img>`, păstrând atributul
   `data-lightbox="Titlu poză"` dacă vrei ca lightbox-ul să afișeze
   aceeași imagine mărită (necesită o mică ajustare în
   `assets/js/main.js`, funcția `initLightbox`, pentru a citi `src`-ul
   real în loc de placeholder)

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
