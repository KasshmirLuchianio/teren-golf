import Link from "next/link";

export default function Wordmark({
  size = "md",
  withTagline = false,
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  withTagline?: boolean;
  className?: string;
}) {
  const sizes = {
    sm: "text-base tracking-[0.3em]",
    md: "text-lg sm:text-xl tracking-[0.32em]",
    lg: "text-2xl sm:text-3xl tracking-[0.34em]",
  } as const;

  return (
    <Link
      href="/"
      className={`group inline-flex flex-col items-center ${className}`}
      aria-label="Ileana Giusca — pagina principală"
    >
      <span className={`font-serif ${sizes[size]} text-charcoal transition-colors group-hover:text-burgundy`}>
        ILEANA&nbsp;GIUSCA
      </span>
      {withTagline ? (
        <span className="label mt-2 text-[0.6rem] text-warmgrey">Pièces choisies avec histoire</span>
      ) : null}
    </Link>
  );
}
