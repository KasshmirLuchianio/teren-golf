import { products, type Product } from "./products";

/**
 * Simulare pe front-end a căutării inteligente de mai târziu. Citește o frază
 * scrisă normal, extrage un preț maxim și o mărime dacă apar, apoi potrivește
 * restul cuvintelor cu câmpurile fiecărei piese.
 */

const stopWords = new Set([
  "un", "o", "un", "niște", "și", "sau", "de", "din", "cu", "la", "în", "pe",
  "pentru", "caut", "vreau", "aș", "vrea", "îmi", "mi", "trebuie", "ceva",
  "piesa", "piese", "marimea", "mărimea", "care", "sa", "să", "este", "fie",
  "am", "nevoie", "as", "doresc", "as", "vreau",
]);

export type SearchResult = {
  product: Product;
  score: number;
};

export type ParsedQuery = {
  terms: string[];
  maxPrice: number | null;
  size: string | null;
};

export function parseQuery(raw: string): ParsedQuery {
  const query = raw.toLowerCase();

  const priceMatch = query.match(/(?:sub|până la|pana la|maxim|max|under)\s*(\d{2,5})/);
  const maxPrice = priceMatch ? Number(priceMatch[1]) : null;

  const sizeMatch =
    query.match(/\b(?:mărimea|marimea|măsura|masura|size)\s*(xs|s|m|l|xl|3[68]|4[02])\b/) ??
    query.match(/\b(xs|xl)\b/);
  const size = sizeMatch ? sizeMatch[1].toUpperCase() : null;

  const terms = query
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter((word) => word.length > 2 && !stopWords.has(word) && !/^\d+$/.test(word));

  return { terms, maxPrice, size };
}

function sizeMatches(product: Product, size: string): boolean {
  const normalised = product.size.toUpperCase().replace(/\s/g, "");
  return normalised.startsWith(size) || normalised.includes(`/${size}`);
}

export function searchProducts(raw: string, limit = 8): SearchResult[] {
  const { terms, maxPrice, size } = parseQuery(raw);
  if (!raw.trim()) return [];

  const results: SearchResult[] = [];

  for (const product of products) {
    if (maxPrice !== null && product.price > maxPrice) continue;
    if (size && !sizeMatches(product, size)) continue;

    const haystacks: [string, number][] = [
      [product.name.toLowerCase(), 4],
      [product.brand.toLowerCase(), 4],
      [product.category.toLowerCase(), 3],
      [product.colour.toLowerCase(), 3],
      [product.material.toLowerCase(), 2],
      [product.period.toLowerCase(), 2],
      [product.description.toLowerCase(), 1],
    ];

    let score = 0;
    for (const term of terms) {
      for (const [text, weight] of haystacks) {
        if (text.includes(term)) score += weight;
      }
    }

    // Doar un preț sau o mărime înseamnă deja o căutare cu sens.
    if (terms.length === 0 && (maxPrice !== null || size)) score = 1;
    if (score > 0) results.push({ product, score });
  }

  return results
    .sort((a, b) => b.score - a.score || a.product.addedDaysAgo - b.product.addedDaysAgo)
    .slice(0, limit);
}
