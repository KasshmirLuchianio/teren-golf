import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    initials: "AM",
    name: "Ana Maria",
    place: "Cluj-Napoca",
    piece: "Wool blazer, 1990s",
    quote:
      "I asked about the shoulder measurement and received a reply with three photographs and a note about how it would sit on me. It fits exactly as Ileana said it would.",
  },
  {
    initials: "RD",
    name: "Ruxandra",
    place: "Bucharest",
    piece: "Silk shirt dress",
    quote:
      "I have bought vintage online for years and this is the first time nothing was hidden. The small mark on the hem was described before I even asked.",
  },
  {
    initials: "IL",
    name: "Ioana",
    place: "Timișoara",
    piece: "Camel coat",
    quote:
      "The coat arrived wrapped in tissue with a handwritten card. My mother asked where I had found it. It is nineteen years older than I am.",
  },
  {
    initials: "SC",
    name: "Simona",
    place: "Iași",
    piece: "Pleated wool skirt",
    quote:
      "What I value most is being told when a piece is not right for me. Twice now Ileana has talked me out of something. That is why I keep coming back.",
  },
];

export default function SocialProof() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="testimonials-title">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Clients"
            title="Worn into a new story"
            lead="Thousands of garments have already found a new chapter."
            align="center"
            as="h2"
          />
        </Reveal>

        <ul className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <Reveal as="li" key={testimonial.name} delay={i * 0.05} className="bg-ivory p-7 sm:p-9">
              <figure className="flex h-full flex-col">
                <blockquote className="flex-1">
                  <p className="font-serif text-lg leading-relaxed text-charcoal sm:text-[1.2rem]">
                    “{testimonial.quote}”
                  </p>
                </blockquote>

                <figcaption className="mt-7 flex items-center gap-4 border-t border-line pt-5">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center border border-line-strong bg-cream font-serif text-sm tracking-[0.12em] text-charcoal"
                  >
                    {testimonial.initials}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[0.88rem] text-charcoal">
                      {testimonial.name}, {testimonial.place}
                    </span>
                    <span className="label mt-1 text-[0.58rem] text-warmgrey">{testimonial.piece}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.1} className="mt-10 text-center">
          <p className="label text-[0.6rem] text-warmgrey">
            Testimonials shown here are placeholder copy for the prototype
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
