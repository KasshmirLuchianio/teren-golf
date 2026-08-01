import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import Placeholder from "@/components/ui/Placeholder";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Measurement Guide",
  description:
    "How to measure a garment you already own and compare it with the flat measurements given for every vintage piece.",
};

const howTo = [
  {
    title: "Shoulder to shoulder",
    body: "Lay the garment flat, face up. Measure from the outer edge of one shoulder seam straight across to the other. This is the measurement that decides whether a jacket will work at all.",
  },
  {
    title: "Chest",
    body: "Measure straight across from one underarm seam to the other, then compare that number directly with ours — both are flat measurements, not body measurements.",
  },
  {
    title: "Waist",
    body: "Find the narrowest point of the garment, usually just above the second button on a jacket, and measure straight across.",
  },
  {
    title: "Sleeve",
    body: "From the shoulder seam along the outside of the sleeve to the end of the cuff. For raglan sleeves, measure from the side of the neck instead.",
  },
  {
    title: "Total length",
    body: "From the highest point of the shoulder, next to the collar, straight down to the hem.",
  },
];

const sizeTable = [
  { label: "XS / 36", chest: "42 – 44 cm", waist: "33 – 35 cm", hip: "45 – 47 cm" },
  { label: "S / 38", chest: "45 – 47 cm", waist: "36 – 38 cm", hip: "48 – 50 cm" },
  { label: "M / 40", chest: "48 – 50 cm", waist: "39 – 41 cm", hip: "51 – 53 cm" },
  { label: "L / 42", chest: "51 – 53 cm", waist: "42 – 44 cm", hip: "54 – 56 cm" },
];

export default function MeasurementGuidePage() {
  return (
    <>
      <PageHeader
        eyebrow="Fit"
        title="How to read the measurements"
        lead="Vintage sizing moved with every decade, so the label on a garment tells you very little. The numbers do. Here is how to use them."
      />

      <Container className="grid gap-14 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:py-20">
        <div>
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">Start with a garment you already own</h2>
            <p className="mt-5 max-w-[60ch] text-[0.95rem] leading-relaxed text-ink/80">
              Take a jacket, a dress or a shirt from your own wardrobe — one that fits the way you like.
              Lay it flat, unbuttoned, without stretching it. Measure it with a tape, write the numbers
              down, and compare them with the measurements given on every listing. That comparison is far
              more reliable than any size chart.
            </p>
          </Reveal>

          <Reveal delay={0.05} className="mt-12">
            <h2 className="text-2xl sm:text-3xl">Where to measure</h2>
            <ol className="mt-7 divide-y divide-line border-y border-line">
              {howTo.map((item, i) => (
                <li key={item.title} className="flex gap-6 py-6">
                  <span className="label shrink-0 text-[0.6rem] text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-charcoal">{item.title}</h3>
                    <p className="mt-2 max-w-[56ch] text-[0.9rem] leading-relaxed text-ink/75">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.05} className="mt-14">
            <h2 className="text-2xl sm:text-3xl">Indicative sizes</h2>
            <p className="mt-4 max-w-[56ch] text-[0.9rem] leading-relaxed text-ink/75">
              A rough guide only, given as flat measurements. Individual pieces vary by house, decade and
              cut — always check the numbers on the listing itself.
            </p>

            <div className="scroll-slim mt-7 overflow-x-auto">
              <table className="w-full min-w-[420px] border-collapse text-left">
                <thead>
                  <tr className="border-y border-line-strong">
                    <th scope="col" className="label py-3 pr-4 text-[0.6rem] text-warmgrey">Size</th>
                    <th scope="col" className="label py-3 pr-4 text-[0.6rem] text-warmgrey">Chest, flat</th>
                    <th scope="col" className="label py-3 pr-4 text-[0.6rem] text-warmgrey">Waist, flat</th>
                    <th scope="col" className="label py-3 text-[0.6rem] text-warmgrey">Hip, flat</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeTable.map((row) => (
                    <tr key={row.label} className="border-b border-line">
                      <th scope="row" className="py-4 pr-4 font-serif text-base font-normal text-charcoal">
                        {row.label}
                      </th>
                      <td className="py-4 pr-4 text-[0.9rem] text-ink/80">{row.chest}</td>
                      <td className="py-4 pr-4 text-[0.9rem] text-ink/80">{row.waist}</td>
                      <td className="py-4 text-[0.9rem] text-ink/80">{row.hip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:sticky lg:top-44 lg:self-start">
          <Placeholder
            label="Editorial image"
            tone="warmgrey"
            variant="editorial"
            motif={4}
            caption="A jacket laid flat, tape across the shoulders"
          />

          <div className="mt-8 border border-line bg-cream p-7">
            <h2 className="font-serif text-xl">Still not sure?</h2>
            <p className="mt-3 text-[0.88rem] leading-relaxed text-ink/75">
              Send Ileana the measurements of your own garment and the reference of the piece you are
              considering. She will tell you plainly whether it will work — including when it will not.
            </p>
            <div className="mt-6">
              <LinkButton href="/contact" variant="outline" size="sm">
                Ask about a fit
              </LinkButton>
            </div>
            <p className="mt-6 border-t border-line pt-5 text-[0.82rem] leading-relaxed text-ink/70">
              See also{" "}
              <Link href="/shipping-and-returns" className="link-underline text-burgundy">
                shipping and returns
              </Link>{" "}
              if a piece does not sit as you hoped.
            </p>
          </div>
        </Reveal>
      </Container>
    </>
  );
}
