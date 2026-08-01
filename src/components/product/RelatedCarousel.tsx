"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import type { Product } from "@/lib/products";

export default function RelatedCarousel({
  products,
  title = "Ți-ar putea plăcea și",
  lead,
}: {
  products: Product[];
  title?: string;
  lead?: string;
}) {
  const track = useRef<HTMLUListElement>(null);

  function scrollBy(direction: 1 | -1) {
    const el = track.current;
    if (!el) return;
    const step = el.clientWidth * 0.6;
    el.scrollBy({ left: step * direction, behavior: "smooth" });
  }

  return (
    <section aria-labelledby="related-title">
      <div className="flex items-end justify-between gap-6 border-b border-line pb-5">
        <div>
          <span className="label flex items-center gap-3 text-warmgrey">
            <span aria-hidden="true" className="inline-block h-px w-8 bg-line-strong" />
            Continuă să cauți
          </span>
          <h2 id="related-title" className="mt-3 text-2xl sm:text-3xl">
            {title}
          </h2>
          {lead ? <p className="mt-2 max-w-[48ch] text-[0.88rem] text-ink/70">{lead}</p> : null}
        </div>

        <div className="hidden shrink-0 gap-px sm:flex">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            className="border border-line-strong p-3 text-charcoal/70 transition-colors hover:border-charcoal hover:text-charcoal"
aria-label="Piesele anterioare"
          >
            <ChevronLeft size={17} strokeWidth={1.4} />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            className="border border-line-strong p-3 text-charcoal/70 transition-colors hover:border-charcoal hover:text-charcoal"
aria-label="Piesele următoare"
          >
            <ChevronRight size={17} strokeWidth={1.4} />
          </button>
        </div>
      </div>

      <ul
        ref={track}
        className="scroll-slim mt-9 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 sm:gap-7"
      >
        {products.map((product, i) => (
          <li
            key={product.slug}
            className="w-[62%] shrink-0 snap-start sm:w-[38%] lg:w-[23%]"
          >
            <ProductCard product={product} index={i} compact />
          </li>
        ))}
      </ul>
    </section>
  );
}
