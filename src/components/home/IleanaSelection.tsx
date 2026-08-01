import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Placeholder from "@/components/ui/Placeholder";
import { LinkButton } from "@/components/ui/Button";

const principles = [
  {
    title: "Materials made to last",
    detail:
      "Wool that still has body, silk with weight, leather that has taken a patina rather than worn thin.",
  },
  {
    title: "Cuts that flatter",
    detail:
      "A shoulder that sits where your shoulder is, a waist in the right place, a hem that falls without pulling.",
  },
  {
    title: "Pieces with personality",
    detail:
      "A garment should be recognisable as yours. Nothing here is anonymous, and nothing arrives in duplicate.",
  },
];

export default function IleanaSelection() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="selection-title">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-40 lg:self-start">
          <div className="relative">
            <Placeholder
              label="Founder portrait"
              tone="olive"
              variant="portrait"
              motif={3}
              caption="Ileana in her studio, among the week’s selection"
            />
            <p className="font-script absolute -bottom-5 -right-2 text-4xl leading-none text-burgundy sm:text-5xl">
              Ileana
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="label flex items-center gap-3 text-warmgrey">
              <span aria-hidden="true" className="inline-block h-px w-8 bg-line-strong" />
              The person behind the rail
            </span>
            <h2 id="selection-title" className="mt-4 text-3xl sm:text-4xl md:text-[2.75rem]">
              Ileana’s Selection
            </h2>
            <p className="mt-6 max-w-[58ch] text-[1rem] leading-relaxed text-ink/80">
              Every piece is personally examined, selected, and presented. Fabric, cut, construction,
              period, brand, and the way a garment can be worn all matter more than passing trends.
            </p>
          </Reveal>

          <ol className="mt-12 divide-y divide-line border-y border-line">
            {principles.map((principle, i) => (
              <Reveal as="li" key={principle.title} delay={i * 0.06} className="flex gap-6 py-7">
                <span className="label mt-1 shrink-0 text-[0.62rem] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-charcoal">{principle.title}</h3>
                  <p className="mt-2 max-w-[52ch] text-[0.9rem] leading-relaxed text-ink/75">
                    {principle.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.1} className="mt-10">
            <LinkButton href="/story" size="lg">
              Read Her Story
            </LinkButton>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
