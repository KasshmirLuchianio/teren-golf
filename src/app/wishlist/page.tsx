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
        eyebrow="Saved"
        title="Your wishlist"
        lead="Pieces you have set aside. Each one exists in a single example, so a saved garment is not a reserved one — the wishlist simply keeps it in view."
      />

      <Container className="py-14 sm:py-20">
        {wishlistProducts.length === 0 ? (
          <div className="border border-line bg-cream/60 px-8 py-20 text-center">
            <p className="font-serif text-2xl text-charcoal">Nothing saved yet.</p>
            <p className="mx-auto mt-3 max-w-[44ch] text-[0.92rem] leading-relaxed text-ink/70">
              Use the heart on any piece to keep it here. It is the easiest way to compare two garments
              before deciding.
            </p>
            <div className="mt-8 flex justify-center">
              <LinkButton href="/catalogue" size="lg">
                Browse the collection
              </LinkButton>
            </div>
          </div>
        ) : (
          <>
            <p className="label border-b border-line pb-4 text-warmgrey">
              {wishlistProducts.length} {wishlistProducts.length === 1 ? "piece" : "pieces"} saved
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
          title="Ileana’s favourites this month"
          lead="The pieces she would keep for herself, if she kept anything."
        />
      </Container>
    </>
  );
}
