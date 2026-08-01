import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  as: Tag = "h2",
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  children?: ReactNode;
}) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignment}`}>
      {eyebrow ? (
        <span className="label mb-4 flex items-center gap-3 text-warmgrey">
          <span aria-hidden="true" className="inline-block h-px w-8 bg-line-strong" />
          {eyebrow}
        </span>
      ) : null}

      <Tag className="text-balance text-3xl leading-[1.1] sm:text-4xl md:text-[2.75rem]">{title}</Tag>

      {lead ? (
        <p
          className={`mt-5 max-w-[58ch] text-[0.95rem] leading-relaxed text-ink/75 ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {lead}
        </p>
      ) : null}

      {children}
    </div>
  );
}
