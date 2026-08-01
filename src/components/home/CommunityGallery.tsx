import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { social } from "@/lib/navigation";
import type { Tone } from "@/lib/products";

const tiles: {
  initials: string;
  category: string;
  caption: string;
  place: string;
  tone: Tone;
}[] = [
  {
    initials: "MD",
    category: "Trench coat",
    caption: "Belted loosely, collar up, on a grey morning.",
    place: "Bucharest",
    tone: "parchment",
  },
  {
    initials: "AS",
    category: "Silk blouse",
    caption: "Worn tucked into flannel, two buttons open.",
    place: "Brașov",
    tone: "butter",
  },
  {
    initials: "CL",
    category: "Wool blazer",
    caption: "Over a white shirt, sleeves pushed back.",
    place: "Cluj-Napoca",
    tone: "olive",
  },
  {
    initials: "EV",
    category: "Evening dress",
    caption: "Black crêpe, flat shoes, no jewellery.",
    place: "Sibiu",
    tone: "charcoal",
  },
  {
    initials: "DP",
    category: "Leather bag",
    caption: "Held in the hand, as it was drawn to be.",
    place: "Constanța",
    tone: "warmgrey",
  },
  {
    initials: "RN",
    category: "Velvet jacket",
    caption: "Burgundy velvet under warm restaurant light.",
    place: "Iași",
    tone: "burgundy",
  },
];

const tileStyles: Record<Tone, { bg: string; ink: string; line: string }> = {
  parchment: { bg: "#e9dfcc", ink: "#2a2622", line: "#c9bda6" },
  butter: { bg: "#f0e5cd", ink: "#2a2622", line: "#d6c69f" },
  olive: { bg: "#dfe0cf", ink: "#2b2f21", line: "#b6bb9f" },
  charcoal: { bg: "#1c1917", ink: "#f7f2e9", line: "#4a453f" },
  warmgrey: { bg: "#e2ddd3", ink: "#2a2622", line: "#c1b9ab" },
  burgundy: { bg: "#4c1119", ink: "#f7f2e9", line: "#7d3c44" },
};

export default function CommunityGallery() {
  return (
    <section className="paper border-y border-line py-20 sm:py-28" aria-labelledby="community-title">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Together"
            title="From the Community Wardrobe"
            lead="Photographs sent in by clients, and pieces spotted out in the world. This space is reserved for them — the tiles below stand in until the first images arrive."
            as="h2"
          />
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {tiles.map((tile, i) => {
            const s = tileStyles[tile.tone];
            return (
              <Reveal as="li" key={tile.initials} delay={i * 0.04}>
                <figure
                  className="relative flex aspect-square flex-col justify-between overflow-hidden border p-5 sm:p-6"
                  style={{ backgroundColor: s.bg, borderColor: s.line, color: s.ink }}
                >
                  <svg
                    viewBox="0 0 100 100"
                    className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
                    aria-hidden="true"
                  >
                    {i % 3 === 0 && (
                      <>
                        <circle cx="70" cy="40" r="26" fill="none" stroke={s.ink} strokeWidth="0.5" />
                        <line x1="10" y1="70" x2="90" y2="70" stroke={s.ink} strokeWidth="0.5" />
                      </>
                    )}
                    {i % 3 === 1 && (
                      <>
                        <rect x="26" y="18" width="52" height="52" fill="none" stroke={s.ink} strokeWidth="0.5" />
                        <line x1="26" y1="44" x2="78" y2="44" stroke={s.ink} strokeWidth="0.5" />
                      </>
                    )}
                    {i % 3 === 2 && (
                      <>
                        <path d="M18 78 L50 20 L82 78" fill="none" stroke={s.ink} strokeWidth="0.5" />
                        <circle cx="50" cy="20" r="4" fill="none" stroke={s.ink} strokeWidth="0.5" />
                      </>
                    )}
                  </svg>

                  <div className="relative flex items-start justify-between gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center border font-serif text-[0.8rem] tracking-[0.1em]"
                      style={{ borderColor: s.line }}
                    >
                      {tile.initials}
                    </span>
                    <span className="label text-[0.55rem]" style={{ opacity: 0.7 }}>
                      {tile.place}
                    </span>
                  </div>

                  <figcaption className="relative">
                    <span className="label text-[0.55rem]" style={{ opacity: 0.7 }}>
                      {tile.category}
                    </span>
                    <p className="mt-2 font-serif text-[0.95rem] leading-snug sm:text-base">
                      {tile.caption}
                    </p>
                    <span className="label mt-3 block text-[0.52rem]" style={{ opacity: 0.55 }}>
                      Community image placeholder
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={0.1} className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={social.facebook}
            target="_blank"
            rel="noreferrer noopener"
            className="label inline-flex w-full items-center justify-center gap-2.5 border border-charcoal/35 px-6 py-3.5 text-[0.66rem] text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal hover:text-ivory sm:w-auto"
          >
            <FacebookIcon size={15} />
            Follow on Facebook
          </a>
          <a
            href={social.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="label inline-flex w-full items-center justify-center gap-2.5 border border-charcoal/35 px-6 py-3.5 text-[0.66rem] text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal hover:text-ivory sm:w-auto"
          >
            <InstagramIcon size={15} />
            Follow on Instagram
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
