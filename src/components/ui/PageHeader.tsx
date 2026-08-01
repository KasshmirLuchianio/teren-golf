import Container from "./Container";

export default function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="paper border-b border-line">
      <Container className="py-14 sm:py-20">
        <span className="label flex items-center gap-3 text-warmgrey">
          <span aria-hidden="true" className="inline-block h-px w-8 bg-line-strong" />
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-[20ch] text-balance text-4xl leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
          {title}
        </h1>
        {lead ? (
          <p className="mt-6 max-w-[58ch] text-[1rem] leading-relaxed text-ink/75">{lead}</p>
        ) : null}
      </Container>
    </div>
  );
}
