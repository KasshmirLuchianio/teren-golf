"use client";

/**
 * Front-end only shop state: wishlist, bag and the overlays that belong to the
 * header. Everything lives in React state and is mirrored to localStorage so a
 * demo survives a page reload. There is no backend at this stage.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { products, type Product } from "./products";

type Overlay = "menu" | "bag" | "search" | null;

type ShopState = {
  wishlist: string[];
  bag: string[];
  overlay: Overlay;
  toggleWishlist: (slug: string) => void;
  isWishlisted: (slug: string) => boolean;
  addToBag: (slug: string) => void;
  removeFromBag: (slug: string) => void;
  openOverlay: (o: Exclude<Overlay, null>) => void;
  closeOverlay: () => void;
  bagProducts: Product[];
  wishlistProducts: Product[];
  bagTotal: number;
  /** Set when a piece is added, so the drawer can confirm it discreetly. */
  lastAdded: string | null;
};

const ShopContext = createContext<ShopState | null>(null);

const WISHLIST_KEY = "ig.wishlist";
const BAG_KEY = "ig.bag";

function read(key: string): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((s) => typeof s === "string") : [];
  } catch {
    return [];
  }
}

export function ShopProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [bag, setBag] = useState<string[]>([]);
  const [overlay, setOverlay] = useState<Overlay>(null);
  const [lastAdded, setLastAdded] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  // Read persisted state after mount so server and client markup match.
  useEffect(() => {
    setWishlist(read(WISHLIST_KEY));
    setBag(read(BAG_KEY));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist, hydrated]);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem(BAG_KEY, JSON.stringify(bag));
  }, [bag, hydrated]);

  const toggleWishlist = useCallback((slug: string) => {
    setWishlist((current) =>
      current.includes(slug) ? current.filter((s) => s !== slug) : [...current, slug],
    );
  }, []);

  const isWishlisted = useCallback((slug: string) => wishlist.includes(slug), [wishlist]);

  const addToBag = useCallback((slug: string) => {
    // Every piece exists in a single example, so the bag holds it only once.
    setBag((current) => (current.includes(slug) ? current : [...current, slug]));
    setLastAdded(slug);
    setOverlay("bag");
  }, []);

  const removeFromBag = useCallback((slug: string) => {
    setBag((current) => current.filter((s) => s !== slug));
  }, []);

  const openOverlay = useCallback((o: Exclude<Overlay, null>) => setOverlay(o), []);
  const closeOverlay = useCallback(() => setOverlay(null), []);

  // Lock the page behind any open overlay.
  useEffect(() => {
    if (!overlay) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOverlay(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [overlay]);

  const bagProducts = useMemo(
    () => bag.map((slug) => products.find((p) => p.slug === slug)).filter(Boolean) as Product[],
    [bag],
  );

  const wishlistProducts = useMemo(
    () => wishlist.map((slug) => products.find((p) => p.slug === slug)).filter(Boolean) as Product[],
    [wishlist],
  );

  const bagTotal = useMemo(
    () => bagProducts.reduce((sum, p) => sum + p.price, 0),
    [bagProducts],
  );

  const value: ShopState = {
    wishlist,
    bag,
    overlay,
    toggleWishlist,
    isWishlisted,
    addToBag,
    removeFromBag,
    openOverlay,
    closeOverlay,
    bagProducts,
    wishlistProducts,
    bagTotal,
    lastAdded,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop(): ShopState {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used inside ShopProvider");
  return ctx;
}
