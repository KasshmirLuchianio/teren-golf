import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileMenu from "@/components/layout/MobileMenu";
import BagDrawer from "@/components/layout/BagDrawer";
import SearchOverlay from "@/components/layout/SearchOverlay";
import CadeauButton from "@/components/wheel/CadeauButton";
import { ShopProvider } from "@/lib/store";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

const signature = Mrs_Saint_Delafield({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-signature",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ileana Giusca — Pièces choisies avec histoire",
    template: "%s · Ileana Giusca",
  },
  description:
    "Vintage and pre-owned pieces selected by Ileana Giusca for women who build a personal style of their own. Each garment exists in a single example.",
  // A typographic monogram drawn inline — no image file is used anywhere on the site.
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23f7f2e9'/%3E%3Ctext x='16' y='22' font-family='Georgia,serif' font-size='15' letter-spacing='0.5' text-anchor='middle' fill='%231c1917'%3EIG%3C/text%3E%3C/svg%3E",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable} ${signature.variable}`}>
      <body className="flex min-h-screen flex-col">
        <ShopProvider>
          <a
            href="#main"
            className="label sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-charcoal focus:px-4 focus:py-3 focus:text-ivory"
          >
            Skip to content
          </a>

          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />

          <MobileMenu />
          <BagDrawer />
          <SearchOverlay />
          <CadeauButton />
        </ShopProvider>
      </body>
    </html>
  );
}
