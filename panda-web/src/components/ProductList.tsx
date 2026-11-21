import ProductCard from "./ProductCard";
import type { Product } from "../types/product";

type ProductListProp = {
  products: Product[];
};

const ProductList = ({ products }: ProductListProp) => {
  if (products.length === 0) {
    return <p>No products to show.</p>;
  }
  return (
    <div>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductList;
