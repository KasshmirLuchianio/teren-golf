"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Heart, Menu, Search, ShoppingBag, User } from "lucide-react";
import Wordmark from "./Wordmark";
import { primaryNav } from "@/lib/navigation";
import { useShop } from "@/lib/store";

function CountBadge({ count }: { count: number }) {
  if (count === 0) return null;
  return (
    <span className="absolute -right-2 -top-1.5 min-w-[1.05rem] bg-burgundy px-1 py-px text-center font-sans text-[0.6rem] leading-[1.05rem] text-ivory">
      {count}
    </span>
  );
}

export default function Header() {
  const pathname = usePathname();
  const { openOverlay, wishlist, bag } = useShop();
  const [condensed, setCondensed] = useState(false);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const iconButton =
    "relative p-2 text-charcoal/75 transition-colors duration-300 hover:text-burgundy";

  return (
    <header
      className={`sticky top-0 z-50 border-b border-line bg-ivory/92 backdrop-blur-[6px] transition-[padding] duration-500 ${
        condensed ? "py-0" : "py-1.5 sm:py-3"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-3 sm:px-8">
        {/* left */}
        <div className="flex flex-1 items-center gap-1">
          <button
            type="button"
            className={`${iconButton} lg:hidden`}
            onClick={() => openOverlay("menu")}
            aria-label="Deschide meniul"
          >
            <Menu size={20} strokeWidth={1.3} />
          </button>

          <button
            type="button"
            className={`${iconButton} hidden lg:inline-flex`}
            onClick={() => openOverlay("search")}
            aria-label="Caută în colecție"
          >
            <Search size={19} strokeWidth={1.3} />
          </button>
        </div>

        {/* centre */}
        <Wordmark size={condensed ? "sm" : "md"} withTagline={!condensed} className="shrink-0" />

        {/* right */}
        <div className="flex flex-1 items-center justify-end gap-0.5">
          <button
            type="button"
            className={`${iconButton} lg:hidden`}
            onClick={() => openOverlay("search")}
            aria-label="Caută în colecție"
          >
            <Search size={19} strokeWidth={1.3} />
          </button>

          <Link href="/favorite" className={`${iconButton} hidden sm:inline-flex`} aria-label="Favorite">
            <Heart size={19} strokeWidth={1.3} />
            <CountBadge count={wishlist.length} />
          </Link>

          <Link href="/cont" className={`${iconButton} hidden sm:inline-flex`} aria-label="Contul meu">
            <User size={19} strokeWidth={1.3} />
          </Link>

          <button
            type="button"
            className={iconButton}
            onClick={() => openOverlay("bag")}
            aria-label={`Coș, ${bag.length} ${bag.length === 1 ? "piesă" : "piese"}`}
          >
            <ShoppingBag size={19} strokeWidth={1.3} />
            <CountBadge count={bag.length} />
          </button>
        </div>
      </div>

      {/* desktop navigation */}
      <nav
        aria-label="Principal"
        className={`hidden overflow-hidden border-t border-line/70 transition-all duration-500 lg:block ${
          condensed ? "max-h-0 opacity-0" : "max-h-16 opacity-100"
        }`}
      >
        <ul className="mx-auto flex max-w-[1400px] items-center justify-center gap-8 px-8 py-3.5">
          {primaryNav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href.split("?")[0]);
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`label link-underline text-[0.68rem] transition-colors ${
                    active ? "text-burgundy" : "text-charcoal/80 hover:text-charcoal"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
