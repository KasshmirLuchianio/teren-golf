import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Placeholder from "@/components/ui/Placeholder";
import Reveal from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Ileana’s Story",
  description:
    "The person behind the selection: how Ileana Giusca reads a garment, and why she believes clothes deserve more than one life.",
};

const process = [
  {
    title: "The first look is at the cloth",
    body: "Before the label, before the shape. Wool that still springs back, silk with weight in the hand, a lining that has not gone brittle. Cloth is the part of a garment that cannot be faked and cannot be repaired.",
  },
  {
    title: "Then the construction",
    body: "Seam allowances, a canvassed front, a hem finished by hand, a pattern matched across a pocket. These are the small decisions a maker only takes when the garment is meant to last.",
  },
  {
    title: "The period, and what it explains",
    body: "A shoulder from the eighties, a waistline from the sixties, a lapel that dates a jacket within a few years. Knowing when something was made explains why it was cut that way — and how to wear it now without looking as though you are in costume.",
  },
  {
    title: "The honest description",
    body: "Every piece is measured flat and described as it is. A softened cuff, a replaced button, a mark under a collar. Nothing is retouched, because a client who is surprised on arrival will not come back.",
  },
  {
    title: "And finally, how it will be worn",
    body: "The last question is the most personal one: with what, and by whom. If a garment cannot be placed into a real wardrobe, it is not selected, however beautiful it may be.",
  },
];

const beliefs = [
  {
    heading: "Clothes are made, not produced",
    body: "There is a difference between a garment somebody drafted and a garment somebody ordered. The first is recognisable at a metre, and it is what this selection is looking for.",
  },
  {
    heading: "A good piece outlives its owner",
    body: "Most of what passes through here was made before fast fashion existed and has already outlasted several wardrobes. It will outlast this one too, if it is looked after.",
  },
  {
    heading: "Style is built, not bought",
    body: "Nobody arrives with a personal style. It accumulates, piece by piece, from things chosen carefully rather than quickly.",
  },
];

export default function StoryPage() {
  return (
    <>
      <PageHeader
        eyebrow="The founder"
        title="A wardrobe is built slowly, and always by hand"
        lead="Ileana Giusca has spent her working life around clothes — reading fabric, cut and construction, and learning what makes one garment last a lifetime while another is finished after a season."
      />

      <Container className="grid gap-14 py-16 lg:grid-cols-[1fr_0.85fr] lg:gap-20 lg:py-24">
        <div className="max-w-[62ch]">
          <Reveal>
            <p className="font-serif text-2xl leading-[1.5] text-charcoal sm:text-[1.65rem]">
              She dresses the way she selects: without noise. A hat almost every day, a coat that has
              been re-lined once, shoes chosen for the walk home. Nothing about it is loud, and nothing
              about it is accidental.
            </p>
          </Reveal>

          <Reveal delay={0.05} className="mt-9 space-y-6 text-[1rem] leading-relaxed text-ink/80">
            <p>
              Her knowledge did not come from a course. It came from years of handling garments —
              turning them inside out, looking at how a sleeve is set, learning which mills made cloth
              worth keeping and which houses cut for a real body rather than a drawing. That kind of
              knowledge is slow to acquire and impossible to improvise.
            </p>
            <p>
              Fashion history matters to her for a practical reason rather than a nostalgic one. A
              period explains a proportion. Once you know why a shoulder was built that way in a
              particular decade, you know what to put beneath it, and the garment stops being a relic
              and becomes something you can actually wear on a Tuesday.
            </p>
            <p>
              What she refuses to do is treat second-hand clothing as second-rate. A well-made jacket
              that has been worn for twenty years is not damaged goods; it is a garment that has proved
              itself. The work is simply to find it, understand it, describe it truthfully, and pass it
              on to someone who will use it.
            </p>
          </Reveal>

          <Reveal delay={0.05} className="mt-12 border-l-2 border-burgundy pl-7">
            <p className="font-serif text-xl italic leading-relaxed text-charcoal sm:text-2xl">
              “I have never bought a garment because it was fashionable. I buy it because it is well
              made, and because I can see the woman who will wear it.”
            </p>
            <p className="font-script mt-4 text-4xl leading-none text-burgundy">Ileana</p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:sticky lg:top-44 lg:self-start">
          <Placeholder
            label="Founder portrait"
            tone="parchment"
            variant="portrait"
            motif={1}
            caption="Ileana, photographed at home"
          />
          <p className="mt-4 text-[0.78rem] leading-relaxed text-warmgrey">
            Photography to be added. This block holds the position, proportion and caption of the final
            image.
          </p>
        </Reveal>
      </Container>

      {/* selection process */}
      <section className="paper border-y border-line py-16 sm:py-24" aria-labelledby="process-title">
        <Container>
          <Reveal>
            <span className="label flex items-center gap-3 text-warmgrey">
              <span aria-hidden="true" className="inline-block h-px w-8 bg-line-strong" />
              How a piece is chosen
            </span>
            <h2 id="process-title" className="mt-4 max-w-[24ch] text-3xl sm:text-4xl">
              Five questions, asked in the same order every time
            </h2>
          </Reveal>

          <ol className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {process.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 0.05} className="bg-ivory p-7 sm:p-9">
                <span className="label text-[0.6rem] text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-serif text-xl leading-snug text-charcoal">{step.title}</h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-ink/75">{step.body}</p>
              </Reveal>
            ))}

            <Reveal as="li" delay={0.25} className="flex flex-col justify-center bg-cream p-7 sm:p-9">
              <p className="font-serif text-lg italic leading-relaxed text-charcoal">
                “If I would not wear it myself, or put it on a friend, it does not go on the rail.”
              </p>
              <span className="label mt-5 text-[0.58rem] text-warmgrey">Ileana Giusca</span>
            </Reveal>
          </ol>
        </Container>
      </section>

      {/* beliefs */}
      <Container className="py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">What the selection is built on</h2>
            <p className="mt-5 max-w-[40ch] text-[0.95rem] leading-relaxed text-ink/75">
              Three convictions, none of them fashionable, all of them the reason this shop exists in the
              form it does.
            </p>
          </Reveal>

          <div className="divide-y divide-line border-y border-line">
            {beliefs.map((belief, i) => (
              <Reveal key={belief.heading} delay={i * 0.06} className="py-8">
                <h3 className="font-serif text-2xl text-charcoal">{belief.heading}</h3>
                <p className="mt-3 max-w-[56ch] text-[0.95rem] leading-relaxed text-ink/75">
                  {belief.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>

      {/* editable note + call to action */}
      <Container className="pb-20 sm:pb-28">
        <Reveal className="grid gap-10 border border-line bg-cream p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <span className="label text-[0.6rem] text-burgundy">Editable placeholder copy</span>
            <p className="mt-4 max-w-[58ch] text-[0.92rem] leading-relaxed text-ink/75">
              This page deliberately contains no dates, figures, certifications or awards. Those belong
              to Ileana and should be written in her own words once confirmed — years of experience,
              where the first pieces were found, the collections she is proudest of, and anything she
              would like a new client to know before buying.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <LinkButton href="/catalogue" size="lg">
              See the current selection
            </LinkButton>
            <LinkButton href="/contact" variant="outline" size="lg">
              Write to Ileana
            </LinkButton>
          </div>
        </Reveal>
      </Container>
    </>
  );
}
