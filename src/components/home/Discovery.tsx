"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState, type FormEvent } from "react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ProductCard from "@/components/product/ProductCard";
import { products, type Product } from "@/lib/products";
import { searchProducts } from "@/lib/search";

type Option = {
  label: string;
  query: string;
  /** Câteva opțiuni se exprimă mai bine ca regulă decât ca frază de căutare. */
  resolve?: () => Product[];
};

const options: Option[] = [
  { label: "Un sacou în stil franțuzesc", query: "sacou" },
  { label: "O rochie pentru o ocazie", query: "rochie seară crep" },
  { label: "Un palton din lână", query: "palton lână" },
  { label: "O geantă vintage", query: "geantă piele" },
  {
    label: "Piese sub 150 de lei",
    query: "sub 150",
    resolve: () => products.filter((p) => p.price <= 150 && !p.sold),
  },
  {
    label: "Case de modă mari",
    query: "case de modă",
    resolve: () =>
      products.filter((p) => p.price >= 500 && !p.sold).sort((a, b) => b.price - a.price),
  },
];

export default function Discovery() {
  const [active, setActive] = useState<Option | null>(null);
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState("");

  const results = useMemo(() => {
    if (submitted.trim()) return searchProducts(submitted, 4).map((r) => r.product);
    if (active?.resolve) return active.resolve().slice(0, 4);
    if (active) return searchProducts(active.query, 4).map((r) => r.product);
    return [];
  }, [active, submitted]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setActive(null);
    setSubmitted(input);
  }

  const heading = submitted.trim()
    ? `Pentru „${submitted.trim()}”`
    : active
      ? active.label
      : null;

  return (
    <section className="border-y border-line bg-cream py-20 sm:py-28" aria-labelledby="discovery-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <span className="label flex items-center gap-3 text-warmgrey">
              <span aria-hidden="true" className="inline-block h-px w-8 bg-line-strong" />
              Căutare personală
            </span>
            <h2 id="discovery-title" className="mt-4 text-3xl sm:text-4xl md:text-[2.6rem]">
              Ce cauți astăzi?
            </h2>
            <p className="mt-6 max-w-[46ch] text-[0.95rem] leading-relaxed text-ink/75">
              Spune cu cuvintele tale, așa cum i-ai spune Ilenei în atelier. Este o primă schiță a
              căutării pe care o construim — citește fraza și îți propune din selecția de acum.
            </p>

            <form onSubmit={onSubmit} className="mt-9" role="search">
              <label htmlFor="discovery-input" className="label text-warmgrey">
                Descrie piesa
              </label>
              <div className="mt-3 flex items-center gap-3 border-b border-charcoal/40 pb-3 focus-within:border-charcoal">
                <Search size={18} strokeWidth={1.3} className="shrink-0 text-warmgrey" aria-hidden="true" />
                <input
                  id="discovery-input"
                  type="search"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Caut o rochie neagră elegantă, mărimea M…"
                  className="w-full bg-transparent font-serif text-lg text-charcoal placeholder:text-warmgrey/75 focus:outline-none sm:text-xl"
                />
              </div>
              <button
                type="submit"
                className="label mt-5 bg-charcoal px-6 py-3 text-[0.68rem] text-ivory transition-colors hover:bg-burgundy"
              >
                Arată-mi
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.08}>
            <span className="label text-warmgrey">Sau pornește de aici</span>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {options.map((option) => {
                const isActive = active?.label === option.label;
                return (
                  <li key={option.label}>
                    <button
                      type="button"
                      onClick={() => {
                        setActive(isActive ? null : option);
                        setSubmitted("");
                      }}
                      aria-pressed={isActive}
                      className={`border px-4 py-2.5 text-[0.82rem] transition-colors duration-300 ${
                        isActive
                          ? "border-charcoal bg-charcoal text-ivory"
                          : "border-line-strong text-ink/80 hover:border-charcoal hover:text-charcoal"
                      }`}
                    >
                      {option.label}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 min-h-[120px]">
              <AnimatePresence mode="wait">
                {heading ? (
                  <motion.div
                    key={heading}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
                      <h3 className="font-serif text-lg text-charcoal">{heading}</h3>
                      <span className="label text-[0.6rem] text-warmgrey">
                        {results.length} {results.length === 1 ? "piesă" : "piese"}
                      </span>
                    </div>

                    {results.length > 0 ? (
                      <ul className="mt-7 grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-4">
                        {results.map((product, i) => (
                          <li key={product.slug}>
                            <ProductCard product={product} index={i} compact />
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-6 max-w-[44ch] font-serif text-base italic leading-relaxed text-ink/70">
                        Nimic potrivit chiar acum. Spune-i Ilenei ce cauți și va fi cu ochii pe asta —{" "}
                        <Link href="/contact" className="link-underline not-italic text-burgundy">
                          trimite o cerere
                        </Link>
                        .
                      </p>
                    )}
                  </motion.div>
                ) : (
                  <motion.p
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="max-w-[46ch] font-serif text-base italic leading-relaxed text-ink/60"
                  >
                    „Majoritatea femeilor vin știind ce senzație vor, nu ce etichetă. E un punct de
                    pornire mai bun.”
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
