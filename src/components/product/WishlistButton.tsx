"use client";

import { Heart } from "lucide-react";
import { useShop } from "@/lib/store";

export default function WishlistButton({
  slug,
  name,
  className = "",
  withLabel = false,
}: {
  slug: string;
  name: string;
  className?: string;
  withLabel?: boolean;
}) {
  const { isWishlisted, toggleWishlist } = useShop();
  const active = isWishlisted(slug);

  return (
    <button
      type="button"
      onClick={() => toggleWishlist(slug)}
      aria-pressed={active}
      aria-label={active ? `Scoate ${name} de la favorite` : `Salvează ${name} la favorite`}
      className={`inline-flex items-center gap-2.5 transition-colors duration-300 ${
        active ? "text-burgundy" : "text-charcoal/60 hover:text-burgundy"
      } ${className}`}
    >
      <Heart size={17} strokeWidth={1.3} fill={active ? "currentColor" : "none"} />
      {withLabel ? (
        <span className="label text-[0.65rem]">{active ? "Salvată" : "Salvează piesa"}</span>
      ) : null}
    </button>
  );
}
