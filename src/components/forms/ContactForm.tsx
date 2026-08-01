"use client";

import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Errors = { name?: string; email?: string; message?: string };

const subjects = [
  "O întrebare despre o piesă",
  "O piesă pe care o caut",
  "Mărimi și măsurători",
  "O comandă deja plasată",
  "Altceva",
];

const fieldClass =
  "mt-2 w-full border-b border-charcoal/30 bg-transparent px-1 py-3 text-[0.95rem] text-charcoal placeholder:text-warmgrey/70 transition-colors focus:border-charcoal focus:outline-none";

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: subjects[0],
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Spune-ne cum să ți ne adresăm.";
    if (!EMAIL.test(values.email.trim())) next.email = "Introdu o adresă de e-mail validă.";
    if (values.message.trim().length < 10) next.message = "O propoziție-două sunt de ajuns — mai scrie puțin.";

    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line-strong bg-cream p-8">
        <p className="flex items-center gap-3 font-serif text-xl text-charcoal">
          <Check size={20} strokeWidth={1.4} className="text-gold" aria-hidden="true" />
          Îți mulțumim, {values.name.trim().split(" ")[0]}.
        </p>
        <p className="mt-3 text-[0.9rem] leading-relaxed text-ink/75">
          Mesajul tău a fost notat. Ileana răspunde personal, de obicei într-o zi — citește fiecare
          mesaj ea însăși, nu trimite răspunsuri standard.
        </p>
        <p className="mt-5 text-[0.75rem] text-warmgrey">
          Doar prototip: nu s-a trimis nimic și nu s-a salvat niciun detaliu.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-7">
      <div>
        <label htmlFor="name" className="label text-warmgrey">
          Numele tău
        </label>
        <input
          id="name"
          type="text"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`${fieldClass} ${errors.name ? "border-burgundy" : ""}`}
          placeholder="Maria Popescu"
        />
        {errors.name ? (
          <p id="name-error" role="alert" className="mt-2 text-[0.8rem] text-burgundy">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className="label text-warmgrey">
          Adresă de e-mail
        </label>
        <input
          id="email"
          type="email"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`${fieldClass} ${errors.email ? "border-burgundy" : ""}`}
          placeholder="adresa@ta.ro"
        />
        {errors.email ? (
          <p id="email-error" role="alert" className="mt-2 text-[0.8rem] text-burgundy">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="subject" className="label text-warmgrey">
          Despre ce este vorba
        </label>
        <select
          id="subject"
          value={values.subject}
          onChange={(e) => setValues({ ...values, subject: e.target.value })}
          className={fieldClass}
        >
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="label text-warmgrey">
          Mesajul tău
        </label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${fieldClass} resize-y ${errors.message ? "border-burgundy" : ""}`}
          placeholder="Caut un palton din lână, într-un neutru cald, mărimea M, pentru toamnă…"
        />
        {errors.message ? (
          <p id="message-error" role="alert" className="mt-2 text-[0.8rem] text-burgundy">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg">
          Trimite mesajul
        </Button>
        <p className="max-w-[36ch] text-[0.75rem] leading-relaxed text-warmgrey">
          Prototip front-end — formularul validează, dar nu trimite.
        </p>
      </div>
    </form>
  );
}
