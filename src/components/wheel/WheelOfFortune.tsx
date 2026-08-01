"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Segment = {
  label: string;
  short: string;
  fill: string;
  ink: string;
  note: string;
  code?: string;
};

const segments: Segment[] = [
  {
    label: "Livrare gratuită",
    short: "Livrare\ngratuită",
    fill: "#e9dfcc",
    ink: "#5c5344",
    note: "Livrarea în România e din partea noastră, la prima comandă.",
    code: "LIVRARE-IG",
  },
  {
    label: "5% reducere",
    short: "-5%",
    fill: "#dfe0cf",
    ink: "#474c37",
    note: "Cinci la sută reducere la orice piesă din selecția de acum.",
    code: "IG-5",
  },
  {
    label: "10% reducere",
    short: "-10%",
    fill: "#e5d6d4",
    ink: "#4c1119",
    note: "Zece la sută reducere — cea mai mare reducere pe care o dăm la o piesă unicat.",
    code: "IG-10",
  },
  {
    label: "Acces devreme",
    short: "Acces\ndevreme",
    fill: "#f0e5cd",
    ink: "#5f543c",
    note: "Vei vedea selecția de duminică cu două ore înaintea celorlalți.",
    code: "AVANT-IG",
  },
  {
    label: "Mai încearcă",
    short: "Mai\nîncearcă",
    fill: "#e2ddd3",
    ink: "#5b544a",
    note: "Nu de data asta. Încă o rotire, dacă tot ești aici.",
  },
];

const SEGMENT_ANGLE = 360 / segments.length;

/** Wedge path for one segment of a circle of radius r centred at (c, c). */
function wedge(index: number, c = 100, r = 92) {
  const start = (index * SEGMENT_ANGLE - 90 - SEGMENT_ANGLE / 2) * (Math.PI / 180);
  const end = ((index + 1) * SEGMENT_ANGLE - 90 - SEGMENT_ANGLE / 2) * (Math.PI / 180);
  const x1 = c + r * Math.cos(start);
  const y1 = c + r * Math.sin(start);
  const x2 = c + r * Math.cos(end);
  const y2 = c + r * Math.sin(end);
  return `M ${c} ${c} L ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 0 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z`;
}

