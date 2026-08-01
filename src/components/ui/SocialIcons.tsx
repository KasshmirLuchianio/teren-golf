/**
 * Minimal social glyphs drawn in the same 24×24 stroke style as the Lucide set,
 * which no longer ships brand marks.
 */

type Props = { size?: number; className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function FacebookIcon({ size = 18, className = "" }: Props) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function InstagramIcon({ size = 18, className = "" }: Props) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 18, className = "" }: Props) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M3 21l1.65-4.5A8.5 8.5 0 1 1 7.5 19.3z" />
      <path d="M8.6 9.2c.2 1.4.9 2.7 2 3.7 1 1 2.3 1.7 3.6 2l.9-1.4 1.9.6c-.2 1-1.1 1.6-2.1 1.5a9 9 0 0 1-7.3-7.3c-.1-1 .5-1.9 1.5-2.1l.6 1.9z" />
    </svg>
  );
}
