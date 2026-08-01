import Container from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="label text-warmgrey">404</span>
      <h1 className="mt-5 max-w-[18ch] text-balance text-4xl leading-tight sm:text-5xl">
        Piesa aceasta nu mai e pe umeraș
      </h1>
      <p className="mt-6 max-w-[46ch] text-[0.95rem] leading-relaxed text-ink/75">
        Ori și-a găsit stăpâna, ori adresa nu e tocmai bună. Selecția de acum e la un clic distanță.
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <LinkButton href="/catalog" size="lg">
          Vezi colecția
        </LinkButton>
        <LinkButton href="/" variant="outline" size="lg">
          Înapoi acasă
        </LinkButton>
      </div>
    </Container>
  );
}
