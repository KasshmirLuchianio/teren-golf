import type { CSSProperties } from "react";
import type { Tone } from "@/lib/products";

/**
 * Every future photograph is represented here by a drawn placeholder: tone,
 * hairline frame, an abstract geometric motif and a discreet label. No imagery,
 * no stock photography, no external assets.
 */

type Variant = "product" | "editorial" | "portrait" | "tile";

type Props = {
  label: string;
  tone?: Tone;
  variant?: Variant;
  /** CSS aspect-ratio, e.g. "3 / 4". */
  ratio?: string;
  /** Second line under the label, used on editorial blocks. */
  caption?: string;
  /** Chooses the abstract composition; keeps grids from repeating themselves. */
  motif?: number;
  /** Inset of the motif — larger values keep it quiet on big surfaces. */
  motifInset?: string;
  className?: string;
};

const tones: Record<Tone, { surface: string; ink: string; line: string; accent: string }> = {
  parchment: { surface: "#e9dfcc", ink: "#5c5344", line: "#cdbfa5", accent: "#a98a4b" },
  butter: { surface: "#f0e5cd", ink: "#5f543c", line: "#d6c69f", accent: "#a98a4b" },
  olive: { surface: "#dfe0cf", ink: "#474c37", line: "#b6bb9f", accent: "#656b4e" },
  burgundy: { surface: "#e5d6d4", ink: "#4c1119", line: "#c4a5a3", accent: "#6b1f2b" },
  charcoal: { surface: "#d9d5cd", ink: "#2a2622", line: "#b0aaa0", accent: "#1c1917" },
  warmgrey: { surface: "#e2ddd3", ink: "#5b544a", line: "#c1b9ab", accent: "#8a8175" },
};

const defaultRatios: Record<Variant, string> = {
  product: "3 / 4",
  editorial: "4 / 5",
  portrait: "4 / 5",
  tile: "1 / 1",
};

/** Six restrained compositions — lines, arcs and rectangles only. */
function Motif({ index, ink, accent }: { index: number; ink: string; accent: string }) {
  const i = ((index % 6) + 6) % 6;
  const common = { fill: "none", stroke: ink, strokeWidth: 0.6, vectorEffect: "non-scaling-stroke" as const };

  return (
    <svg
      viewBox="0 0 100 125"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full opacity-[0.45]"
      aria-hidden="true"
    >
      {i === 0 && (
        <>
          <circle cx="50" cy="52" r="26" {...common} />
          <line x1="18" y1="88" x2="82" y2="88" {...common} />
          <rect x="34" y="88" width="32" height="22" {...common} stroke={accent} />
        </>
      )}
      {i === 1 && (
        <>
          <rect x="22" y="18" width="56" height="72" {...common} />
          <line x1="22" y1="54" x2="78" y2="54" {...common} stroke={accent} />
          <circle cx="50" cy="103" r="9" {...common} />
        </>
      )}
      {i === 2 && (
        <>
          <path d="M32 22 L68 22 L82 108 L18 108 Z" {...common} />
          <line x1="32" y1="34" x2="68" y2="34" {...common} stroke={accent} />
        </>
      )}
      {i === 3 && (
        <>
          <circle cx="50" cy="42" r="20" {...common} stroke={accent} />
          <path d="M24 112 C24 78, 76 78, 76 112" {...common} />
        </>
      )}
      {i === 4 && (
        <>
          <rect x="16" y="26" width="30" height="74" {...common} />
          <rect x="54" y="42" width="30" height="58" {...common} stroke={accent} />
          <line x1="16" y1="14" x2="84" y2="14" {...common} />
        </>
      )}
      {i === 5 && (
        <>
          <path d="M26 22 L74 22 L62 104 L38 104 Z" {...common} />
          <line x1="38" y1="60" x2="62" y2="60" {...common} stroke={accent} />
          <circle cx="50" cy="14" r="5" {...common} />
        </>
      )}
    </svg>
  );
}

export default function Placeholder({
  label,
  tone = "parchment",
  variant = "product",
  ratio,
  caption,
  motif = 0,
  motifInset,
  className = "",
}: Props) {
  const t = tones[tone];
  const style: CSSProperties = {
    aspectRatio: ratio ?? defaultRatios[variant],
    backgroundColor: t.surface,
    color: t.ink,
    borderColor: t.line,
  };

  return (
    <div
      style={style}
      className={`placeholder-surface relative w-full overflow-hidden border ${className}`}
      role="img"
      aria-label={`${label} placeholder`}
    >
      {/* inner hairline frame, like a mounted print */}
      <div
        className="pointer-events-none absolute inset-3 border sm:inset-4"
        style={{ borderColor: t.line }}
        aria-hidden="true"
      />

      <div
        className={motifInset ? "absolute" : "absolute inset-[18%] sm:inset-[20%]"}
        style={motifInset ? { position: "absolute", inset: motifInset } : undefined}
      >
        <Motif index={motif} ink={t.ink} accent={t.accent} />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-1 px-4 pb-5 text-center sm:pb-6">
        <span className="label" style={{ color: t.ink }}>
          {label}
        </span>
        {caption ? (
          <span className="max-w-[26ch] font-serif text-sm italic leading-snug" style={{ color: t.ink }}>
            {caption}
          </span>
        ) : null}
      </div>
    </div>
  );
}
