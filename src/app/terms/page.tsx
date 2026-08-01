import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "The terms on which pieces are sold. Placeholder text for the prototype.",
};

const sections = [
  {
    title: "1. Who you are buying from",
    body: "Pieces are sold by Ileana Giusca, based in Bucharest, Romania. The full legal and registration details are to be completed before the shop opens.",
  },
  {
    title: "2. The nature of the pieces",
    body: "Every garment offered is vintage or pre-owned and exists in a single example. Descriptions, measurements and condition notes are prepared by hand for each piece. Small irregularities of age are part of what is being sold and are described in the listing wherever they are visible.",
  },
  {
    title: "3. Prices and availability",
    body: "Prices are shown in Romanian lei and include applicable taxes. Because each piece is unique, an item removed from the site has been sold and cannot be reordered. A piece in your bag is not reserved until an order is completed.",
  },
  {
    title: "4. Orders",
    body: "An order is accepted once it has been confirmed by email. If a piece becomes unavailable between your order and that confirmation — which can happen with one-of-one stock — the payment is refunded in full.",
  },
  {
    title: "5. Delivery",
    body: "Delivery times and costs are set out on the shipping and returns page. Risk passes to the buyer on delivery.",
  },
  {
    title: "6. Returns",
    body: "Pieces may be returned within fourteen days of delivery, unworn and in the condition in which they were sent. Altered garments cannot be returned.",
  },
  {
    title: "7. Governing law",
    body: "These terms are governed by Romanian law. Consumer rights under Romanian and European legislation are unaffected by anything written here.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms and conditions"
        lead="Placeholder text prepared for the prototype. It must be reviewed and completed with a legal adviser before the shop opens."
      />

      <Container className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl divide-y divide-line border-y border-line">
          {sections.map((section) => (
            <section key={section.title} className="py-8">
              <h2 className="font-serif text-xl text-charcoal sm:text-2xl">{section.title}</h2>
              <p className="mt-3 max-w-[64ch] text-[0.92rem] leading-relaxed text-ink/75">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-[0.78rem] text-warmgrey">
          Last reviewed: to be completed.
        </p>
      </Container>
    </>
  );
}
