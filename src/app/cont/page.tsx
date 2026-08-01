"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";
import { formatPrice, products } from "@/lib/products";
import { useShop } from "@/lib/store";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const mockOrders = [
  {
    reference: "IG-2401",
    date: "12 martie",
    status: "Livrată",
    slug: "cardigan-casmir",
  },
  {
    reference: "IG-2388",
    date: "2 februarie",
    status: "Livrată",
    slug: "esarfa-matase-carre",
  },
];

const fieldClass =
  "mt-2 w-full border-b border-charcoal/30 bg-transparent px-1 py-3 text-[0.95rem] text-charcoal placeholder:text-warmgrey/70 transition-colors focus:border-charcoal focus:outline-none";

export default function AccountPage() {
  const { wishlist, bag } = useShop();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [signedIn, setSignedIn] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!EMAIL.test(email.trim())) {
      setError("Introdu o adresă de e-mail validă.");
      return;
    }
    setError(null);
    setSignedIn(true);
  }

  return (
    <>
      <PageHeader
        eyebrow="Cont"
        title={signedIn ? "Bine ai venit" : "Contul tău"}
        lead={
          signedIn
            ? "O demonstrație a zonei de cont: comenzi anterioare, piese salvate și datele pe care le-am păstra."
            : "Autentifică-te ca să urmărești o comandă, să-ți păstrezi măsurătorile și să afli prima când apare o piesă pe mărimea ta."
        }
      />

      <Container className="py-14 sm:py-20">
        {!signedIn ? (
          <div className="mx-auto max-w-md">
            <form onSubmit={onSubmit} noValidate className="border border-line bg-cream p-8">
              <h2 className="font-serif text-2xl">Autentificare</h2>
              <p className="mt-2 text-[0.85rem] leading-relaxed text-ink/70">
                În acest prototip nu e nevoie de parolă — o adresă de e-mail e de ajuns ca să vezi
                zona de cont.
              </p>

              <div className="mt-7">
                <label htmlFor="account-email" className="label text-warmgrey">
                  Adresă de e-mail
                </label>
                <input
                  id="account-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="adresa@ta.ro"
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? "account-error" : undefined}
                  className={`${fieldClass} ${error ? "border-burgundy" : ""}`}
                />
                {error ? (
                  <p id="account-error" role="alert" className="mt-2 text-[0.8rem] text-burgundy">
                    {error}
                  </p>
                ) : null}
              </div>

              <Button type="submit" size="lg" className="mt-7 w-full">
                Continuă
              </Button>

              <p className="mt-5 text-[0.75rem] leading-relaxed text-warmgrey">
                Demonstrație front-end. Nu se trimite, nu se verifică și nu se salvează nimic.
              </p>
            </form>
          </div>
        ) : (
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <aside>
              <div className="border border-line bg-cream p-7">
                <span className="label text-[0.58rem] text-warmgrey">Autentificată ca</span>
                <p className="mt-2 break-words font-serif text-lg text-charcoal">{email}</p>

                <dl className="mt-7 space-y-3 border-t border-line pt-5 text-[0.88rem]">
                  <div className="flex justify-between">
                    <dt className="text-ink/70">Piese salvate</dt>
                    <dd className="text-charcoal">{wishlist.length}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-ink/70">În coș</dt>
                    <dd className="text-charcoal">{bag.length}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-ink/70">Comenzi</dt>
                    <dd className="text-charcoal">{mockOrders.length}</dd>
                  </div>
                </dl>

                <button
                  type="button"
                  onClick={() => setSignedIn(false)}
                  className="label mt-7 w-full border border-charcoal/35 px-4 py-3 text-[0.62rem] text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal hover:text-ivory"
                >
                  Deconectare
                </button>
              </div>
            </aside>

            <div>
              <section aria-labelledby="orders-title">
                <h2 id="orders-title" className="label border-b border-line pb-3 text-charcoal">
                  Comenzi anterioare
                </h2>
                <ul className="divide-y divide-line">
                  {mockOrders.map((order) => {
                    const product = products.find((p) => p.slug === order.slug);
                    if (!product) return null;
                    return (
                      <li key={order.reference} className="flex flex-wrap items-baseline gap-x-6 gap-y-2 py-5">
                        <span className="label text-[0.6rem] text-warmgrey">{order.reference}</span>
                        <Link
                          href={`/produse/${product.slug}`}
                          className="link-underline flex-1 font-serif text-lg text-charcoal"
                        >
                          {product.brand} — {product.name}
                        </Link>
                        <span className="text-[0.82rem] text-warmgrey">{order.date}</span>
                        <span className="label text-[0.58rem] text-olive-deep">{order.status}</span>
                        <span className="text-[0.9rem] text-charcoal">{formatPrice(product.price)}</span>
                      </li>
                    );
                  })}
                </ul>
              </section>

              <section aria-labelledby="details-title" className="mt-14">
                <h2 id="details-title" className="label border-b border-line pb-3 text-charcoal">
                  Datele tale
                </h2>
                <div className="mt-6 grid gap-7 sm:grid-cols-2">
                  <div>
                    <label htmlFor="acc-name" className="label text-warmgrey">
                      Nume
                    </label>
                    <input id="acc-name" type="text" placeholder="Maria Popescu" className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="acc-phone" className="label text-warmgrey">
                      Telefon
                    </label>
                    <input id="acc-phone" type="tel" placeholder="+40 …" className={fieldClass} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="acc-address" className="label text-warmgrey">
                      Adresă de livrare
                    </label>
                    <input
                      id="acc-address"
                      type="text"
                      placeholder="Stradă, număr, oraș, județ"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="acc-size" className="label text-warmgrey">
                      Mărimea obișnuită
                    </label>
                    <input id="acc-size" type="text" placeholder="M / 40" className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="acc-notes" className="label text-warmgrey">
                      Note pentru Ileana
                    </label>
                    <input
                      id="acc-notes"
                      type="text"
                      placeholder="Brațe lungi, prefer o mânecă mai amplă…"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <Button className="mt-8" size="lg">
                  Salvează datele
                </Button>
                <p className="mt-4 text-[0.75rem] text-warmgrey">
                  Câmpuri demonstrative — deocamdată nu se salvează nimic.
                </p>
              </section>
            </div>
          </div>
        )}
      </Container>
    </>
  );
}
