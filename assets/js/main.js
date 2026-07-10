(function () {
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

  // Lightbox pentru galerie — afișează imaginea reală la dimensiune mare
  function initLightbox() {
    const triggers = document.querySelectorAll("[data-lightbox]");
    if (triggers.length === 0) return;

    const overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";
    overlay.innerHTML =
      '<button class="lightbox-close" aria-label="Închide">&times;</button>' +
      '<figure class="lightbox-figure"><img class="lightbox-img" alt="" /><figcaption class="lightbox-caption"></figcaption></figure>';
    document.body.appendChild(overlay);
    const imgEl = overlay.querySelector(".lightbox-img");
    const captionEl = overlay.querySelector(".lightbox-caption");

    function open(el) {
      const label = el.getAttribute("data-lightbox") || "";
      const img = el.querySelector("img");
      const src = el.getAttribute("data-full") || (img ? img.currentSrc || img.src : "");
      if (!src) return;
      imgEl.src = src;
      imgEl.alt = label;
      captionEl.textContent = label;
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
    initGalleryFilter();
    initLightbox();
    initForm();
  });
})();
