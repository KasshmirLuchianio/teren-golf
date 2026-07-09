/**
 * Efecte premium de interfață: reveal cu stagger la scroll, carduri cu
 * tilt 3D la hover, contoare animate și parallax subtil pe hero-urile
 * interioare. Toate respectă prefers-reduced-motion.
 */
(function () {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Reveal cu stagger
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (reduced || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((el) => observer.observe(el));

    // Stagger automat pentru copiii grilelor marcate
    document.querySelectorAll("[data-stagger]").forEach((grid) => {
      Array.from(grid.children).forEach((child, i) => {
        child.style.transitionDelay = i * 90 + "ms";
      });
    });
  }

  // Tilt 3D pe carduri
  function initTilt() {
    if (reduced || window.matchMedia("(hover: none)").matches) return;
    document.querySelectorAll("[data-tilt]").forEach((card) => {
      let raf = null;
      card.addEventListener("pointermove", (e) => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          const rect = card.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width - 0.5;
          const py = (e.clientY - rect.top) / rect.height - 0.5;
          card.style.transform =
            "perspective(900px) rotateX(" + (-py * 7).toFixed(2) + "deg) rotateY(" + (px * 7).toFixed(2) + "deg) translateY(-6px)";
          raf = null;
        });
      });
      card.addEventListener("pointerleave", () => {
        card.style.transform = "";
      });
    });
  }

  // Contoare animate (hero stats)
  function initCounters() {
    const counters = document.querySelectorAll("[data-count]");
    if (counters.length === 0) return;
    const animate = (el) => {
      const targetValue = parseFloat(el.getAttribute("data-count"));
      const suffix = el.getAttribute("data-count-suffix") || "";
      if (reduced) {
        el.textContent = targetValue + suffix;
        return;
      }
      const duration = 1400;
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(targetValue * eased) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animate(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((el) => observer.observe(el));
  }

  // Parallax subtil pe imaginile de fundal ale hero-urilor interioare
  function initParallax() {
    if (reduced) return;
    const layers = document.querySelectorAll("[data-parallax]");
    if (layers.length === 0) return;
    let ticking = false;
    window.addEventListener(
      "scroll",
      () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          const y = window.scrollY;
          layers.forEach((el) => {
            const speed = parseFloat(el.getAttribute("data-parallax")) || 0.25;
            el.style.transform = "translateY(" + y * speed + "px) scale(1.12)";
          });
          ticking = false;
        });
      },
      { passive: true }
    );
  }

  document.addEventListener("partials:loaded", () => {
    initReveal();
    initTilt();
    initCounters();
    initParallax();
  });
})();
