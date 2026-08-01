import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ProductGallery from "@/components/product/ProductGallery";
import ProductActions from "@/components/product/ProductActions";
import RelatedCarousel from "@/components/product/RelatedCarousel";
import { formatPrice, getProduct, products, relatedProducts } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Piesa nu a fost găsită" };
  return {
    title: `${product.brand} — ${product.name}`,
    description: product.description.slice(0, 155),
  };
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-line py-3">
      <dt className="label text-[0.6rem] text-warmgrey">{label}</dt>
      <dd className="text-right text-[0.9rem] text-charcoal">{value}</dd>
    </div>
  );
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = relatedProducts(product, 8);

  return (
    <>
      <Container className="py-6">
        <nav aria-label="Firimituri de navigare">
          <ol className="label flex flex-wrap items-center gap-2 text-[0.58rem] text-warmgrey">
            <li>
              <Link href="/" className="transition-colors hover:text-charcoal">
                Acasă
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href={`/catalog?category=${encodeURIComponent(product.category)}`}
                className="transition-colors hover:text-charcoal"
              >
                {product.category}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal">{product.name}</li>
          </ol>
        </nav>
      </Container>

      <Container className="grid gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <ProductGallery views={product.gallery} tone={product.tone} productName={product.name} />

        <div className="lg:pt-2">
          <div className="flex items-center justify-between gap-4">
            <span className="label text-warmgrey">{product.brand}</span>
            <span className="label text-[0.6rem] text-gold">Unicat</span>
          </div>

          <h1 className="mt-3 text-balance text-3xl leading-tight sm:text-4xl">{product.name}</h1>

          <div className="mt-5 flex flex-wrap items-baseline gap-x-6 gap-y-2">
            <span
              className={`font-serif text-2xl ${product.sold ? "text-warmgrey line-through" : "text-charcoal"}`}
            >
              {formatPrice(product.price)}
            </span>
            <span className="label text-[0.6rem] text-warmgrey">Mărimea {product.size}</span>
            <span
              className={`label text-[0.6rem] ${product.sold ? "text-burgundy" : "text-olive-deep"}`}
            >
              {product.sold ? "Vândută" : "Disponibilă"}
            </span>
          </div>

          <p className="mt-6 border-y border-line py-4 text-[0.82rem] leading-relaxed text-ink/70">
            Fiind o piesă vintage sau pre-owned, există într-un singur exemplar.
          </p>

          <div className="mt-7">
            <ProductActions product={product} />
          </div>

          {/* nota Ilenei */}
          <aside className="mt-10 border-l-2 border-burgundy bg-cream px-6 py-6">
            <span className="label text-[0.6rem] text-burgundy">Nota Ileanei</span>
            <p className="mt-3 font-serif text-lg leading-relaxed text-charcoal">
              „{product.ileanaNote}”
            </p>
            <p className="font-script mt-4 text-3xl leading-none text-burgundy">Ileana</p>
          </aside>

          <div className="mt-10">
            <h2 className="label text-warmgrey">Despre piesă</h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/80">{product.description}</p>
          </div>

          <div className="mt-10 grid gap-x-12 gap-y-0 sm:grid-cols-2">
            <div>
              <h2 className="label mb-2 text-warmgrey">Detalii</h2>
              <dl>
                <Spec label="Marcă" value={product.brand} />
                <Spec label="Material" value={product.material} />
                <Spec label="Culoare" value={product.colour} />
                <Spec label="Stare" value={product.condition} />
                <Spec label="Perioadă" value={product.period} />
                <Spec label="Cod piesă" value={product.code} />
              </dl>
            </div>

            <div className="mt-10 sm:mt-0">
              <h2 className="label mb-2 text-warmgrey">Măsurători, pe plat</h2>
              <dl>
                {product.measurements.map((m) => (
                  <Spec key={m.label} label={m.label} value={m.value} />
                ))}
              </dl>
              <p className="mt-4 text-[0.78rem] leading-relaxed text-warmgrey">
                Măsurate manual, cu o toleranță de aproximativ un centimetru. Vezi{" "}
                <Link href="/ghid-de-masuri" className="link-underline text-burgundy">
                  ghidul de măsuri
                </Link>{" "}
                pentru cum le compari cu o haină pe care o ai deja.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Container className="pb-20 sm:pb-28">
        <Reveal>
          <RelatedCarousel
            products={related}
            title="Piese alese în aceeași perioadă"
            lead="Găsite în aceeași săptămână sau croite dintr-un material asemănător."
          />
        </Reveal>
      </Container>
    </>
  );
}
