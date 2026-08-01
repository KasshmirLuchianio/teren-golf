import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  description: "Ce date se colectează, de ce și pentru cât timp. Text demonstrativ pentru prototip.",
};

const sections = [
  {
    title: "Ce se colectează",
    body: "Doar ce e necesar ca să răspundem la un mesaj și să trimitem un colet: numele, adresa de e-mail, adresa de livrare și numărul de telefon, împreună cu detaliile a ceea ce ai comandat.",
  },
  {
    title: "Buletinul informativ",
    body: "Dacă intri în cercul Ileanei, adresa ta de e-mail este folosită pentru un singur lucru — ca să afli despre piesele noi. Fiecare mesaj conține un link de dezabonare, iar lista nu este niciodată dată mai departe sau vândută.",
  },
  {
    title: "Cât timp se păstrează",
    body: "Evidențele comenzilor se păstrează atât cât cere legislația contabilă. Adresele pentru buletinul informativ se păstrează până la dezabonare. Nimic altceva nu este reținut.",
  },
  {
    title: "Cookie-uri",
    body: "Prototipul păstrează favoritele și coșul în browserul tău, ca să nu se piardă la reîncărcarea paginii. Nu se trimite nimic nicăieri și, în această etapă, nu se folosesc cookie-uri de urmărire sau de publicitate.",
  },
  {
    title: "Drepturile tale",
    body: "Poți cere oricând să afli ce date sunt păstrate despre tine, să fie corectate sau să fie șterse. Un singur e-mail este de ajuns.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Politica de confidențialitate"
        lead="Text demonstrativ pregătit pentru prototip. Trebuie verificat față de cerințele GDPR înainte de deschiderea magazinului."
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
          Întrebările legate de oricare dintre acestea pot fi trimise la buna@ileanagiusca.ro.
        </p>
      </Container>
    </>
  );
}
