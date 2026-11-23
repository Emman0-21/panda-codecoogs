import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import { getProducts } from "../services/productService";
import ProductList from "../components/ProductList";

function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <main>
      <h1>Compare prices</h1>
      <p>(Sample data, not live prices.)</p>
      {isLoading ? (
        <p>Loading Products...</p>
      ) : (
        <ProductList products={products} />
      )}
    </main>
  );
}

export default ProductsPage;
