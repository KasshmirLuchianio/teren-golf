"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Placeholder from "@/components/ui/Placeholder";
import WishlistButton from "@/components/product/WishlistButton";
import { formatPrice, type Product } from "@/lib/products";

export default function ProductCard({
  product,
  index = 0,
  compact = false,
}: {
  product: Product;
  index?: number;
  compact?: boolean;
}) {
  const reduce = useReducedMotion();
  const isNew = product.addedDaysAgo <= 2 && !product.sold;

  return (
    <motion.article
      className="group relative"
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: Math.min(index, 7) * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative overflow-hidden">
        <Link
          href={`/products/${product.slug}`}
          className="block"
          aria-label={`${product.brand} — ${product.name}`}
          tabIndex={-1}
        >
          <div className="transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.015]">
            <Placeholder
              label="Product image"
              tone={product.tone}
              variant="product"
              motif={index + product.name.length}
            />
          </div>
        </Link>

        {/* status marks */}
        <div className="pointer-events-none absolute left-0 top-0 flex flex-col items-start gap-px">
          {product.sold ? (
            <span className="label bg-charcoal px-3 py-1.5 text-[0.6rem] text-ivory">Sold</span>
          ) : isNew ? (
            <span className="label bg-burgundy px-3 py-1.5 text-[0.6rem] text-ivory">Just added</span>
          ) : null}
        </div>

        <div className="absolute right-3 top-3">
          <WishlistButton
            slug={product.slug}
            name={product.name}
            className="bg-ivory/85 p-2 backdrop-blur-[1px]"
          />
        </div>

        {/* hover invitation, held back until the card is approached */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
          <div className="bg-ivory/92 px-4 py-3 text-center backdrop-blur-[1px]">
            <span className="label text-[0.62rem] text-charcoal">
              {product.sold ? "No longer available" : "View this piece"}
            </span>
          </div>
        </div>
      </div>

      <div className={compact ? "pt-3" : "pt-4"}>
        <div className="flex items-baseline justify-between gap-4">
          <span className="label text-[0.62rem] text-warmgrey">{product.brand}</span>
          <span className="label text-[0.6rem] text-gold">One of one</span>
        </div>

        <h3 className={`mt-1.5 leading-snug ${compact ? "text-base" : "text-lg"}`}>
          <Link
            href={`/products/${product.slug}`}
            className="link-underline decoration-1 underline-offset-4"
          >
            {product.name}
          </Link>
        </h3>

        <div className="mt-2 flex items-baseline justify-between gap-4 text-[0.8rem]">
          <span className="text-warmgrey">Size {product.size}</span>
          <span className={product.sold ? "text-warmgrey line-through" : "text-charcoal"}>
            {formatPrice(product.price)}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
