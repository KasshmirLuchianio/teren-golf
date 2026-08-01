"use client";

import { useEffect, useState } from "react";

/** Milliseconds until the coming Sunday at 19:00, in the visitor's own time. */
function msUntilNextDrop(from: Date): number {
  const target = new Date(from);
  const daysUntilSunday = (7 - from.getDay()) % 7;
  target.setDate(from.getDate() + daysUntilSunday);
  target.setHours(19, 0, 0, 0);
  if (target.getTime() <= from.getTime()) target.setDate(target.getDate() + 7);
  return target.getTime() - from.getTime();
}

function split(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

const units = [
  { key: "days", label: "days" },
  { key: "hours", label: "hours" },
  { key: "minutes", label: "min" },
  { key: "seconds", label: "sec" },
] as const;

export default function Countdown({ className = "" }: { className?: string }) {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setRemaining(msUntilNextDrop(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const parts = split(remaining ?? 0);

  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6 ${className}`}>
      <span className="label text-warmgrey">Next drop: Sunday, 7:00 PM</span>

      <div className="flex items-end gap-4" aria-live="off">
        {units.map((unit) => (
          <div key={unit.key} className="flex flex-col items-center">
            <span
              className="font-serif text-2xl leading-none tabular-nums text-charcoal sm:text-[1.75rem]"
              suppressHydrationWarning
            >
              {remaining === null ? "—" : String(parts[unit.key]).padStart(2, "0")}
            </span>
            <span className="label mt-1.5 text-[0.6rem] text-warmgrey">{unit.label}</span>
          </div>
        ))}
      </div>

      <span className="sr-only">
        {remaining === null
          ? "Countdown to the next drop is loading."
          : `${parts.days} days, ${parts.hours} hours and ${parts.minutes} minutes until the next drop.`}
      </span>
    </div>
  );
}
