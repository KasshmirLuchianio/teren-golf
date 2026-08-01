"use client";

import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";

/**
 * Blocul editorial care ține locul portretului fondatoarei. Pur geometric: un
 * bor, o calotă și o linie de umăr sugerează o femeie cu pălărie, fără să
 * înfățișeze vreodată o persoană.
 */
function PortraitPlaceholder() {
  return (
    <div className="placeholder-surface relative aspect-[4/5] w-full border border-line-strong">
      <div className="pointer-events-none absolute inset-4 border border-line-strong/70 sm:inset-6" />

      <svg
        viewBox="0 0 400 500"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* caroiaj editorial discret */}
        <g stroke="#c9bda6" strokeWidth="0.5" opacity="0.6">
          <line x1="72" y1="40" x2="72" y2="460" />
          <line x1="328" y1="40" x2="328" y2="460" />
          <line x1="72" y1="404" x2="328" y2="404" />
        </g>

        <g fill="none" stroke="#8a8175" strokeWidth="1">
          {/* calota */}
          <path d="M152 186 C152 118, 248 118, 248 186" />
          {/* panglica, singurul accent bordo */}
          <path d="M154 168 L246 168" stroke="#6b1f2b" strokeWidth="1.4" />
          {/* borul */}
          <ellipse cx="200" cy="188" rx="96" ry="19" />
          {/* gâtul */}
          <line x1="186" y1="204" x2="186" y2="248" />
          <line x1="214" y1="204" x2="214" y2="248" />
          {/* umerii, coborâți până la linia de bază */}
          <path d="M104 404 C112 286, 288 286, 296 404" />
          <line x1="104" y1="404" x2="104" y2="446" />
          <line x1="296" y1="404" x2="296" y2="446" />
        </g>

        {/* un singur accent auriu, folosit o dată */}
        <circle cx="200" cy="300" r="4" fill="#a98a4b" />
      </svg>

      <div className="absolute inset-x-7 top-7 flex items-start justify-between gap-4 sm:inset-x-9 sm:top-9">
        <span className="label text-[0.6rem] text-warmgrey">Portret editorial al fondatoarei</span>
        <span className="label text-[0.55rem] text-warmgrey/80">Fig. 1</span>
      </div>

      <div className="absolute inset-x-7 bottom-7 flex items-end justify-between gap-4 sm:inset-x-9 sm:bottom-9">
        <p className="label max-w-[16ch] text-[0.55rem] leading-relaxed text-warmgrey/90">
          Machetă de imagine — fără fotografie
        </p>
        <p className="font-script text-3xl leading-[0.9] text-burgundy sm:text-4xl">Ales de Ileana</p>
      </div>
    </div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="paper border-b border-line" aria-labelledby="hero-title">
      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-28">
        <div>
          <motion.span className="label flex items-center gap-3 text-warmgrey" {...rise(0)}>
            <span aria-hidden="true" className="inline-block h-px w-10 bg-line-strong" />
            Vintage și pre-owned · București
          </motion.span>

          <motion.h1
            id="hero-title"
            className="mt-7 text-balance text-[2.4rem] leading-[1.06] sm:text-5xl lg:text-[3.9rem]"
            {...rise(0.08)}
          >
            Haine cu trecut.
            <span className="block italic text-burgundy">Eleganță dincolo de tendințe.</span>
          </motion.h1>

          <motion.p className="mt-8 max-w-[52ch] text-[1.02rem] leading-relaxed text-ink/80" {...rise(0.16)}>
            Piese vintage și pre-owned alese de Ileana Giusca pentru femeile care nu se iau după modă,
            ci își construiesc un stil al lor.
          </motion.p>

          <motion.div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4" {...rise(0.24)}>
            <LinkButton href="/catalog" size="lg">
              Descoperă colecția
            </LinkButton>
            <LinkButton href="/povestea-ileanei" variant="outline" size="lg">
              Povestea Ileanei
            </LinkButton>
          </motion.div>

          <motion.dl
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-7"
            {...rise(0.32)}
          >
            {[
              { term: "Unicat", detail: "Fiecare piesă, un singur exemplar" },
              { term: "Duminică, 19:00", detail: "O selecție nouă în fiecare săptămână" },
              { term: "Alese pe îndelete", detail: "Verificate înainte de a fi publicate" },
            ].map((item) => (
              <div key={item.term}>
                <dt className="font-serif text-base text-charcoal">{item.term}</dt>
                <dd className="mt-1 text-[0.75rem] leading-snug text-warmgrey">{item.detail}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          className="relative"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <PortraitPlaceholder />

          <div className="mt-5 flex items-start justify-between gap-6 border-t border-line pt-4">
            <p className="max-w-[30ch] font-serif text-sm italic leading-snug text-ink/75">
              „N-am cumpărat niciodată o haină pentru că era la modă. O cumpăr pentru că e bine
              făcută.”
            </p>
            <span className="label shrink-0 text-[0.58rem] text-warmgrey">Ileana Giusca</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
