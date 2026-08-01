"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Placeholder from "@/components/ui/Placeholder";
import Button, { LinkButton } from "@/components/ui/Button";
import { formatPrice } from "@/lib/products";
import { useShop } from "@/lib/store";

const SHIPPING = 25;

export default function BagPage() {
  const { bagProducts, removeFromBag, bagTotal } = useShop();

  return (
    <>
      <PageHeader
        eyebrow="Your bag"
        title="Shopping bag"
        lead="Pieces are held while you decide, but they are not reserved until an order is placed. Everything here exists in one example only."
      />

      <Container className="py-14 sm:py-20">
        {bagProducts.length === 0 ? (
          <div className="border border-line bg-cream/60 px-8 py-20 text-center">
            <p className="font-serif text-2xl text-charcoal">Your bag is empty.</p>
            <p className="mx-auto mt-3 max-w-[42ch] text-[0.92rem] leading-relaxed text-ink/70">
              Nothing chosen yet. The collection is small — most visitors find something on the first
              pass.
            </p>
            <div className="mt-8 flex justify-center">
              <LinkButton href="/catalogue" size="lg">
                Browse the collection
              </LinkButton>
            </div>
          </div>
        ) : (
          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
            <ul className="divide-y divide-line border-y border-line">
              {bagProducts.map((product, i) => (
                <li key={product.slug} className="flex gap-5 py-7 sm:gap-8">
                  <Link href={`/products/${product.slug}`} className="w-28 shrink-0 sm:w-36">
                    <Placeholder label="Piece" tone={product.tone} motif={i} />
                  </Link>

                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <span className="label text-[0.6rem] text-warmgrey">{product.brand}</span>
                        <h2 className="mt-1.5 font-serif text-xl leading-snug">
                          <Link href={`/products/${product.slug}`} className="link-underline">
                            {product.name}
                          </Link>
                        </h2>
                        <p className="mt-2 text-[0.82rem] text-warmgrey">
                          Size {product.size} · {product.condition} · {product.code}
                        </p>
                      </div>
                      <span className="shrink-0 font-serif text-lg text-charcoal">
                        {formatPrice(product.price)}
                      </span>
                    </div>

                    <div className="mt-auto flex items-center justify-between gap-4 pt-5">
                      <span className="label text-[0.58rem] text-gold">One of one</span>
                      <button
                        type="button"
                        onClick={() => removeFromBag(product.slug)}
                        className="label text-[0.6rem] text-warmgrey underline underline-offset-4 transition-colors hover:text-burgundy"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <aside className="lg:sticky lg:top-44 lg:self-start">
              <div className="border border-line bg-cream p-7">
                <h2 className="label text-warmgrey">Summary</h2>

                <dl className="mt-6 space-y-3 text-[0.9rem]">
                  <div className="flex justify-between">
                    <dt className="text-ink/75">Subtotal</dt>
                    <dd className="text-charcoal">{formatPrice(bagTotal)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-ink/75">Shipping, Romania</dt>
                    <dd className="text-charcoal">{formatPrice(SHIPPING)}</dd>
                  </div>
                  <div className="flex justify-between border-t border-line pt-4">
                    <dt className="label text-charcoal">Total</dt>
                    <dd className="font-serif text-xl text-charcoal">
                      {formatPrice(bagTotal + SHIPPING)}
                    </dd>
                  </div>
                </dl>

                <Button className="mt-7 w-full" size="lg">
                  Continue to checkout
                </Button>

                <p className="mt-4 text-[0.75rem] leading-relaxed text-warmgrey">
                  Prototype only — no payment is taken and no order is created.
                </p>

                <p className="mt-6 border-t border-line pt-5 text-[0.82rem] leading-relaxed text-ink/70">
                  Each piece is wrapped in tissue and sent with a short note on how it was chosen. See{" "}
                  <Link href="/shipping-and-returns" className="link-underline text-burgundy">
                    shipping and returns
                  </Link>
                  .
                </p>
              </div>
            </aside>
          </div>
        )}
      </Container>
    </>
  );
}
