"use client";

import { useState, type ReactNode } from "react";
import { Minus, Plus } from "lucide-react";
import {
  allBrands,
  allColours,
  allConditions,
  allMaterials,
  allSizes,
  categories,
} from "@/lib/products";

export type PriceBand = "0-200" | "200-400" | "400-600" | "600+";

export type Filters = {
  category: string[];
  size: string[];
  brand: string[];
  colour: string[];
  material: string[];
  price: PriceBand[];
  condition: string[];
  vintageOnly: boolean;
  availableOnly: boolean;
  newlyAdded: boolean;
  includeSold: boolean;
};

export const emptyFilters: Filters = {
  category: [],
  size: [],
  brand: [],
  colour: [],
  material: [],
  price: [],
  condition: [],
  vintageOnly: false,
  availableOnly: false,
  newlyAdded: false,
  includeSold: true,
};

export const priceBands: { value: PriceBand; label: string }[] = [
  { value: "0-200", label: "Under 200 RON" },
  { value: "200-400", label: "200 – 400 RON" },
  { value: "400-600", label: "400 – 600 RON" },
  { value: "600+", label: "Over 600 RON" },
];

export function countActive(filters: Filters): number {
  const lists =
    filters.category.length +
    filters.size.length +
    filters.brand.length +
    filters.colour.length +
    filters.material.length +
    filters.price.length +
    filters.condition.length;
  const toggles =
    Number(filters.vintageOnly) +
    Number(filters.availableOnly) +
    Number(filters.newlyAdded) +
    Number(!filters.includeSold);
  return lists + toggles;
}

function Group({
  title,
  children,
  defaultOpen = false,
  count = 0,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  count?: number;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-line">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-4 py-4 text-left"
        >
          <span className="label text-[0.64rem] text-charcoal">
            {title}
            {count > 0 ? <span className="ml-2 text-burgundy">({count})</span> : null}
          </span>
          {open ? (
            <Minus size={14} strokeWidth={1.4} className="text-warmgrey" aria-hidden="true" />
          ) : (
            <Plus size={14} strokeWidth={1.4} className="text-warmgrey" aria-hidden="true" />
          )}
        </button>
      </h3>
      {open ? <div className="pb-5">{children}</div> : null}
    </div>
  );
}

function Check({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="group flex cursor-pointer items-center gap-3 py-1.5">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />
      <span
        aria-hidden="true"
        className={`flex h-4 w-4 shrink-0 items-center justify-center border transition-colors peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-burgundy ${
          checked ? "border-charcoal bg-charcoal" : "border-line-strong group-hover:border-charcoal"
        }`}
      >
        {checked ? <span className="h-1.5 w-1.5 bg-ivory" /> : null}
      </span>
      <span className="text-[0.85rem] leading-snug text-ink/80 group-hover:text-charcoal">{label}</span>
    </label>
  );
}

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-4 py-2">
      <span className="text-[0.85rem] text-ink/80">{label}</span>
      <input type="checkbox" checked={checked} onChange={onChange} className="peer sr-only" />
      <span
        aria-hidden="true"
        className={`relative h-4 w-8 shrink-0 border transition-colors peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-burgundy ${
          checked ? "border-charcoal bg-charcoal" : "border-line-strong bg-transparent"
        }`}
      >
        <span
          className={`absolute top-[2px] h-[10px] w-[10px] transition-all duration-300 ${
            checked ? "left-[18px] bg-ivory" : "left-[2px] bg-line-strong"
          }`}
        />
      </span>
    </label>
  );
}

export default function FilterPanel({
  filters,
  setFilters,
}: {
  filters: Filters;
  setFilters: (next: Filters) => void;
}) {
  function toggleIn(key: keyof Filters, value: string) {
    const current = filters[key] as string[];
    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    setFilters({ ...filters, [key]: next });
  }

  return (
    <div>
      <Group title="Category" defaultOpen count={filters.category.length}>
        {categories.map((c) => (
          <Check
            key={c.name}
            label={c.name}
            checked={filters.category.includes(c.name)}
            onChange={() => toggleIn("category", c.name)}
          />
        ))}
      </Group>

      <Group title="Size" defaultOpen count={filters.size.length}>
        {allSizes.map((size) => (
          <Check
            key={size}
            label={size}
            checked={filters.size.includes(size)}
            onChange={() => toggleIn("size", size)}
          />
        ))}
      </Group>

      <Group title="Price" count={filters.price.length}>
        {priceBands.map((band) => (
          <Check
            key={band.value}
            label={band.label}
            checked={filters.price.includes(band.value)}
            onChange={() => toggleIn("price", band.value)}
          />
        ))}
      </Group>

      <Group title="Brand" count={filters.brand.length}>
        <div className="scroll-slim max-h-56 overflow-y-auto pr-2">
          {allBrands.map((brand) => (
            <Check
              key={brand}
              label={brand}
              checked={filters.brand.includes(brand)}
              onChange={() => toggleIn("brand", brand)}
            />
          ))}
        </div>
      </Group>

      <Group title="Colour" count={filters.colour.length}>
        <div className="scroll-slim max-h-56 overflow-y-auto pr-2">
          {allColours.map((colour) => (
            <Check
              key={colour}
              label={colour}
              checked={filters.colour.includes(colour)}
              onChange={() => toggleIn("colour", colour)}
            />
          ))}
        </div>
      </Group>

      <Group title="Material" count={filters.material.length}>
        {allMaterials.map((material) => (
          <Check
            key={material}
            label={material}
            checked={filters.material.includes(material)}
            onChange={() => toggleIn("material", material)}
          />
        ))}
      </Group>

      <Group title="Condition" count={filters.condition.length}>
        {allConditions.map((condition) => (
          <Check
            key={condition}
            label={condition}
            checked={filters.condition.includes(condition)}
            onChange={() => toggleIn("condition", condition)}
          />
        ))}
      </Group>

      <Group
        title="Selection"
        defaultOpen
        count={
          Number(filters.vintageOnly) +
          Number(filters.availableOnly) +
          Number(filters.newlyAdded) +
          Number(!filters.includeSold)
        }
      >
        <Toggle
          label="Vintage only"
          checked={filters.vintageOnly}
          onChange={() => setFilters({ ...filters, vintageOnly: !filters.vintageOnly })}
        />
        <Toggle
          label="Available items only"
          checked={filters.availableOnly}
          onChange={() =>
            setFilters({
              ...filters,
              availableOnly: !filters.availableOnly,
              includeSold: filters.availableOnly ? filters.includeSold : false,
            })
          }
        />
        <Toggle
          label="Newly added"
          checked={filters.newlyAdded}
          onChange={() => setFilters({ ...filters, newlyAdded: !filters.newlyAdded })}
        />
        <Toggle
          label="Show sold pieces"
          checked={filters.includeSold}
          onChange={() =>
            setFilters({
              ...filters,
              includeSold: !filters.includeSold,
              availableOnly: filters.includeSold ? filters.availableOnly : false,
            })
          }
        />
      </Group>
    </div>
  );
}
