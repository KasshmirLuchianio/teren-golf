import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Accordion from "@/components/ui/Accordion";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Frequently asked questions",
  description:
    "Sizing, condition, shipping, returns and reservations — the questions clients ask most often before buying a vintage piece.",
};

const groups = [
  {
    title: "Before buying",
    items: [
      {
        question: "Why is every piece available in only one example?",
        answer: (
          <>
            <p>
              Because each garment is found individually rather than ordered from a supplier. When a
              piece is sold it is gone — there is no second one in a stockroom, and no restock.
            </p>
            <p className="mt-3">
              If something you want has sold, save it to your wishlist and write to Ileana. She keeps a
              note of what people are looking for.
            </p>
          </>
        ),
      },
      {
        question: "How do I know a piece will fit me?",
        answer: (
          <>
            <p>
              Trust the measurements, not the label. Vintage sizing moved considerably between decades,
              and a 1980s size 40 is rarely a modern 40.
            </p>
            <p className="mt-3">
              Every listing gives the garment measured flat. Compare those numbers with a piece you
              already own and like the fit of — the{" "}
              <Link href="/measurement-guide" className="link-underline text-burgundy">
                measurement guide
              </Link>{" "}
              explains how in a few steps.
            </p>
          </>
        ),
      },
      {
        question: "What does the condition grading mean?",
        answer: (
          <ul className="space-y-2">
            <li>
              <strong className="font-normal text-charcoal">As new</strong> — unworn or worn once, with
              no signs of use.
            </li>
            <li>
              <strong className="font-normal text-charcoal">Excellent</strong> — worn, but with nothing
              a new owner would notice.
            </li>
            <li>
              <strong className="font-normal text-charcoal">Very good</strong> — light, honest wear,
              described in the listing.
            </li>
            <li>
              <strong className="font-normal text-charcoal">Good, gently worn</strong> — visible signs
              of a life already lived, always named specifically.
            </li>
          </ul>
        ),
      },
      {
        question: "Are the pieces cleaned before they are sold?",
        answer: (
          <p>
            Yes. Everything is professionally cleaned or carefully hand-washed, depending on the fabric,
            before it is photographed and listed. Where a garment needed a repair, the repair is
            mentioned in the description.
          </p>
        ),
      },
    ],
  },
  {
    title: "Ordering",
    items: [
      {
        question: "Can I reserve a piece while I think about it?",
        answer: (
          <p>
            A piece can be held briefly — long enough to check a measurement against your own wardrobe or
            ask a question. It cannot be held for days, because someone else is usually looking at the
            same garment.
          </p>
        ),
      },
      {
        question: "Can I try something on before buying?",
        answer: (
          <p>
            By appointment in Bucharest, yes. Write to Ileana with the reference of the piece and she
            will arrange a time.
          </p>
        ),
      },
      {
        question: "How long does delivery take?",
        answer: (
          <p>
            Within Romania, usually two to four working days. Everything is wrapped in tissue and sent
            with a short note about the piece. See{" "}
            <Link href="/shipping-and-returns" className="link-underline text-burgundy">
              shipping and returns
            </Link>{" "}
            for the full detail.
          </p>
        ),
      },
      {
        question: "Can I return something?",
        answer: (
          <p>
            Yes, within fourteen days, provided the piece comes back as it was sent. Vintage garments
            are described honestly precisely so that returns stay rare.
          </p>
        ),
      },
    ],
  },
  {
    title: "About the selection",
    items: [
      {
        question: "Who chooses the pieces?",
        answer: (
          <p>
            Ileana, personally, one garment at a time. There are no other sellers and no automated
            sourcing.{" "}
            <Link href="/story" className="link-underline text-burgundy">
              Her story
            </Link>{" "}
            explains how she reads a piece before deciding.
          </p>
        ),
      },
      {
        question: "Do you buy pieces from clients?",
        answer: (
          <p>
            Occasionally, when something is right for the selection. Write with a description, the label
            and a few measurements, and Ileana will tell you honestly whether it is a piece she can place.
          </p>
        ),
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="Help"
        title="Frequently asked questions"
        lead="Sizing, condition and delivery — the questions that come up most often, answered plainly."
      />

      <Container className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl">
          {groups.map((group) => (
            <section key={group.title} className="mb-14 last:mb-0" aria-labelledby={`faq-${group.title}`}>
              <h2 id={`faq-${group.title}`} className="label mb-5 text-warmgrey">
                {group.title}
              </h2>
              <Accordion items={group.items} />
            </section>
          ))}

          <div className="mt-16 border border-line bg-cream p-8 text-center sm:p-12">
            <h2 className="font-serif text-2xl">Something not answered here?</h2>
            <p className="mx-auto mt-3 max-w-[44ch] text-[0.92rem] leading-relaxed text-ink/75">
              Write to Ileana directly. She would rather answer a question twice than have a piece arrive
              and disappoint.
            </p>
            <div className="mt-7 flex justify-center">
              <LinkButton href="/contact" size="lg">
                Ask a question
              </LinkButton>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
