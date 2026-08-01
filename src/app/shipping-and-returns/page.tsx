import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Shipping and Returns",
  description:
    "How pieces are packed and sent within Romania and abroad, and how to return a garment within fourteen days.",
};

const options = [
  {
    place: "Romania",
    time: "2 – 4 working days",
    cost: "25 RON",
    note: "Free on orders over 500 RON.",
  },
  {
    place: "European Union",
    time: "5 – 8 working days",
    cost: "From 70 RON",
    note: "Calculated at checkout by weight.",
  },
  {
    place: "Collection in person",
    time: "By appointment",
    cost: "No charge",
    note: "In Bucharest, arranged by email.",
  },
];

const steps = [
  "Write within fourteen days of delivery, quoting the piece reference.",
  "Send the garment back unworn, with any tags still attached, in its original wrapping.",
  "Once it arrives and has been checked, the refund is issued to the original payment method.",
];

export default function ShippingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service"
        title="Shipping and returns"
        lead="Every piece is wrapped in tissue and sent with a short handwritten note about how it was chosen. Nothing leaves in a plastic bag."
      />

      <Container className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">Delivery</h2>
            <div className="mt-7 divide-y divide-line border-y border-line">
              {options.map((option) => (
                <div key={option.place} className="grid gap-2 py-6 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8">
                  <div>
                    <h3 className="font-serif text-lg text-charcoal">{option.place}</h3>
                    <p className="mt-1 text-[0.85rem] text-ink/70">{option.note}</p>
                  </div>
                  <div className="flex items-baseline gap-6 sm:justify-end">
                    <span className="label text-[0.6rem] text-warmgrey">{option.time}</span>
                    <span className="font-serif text-lg text-charcoal">{option.cost}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[0.8rem] leading-relaxed text-warmgrey">
              Rates shown are placeholder figures for the prototype and should be confirmed before the
              shop opens.
            </p>
          </Reveal>

          <Reveal delay={0.05} className="mt-16">
            <h2 className="text-2xl sm:text-3xl">How a piece is packed</h2>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-ink/80">
              Garments are folded along their own seams, wrapped in acid-free tissue, and boxed rather
              than bagged. Coats and tailoring travel on their shoulders where the parcel allows, so
              they arrive without a crease across the chest. Small leather goods are wrapped separately
              and padded at the corners.
            </p>
          </Reveal>

          <Reveal delay={0.05} id="returns" className="mt-16 scroll-mt-40">
            <h2 className="text-2xl sm:text-3xl">Returns</h2>
            <p className="mt-5 max-w-[60ch] text-[0.95rem] leading-relaxed text-ink/80">
              A piece can be returned within fourteen days of delivery. Because every garment is
              described honestly and measured flat before it is listed, returns are uncommon — but if
              something does not sit the way you hoped, it goes back without argument.
            </p>

            <ol className="mt-8 divide-y divide-line border-y border-line">
              {steps.map((step, i) => (
                <li key={step} className="flex gap-6 py-5">
                  <span className="label shrink-0 text-[0.6rem] text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[0.92rem] leading-relaxed text-ink/80">{step}</p>
                </li>
              ))}
            </ol>

            <p className="mt-6 text-[0.85rem] leading-relaxed text-ink/70">
              Return postage is paid by the client unless the piece was described incorrectly, in which
              case it is covered in full. Pieces altered after delivery cannot be returned.
            </p>
          </Reveal>

          <Reveal delay={0.05} className="mt-16 border border-line bg-cream p-8 sm:p-10">
            <h2 className="font-serif text-2xl">Unsure before you order?</h2>
            <p className="mt-3 max-w-[50ch] text-[0.92rem] leading-relaxed text-ink/75">
              Send the measurements of a garment you already own and Ileana will tell you honestly
              whether the piece will suit you. See also the{" "}
              <Link href="/measurement-guide" className="link-underline text-burgundy">
                measurement guide
              </Link>
              .
            </p>
            <div className="mt-7">
              <LinkButton href="/contact" size="lg">
                Ask before you buy
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </Container>
    </>
  );
}
