"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import Placeholder from "@/components/ui/Placeholder";
import { formatPrice } from "@/lib/products";
import { searchProducts } from "@/lib/search";
import { useShop } from "@/lib/store";

const suggestions = [
  "Wool blazer",
  "Silk blouse",
  "Burgundy dress",
  "Trench coat",
  "Leather bag",
  "Under 300",
];

export default function SearchOverlay() {
  const { overlay, closeOverlay } = useShop();
  const open = overlay === "search";
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      const id = window.setTimeout(() => inputRef.current?.focus(), 120);
      return () => window.clearTimeout(id);
    }
  }, [open]);

  const results = useMemo(() => searchProducts(query, 6), [query]);

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

          <motion.div
            className="scroll-slim absolute inset-x-0 top-0 max-h-[92vh] overflow-y-auto border-b border-line-strong bg-ivory"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Search the collection"
          >
            <div className="mx-auto max-w-3xl px-5 py-8 sm:px-8 sm:py-12">
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <span className="label text-warmgrey">Search the selection</span>
                  <label htmlFor="site-search" className="sr-only">
                    Search for a piece
                  </label>
                  <div className="mt-4 flex items-center gap-3 border-b border-charcoal/40 pb-3">
                    <Search size={19} strokeWidth={1.3} className="text-warmgrey" aria-hidden="true" />
                    <input
                      id="site-search"
                      ref={inputRef}
                      type="search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="A wool blazer, size M…"
                      className="w-full bg-transparent font-serif text-xl text-charcoal placeholder:text-warmgrey/70 focus:outline-none sm:text-2xl"
                      autoComplete="off"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closeOverlay}
                  className="mt-1 p-2 text-charcoal/70 transition-colors hover:text-burgundy"
                  aria-label="Close search"
                >
                  <X size={20} strokeWidth={1.3} />
                </button>
              </div>

              {query.trim().length === 0 ? (
                <div className="mt-8">
                  <span className="label text-warmgrey">Often searched</span>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {suggestions.map((s) => (
                      <li key={s}>
                        <button
                          type="button"
                          onClick={() => setQuery(s)}
                          className="border border-line-strong px-4 py-2 text-[0.8rem] text-ink/80 transition-colors hover:border-charcoal hover:text-charcoal"
                        >
                          {s}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : results.length === 0 ? (
                <p className="mt-8 font-serif text-lg text-ink/70">
                  Nothing in the current selection matches that. New pieces are added every week — the
                  wishlist is the surest way to be told first.
                </p>
              ) : (
                <ul aria-live="polite" className="mt-8 divide-y divide-line/70">
                  {results.map((result, i) => (
                    <li key={result.product.slug}>
                      <Link
                        href={`/products/${result.product.slug}`}
                        onClick={closeOverlay}
                        className="flex items-center gap-5 py-4 transition-colors hover:bg-cream/60"
                      >
                        <span className="w-16 shrink-0">
                          <Placeholder label="Piece" tone={result.product.tone} motif={i} />
                        </span>
                        <span className="flex-1">
                          <span className="label block text-[0.6rem] text-warmgrey">
                            {result.product.brand}
                          </span>
                          <span className="mt-1 block font-serif text-lg leading-snug text-charcoal">
                            {result.product.name}
                          </span>
                          <span className="mt-0.5 block text-[0.78rem] text-warmgrey">
                            Size {result.product.size} · {result.product.category}
                          </span>
                        </span>
                        <span className="text-sm text-charcoal">
                          {result.product.sold ? "Sold" : formatPrice(result.product.price)}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
