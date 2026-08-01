"use client";

import { useId, useState, type FormEvent } from "react";
import { Check } from "lucide-react";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Front-end validation only — nothing is sent anywhere at this stage. */
export default function NewsletterForm({
  tone = "light",
  buttonLabel = "Intră în cercul Ileanei",
  compact = false,
}: {
  tone?: "light" | "dark";
  buttonLabel?: string;
  compact?: boolean;
}) {
  const id = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const dark = tone === "dark";

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!EMAIL.test(email.trim())) {
      setError("Te rugăm să introduci o adresă de e-mail validă.");
      return;
    }
    setError(null);
    setDone(true);
  }

  if (done) {
    return (
      <p
        className={`flex items-center gap-3 py-3 font-serif text-base italic ${
          dark ? "text-ivory/90" : "text-charcoal"
        }`}
        role="status"
      >
        <Check size={18} strokeWidth={1.4} className="text-gold" aria-hidden="true" />
        Îți mulțumim. Ești pe listă — selecțiile noi ajung întâi la tine.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="w-full">
      <div className={`flex flex-col gap-3 ${compact ? "sm:flex-row" : "sm:flex-row sm:items-stretch"}`}>
        <div className="flex-1">
          <label htmlFor={`${id}-email`} className="sr-only">
            Adresă de e-mail
          </label>
          <input
            id={`${id}-email`}
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError(null);
            }}
            placeholder="adresa@ta.ro"
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? `${id}-error` : undefined}
            className={`w-full border-b bg-transparent px-1 py-3 text-[0.95rem] focus:outline-none focus-visible:outline-none ${
              dark
                ? "border-ivory/35 text-ivory placeholder:text-ivory/45 focus:border-ivory"
                : "border-charcoal/35 text-charcoal placeholder:text-warmgrey/70 focus:border-charcoal"
            } ${error ? "border-burgundy" : ""}`}
          />
        </div>

        <button
          type="submit"
          className={`label shrink-0 px-7 py-3.5 text-[0.68rem] transition-colors duration-300 ${
            dark
              ? "bg-ivory text-charcoal hover:bg-gold hover:text-charcoal"
              : "bg-charcoal text-ivory hover:bg-burgundy"
          }`}
        >
          {buttonLabel}
        </button>
      </div>

      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className={`mt-3 text-[0.8rem] ${dark ? "text-butter" : "text-burgundy"}`}
        >
          {error}
        </p>
      ) : null}
    </form>
  );
}
