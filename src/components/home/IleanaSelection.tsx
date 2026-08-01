import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Placeholder from "@/components/ui/Placeholder";
import { LinkButton } from "@/components/ui/Button";

const principles = [
  {
    title: "Materiale făcute să reziste",
    detail:
      "Lână care încă are corp, mătase cu greutate, piele care a prins patină în loc să se subțieze.",
  },
  {
    title: "Croieli care avantajează",
    detail:
      "Un umăr care cade acolo unde e umărul tău, o talie la locul ei, un tiv care stă fără să tragă.",
  },
  {
    title: "Piese cu personalitate",
    detail:
      "O haină ar trebui să se recunoască drept a ta. Nimic de aici nu e anonim și nimic nu vine în două exemplare.",
  },
];

export default function IleanaSelection() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="selection-title">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-40 lg:self-start">
          <div className="relative">
            <Placeholder
              label="Portretul fondatoarei"
              tone="olive"
              variant="portrait"
              motif={3}
              caption="Ileana în atelier, printre piesele săptămânii"
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
              Femeia din spatele umerașelor
            </span>
            <h2 id="selection-title" className="mt-4 text-3xl sm:text-4xl md:text-[2.75rem]">
              Selecția Ileanei
            </h2>
            <p className="mt-6 max-w-[58ch] text-[1rem] leading-relaxed text-ink/80">
              Fiecare piesă este verificată, aleasă și prezentată personal. Materialul, croiala,
              construcția, perioada, casa de modă și felul în care poate fi purtată contează mai mult
              decât tendințele care trec.
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
            <LinkButton href="/povestea-ileanei" size="lg">
              Citește povestea ei
            </LinkButton>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
