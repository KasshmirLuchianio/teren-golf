import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Placeholder from "@/components/ui/Placeholder";
import Reveal from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Povestea Ileanei",
  description:
    "Femeia din spatele selecției: cum citește Ileana Giusca o haină și de ce crede că hainele merită mai mult decât o singură viață.",
};

const process = [
  {
    title: "Prima privire e la material",
    body: "Înainte de etichetă, înainte de croială. Lână care încă revine la loc, mătase cu greutate în mână, o căptușeală care nu s-a uscat. Materialul e partea dintr-o haină care nu se poate falsifica și nu se poate repara.",
  },
  {
    title: "Apoi construcția",
    body: "Rezervele de cusătură, o față întărită cu pânză, un tiv finisat manual, un model care se continuă peste buzunar. Sunt deciziile mici pe care un producător le ia doar când haina e făcută să dureze.",
  },
  {
    title: "Perioada, și ce explică ea",
    body: "Un umăr din anii '80, o talie din anii '60, un rever care datează un sacou în câțiva ani. Să știi când a fost făcut ceva îți explică de ce a fost croit așa — și cum să-l porți azi fără să pari costumată.",
  },
  {
    title: "Descrierea cinstită",
    body: "Fiecare piesă e măsurată pe plat și descrisă așa cum e. O manșetă înmuiată, un nasture înlocuit, un semn sub guler. Nimic nu e retușat, pentru că o clientă surprinsă la primire nu se mai întoarce.",
  },
  {
    title: "Și, la final, cum va fi purtată",
    body: "Ultima întrebare e cea mai personală: cu ce și de către cine. Dacă o haină nu poate fi așezată într-o garderobă adevărată, nu intră în selecție, oricât ar fi de frumoasă.",
  },
];

const beliefs = [
  {
    heading: "Hainele se fac, nu se produc",
    body: "E o diferență între o haină pe care a desenat-o cineva și una pe care a comandat-o cineva. Prima se recunoaște de la un metru, și exact asta caută selecția.",
  },
  {
    heading: "O piesă bună își trăiește stăpâna",
    body: "Mare parte din ce trece pe aici a fost făcut înainte să existe fast fashion și a supraviețuit deja câtorva garderobe. Va supraviețui și acesteia, dacă e îngrijită.",
  },
  {
    heading: "Stilul se construiește, nu se cumpără",
    body: "Nimeni nu vine pe lume cu un stil personal. Se adună, piesă cu piesă, din lucruri alese cu atenție, nu repede.",
  },
];

