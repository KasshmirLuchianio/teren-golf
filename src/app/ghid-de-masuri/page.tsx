import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import Placeholder from "@/components/ui/Placeholder";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Ghid de măsuri",
  description:
    "Cum măsori o haină pe care o ai deja și cum o compari cu măsurătorile pe plat date pentru fiecare piesă vintage.",
};

const howTo = [
  {
    title: "Umăr la umăr",
    body: "Întinde haina pe plat, cu fața în sus. Măsoară de la marginea exterioară a unei cusături de umăr drept până la cealaltă. Este măsurătoarea care decide dacă un sacou funcționează sau nu.",
  },
  {
    title: "Bust",
    body: "Măsoară drept, de la o cusătură de subraț la cealaltă, apoi compară cifra direct cu a noastră — amândouă sunt măsurători pe plat, nu pe corp.",
  },
  {
    title: "Talie",
    body: "Găsește punctul cel mai îngust al hainei, de obicei imediat deasupra celui de-al doilea nasture la un sacou, și măsoară drept.",
  },
  {
    title: "Mânecă",
    body: "De la cusătura umărului, pe exteriorul mânecii, până la capătul manșetei. La mânecile raglan, măsoară în schimb de la baza gâtului.",
  },
  {
    title: "Lungime totală",
    body: "De la punctul cel mai de sus al umărului, lângă guler, drept în jos până la tiv.",
  },
];

const sizeTable = [
  { label: "XS / 36", chest: "42 – 44 cm", waist: "33 – 35 cm", hip: "45 – 47 cm" },
  { label: "S / 38", chest: "45 – 47 cm", waist: "36 – 38 cm", hip: "48 – 50 cm" },
  { label: "M / 40", chest: "48 – 50 cm", waist: "39 – 41 cm", hip: "51 – 53 cm" },
  { label: "L / 42", chest: "51 – 53 cm", waist: "42 – 44 cm", hip: "54 – 56 cm" },
];

export default function MeasurementGuidePage() {
  return (
    <>
      <PageHeader
        eyebrow="Potrivire"
        title="Cum se citesc măsurătorile"
        lead="Mărimile vintage s-au schimbat cu fiecare deceniu, așa că eticheta unei haine îți spune foarte puțin. Cifrele îți spun. Iată cum le folosești."
      />

      <Container className="grid gap-14 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:py-20">
        <div>
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">Pornește de la o haină pe care o ai deja</h2>
            <p className="mt-5 max-w-[60ch] text-[0.95rem] leading-relaxed text-ink/80">
              Ia un sacou, o rochie sau o cămașă din garderoba ta — una care îți vine exact cum îți
              place. Întinde-o pe plat, descheiată, fără să o întinzi cu forța. Măsoar-o cu centimetrul,
              notează cifrele și compară-le cu măsurătorile din fiecare anunț. Comparația aceasta e mult
              mai de încredere decât orice tabel de mărimi.
            </p>
          </Reveal>

          <Reveal delay={0.05} className="mt-12">
            <h2 className="text-2xl sm:text-3xl">Unde se măsoară</h2>
            <ol className="mt-7 divide-y divide-line border-y border-line">
              {howTo.map((item, i) => (
                <li key={item.title} className="flex gap-6 py-6">
                  <span className="label shrink-0 text-[0.6rem] text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-charcoal">{item.title}</h3>
                    <p className="mt-2 max-w-[56ch] text-[0.9rem] leading-relaxed text-ink/75">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.05} className="mt-14">
            <h2 className="text-2xl sm:text-3xl">Mărimi orientative</h2>
            <p className="mt-4 max-w-[56ch] text-[0.9rem] leading-relaxed text-ink/75">
              Doar un reper, dat ca măsurători pe plat. Piesele variază de la o casă la alta, de la un
              deceniu la altul și după croială — verifică întotdeauna cifrele din anunț.
            </p>

            <div className="scroll-slim mt-7 overflow-x-auto">
              <table className="w-full min-w-[420px] border-collapse text-left">
                <thead>
                  <tr className="border-y border-line-strong">
                    <th scope="col" className="label py-3 pr-4 text-[0.6rem] text-warmgrey">Mărime</th>
                    <th scope="col" className="label py-3 pr-4 text-[0.6rem] text-warmgrey">Bust, pe plat</th>
                    <th scope="col" className="label py-3 pr-4 text-[0.6rem] text-warmgrey">Talie, pe plat</th>
                    <th scope="col" className="label py-3 text-[0.6rem] text-warmgrey">Șold, pe plat</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeTable.map((row) => (
                    <tr key={row.label} className="border-b border-line">
                      <th scope="row" className="py-4 pr-4 font-serif text-base font-normal text-charcoal">
                        {row.label}
                      </th>
                      <td className="py-4 pr-4 text-[0.9rem] text-ink/80">{row.chest}</td>
                      <td className="py-4 pr-4 text-[0.9rem] text-ink/80">{row.waist}</td>
                      <td className="py-4 text-[0.9rem] text-ink/80">{row.hip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:sticky lg:top-44 lg:self-start">
          <Placeholder
            label="Imagine editorială"
            tone="warmgrey"
            variant="editorial"
            motif={4}
            caption="Un sacou întins pe plat, cu centimetrul pe umeri"
          />

          <div className="mt-8 border border-line bg-cream p-7">
            <h2 className="font-serif text-xl">Tot nu ești sigură?</h2>
            <p className="mt-3 text-[0.88rem] leading-relaxed text-ink/75">
              Trimite-i Ilenei măsurătorile hainei tale și codul piesei la care te gândești. Îți va
              spune pe șleau dacă funcționează — inclusiv când nu funcționează.
            </p>
            <div className="mt-6">
              <LinkButton href="/contact" variant="outline" size="sm">
                Întreabă despre potrivire
              </LinkButton>
            </div>
            <p className="mt-6 border-t border-line pt-5 text-[0.82rem] leading-relaxed text-ink/70">
              Vezi și{" "}
              <Link href="/livrare-si-retur" className="link-underline text-burgundy">
                livrare și retur
              </Link>{" "}
              dacă o piesă nu cade cum sperai.
            </p>
          </div>
        </Reveal>
      </Container>
    </>
  );
}
