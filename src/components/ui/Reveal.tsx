"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/** A restrained entrance: a short rise and a fade, nothing more. */
export default function Reveal({
  children,
  delay = 0,
  y = 18,
  className = "",
  as = "div",
  id,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
  id?: string;
}) {
  const reduce = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      id={id}
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
