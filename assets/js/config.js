/**
 * Configurare centrală a site-ului.
 * Modifică valorile de mai jos pentru a actualiza datele de contact,
 * numărul de WhatsApp, harta și linkul formularului de rezervare
 * peste tot în site, dintr-un singur loc.
 */
const SITE_CONFIG = {
  name: "Golf Club Valea Verde",
  shortName: "Valea Verde",
  tagline: "Golf de poveste, la doar un swing distanță",
  phoneDisplay: "0712 345 678",
  phoneHref: "tel:+40712345678",
  whatsappNumber: "40712345678", // fără +, fără spații
  whatsappDefaultMessage: "Bună ziua! Aș dori informații despre rezervări.",
  email: "contact@golfvaleaverde.ro",
  address: "Str. Fâneațelor nr. 1, Comuna Exemplu, Județul Cluj",
  mapQuery: "Golf Club Valea Verde, Romania",
  facebookUrl: "#",
  instagramUrl: "#",
  // Endpoint pentru formularul de rezervare (Formspree, gratuit până la 50 mesaje/lună).
  // Înlocuiește "your-form-id" cu ID-ul real după ce creezi contul pe formspree.io
  formEndpoint: "https://formspree.io/f/your-form-id",
  hoursLine1: "Luni – Duminică: 07:00 – 20:00",
  hoursLine2: "Recepție cazare: non-stop",
};

// Construiește automat linkurile derivate (WhatsApp, hartă) pornind de la config.
SITE_CONFIG.whatsappUrl =
  "https://wa.me/" +
  SITE_CONFIG.whatsappNumber +
  "?text=" +
  encodeURIComponent(SITE_CONFIG.whatsappDefaultMessage);

SITE_CONFIG.mapEmbedUrl =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(SITE_CONFIG.mapQuery) +
  "&output=embed";

SITE_CONFIG.mapLinkUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(SITE_CONFIG.mapQuery);
