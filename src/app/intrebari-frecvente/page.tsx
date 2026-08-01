import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Accordion from "@/components/ui/Accordion";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Întrebări frecvente",
  description:
    "Mărimi, stare, livrare, retur și rezervări — întrebările pe care clientele le pun cel mai des înainte să cumpere o piesă vintage.",
};

const groups = [
  {
    title: "Înainte de cumpărare",
    items: [
      {
        question: "De ce fiecare piesă există într-un singur exemplar?",
        answer: (
          <>
            <p>
              Pentru că fiecare haină este găsită individual, nu comandată de la un furnizor. Când o
              piesă se vinde, s-a dus — nu există o a doua într-un depozit și nu se face
              reaprovizionare.
            </p>
            <p className="mt-3">
              Dacă ceva ce îți doreai s-a vândut, salvează piesa la favorite și scrie-i Ilenei. Ea ține
              minte ce caută fiecare.
            </p>
          </>
        ),
      },
      {
        question: "Cum știu dacă o piesă îmi va veni bine?",
        answer: (
          <>
            <p>
              Ai încredere în măsurători, nu în etichetă. Mărimile s-au schimbat mult de la un deceniu
              la altul, iar un 40 din anii ’80 e rareori un 40 de azi.
            </p>
            <p className="mt-3">
              Fiecare anunț dă haina măsurată pe plat. Compară cifrele cu o piesă pe care o ai deja și a
              cărei croială îți place —{" "}
              <Link href="/ghid-de-masuri" className="link-underline text-burgundy">
                ghidul de măsuri
              </Link>{" "}
              explică în câțiva pași cum se face.
            </p>
          </>
        ),
      },
      {
        question: "Ce înseamnă gradele de stare?",
        answer: (
          <ul className="space-y-2">
            <li>
              <strong className="font-normal text-charcoal">Ca nouă</strong> — nepurtată sau purtată o
              dată, fără semne de folosire.
            </li>
            <li>
              <strong className="font-normal text-charcoal">Excelentă</strong> — purtată, dar fără nimic
              ce ar observa o nouă proprietară.
            </li>
            <li>
              <strong className="font-normal text-charcoal">Foarte bună</strong> — urme ușoare și
              cinstite de purtare, descrise în anunț.
            </li>
            <li>
              <strong className="font-normal text-charcoal">Bună, purtată cu grijă</strong> — semne
              vizibile ale unei vieți deja trăite, numite întotdeauna exact.
            </li>
          </ul>
        ),
      },
      {
        question: "Piesele sunt curățate înainte de vânzare?",
        answer: (
          <p>
            Da. Totul este curățat profesional sau spălat manual cu grijă, în funcție de material,
            înainte de a fi fotografiat și publicat. Acolo unde o haină a avut nevoie de o reparație,
            reparația este menționată în descriere.
          </p>
        ),
      },
    ],
  },
  {
    title: "Comenzi",
    items: [
      {
        question: "Pot rezerva o piesă cât mă gândesc?",
        answer: (
          <p>
            O piesă poate fi ținută scurt — cât să verifici o măsurătoare față de garderoba ta sau să
            pui o întrebare. Nu poate fi ținută zile întregi, pentru că de obicei se uită și altcineva
            la aceeași haină.
          </p>
        ),
      },
      {
        question: "Pot proba ceva înainte să cumpăr?",
        answer: (
          <p>Da, cu programare, în București. Scrie-i Ilenei codul piesei și veți stabili o oră.</p>
        ),
      },
      {
        question: "Cât durează livrarea?",
        answer: (
          <p>
            În România, de obicei două-patru zile lucrătoare. Totul este învelit în foiță și trimis cu o
            notă scurtă despre piesă. Vezi{" "}
            <Link href="/livrare-si-retur" className="link-underline text-burgundy">
              livrare și retur
            </Link>{" "}
            pentru toate detaliile.
          </p>
        ),
      },
      {
        question: "Pot returna ceva?",
        answer: (
          <p>
            Da, în paisprezece zile, cu condiția ca piesa să se întoarcă așa cum a fost trimisă. Hainele
            vintage sunt descrise cinstit tocmai ca returul să rămână o excepție.
          </p>
        ),
      },
    ],
  },
  {
    title: "Despre selecție",
    items: [
      {
        question: "Cine alege piesele?",
        answer: (
          <p>
            Ileana, personal, o haină pe rând. Nu există alți vânzători și nicio achiziție automată.{" "}
            <Link href="/povestea-ileanei" className="link-underline text-burgundy">
              Povestea ei
            </Link>{" "}
            explică cum citește o piesă înainte să se hotărască.
          </p>
        ),
      },
      {
        question: "Cumpărați piese de la cliente?",
        answer: (
          <p>
            Ocazional, când ceva se potrivește selecției. Scrie-ne o descriere, eticheta și câteva
            măsurători, iar Ileana îți va spune cinstit dacă e o piesă pe care o poate plasa.
          </p>
        ),
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="Ajutor"
        title="Întrebări frecvente"
        lead="Mărimi, stare și livrare — întrebările care apar cel mai des, cu răspunsuri pe șleau."
      />

      <Container className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl">
          {groups.map((group) => (
            <section key={group.title} className="mb-14 last:mb-0" aria-labelledby={`faq-${group.title}`}>
              <h2 id={`faq-${group.title}`} className="label mb-5 text-warmgrey">
                {group.title}
              </h2>
              <Accordion items={group.items} />
            </section>
          ))}

          <div className="mt-16 border border-line bg-cream p-8 text-center sm:p-12">
            <h2 className="font-serif text-2xl">Nu ai găsit răspunsul aici?</h2>
            <p className="mx-auto mt-3 max-w-[44ch] text-[0.92rem] leading-relaxed text-ink/75">
              Scrie-i direct Ilenei. Preferă să răspundă de două ori la aceeași întrebare decât ca o
              piesă să ajungă la tine și să te dezamăgească.
            </p>
            <div className="mt-7 flex justify-center">
              <LinkButton href="/contact" size="lg">
                Pune o întrebare
              </LinkButton>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
