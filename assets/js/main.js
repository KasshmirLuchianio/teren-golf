(function () {
  // Animații subtile la scroll (reveal)
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || items.length === 0) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((el) => observer.observe(el));
  }

  // Filtrare galerie foto
  function initGalleryFilter() {
    const filters = document.querySelectorAll("[data-filter]");
    const items = document.querySelectorAll("[data-category]");
    if (filters.length === 0) return;
    filters.forEach((btn) => {
      btn.addEventListener("click", () => {
        filters.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const value = btn.getAttribute("data-filter");
        items.forEach((item) => {
          const show = value === "all" || item.getAttribute("data-category") === value;
          item.style.display = show ? "" : "none";
        });
      });
    });
  }

  // Lightbox simplu pentru galerie
  function initLightbox() {
    const triggers = document.querySelectorAll("[data-lightbox]");
    if (triggers.length === 0) return;

    const overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";
    overlay.innerHTML =
      '<button class="lightbox-close" aria-label="Închide">&times;</button>' +
      '<div class="lightbox-content"></div>';
    document.body.appendChild(overlay);
    const content = overlay.querySelector(".lightbox-content");

    function open(el) {
      const label = el.getAttribute("data-lightbox") || "";
      content.innerHTML =
        '<div class="ph-image ph-image--lightbox">' +
        placeholderSvg() +
        '<span class="ph-label">' + label + "</span></div>";
      overlay.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }
    function close() {
      overlay.classList.remove("is-open");
      document.body.style.overflow = "";
    }

    triggers.forEach((el) => el.addEventListener("click", () => open(el)));
    overlay.querySelector(".lightbox-close").addEventListener("click", close);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) close();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  function placeholderSvg() {
    return (
      '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M4 8a2 2 0 0 1 2-2h1.2l.9-1.4A2 2 0 0 1 9.8 3.6h4.4a2 2 0 0 1 1.7 1L16.8 6H18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8z" stroke="currentColor" stroke-width="1.4"/>' +
      '<circle cx="12" cy="13" r="3.4" stroke="currentColor" stroke-width="1.4"/>' +
      "</svg>"
    );
  }

  // Formular de rezervare / cerere ofertă
  function initForm() {
    const form = document.getElementById("booking-form");
    if (!form) return;
    const status = document.getElementById("form-status");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const endpoint = SITE_CONFIG.formEndpoint;
      const submitBtn = form.querySelector("button[type='submit']");
      submitBtn.disabled = true;
      submitBtn.textContent = "Se trimite...";

      try {
        const data = new FormData(form);
        const response = await fetch(endpoint, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          form.reset();
          status.textContent =
            "Mulțumim! Cererea a fost trimisă. Te contactăm în cel mai scurt timp.";
          status.className = "form-status form-status--success";
        } else {
          throw new Error("Eroare la trimitere");
        }
      } catch (err) {
        status.innerHTML =
          'Ne pare rău, a apărut o eroare. Te rugăm să ne scrii direct pe ' +
          '<a href="' + SITE_CONFIG.whatsappUrl + '" target="_blank" rel="noopener">WhatsApp</a>' +
          ' sau la <a href="mailto:' + SITE_CONFIG.email + '">' + SITE_CONFIG.email + "</a>.";
        status.className = "form-status form-status--error";
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Trimite cererea";
      }
    });
  }

  document.addEventListener("partials:loaded", () => {
    initReveal();
    initGalleryFilter();
    initLightbox();
    initForm();
  });

  // În caz că nu există header/footer de încărcat pe o pagină (fallback).
  window.addEventListener("load", () => {
    if (!document.querySelector("[data-include='header']")) {
      initReveal();
      initGalleryFilter();
      initLightbox();
      initForm();
    }
  });
})();
