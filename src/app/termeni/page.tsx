import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Termeni și condiții",
  description: "Condițiile în care se vând piesele. Text demonstrativ pentru prototip.",
};

const sections = [
  {
    title: "1. De la cine cumperi",
    body: "Piesele sunt vândute de Ileana Giusca, cu sediul în București, România. Datele juridice și de înregistrare complete urmează să fie completate înainte de deschiderea magazinului.",
  },
  {
    title: "2. Natura pieselor",
    body: "Fiecare haină oferită este vintage sau pre-owned și există într-un singur exemplar. Descrierile, măsurătorile și notele despre stare sunt făcute manual pentru fiecare piesă. Micile neregularități date de vârstă fac parte din ce se vinde și sunt descrise în anunț oriunde sunt vizibile.",
  },
  {
    title: "3. Prețuri și disponibilitate",
    body: "Prețurile sunt afișate în lei și includ taxele aplicabile. Fiindcă fiecare piesă este unicat, un articol scos de pe site a fost vândut și nu poate fi comandat din nou. O piesă aflată în coș nu este rezervată până la finalizarea comenzii.",
  },
  {
    title: "4. Comenzi",
    body: "O comandă este acceptată după confirmarea prin e-mail. Dacă o piesă devine indisponibilă între comandă și confirmare — ceea ce se poate întâmpla cu stocul unicat — plata este returnată integral.",
  },
  {
    title: "5. Livrare",
    body: "Termenele și costurile de livrare sunt prezentate pe pagina de livrare și retur. Riscul trece la cumpărătoare în momentul livrării.",
  },
  {
    title: "6. Retur",
    body: "Piesele pot fi returnate în paisprezece zile de la livrare, nepurtate și în starea în care au fost trimise. Hainele modificate nu pot fi returnate.",
  },
  {
    title: "7. Legea aplicabilă",
    body: "Acești termeni sunt guvernați de legea română. Drepturile consumatorilor prevăzute de legislația română și europeană nu sunt afectate de nimic din ce este scris aici.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Termeni și condiții"
        lead="Text demonstrativ pregătit pentru prototip. Trebuie revizuit și completat împreună cu un consilier juridic înainte de deschiderea magazinului."
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
          Ultima revizuire: de completat.
        </p>
      </Container>
    </>
  );
}
