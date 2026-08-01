import { Plus } from "lucide-react";
import type { ReactNode } from "react";

/**
 * Native disclosure elements — keyboard accessible and functional without JS.
 */
export default function Accordion({
  items,
}: {
  items: { question: string; answer: ReactNode }[];
}) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
            <h3 className="font-serif text-lg leading-snug text-charcoal transition-colors group-hover:text-burgundy sm:text-xl">
              {item.question}
            </h3>
            <Plus
              size={16}
              strokeWidth={1.4}
              aria-hidden="true"
              className="shrink-0 text-warmgrey transition-transform duration-300 group-open:rotate-45"
            />
          </summary>
          <div className="max-w-[64ch] pb-7 text-[0.92rem] leading-relaxed text-ink/75">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
