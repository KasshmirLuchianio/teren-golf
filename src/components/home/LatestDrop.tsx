import Container from "@/components/ui/Container";
import Countdown from "@/components/ui/Countdown";
import Reveal from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/lib/products";

export default function LatestDrop() {
  const latest = [...products].sort((a, b) => a.addedDaysAgo - b.addedDaysAgo).slice(0, 8);

  return (
    <section className="py-20 sm:py-28" aria-labelledby="latest-drop-title">
      <Container>
        <Reveal className="flex flex-col gap-8 border-b border-line pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="label flex items-center gap-3 text-warmgrey">
              <span aria-hidden="true" className="inline-block h-px w-8 bg-line-strong" />
              This week
            </span>
            <h2 id="latest-drop-title" className="mt-4 text-3xl sm:text-4xl md:text-[2.75rem]">
              The Latest Drop
            </h2>
            <p className="mt-4 max-w-[48ch] text-[0.95rem] leading-relaxed text-ink/75">
              Recently added pieces, each available in a single example.
            </p>
          </div>

          <Countdown className="lg:pb-2" />
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-12 sm:gap-x-7 lg:grid-cols-4 lg:gap-x-8">
          {latest.map((product, i) => (
            <li key={product.slug}>
              <ProductCard product={product} index={i} />
            </li>
          ))}
        </ul>

        <Reveal className="mt-14 flex justify-center">
          <LinkButton href="/catalogue?sort=newest" variant="outline" size="lg">
            See everything newly added
          </LinkButton>
        </Reveal>
      </Container>
    </section>
  );
}
