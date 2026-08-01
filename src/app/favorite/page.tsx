"use client";

import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import ProductCard from "@/components/product/ProductCard";
import RelatedCarousel from "@/components/product/RelatedCarousel";
import { LinkButton } from "@/components/ui/Button";
import { products } from "@/lib/products";
import { useShop } from "@/lib/store";

export default function WishlistPage() {
  const { wishlistProducts } = useShop();
  const suggestions = products.filter((p) => p.favourite && !p.sold).slice(0, 8);

  return (
    <>
      <PageHeader
        eyebrow="Salvate"
        title="Favoritele tale"
        lead="Piesele pe care le-ai pus deoparte. Fiecare există într-un singur exemplar, așa că o haină salvată nu este una rezervată — lista doar o ține la vedere."
      />

      <Container className="py-14 sm:py-20">
        {wishlistProducts.length === 0 ? (
          <div className="border border-line bg-cream/60 px-8 py-20 text-center">
            <p className="font-serif text-2xl text-charcoal">Nimic salvat încă.</p>
            <p className="mx-auto mt-3 max-w-[44ch] text-[0.92rem] leading-relaxed text-ink/70">
              Apasă inima de pe orice piesă ca să o păstrezi aici. E cel mai simplu fel de a compara
              două haine înainte să te hotărăști.
            </p>
            <div className="mt-8 flex justify-center">
              <LinkButton href="/catalog" size="lg">
                Vezi colecția
              </LinkButton>
            </div>
          </div>
        ) : (
          <>
            <p className="label border-b border-line pb-4 text-warmgrey">
              {wishlistProducts.length} {wishlistProducts.length === 1 ? "piesă salvată" : "piese salvate"}
            </p>
            <ul className="mt-10 grid grid-cols-2 gap-x-5 gap-y-12 sm:gap-x-7 lg:grid-cols-4 lg:gap-x-8">
              {wishlistProducts.map((product, i) => (
                <li key={product.slug}>
                  <ProductCard product={product} index={i} />
                </li>
              ))}
            </ul>
          </>
        )}
      </Container>

      <Container className="pb-20 sm:pb-28">
        <RelatedCarousel
          products={suggestions}
          title="Favoritele Ileanei din luna aceasta"
          lead="Piesele pe care le-ar păstra pentru ea, dacă ar păstra ceva."
        />
      </Container>
    </>
  );
}
