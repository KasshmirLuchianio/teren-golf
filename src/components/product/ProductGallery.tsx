"use client";

import { useState, type MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, ZoomOut } from "lucide-react";
import Placeholder from "@/components/ui/Placeholder";
import type { Tone } from "@/lib/products";

export default function ProductGallery({
  views,
  tone,
  productName,
}: {
  views: string[];
  tone: Tone;
  productName: string;
}) {
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });

  function onMove(event: MouseEvent<HTMLDivElement>) {
    if (!zoomed) return;
    const rect = event.currentTarget.getBoundingClientRect();
    setOrigin({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  }

  return (
    <div className="flex flex-col-reverse gap-4 sm:flex-row sm:gap-6">
      {/* thumbnails */}
      <ul className="flex gap-3 overflow-x-auto sm:w-20 sm:flex-col sm:overflow-visible" role="tablist" aria-label="Imagini produs">
        {views.map((view, i) => (
          <li key={view} className="w-16 shrink-0 sm:w-full">
            <button
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-controls="gallery-main"
              onClick={() => {
                setActive(i);
                setZoomed(false);
              }}
              className={`block w-full border transition-colors duration-300 ${
                active === i ? "border-charcoal" : "border-transparent hover:border-line-strong"
              }`}
            >
              <Placeholder label={String(i + 1)} tone={tone} motif={i + 1} ratio="1 / 1" />
              <span className="sr-only">{view}</span>
            </button>
          </li>
        ))}
      </ul>

      {/* main view */}
      <div className="relative flex-1">
        <div
          id="gallery-main"
          role="tabpanel"
          className={`relative overflow-hidden ${zoomed ? "cursor-zoom-out" : "cursor-zoom-in"}`}
          onMouseMove={onMove}
          onMouseLeave={() => setOrigin({ x: 50, y: 50 })}
          onClick={() => setZoomed((z) => !z)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              style={{
                transformOrigin: `${origin.x}% ${origin.y}%`,
                transform: zoomed ? "scale(1.9)" : "scale(1)",
                transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              <Placeholder
                label={views[active]}
                tone={tone}
                variant="product"
                motif={active + 2}
                motifInset="30%"
                ratio="4 / 5"
                caption={`${productName} — machetă de imagine`}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-3 flex items-center justify-between gap-4">
          <span className="label text-[0.58rem] text-warmgrey">
            Imaginea {active + 1} din {views.length} · {views[active]}
          </span>
          <button
            type="button"
            onClick={() => setZoomed((z) => !z)}
            className="label inline-flex items-center gap-2 text-[0.6rem] text-charcoal/70 transition-colors hover:text-burgundy"
            aria-pressed={zoomed}
          >
            {zoomed ? <ZoomOut size={15} strokeWidth={1.4} /> : <ZoomIn size={15} strokeWidth={1.4} />}
            {zoomed ? "Închide zoom" : "Mărește"}
          </button>
        </div>
      </div>
    </div>
  );
}
