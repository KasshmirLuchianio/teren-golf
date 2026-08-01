import type { ReactNode } from "react";

export default function Container({
  children,
  className = "",
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}) {
  const widths = {
    narrow: "max-w-3xl",
    default: "max-w-[1400px]",
    wide: "max-w-[1600px]",
  } as const;

  return <div className={`mx-auto w-full ${widths[size]} px-5 sm:px-8 ${className}`}>{children}</div>;
}