export default function StoryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Fondatoarea"
        title="O garderobă se construiește încet și întotdeauna cu mâna"
        lead="Ileana Giusca și-a petrecut viața profesională printre haine — citind materiale, croieli și construcție, și învățând ce face ca o haină să țină o viață, iar alta să se termine după un sezon."
      />

      <Container className="grid gap-14 py-16 lg:grid-cols-[1fr_0.85fr] lg:gap-20 lg:py-24">
        <div className="max-w-[62ch]">
          <Reveal>
            <p className="font-serif text-2xl leading-[1.5] text-charcoal sm:text-[1.65rem]">
              Se îmbracă la fel cum alege: fără zgomot. O pălărie aproape în fiecare zi, un palton
              recăptușit o dată, pantofi aleși pentru drumul spre casă. Nimic nu e strident și nimic nu
              e întâmplător.
            </p>
          </Reveal>

          <Reveal delay={0.05} className="mt-9 space-y-6 text-[1rem] leading-relaxed text-ink/80">
            <p>
              Cunoștințele ei nu vin dintr-un curs. Vin din ani de haine ținute în mână — întoarse pe
              dos, cercetate la felul în care e montată o mânecă, învățând care filaturi făceau
              materiale ce merită păstrate și care case croiau pentru un corp adevărat, nu pentru un
              desen. Genul acesta de cunoaștere se strânge greu și nu se poate improviza.
            </p>
            <p>
              Istoria modei contează pentru ea dintr-un motiv practic, nu nostalgic. O perioadă explică
              o proporție. Odată ce știi de ce se construia umărul așa într-un anumit deceniu, știi și
              ce să pui dedesubt, iar haina încetează să fie o relicvă și devine ceva ce poți purta
              într-o marți oarecare.
            </p>
            <p>
              Ce refuză să facă este să trateze hainele second-hand ca pe niște haine de mâna a doua. Un
              sacou bine făcut, purtat douăzeci de ani, nu e marfă stricată; e o haină care s-a
              dovedit. Munca e doar să-l găsești, să-l înțelegi, să-l descrii cinstit și să-l dai mai
              departe cuiva care o să-l folosească.
            </p>
          </Reveal>

          <Reveal delay={0.05} className="mt-12 border-l-2 border-burgundy pl-7">
            <p className="font-serif text-xl italic leading-relaxed text-charcoal sm:text-2xl">
              „N-am cumpărat niciodată o haină pentru că era la modă. O cumpăr pentru că e bine făcută
              și pentru că văd femeia care o va purta.”
            </p>
            <p className="font-script mt-4 text-4xl leading-none text-burgundy">Ileana</p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:sticky lg:top-44 lg:self-start">
          <Placeholder
            label="Portretul fondatoarei"
            tone="parchment"
            variant="portrait"
            motif={1}
            caption="Ileana, fotografiată acasă"
          />
          <p className="mt-4 text-[0.78rem] leading-relaxed text-warmgrey">
            Fotografia urmează să fie adăugată. Blocul acesta ține poziția, proporția și legenda
            imaginii finale.
          </p>
        </Reveal>
      </Container>

      {/* procesul de selecție */}
      <section className="paper border-y border-line py-16 sm:py-24" aria-labelledby="process-title">
        <Container>
          <Reveal>
            <span className="label flex items-center gap-3 text-warmgrey">
              <span aria-hidden="true" className="inline-block h-px w-8 bg-line-strong" />
              Cum este aleasă o piesă
            </span>
            <h2 id="process-title" className="mt-4 max-w-[24ch] text-3xl sm:text-4xl">
              Cinci întrebări, puse mereu în aceeași ordine
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
                „Dacă n-aș purta-o eu sau n-aș pune-o pe o prietenă, nu ajunge pe umeraș.”
              </p>
              <span className="label mt-5 text-[0.58rem] text-warmgrey">Ileana Giusca</span>
            </Reveal>
          </ol>
        </Container>
      </section>

      {/* convingeri */}
      <Container className="py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">Pe ce se sprijină selecția</h2>
            <p className="mt-5 max-w-[40ch] text-[0.95rem] leading-relaxed text-ink/75">
              Trei convingeri, niciuna la modă, toate motivul pentru care magazinul acesta arată așa cum
              arată.
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

      {/* notă editabilă și îndemn */}
      <Container className="pb-20 sm:pb-28">
        <Reveal className="grid gap-10 border border-line bg-cream p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <span className="label text-[0.6rem] text-burgundy">Text demonstrativ, de completat</span>
            <p className="mt-4 max-w-[58ch] text-[0.92rem] leading-relaxed text-ink/75">
              Pagina aceasta nu conține intenționat date, cifre, certificări sau premii. Ele îi aparțin
              Ilenei și ar trebui scrise cu cuvintele ei, odată confirmate — anii de experiență, unde au
              fost găsite primele piese, colecțiile de care e cel mai mândră și orice ar vrea să știe o
              clientă nouă înainte să cumpere.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <LinkButton href="/catalog" size="lg">
              Vezi selecția de acum
            </LinkButton>
            <LinkButton href="/contact" variant="outline" size="lg">
              Scrie-i Ilenei
            </LinkButton>
          </div>
        </Reveal>
      </Container>
    </>
  );
}
