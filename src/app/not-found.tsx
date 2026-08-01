import Container from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="label text-warmgrey">404</span>
      <h1 className="mt-5 max-w-[18ch] text-balance text-4xl leading-tight sm:text-5xl">
        This piece is no longer on the rail
      </h1>
      <p className="mt-6 max-w-[46ch] text-[0.95rem] leading-relaxed text-ink/75">
        Either it has found its owner, or the address is not quite right. The current selection is only
        ever a click away.
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <LinkButton href="/catalogue" size="lg">
          See the collection
        </LinkButton>
        <LinkButton href="/" variant="outline" size="lg">
          Return home
        </LinkButton>
      </div>
    </Container>
  );
}
