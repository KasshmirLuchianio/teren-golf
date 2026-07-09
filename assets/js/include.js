/**
 * Încarcă header-ul și footer-ul comune din /partials și aplică
 * datele din SITE_CONFIG (telefon, WhatsApp, hartă, program etc.)
 * pe toate paginile, dintr-un singur loc.
 */
(function () {
  function applyConfig(root) {
    root.querySelectorAll("[data-site-name]").forEach((el) => (el.textContent = SITE_CONFIG.name));
    root.querySelectorAll("[data-tagline]").forEach((el) => (el.textContent = SITE_CONFIG.tagline));
    root.querySelectorAll("[data-phone-display]").forEach((el) => (el.textContent = SITE_CONFIG.phoneDisplay));
    root.querySelectorAll("[data-phone-href]").forEach((el) => (el.href = SITE_CONFIG.phoneHref));
    root.querySelectorAll("[data-email-display]").forEach((el) => (el.textContent = SITE_CONFIG.email));
    root.querySelectorAll("[data-email-href]").forEach((el) => (el.href = "mailto:" + SITE_CONFIG.email));
    root.querySelectorAll("[data-address]").forEach((el) => (el.textContent = SITE_CONFIG.address));
    root.querySelectorAll("[data-hours-1]").forEach((el) => (el.textContent = SITE_CONFIG.hoursLine1));
    root.querySelectorAll("[data-hours-2]").forEach((el) => (el.textContent = SITE_CONFIG.hoursLine2));
    root.querySelectorAll("[data-whatsapp-href]").forEach((el) => (el.href = SITE_CONFIG.whatsappUrl));
    root.querySelectorAll("[data-facebook-href]").forEach((el) => (el.href = SITE_CONFIG.facebookUrl));
    root.querySelectorAll("[data-instagram-href]").forEach((el) => (el.href = SITE_CONFIG.instagramUrl));
    root.querySelectorAll("[data-map-embed]").forEach((el) => (el.src = SITE_CONFIG.mapEmbedUrl));
    root.querySelectorAll("[data-map-link]").forEach((el) => (el.href = SITE_CONFIG.mapLinkUrl));
  }

  function setActiveNav() {
    const current = document.body.getAttribute("data-page");
    if (!current) return;
    document.querySelectorAll("#main-nav [data-nav]").forEach((link) => {
      if (link.getAttribute("data-nav") === current) {
        link.classList.add("active");
      }
    });
  }

  function initNavToggle() {
    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("main-nav");
    const header = document.getElementById("site-header");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );

    if (header) {
      const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
  }

  function loadPartial(selector, url) {
    const el = document.querySelector(selector);
    if (!el) return Promise.resolve();
    return fetch(url)
      .then((res) => res.text())
      .then((html) => {
        el.innerHTML = html;
        applyConfig(el);
      })
      .catch((err) => {
        console.error("Nu s-a putut încărca " + url, err);
      });
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyConfig(document);

    Promise.all([
      loadPartial("[data-include='header']", "partials/header.html"),
      loadPartial("[data-include='footer']", "partials/footer.html"),
    ]).then(() => {
      setActiveNav();
      initNavToggle();
      const yearEl = document.getElementById("year");
      if (yearEl) yearEl.textContent = new Date().getFullYear();
      document.dispatchEvent(new Event("partials:loaded"));
    });
  });
})();
