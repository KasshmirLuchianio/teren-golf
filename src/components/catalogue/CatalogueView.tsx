"use client";

import { AnimatePresence, motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/product/ProductCard";
import FilterPanel, {
  countActive,
  emptyFilters,
  type Filters,
  type PriceBand,
} from "./FilterPanel";
import { matchesMaterial, products, type Product } from "@/lib/products";

type SortKey = "newest" | "price-asc" | "price-desc" | "recently-sold" | "favourites";

const sortOptions: { value: SortKey; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price, low to high" },
  { value: "price-desc", label: "Price, high to low" },
  { value: "recently-sold", label: "Recently sold" },
  { value: "favourites", label: "Ileana’s favourites" },
];

function inBand(price: number, band: PriceBand): boolean {
  if (band === "0-200") return price < 200;
  if (band === "200-400") return price >= 200 && price < 400;
  if (band === "400-600") return price >= 400 && price < 600;
  return price >= 600;
}

function applyFilters(list: Product[], filters: Filters): Product[] {
  return list.filter((p) => {
    if (filters.category.length && !filters.category.includes(p.category)) return false;
    if (filters.size.length && !filters.size.includes(p.size)) return false;
    if (filters.brand.length && !filters.brand.includes(p.brand)) return false;
    if (filters.colour.length && !filters.colour.includes(p.colour)) return false;
    if (filters.condition.length && !filters.condition.includes(p.condition)) return false;
    if (filters.material.length && !filters.material.some((m) => matchesMaterial(p, m))) return false;
    if (filters.price.length && !filters.price.some((band) => inBand(p.price, band))) return false;
    if (filters.vintageOnly && !p.vintage) return false;
    if (filters.availableOnly && p.sold) return false;
    if (!filters.includeSold && p.sold) return false;
    if (filters.newlyAdded && p.addedDaysAgo > 7) return false;
    return true;
  });
}

function applySort(list: Product[], sort: SortKey): Product[] {
  const sorted = [...list];
  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "recently-sold":
      return sorted.sort(
        (a, b) => Number(b.sold) - Number(a.sold) || a.addedDaysAgo - b.addedDaysAgo,
      );
    case "favourites":
      return sorted.sort(
        (a, b) => Number(b.favourite) - Number(a.favourite) || a.addedDaysAgo - b.addedDaysAgo,
      );
    default:
      return sorted.sort((a, b) => a.addedDaysAgo - b.addedDaysAgo);
  }
}

