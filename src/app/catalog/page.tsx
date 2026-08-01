import type { Metadata } from "next";
import { Suspense } from "react";
import CatalogueView from "@/components/catalog/CatalogueView";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Colecția",
  description:
    "Toate piesele vintage și pre-owned alese acum de Ileana Giusca, cu filtre pentru mărime, marcă, material, culoare și stare.",
};

export default function CataloguePage() {
  return (
    <Suspense
      fallback={
        <Container className="py-20">
          <p className="label text-warmgrey">Se încarcă selecția…</p>
        </Container>
      }
    >
      <CatalogueView />
    </Suspense>
  );
}
