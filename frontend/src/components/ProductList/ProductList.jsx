import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductList.css";

export function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          image={product.image}
          link={product.link}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </div>
  );
}
