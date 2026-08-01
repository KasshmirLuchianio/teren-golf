import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/forms/ContactForm";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";
import { social } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Write to Ileana Giusca about a piece, a size, or something you are looking for. Every message is answered personally.",
};

const channels = [
  {
    label: "Email",
    value: "buna@ileanagiusca.ro",
    href: "mailto:buna@ileanagiusca.ro",
    note: "The surest way to reach her. Answered personally.",
  },
  {
    label: "WhatsApp",
    value: "Ask about a piece",
    href: social.whatsapp,
    note: "For a quick question about a measurement or a mark.",
  },
  {
    label: "By appointment",
    value: "Bucharest, Romania",
    href: null,
    note: "Pieces can be seen and tried on, by arrangement.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Write to Ileana"
        lead="A question about a measurement, a piece you are searching for, or an order already placed — all of it reaches the same person."
      />

      <Container className="grid gap-14 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:py-24">
        <Reveal>
          <ContactForm />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="border border-line bg-cream p-8">
            <h2 className="label text-warmgrey">Other ways to reach us</h2>
            <ul className="mt-6 divide-y divide-line">
              {channels.map((channel) => (
                <li key={channel.label} className="py-5 first:pt-0 last:pb-0">
                  <span className="label text-[0.58rem] text-warmgrey">{channel.label}</span>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel={channel.href.startsWith("http") ? "noreferrer noopener" : undefined}
                      className="link-underline mt-1.5 block font-serif text-lg text-charcoal hover:text-burgundy"
                    >
                      {channel.value}
                    </a>
                  ) : (
                    <p className="mt-1.5 font-serif text-lg text-charcoal">{channel.value}</p>
                  )}
                  <p className="mt-1.5 text-[0.82rem] leading-relaxed text-ink/70">{channel.note}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-3 border-t border-line pt-6">
              <a
                href={social.facebook}
                target="_blank"
                rel="noreferrer noopener"
                className="border border-charcoal/25 p-2.5 text-charcoal/70 transition-colors hover:border-charcoal hover:text-charcoal"
                aria-label="Ileana Giusca on Facebook"
              >
                <FacebookIcon size={17} />
              </a>
              <a
                href={social.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="border border-charcoal/25 p-2.5 text-charcoal/70 transition-colors hover:border-charcoal hover:text-charcoal"
                aria-label="Ileana Giusca on Instagram"
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href={social.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                className="border border-charcoal/25 p-2.5 text-charcoal/70 transition-colors hover:border-charcoal hover:text-charcoal"
                aria-label="Ileana Giusca on WhatsApp"
              >
                <WhatsAppIcon size={17} />
              </a>
            </div>
          </div>

          <div className="mt-8 border-l-2 border-burgundy pl-6">
            <p className="font-serif text-lg italic leading-relaxed text-charcoal">
              “If you are unsure about a size, send me the measurements of something you already own and
              love. That tells me more than a label ever will.”
            </p>
            <p className="label mt-4 text-[0.58rem] text-warmgrey">Ileana Giusca</p>
          </div>
        </Reveal>
      </Container>
    </>
  );
}