export default function CatalogueView() {
  const params = useSearchParams();
  const [filters, setFilters] = useState<Filters>(emptyFilters);
  const [sort, setSort] = useState<SortKey>("newest");
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Seed from the link that brought the visitor here (?category=…&sort=…).
  useEffect(() => {
    const category = params.get("category");
    const sortParam = params.get("sort") as SortKey | null;
    setFilters((current) => ({
      ...current,
      category: category ? [category] : [],
    }));
    if (sortParam && sortOptions.some((o) => o.value === sortParam)) setSort(sortParam);
  }, [params]);

  useEffect(() => {
    if (!drawerOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [drawerOpen]);

  const visible = useMemo(() => applySort(applyFilters(products, filters), sort), [filters, sort]);
  const activeCount = countActive(filters);

  return (
    <Container className="py-10 sm:py-14">
      <header className="border-b border-line pb-8">
        <span className="label flex items-center gap-3 text-warmgrey">
          <span aria-hidden="true" className="inline-block h-px w-8 bg-line-strong" />
          The collection
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl md:text-[2.75rem]">Every piece currently chosen</h1>
        <p className="mt-4 max-w-[56ch] text-[0.95rem] leading-relaxed text-ink/75">
          Each garment is examined, measured and described by hand before it appears here. Nothing is
          listed twice, because nothing exists twice.
        </p>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-14">
        {/* desktop filters */}
        <aside className="hidden lg:block">
          <div className="sticky top-44">
            <div className="flex items-baseline justify-between border-b border-charcoal/25 pb-3">
              <h2 className="label text-charcoal">Filter</h2>
              {activeCount > 0 ? (
                <button
                  type="button"
                  onClick={() => setFilters(emptyFilters)}
                  className="label text-[0.58rem] text-burgundy underline underline-offset-4"
                >
                  Clear ({activeCount})
                </button>
              ) : null}
            </div>
            <div className="scroll-slim max-h-[calc(100vh-16rem)] overflow-y-auto pr-1">
              <FilterPanel filters={filters} setFilters={setFilters} />
            </div>
          </div>
        </aside>

        <div>
          {/* toolbar */}
          <div className="flex items-center justify-between gap-4 border-b border-line pb-4">
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="label inline-flex items-center gap-2.5 border border-charcoal/35 px-4 py-2.5 text-[0.62rem] text-charcoal transition-colors hover:border-charcoal lg:hidden"
            >
              <SlidersHorizontal size={14} strokeWidth={1.4} aria-hidden="true" />
              Filter{activeCount > 0 ? ` (${activeCount})` : ""}
            </button>

            <p className="label hidden text-warmgrey lg:block" aria-live="polite">
              {visible.length} {visible.length === 1 ? "piece" : "pieces"}
            </p>

            <div className="flex items-center gap-3">
              <label htmlFor="sort" className="label hidden text-[0.6rem] text-warmgrey sm:block">
                Sort by
              </label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="label border border-charcoal/25 bg-transparent px-3 py-2.5 text-[0.62rem] text-charcoal transition-colors hover:border-charcoal focus:outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <p className="label mt-4 text-warmgrey lg:hidden" aria-live="polite">
            {visible.length} {visible.length === 1 ? "piece" : "pieces"}
          </p>

          {/* grid */}
          {visible.length === 0 ? (
            <div className="border border-line bg-cream/60 px-8 py-20 text-center">
              <p className="font-serif text-2xl text-charcoal">Nothing matches those filters.</p>
              <p className="mx-auto mt-3 max-w-[42ch] text-[0.9rem] leading-relaxed text-ink/70">
                The selection is small by design. Loosen a filter, or write to Ileana and describe what
                you are looking for.
              </p>
              <button
                type="button"
                onClick={() => setFilters(emptyFilters)}
                className="label mt-7 border border-charcoal/35 px-6 py-3 text-[0.64rem] text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal hover:text-ivory"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <ul className="mt-8 grid grid-cols-2 gap-x-5 gap-y-12 sm:gap-x-7 lg:grid-cols-3 lg:gap-x-8">
              {visible.map((product, i) => (
                <li key={product.slug}>
                  <ProductCard product={product} index={i} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* mobile filter drawer */}
      <AnimatePresence>
        {drawerOpen ? (
          <div className="fixed inset-0 z-[60] lg:hidden">
            <motion.div
              className="absolute inset-0 bg-charcoal/35"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              className="absolute inset-y-0 left-0 flex w-[88%] max-w-sm flex-col border-r border-line-strong bg-ivory"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="Filters"
            >
              <div className="flex items-center justify-between border-b border-line px-5 py-5">
                <h2 className="label text-charcoal">Filter</h2>
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 text-charcoal/70 transition-colors hover:text-burgundy"
                  aria-label="Close filters"
                >
                  <X size={20} strokeWidth={1.3} />
                </button>
              </div>

              <div className="scroll-slim flex-1 overflow-y-auto px-5">
                <FilterPanel filters={filters} setFilters={setFilters} />
              </div>

              <div className="flex items-center gap-3 border-t border-line px-5 py-5">
                <button
                  type="button"
                  onClick={() => setFilters(emptyFilters)}
                  className="label flex-1 border border-charcoal/35 px-4 py-3 text-[0.62rem] text-charcoal"
                >
                  Clear
                </button>
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  className="label flex-1 bg-charcoal px-4 py-3 text-[0.62rem] text-ivory"
                >
                  Show {visible.length}
                </button>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </Container>
  );
}
