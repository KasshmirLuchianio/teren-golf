"use client";

import { useState } from "react";
import { Gift } from "lucide-react";
import Modal from "@/components/ui/Modal";
import WheelOfFortune from "./WheelOfFortune";

export default function CadeauButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 border border-line-strong bg-ivory/95 px-4 py-3 text-charcoal shadow-[0_12px_36px_-22px_rgba(28,25,23,0.7)] backdrop-blur-[2px] transition-colors duration-300 hover:border-charcoal hover:bg-cream sm:bottom-7 sm:right-7"
        aria-haspopup="dialog"
      >
        <Gift size={16} strokeWidth={1.3} className="text-gold" aria-hidden="true" />
        <span className="label text-[0.62rem]">A little cadeau</span>
      </button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        eyebrow="With our compliments"
        title="A little cadeau"
        labelledBy="cadeau-title"
      >
        <WheelOfFortune />
      </Modal>
    </>
  );
}
