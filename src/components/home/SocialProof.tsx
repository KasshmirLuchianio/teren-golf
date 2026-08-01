import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    initials: "AM",
    name: "Ana Maria",
    place: "Cluj-Napoca",
    piece: "Sacou din lână, anii '90",
    quote:
      "Am întrebat de lățimea umărului și am primit un răspuns cu trei fotografii și o notă despre cum îmi va sta. Îmi vine exact cum a spus Ileana.",
  },
  {
    initials: "RD",
    name: "Ruxandra",
    place: "București",
    piece: "Rochie-cămașă din mătase",
    quote:
      "Cumpăr vintage online de ani de zile și e prima dată când nu s-a ascuns nimic. Semnul mic de pe tiv era descris înainte să întreb eu.",
  },
  {
    initials: "IL",
    name: "Ioana",
    place: "Timișoara",
    piece: "Palton camel",
    quote:
      "Paltonul a venit învelit în foiță, cu un bilet scris de mână. Mama m-a întrebat de unde l-am luat. E cu nouăsprezece ani mai bătrân decât mine.",
  },
  {
    initials: "SC",
    name: "Simona",
    place: "Iași",
    piece: "Fustă plisată din lână",
    quote:
      "Cel mai mult apreciez că mi se spune când o piesă nu e pentru mine. De două ori Ileana m-a convins să renunț. De asta mă tot întorc.",
  },
];

export default function SocialProof() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="testimonials-title">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Cliente"
            title="Purtate mai departe, într-o altă poveste"
            lead="Mii de haine și-au găsit deja un capitol nou."
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
            Testimonialele de aici sunt text demonstrativ pentru prototip
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
