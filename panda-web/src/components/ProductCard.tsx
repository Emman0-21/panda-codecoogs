import type { Product } from "../types/product";
import { formatCheckedAt, formatPrice } from "../utils/format";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div>
      <p>{product.name}</p>
      <p>
        {product.price !== null
          ? formatPrice(product.price, product.currency)
          : "Price unavailable"}
      </p>
      <a href={product.source_url}>View at {product.store}</a>
      <p>Last Checked: {formatCheckedAt(product.checked_at)}</p>
    </div>
  );
};

export default ProductCard;
