import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import NewsletterForm from "@/components/ui/NewsletterForm";

export default function Newsletter() {
  return (
    <section className="bg-burgundy-deep text-ivory" aria-labelledby="newsletter-title">
      <Container className="py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          <Reveal>
            <span className="label flex items-center gap-3 text-ivory/55">
              <span aria-hidden="true" className="inline-block h-px w-8 bg-ivory/30" />
              Cercul Ileanei
            </span>
            <h2
              id="newsletter-title"
              className="mt-5 text-balance text-3xl leading-[1.12] text-ivory sm:text-4xl md:text-[2.75rem]"
            >
              Vezi piesele noi înaintea celorlalți
            </h2>
            <p className="mt-6 max-w-[46ch] text-[0.95rem] leading-relaxed text-ivory/75">
              Abonează-te ca să vezi piesele nou adăugate înainte să apară pe Facebook.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="border border-ivory/20 p-7 sm:p-9">
              <NewsletterForm tone="dark" />
              <p className="mt-6 text-[0.8rem] leading-relaxed text-ivory/60">
                Fără e-mailuri inutile. Doar selecții noi, găsiri rare și acces devreme.
              </p>
              <p className="mt-5 border-t border-ivory/15 pt-5 font-serif text-sm italic text-ivory/70">
                Piesele sunt unicat. Lista face de multe ori diferența între a vedea o haină și a o
                avea.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
