"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Placeholder from "@/components/ui/Placeholder";
import Button, { LinkButton } from "@/components/ui/Button";
import { formatPrice } from "@/lib/products";
import { useShop } from "@/lib/store";

export default function BagDrawer() {
  const { overlay, closeOverlay, bagProducts, removeFromBag, bagTotal } = useShop();
  const open = overlay === "bag";

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-[65]">
          <motion.div
            className="absolute inset-0 bg-charcoal/35"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeOverlay}
            aria-hidden="true"
          />

          <motion.aside
            className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-line-strong bg-ivory"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Coș de cumpărături"
          >
            <div className="flex items-center justify-between border-b border-line px-6 py-5">
              <div>
                <span className="label text-warmgrey">Selecția ta</span>
                <h2 className="mt-1 text-xl">Coșul tău</h2>
              </div>
              <button
                type="button"
                onClick={closeOverlay}
                className="p-2 text-charcoal/70 transition-colors hover:text-burgundy"
                aria-label="Închide coșul"
              >
                <X size={20} strokeWidth={1.3} />
              </button>
            </div>

            {bagProducts.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
                <p className="font-serif text-xl leading-snug text-charcoal">Coșul este încă gol.</p>
                <p className="max-w-[32ch] text-sm leading-relaxed text-ink/70">
                  Fiecare piesă există într-un singur exemplar, așa că o haină lăsată în așteptare e,
                  de multe ori, o haină pierdută.
                </p>
                <LinkButton href="/catalog" variant="outline" size="sm" onClick={closeOverlay}>
                  Vezi colecția
                </LinkButton>
              </div>
            ) : (
              <>
                <ul className="scroll-slim flex-1 divide-y divide-line/70 overflow-y-auto px-6">
                  {bagProducts.map((product, i) => (
                    <li key={product.slug} className="flex gap-4 py-5">
                      <Link href={`/produse/${product.slug}`} onClick={closeOverlay} className="w-24 shrink-0">
                        <Placeholder label="Piesă" tone={product.tone} motif={i} />
                      </Link>

                      <div className="flex flex-1 flex-col">
                        <span className="label text-[0.6rem] text-warmgrey">{product.brand}</span>
                        <Link
                          href={`/produse/${product.slug}`}
                          onClick={closeOverlay}
                          className="mt-1 font-serif text-base leading-snug text-charcoal hover:text-burgundy"
                        >
                          {product.name}
                        </Link>
                        <span className="mt-1 text-[0.78rem] text-warmgrey">
                          Mărimea {product.size} · {product.code}
                        </span>

                        <div className="mt-auto flex items-center justify-between pt-3">
                          <span className="text-sm text-charcoal">{formatPrice(product.price)}</span>
                          <button
                            type="button"
                            onClick={() => removeFromBag(product.slug)}
                            className="label text-[0.6rem] text-warmgrey underline underline-offset-4 transition-colors hover:text-burgundy"
                          >
                            Scoate
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-line px-6 py-6">
                  <div className="flex items-baseline justify-between">
                    <span className="label text-warmgrey">Subtotal</span>
                    <span className="font-serif text-xl text-charcoal">{formatPrice(bagTotal)}</span>
                  </div>
                  <p className="mt-2 text-[0.75rem] leading-relaxed text-ink/65">
                    Livrarea se calculează la finalizarea comenzii. Piesele sunt ținute 30 de minute cât
                    te hotărăști.
                  </p>
                  <Button className="mt-5 w-full" onClick={closeOverlay}>
                    Finalizează comanda
                  </Button>
                  <LinkButton href="/cos" variant="outline" size="sm" className="mt-2 w-full" onClick={closeOverlay}>
                    Vezi coșul complet
                  </LinkButton>
                </div>
              </>
            )}
          </motion.aside>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
