import type { Product } from "../types/product";
import { sampleProducts } from "../data/sampleProducts";

export async function getProducts(): Promise<Product[]> {
  // 1. Wait 500ms to pretend we're talking to a server:
  await new Promise((resolve) => setTimeout(resolve, 500));
  // 2. Return the products:
  return sampleProducts;
}
