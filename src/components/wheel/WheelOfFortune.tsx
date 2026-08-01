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
    label: "Free shipping",
    short: "Free\nshipping",
    fill: "#e9dfcc",
    ink: "#5c5344",
    note: "Delivery within Romania is on us for your first order.",
    code: "LIVRARE-IG",
  },
  {
    label: "5% discount",
    short: "5% off",
    fill: "#dfe0cf",
    ink: "#474c37",
    note: "Five per cent off any single piece in the current selection.",
    code: "IG-5",
  },
  {
    label: "10% discount",
    short: "10% off",
    fill: "#e5d6d4",
    ink: "#4c1119",
    note: "Ten per cent off — the largest reduction we offer on a one-of-one piece.",
    code: "IG-10",
  },
  {
    label: "Early access",
    short: "Early\naccess",
    fill: "#f0e5cd",
    ink: "#5f543c",
    note: "You will see the next Sunday drop two hours before anyone else.",
    code: "AVANT-IG",
  },
  {
    label: "Try again",
    short: "Try\nagain",
    fill: "#e2ddd3",
    ink: "#5b544a",
    note: "Not this time. One more turn, since you are here.",
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
      setError("Please enter a valid email address before spinning.");
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
          A small thank you for visiting. Leave your email address and turn the wheel once — the reward
          is applied to your next order.
        </p>

        <form onSubmit={onEmailSubmit} noValidate className="mt-6">
          <label htmlFor="cadeau-email" className="label text-warmgrey">
            Email address
          </label>
          <input
            id="cadeau-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError(null);
            }}
            placeholder="your@email.com"
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
            Continue to the wheel
          </Button>

          <p className="mt-4 text-[0.72rem] leading-relaxed text-warmgrey">
            Demonstration only. Nothing is sent and no address is stored at this stage.
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
          <svg viewBox="0 0 200 200" className="w-full" role="img" aria-label="Wheel of small rewards">
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
            <span className="label text-warmgrey">Your cadeau</span>
            <p className="mt-2 font-serif text-2xl text-charcoal">{result.label}</p>
            <p className="mx-auto mt-3 max-w-[36ch] text-[0.85rem] leading-relaxed text-ink/70">
              {result.note}
            </p>
            {result.code ? (
              <p className="mt-4 inline-block border border-line-strong px-5 py-2.5">
                <span className="label text-[0.6rem] text-warmgrey">Code</span>{" "}
                <span className="ml-2 font-serif text-base tracking-[0.2em] text-charcoal">
                  {result.code}
                </span>
              </p>
            ) : null}
          </div>
        ) : (
          <p className="text-[0.85rem] text-ink/65">
            {spinning ? "Turning…" : "One turn, and the wheel decides."}
          </p>
        )}
      </div>

      <Button
        onClick={spin}
        disabled={spinning || (result !== null && result.label !== "Try again")}
        className="mt-6 w-full"
        variant="burgundy"
      >
        {spinning ? "Turning" : spins.current === 0 ? "Turn the wheel" : "Turn again"}
      </Button>

      <p className="mt-4 text-center text-[0.72rem] leading-relaxed text-warmgrey">
        Front-end demonstration. Rewards are not yet connected to a real order system.
      </p>
    </div>
  );
}
