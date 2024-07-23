import { ProductCard } from "../ProductCard/ProductCard";
import "./SectionTrending.css";
import sneaker from "/sneaker-card.png";

export function SectionTrending() {
  return (
    <section className="section-trending">
      <div className="row">
        <ProductCard
          name={"K-Swiss V8 - Masculino"}
          image={sneaker}
          price={"$200"}
          priceDiscount={"$100"}
        />

        <ProductCard
          name={"K-Swiss V8 - Masculino"}
          image={sneaker}
          price={"$200"}
          priceDiscount={"$100"}
        />

        <ProductCard
          name={"K-Swiss V8 - Masculino"}
          image={sneaker}
          price={"$200"}
          priceDiscount={"$100"}
        />

        <ProductCard
          name={"K-Swiss V8 - Masculino"}
          image={sneaker}
          price={"$200"}
          priceDiscount={"$100"}
        />
      </div>
      <div className="row">
        <ProductCard
          name={"K-Swiss V8 - Masculino"}
          image={sneaker}
          price={"$200"}
          priceDiscount={"$100"}
        />

        <ProductCard
          name={"K-Swiss V8 - Masculino"}
          image={sneaker}
          price={"$200"}
          priceDiscount={"$100"}
        />

        <ProductCard
          name={"K-Swiss V8 - Masculino"}
          image={sneaker}
          price={"$200"}
          priceDiscount={"$100"}
        />

        <ProductCard
          name={"K-Swiss V8 - Masculino"}
          image={sneaker}
          price={"$200"}
          priceDiscount={"$100"}
        />
      </div>
    </section>
  );
}
