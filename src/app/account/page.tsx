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
    date: "12 March",
    status: "Delivered",
    slug: "cashmere-cardigan",
  },
  {
    reference: "IG-2388",
    date: "2 February",
    status: "Delivered",
    slug: "silk-scarf-carre",
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
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    setSignedIn(true);
  }

  return (
    <>
      <PageHeader
        eyebrow="Account"
        title={signedIn ? "Bonjour" : "Your account"}
        lead={
          signedIn
            ? "A demonstration of the account area: past orders, saved pieces, and the details we would keep on file."
            : "Sign in to follow an order, keep your measurements on file, and be told first when a piece in your size arrives."
        }
      />

      <Container className="py-14 sm:py-20">
        {!signedIn ? (
          <div className="mx-auto max-w-md">
            <form onSubmit={onSubmit} noValidate className="border border-line bg-cream p-8">
              <h2 className="font-serif text-2xl">Sign in</h2>
              <p className="mt-2 text-[0.85rem] leading-relaxed text-ink/70">
                No password needed in this prototype — an email address is enough to see the account
                area.
              </p>

              <div className="mt-7">
                <label htmlFor="account-email" className="label text-warmgrey">
                  Email address
                </label>
                <input
                  id="account-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="your@email.com"
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
                Continue
              </Button>

              <p className="mt-5 text-[0.75rem] leading-relaxed text-warmgrey">
                Front-end demonstration. Nothing is sent, verified or stored.
              </p>
            </form>
          </div>
        ) : (
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <aside>
              <div className="border border-line bg-cream p-7">
                <span className="label text-[0.58rem] text-warmgrey">Signed in as</span>
                <p className="mt-2 break-words font-serif text-lg text-charcoal">{email}</p>

                <dl className="mt-7 space-y-3 border-t border-line pt-5 text-[0.88rem]">
                  <div className="flex justify-between">
                    <dt className="text-ink/70">Saved pieces</dt>
                    <dd className="text-charcoal">{wishlist.length}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-ink/70">In your bag</dt>
                    <dd className="text-charcoal">{bag.length}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-ink/70">Orders</dt>
                    <dd className="text-charcoal">{mockOrders.length}</dd>
                  </div>
                </dl>

                <button
                  type="button"
                  onClick={() => setSignedIn(false)}
                  className="label mt-7 w-full border border-charcoal/35 px-4 py-3 text-[0.62rem] text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal hover:text-ivory"
                >
                  Sign out
                </button>
              </div>
            </aside>

            <div>
              <section aria-labelledby="orders-title">
                <h2 id="orders-title" className="label border-b border-line pb-3 text-charcoal">
                  Past orders
                </h2>
                <ul className="divide-y divide-line">
                  {mockOrders.map((order) => {
                    const product = products.find((p) => p.slug === order.slug);
                    if (!product) return null;
                    return (
                      <li key={order.reference} className="flex flex-wrap items-baseline gap-x-6 gap-y-2 py-5">
                        <span className="label text-[0.6rem] text-warmgrey">{order.reference}</span>
                        <Link
                          href={`/products/${product.slug}`}
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
                  Your details
                </h2>
                <div className="mt-6 grid gap-7 sm:grid-cols-2">
                  <div>
                    <label htmlFor="acc-name" className="label text-warmgrey">
                      Name
                    </label>
                    <input id="acc-name" type="text" placeholder="Maria Popescu" className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="acc-phone" className="label text-warmgrey">
                      Telephone
                    </label>
                    <input id="acc-phone" type="tel" placeholder="+40 …" className={fieldClass} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="acc-address" className="label text-warmgrey">
                      Delivery address
                    </label>
                    <input
                      id="acc-address"
                      type="text"
                      placeholder="Street, number, city, county"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="acc-size" className="label text-warmgrey">
                      Usual size
                    </label>
                    <input id="acc-size" type="text" placeholder="M / 40" className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="acc-notes" className="label text-warmgrey">
                      Notes for Ileana
                    </label>
                    <input
                      id="acc-notes"
                      type="text"
                      placeholder="Long arms, prefers a fuller sleeve…"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <Button className="mt-8" size="lg">
                  Save details
                </Button>
                <p className="mt-4 text-[0.75rem] text-warmgrey">
                  Prototype fields — nothing is saved at this stage.
                </p>
              </section>
            </div>
          </div>
        )}
      </Container>
    </>
  );
}
