import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "solid" | "burgundy" | "outline" | "quiet";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-sans uppercase tracking-[0.18em] transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-45";

const variants: Record<Variant, string> = {
  solid: "bg-charcoal text-ivory hover:bg-burgundy border border-charcoal hover:border-burgundy",
  burgundy: "bg-burgundy text-ivory hover:bg-burgundy-deep border border-burgundy hover:border-burgundy-deep",
  outline: "border border-charcoal/35 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-ivory",
  quiet: "text-charcoal border-b border-charcoal/30 hover:border-charcoal px-0",
};

const sizes: Record<Size, string> = {
  sm: "text-[0.65rem] px-4 py-2",
  md: "text-[0.7rem] px-6 py-3",
  lg: "text-[0.72rem] px-8 py-4",
};

export function buttonClass(variant: Variant = "solid", size: Size = "md", extra = "") {
  const sizing = variant === "quiet" ? "text-[0.7rem] pb-1" : sizes[size];
  return `${base} ${variants[variant]} ${sizing} ${extra}`;
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

export default function Button({
  variant = "solid",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={buttonClass(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

export function LinkButton({
  href,
  variant = "solid",
  size = "md",
  className = "",
  children,
  ...rest
}: LinkButtonProps) {
  return (
    <Link href={href} className={buttonClass(variant, size, className)} {...rest}>
      {children}
    </Link>
  );
}
