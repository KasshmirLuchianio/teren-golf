"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import WishlistButton from "./WishlistButton";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { social } from "@/lib/navigation";
import { useShop } from "@/lib/store";
import type { Product } from "@/lib/products";

export default function ProductActions({ product }: { product: Product }) {
  const { addToBag, bag } = useShop();
  const [reserved, setReserved] = useState(false);
  const inBag = bag.includes(product.slug);

  const enquiry = encodeURIComponent(
    `Bună, Ileana. Mă interesează ${product.brand} — ${product.name} (${product.code}).`,
  );

  return (
    <div>
      {product.sold ? (
        <div className="border border-line-strong bg-cream p-5">
          <p className="font-serif text-lg text-charcoal">Piesa aceasta și-a găsit stăpâna.</p>
          <p className="mt-2 text-[0.85rem] leading-relaxed text-ink/70">
            A existat într-un singur exemplar. Salveaz-o la favorite și Ileana îți va spune când
            apare ceva asemănător.
          </p>
          <div className="mt-5">
            <WishlistButton slug={product.slug} name={product.name} withLabel />
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <Button size="lg" onClick={() => addToBag(product.slug)} disabled={inBag}>
            {inBag ? "Este în coș" : "Adaugă în coș"}
          </Button>

          <div className="grid gap-3 sm:grid-cols-2">
            <Button variant="outline" size="lg" onClick={() => setReserved(true)} disabled={reserved}>
              {reserved ? "Rezervată" : "Rezervă"}
            </Button>

            <a
              href={`${social.whatsapp}?text=${enquiry}`}
              target="_blank"
              rel="noreferrer noopener"
              className="label inline-flex items-center justify-center gap-2.5 border border-charcoal/35 px-6 py-4 text-[0.68rem] text-charcoal transition-colors duration-300 hover:border-charcoal hover:bg-charcoal hover:text-ivory"
            >
              <WhatsAppIcon size={16} />
              Întreabă pe WhatsApp
            </a>
          </div>

          {reserved ? (
            <p className="flex items-center gap-2.5 text-[0.82rem] text-olive-deep" role="status">
              <Check size={16} strokeWidth={1.5} aria-hidden="true" />
              Ținută pentru tine 30 de minute. Doar demonstrativ — deocamdată nu se trimite nimic.
            </p>
          ) : null}

          <div className="mt-2 flex items-center justify-between border-t border-line pt-4">
            <WishlistButton slug={product.slug} name={product.name} withLabel />
            <span className="label text-[0.58rem] text-warmgrey">Cod {product.code}</span>
          </div>
        </div>
      )}
    </div>
  );
}
