"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { primaryNav } from "@/lib/navigation";
import { useShop } from "@/lib/store";

const secondary = [
  { label: "Favorite", href: "/favorite" },
  { label: "Contul meu", href: "/cont" },
  { label: "Contact", href: "/contact" },
  { label: "Ghid de măsuri", href: "/ghid-de-masuri" },
];

export default function MobileMenu() {
  const { overlay, closeOverlay } = useShop();
  const open = overlay === "menu";

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[60] flex flex-col bg-ivory lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-label="Meniu"
        >
          <div className="flex items-center justify-between border-b border-line px-5 py-5">
            <span className="font-serif text-base tracking-[0.3em] text-charcoal">ILEANA&nbsp;GIUSCA</span>
            <button
              type="button"
              onClick={closeOverlay}
              className="p-2 text-charcoal/70 transition-colors hover:text-burgundy"
              aria-label="Închide meniul"
            >
              <X size={20} strokeWidth={1.3} />
            </button>
          </div>

          <nav aria-label="Meniu mobil" className="scroll-slim flex-1 overflow-y-auto px-5 pb-10 pt-6">
            <ul className="flex flex-col">
              {primaryNav.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 + i * 0.035, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-line/60"
                >
                  <Link
                    href={item.href}
                    onClick={closeOverlay}
                    className="block py-4 font-serif text-2xl text-charcoal transition-colors hover:text-burgundy"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <ul className="mt-10 flex flex-col gap-4">
              {secondary.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={closeOverlay}
                    className="label text-[0.68rem] text-warmgrey transition-colors hover:text-charcoal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-line px-5 py-5">
            <p className="font-serif text-sm italic text-warmgrey">Pièces choisies avec histoire</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
