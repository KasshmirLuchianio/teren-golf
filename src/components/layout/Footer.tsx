import Link from "next/link";
import NewsletterForm from "@/components/ui/NewsletterForm";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { footerNav, social } from "@/lib/navigation";

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="label text-[0.62rem] text-ivory/55">{title}</h3>
      <ul className="mt-5 flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="link-underline text-[0.85rem] text-ivory/85 transition-colors hover:text-ivory"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mt-24 bg-charcoal text-ivory sm:mt-32">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_2fr]">
          {/* identity + newsletter */}
          <div>
            <span className="font-serif text-xl tracking-[0.32em] text-ivory">ILEANA&nbsp;GIUSCA</span>
            <p className="label mt-3 text-[0.6rem] text-ivory/50">Pièces choisies avec histoire</p>

            <p className="mt-7 max-w-[38ch] text-[0.88rem] leading-relaxed text-ivory/70">
              Vintage and pre-owned clothing, chosen one piece at a time for the way it is made and the
              way it can be worn.
            </p>

            <div className="mt-8 max-w-md">
              <h3 className="label text-[0.62rem] text-ivory/55">Newsletter</h3>
              <div className="mt-4">
                <NewsletterForm tone="dark" compact />
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={social.facebook}
                target="_blank"
                rel="noreferrer noopener"
                className="border border-ivory/25 p-2.5 text-ivory/75 transition-colors hover:border-ivory hover:text-ivory"
                aria-label="Ileana Giusca on Facebook"
              >
                <FacebookIcon size={17} />
              </a>
              <a
                href={social.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="border border-ivory/25 p-2.5 text-ivory/75 transition-colors hover:border-ivory hover:text-ivory"
                aria-label="Ileana Giusca on Instagram"
              >
                <InstagramIcon size={17} />
              </a>
            </div>
          </div>

          {/* navigation */}
          <div className="grid gap-10 sm:grid-cols-3">
            <Column title="The collection" links={footerNav.collection} />
            <Column title="Service" links={footerNav.help} />
            <div>
              <Column title="Legal" links={footerNav.legal} />
              <div className="mt-10">
                <h3 className="label text-[0.62rem] text-ivory/55">Contact</h3>
                <address className="mt-5 flex flex-col gap-2 text-[0.85rem] not-italic leading-relaxed text-ivory/75">
                  <a href="mailto:buna@ileanagiusca.ro" className="link-underline hover:text-ivory">
                    buna@ileanagiusca.ro
                  </a>
                  <span>Bucharest, Romania</span>
                  <span className="text-ivory/50">By appointment</span>
                </address>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ivory/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-base italic text-ivory/80">
            Carefully selected by Ileana Giusca in Romania.
          </p>
          <p className="text-[0.72rem] text-ivory/45">
            © {new Date().getFullYear()} Ileana Giusca. Concept prototype — all copy is editable.
          </p>
        </div>
      </div>
    </footer>
  );
}
