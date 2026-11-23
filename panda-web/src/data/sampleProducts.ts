import type { Product } from "../types/product";

export const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Coffee Mug",
    store: "Target",
    price: 18.01,
    currency: "USD",
    source_url: "https://target.com/",
    checked_at: "2026-11-19T17:30:00Z",
  },
  {
    id: "2",
    name: "Coffee Mug",
    store: "Walmart",
    price: 9.78,
    currency: "USD",
    source_url: "https://walmart.com/",
    checked_at: "2026-11-19T18:05:00Z",
  },
  {
    id: "3",
    name: "Coffee Mug",
    store: "Costco",
    price: null,
    currency: "USD",
    source_url: "https://costco.com/",
    checked_at: "2026-11-18T21:12:00Z",
  },
];