export default function WheelOfFortune() {
  const reduce = useReducedMotion();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [entered, setEntered] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<Segment | null>(null);
  const spins = useRef(0);

  function onEmailSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!EMAIL.test(email.trim())) {
      setError("Introdu o adresă de e-mail validă înainte de rotire.");
      return;
    }
    setError(null);
    setEntered(true);
  }

  function spin() {
    if (spinning) return;
    setResult(null);
    setSpinning(true);
    spins.current += 1;

    const index = Math.floor(Math.random() * segments.length);
    // Land the chosen segment under the marker at the top of the wheel.
    const target = 360 * 4 + (360 - index * SEGMENT_ANGLE);
    const next = rotation + target;
    setRotation(next);

    window.setTimeout(
      () => {
        setResult(segments[index]);
        setSpinning(false);
      },
      reduce ? 200 : 4200,
    );
  }

  if (!entered) {
    return (
      <div>
        <p className="text-[0.9rem] leading-relaxed text-ink/75">
          Un mic mulțumesc pentru vizită. Lasă-ne adresa ta de e-mail și rotește o dată roata — premiul
          se aplică la următoarea comandă.
        </p>

        <form onSubmit={onEmailSubmit} noValidate className="mt-6">
          <label htmlFor="cadeau-email" className="label text-warmgrey">
            Adresă de e-mail
          </label>
          <input
            id="cadeau-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError(null);
            }}
            placeholder="adresa@ta.ro"
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? "cadeau-error" : undefined}
            className={`mt-3 w-full border-b bg-transparent px-1 py-3 text-[0.95rem] text-charcoal placeholder:text-warmgrey/70 focus:outline-none ${
              error ? "border-burgundy" : "border-charcoal/35 focus:border-charcoal"
            }`}
          />
          {error ? (
            <p id="cadeau-error" role="alert" className="mt-3 text-[0.8rem] text-burgundy">
              {error}
            </p>
          ) : null}

          <Button type="submit" className="mt-6 w-full">
            Mergi la roată
          </Button>

          <p className="mt-4 text-[0.72rem] leading-relaxed text-warmgrey">
            Doar demonstrativ. Nu se trimite nimic și nu se salvează nicio adresă în această etapă.
          </p>
        </form>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-[280px]">
        {/* marker */}
        <div
          className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1"
          aria-hidden="true"
        >
          <svg width="18" height="16" viewBox="0 0 18 16">
            <path d="M9 16 L0 0 L18 0 Z" fill="#6b1f2b" />
          </svg>
        </div>

        <motion.div
          animate={{ rotate: rotation }}
          transition={{ duration: reduce ? 0.2 : 4.2, ease: [0.16, 1, 0.3, 1] }}
          className="origin-center"
        >
          <svg viewBox="0 0 200 200" className="w-full" role="img" aria-label="Roata cu premii mici">
            <circle cx="100" cy="100" r="96" fill="none" stroke="#c9bda6" strokeWidth="1" />
            {segments.map((segment, i) => {
              const mid = i * SEGMENT_ANGLE - 90;
              const rad = mid * (Math.PI / 180);
              const tx = 100 + 58 * Math.cos(rad);
              const ty = 100 + 58 * Math.sin(rad);
              const lines = segment.short.split("\n");
              // keep every label upright rather than letting half of them invert
              let textRotation = mid + 90;
              if (textRotation > 90 && textRotation < 270) textRotation -= 180;

              return (
                <g key={segment.label}>
                  <path d={wedge(i)} fill={segment.fill} stroke="#c9bda6" strokeWidth="0.75" />
                  <text
                    x={tx}
                    y={ty}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    transform={`rotate(${textRotation} ${tx} ${ty})`}
                    fill={segment.ink}
                    fontSize="9.5"
                    letterSpacing="1.4"
                    style={{ fontFamily: "var(--font-sans)", textTransform: "uppercase" }}
                  >
                    {lines.map((line, li) => (
                      <tspan key={line} x={tx} dy={li === 0 ? (lines.length > 1 ? -5 : 0) : 11}>
                        {line}
                      </tspan>
                    ))}
                  </text>
                </g>
              );
            })}
            <circle cx="100" cy="100" r="15" fill="#f7f2e9" stroke="#a98a4b" strokeWidth="0.75" />
            <circle cx="100" cy="100" r="4" fill="#a98a4b" />
          </svg>
        </motion.div>
      </div>

      <div className="mt-7 w-full text-center" aria-live="polite">
        {result ? (
          <div>
            <span className="label text-warmgrey">Cadoul tău</span>
            <p className="mt-2 font-serif text-2xl text-charcoal">{result.label}</p>
            <p className="mx-auto mt-3 max-w-[36ch] text-[0.85rem] leading-relaxed text-ink/70">
              {result.note}
            </p>
            {result.code ? (
              <p className="mt-4 inline-block border border-line-strong px-5 py-2.5">
                <span className="label text-[0.6rem] text-warmgrey">Cod</span>{" "}
                <span className="ml-2 font-serif text-base tracking-[0.2em] text-charcoal">
                  {result.code}
                </span>
              </p>
            ) : null}
          </div>
        ) : (
          <p className="text-[0.85rem] text-ink/65">
            {spinning ? "Se rotește…" : "O singură rotire, și roata hotărăște."}
          </p>
        )}
      </div>

      <Button
        onClick={spin}
        disabled={spinning || (result !== null && result.label !== "Mai încearcă")}
        className="mt-6 w-full"
        variant="burgundy"
      >
        {spinning ? "Se rotește" : spins.current === 0 ? "Rotește roata" : "Mai rotește o dată"}
      </Button>

      <p className="mt-4 text-center text-[0.72rem] leading-relaxed text-warmgrey">
        Demonstrație front-end. Premiile nu sunt încă legate de un sistem real de comenzi.
      </p>
    </div>
  );
}
