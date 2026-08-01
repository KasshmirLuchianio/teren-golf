import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "What is collected, why, and for how long. Placeholder text for the prototype.",
};

const sections = [
  {
    title: "What is collected",
    body: "Only what is needed to answer a message and send a parcel: your name, email address, delivery address and telephone number, together with the details of what you ordered.",
  },
  {
    title: "The newsletter",
    body: "If you join Ileana’s Circle, your email address is used for one thing — telling you about new pieces. Every message includes a link to unsubscribe, and the list is never shared or sold.",
  },
  {
    title: "How long it is kept",
    body: "Order records are kept for as long as accounting law requires. Newsletter addresses are kept until you unsubscribe. Nothing else is retained.",
  },
  {
    title: "Cookies",
    body: "The prototype stores your wishlist and bag in your own browser so they survive a page reload. Nothing is sent anywhere and no tracking or advertising cookies are used at this stage.",
  },
  {
    title: "Your rights",
    body: "You may ask at any time what is held about you, ask for it to be corrected, or ask for it to be deleted. A single email is enough.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy policy"
        lead="Placeholder text prepared for the prototype. It must be reviewed against GDPR requirements before the shop opens."
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
          Questions about any of this can be sent to buna@ileanagiusca.ro.
        </p>
      </Container>
    </>
  );
}
