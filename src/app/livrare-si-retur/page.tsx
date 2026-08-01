import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Livrare și retur",
  description:
    "Cum sunt împachetate și trimise piesele în România și în străinătate și cum se returnează o haină în paisprezece zile.",
};

const options = [
  {
    place: "România",
    time: "2 – 4 zile lucrătoare",
    cost: "25 lei",
    note: "Gratuit la comenzi peste 500 de lei.",
  },
  {
    place: "Uniunea Europeană",
    time: "5 – 8 zile lucrătoare",
    cost: "De la 70 de lei",
    note: "Se calculează la finalizarea comenzii, după greutate.",
  },
  {
    place: "Ridicare personală",
    time: "Cu programare",
    cost: "Fără cost",
    note: "În București, stabilită prin e-mail.",
  },
];

const steps = [
  "Scrie-ne în paisprezece zile de la livrare, menționând codul piesei.",
  "Trimite haina înapoi nepurtată, cu etichetele intacte, în ambalajul original.",
  "După ce ajunge și este verificată, banii se întorc pe aceeași metodă de plată.",
];

export default function ShippingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Ajutor"
        title="Livrare și retur"
        lead="Fiecare piesă este învelită în foiță și trimisă cu o notă scurtă, scrisă de mână, despre cum a fost aleasă. Nimic nu pleacă într-o pungă de plastic."
      />

      <Container className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">Livrare</h2>
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
              Tarifele afișate sunt cifre demonstrative pentru prototip și trebuie confirmate înainte de
              deschiderea magazinului.
            </p>
          </Reveal>

          <Reveal delay={0.05} className="mt-16">
            <h2 className="text-2xl sm:text-3xl">Cum se împachetează o piesă</h2>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-ink/80">
              Hainele sunt împăturite pe propriile cusături, învelite în foiță fără aciditate și puse în
              cutie, nu în pungă. Paltoanele și piesele de croitorie călătoresc pe umeri acolo unde
              coletul permite, ca să ajungă fără cută pe piept. Marochinăria mică se învelește separat și
              se protejează la colțuri.
            </p>
          </Reveal>

          <Reveal delay={0.05} id="retur" className="mt-16 scroll-mt-40">
            <h2 className="text-2xl sm:text-3xl">Retur</h2>
            <p className="mt-5 max-w-[60ch] text-[0.95rem] leading-relaxed text-ink/80">
              O piesă poate fi returnată în paisprezece zile de la livrare. Pentru că fiecare haină este
              descrisă cinstit și măsurată pe plat înainte de publicare, returul este rar — dar dacă
              ceva nu cade cum sperai, se întoarce fără discuții.
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
              Transportul de retur este plătit de clientă, cu excepția cazului în care piesa a fost
              descrisă greșit — atunci este acoperit integral. Piesele modificate după livrare nu pot fi
              returnate.
            </p>
          </Reveal>

          <Reveal delay={0.05} className="mt-16 border border-line bg-cream p-8 sm:p-10">
            <h2 className="font-serif text-2xl">Nu ești sigură înainte să comanzi?</h2>
            <p className="mt-3 max-w-[50ch] text-[0.92rem] leading-relaxed text-ink/75">
              Trimite măsurătorile unei haine pe care o ai deja, iar Ileana îți va spune cinstit dacă
              piesa ți se potrivește. Vezi și{" "}
              <Link href="/ghid-de-masuri" className="link-underline text-burgundy">
                ghidul de măsuri
              </Link>
              .
            </p>
            <div className="mt-7">
              <LinkButton href="/contact" size="lg">
                Întreabă înainte să cumperi
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </Container>
    </>
  );
}
