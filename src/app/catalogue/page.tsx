import type { Metadata } from "next";
import { Suspense } from "react";
import CatalogueView from "@/components/catalogue/CatalogueView";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "The Collection",
  description:
    "Every vintage and pre-owned piece currently selected by Ileana Giusca, with filters for size, brand, material, colour and condition.",
};

export default function CataloguePage() {
  return (
    <Suspense
      fallback={
        <Container className="py-20">
          <p className="label text-warmgrey">Loading the selection…</p>
        </Container>
      }
    >
      <CatalogueView />
    </Suspense>
  );
}
