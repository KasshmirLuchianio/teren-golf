import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { categories, products, type Tone } from "@/lib/products";

const palette: Record<Tone, { bg: string; ink: string; line: string; accent: string }> = {
  parchment: { bg: "#e9dfcc", ink: "#2a2622", line: "#c9bda6", accent: "#a98a4b" },
  butter: { bg: "#f0e5cd", ink: "#2a2622", line: "#d6c69f", accent: "#a98a4b" },
  olive: { bg: "#dfe0cf", ink: "#2b2f21", line: "#b6bb9f", accent: "#474c37" },
  burgundy: { bg: "#4c1119", ink: "#f7f2e9", line: "#7d3c44", accent: "#d9b58a" },
  charcoal: { bg: "#1c1917", ink: "#f7f2e9", line: "#4a453f", accent: "#a98a4b" },
  warmgrey: { bg: "#e2ddd3", ink: "#2a2622", line: "#c1b9ab", accent: "#8a8175" },
};

/** Cover ornament — a different geometric arrangement per position. */
function CoverMark({ index, ink, accent }: { index: number; ink: string; accent: string }) {
  const stroke = { fill: "none", stroke: ink, strokeWidth: 1, opacity: 0.35 };

  return (
    <svg
      viewBox="0 0 200 200"
      className="pointer-events-none absolute right-0 top-0 h-full w-2/3 max-w-[320px]"
      preserveAspectRatio="xMaxYMid meet"
      aria-hidden="true"
    >
      {index % 3 === 0 && (
        <>
          <circle cx="130" cy="86" r="52" {...stroke} />
          <circle cx="130" cy="86" r="34" {...stroke} stroke={accent} opacity={0.6} />
          <line x1="42" y1="150" x2="196" y2="150" {...stroke} />
        </>
      )}
      {index % 3 === 1 && (
        <>
          <rect x="66" y="34" width="106" height="106" {...stroke} />
          <rect x="92" y="60" width="106" height="106" {...stroke} stroke={accent} opacity={0.55} />
        </>
      )}
      {index % 3 === 2 && (
        <>
          <path d="M60 168 L128 30 L196 168" {...stroke} />
          <line x1="86" y1="120" x2="170" y2="120" {...stroke} stroke={accent} opacity={0.6} />
          <circle cx="128" cy="30" r="6" {...stroke} />
        </>
      )}
    </svg>
  );
}

const spans = [
  "sm:col-span-2 lg:col-span-3",
  "sm:col-span-2 lg:col-span-3",
  "sm:col-span-1 lg:col-span-2",
  "sm:col-span-1 lg:col-span-2",
  "sm:col-span-2 lg:col-span-2",
  "sm:col-span-2 lg:col-span-6",
];

const heights = [
  "min-h-[340px] lg:min-h-[400px]",
  "min-h-[340px] lg:min-h-[400px]",
  "min-h-[300px]",
  "min-h-[300px]",
  "min-h-[300px]",
  "min-h-[260px] lg:min-h-[280px]",
];

export default function CategoryBlocks() {
  return (
    <section className="paper border-y border-line py-20 sm:py-28" aria-labelledby="categories-title">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="The wardrobe"
            title="Six ways into the collection"
            lead="Pieces are grouped the way a wardrobe is actually used — by what you reach for, not by season or by trend."
            as="h2"
          />
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-6">
          {categories.map((category, i) => {
            const c = palette[category.tone];
            const count = products.filter(
              (p) => p.category === category.name && !p.sold,
            ).length;

            return (
              <Reveal
                as="li"
                key={category.name}
                delay={i * 0.05}
                className={`${spans[i]} group`}
              >
                <Link
                  href={category.href}
                  className={`relative flex h-full flex-col justify-between overflow-hidden border p-6 transition-colors duration-500 sm:p-8 ${heights[i]}`}
                  style={{ backgroundColor: c.bg, borderColor: c.line, color: c.ink }}
                >
                  <CoverMark index={i} ink={c.ink} accent={c.accent} />

                  <div className="relative flex items-center justify-between gap-4">
                    <span className="label text-[0.6rem]" style={{ opacity: 0.7 }}>
                      N° {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="label text-[0.6rem]" style={{ opacity: 0.7 }}>
                      {count} available
                    </span>
                  </div>

                  <div className="relative mt-10">
                    <h3
                      className="text-balance font-serif text-2xl leading-tight sm:text-3xl"
                      style={{ color: c.ink }}
                    >
                      {category.name}
                    </h3>
                    <p className="mt-3 max-w-[42ch] text-[0.85rem] leading-relaxed" style={{ opacity: 0.75 }}>
                      {category.blurb}
                    </p>

                    <span className="label mt-6 inline-flex items-center gap-2 text-[0.6rem]">
                      View the pieces
                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.4}
                        className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
