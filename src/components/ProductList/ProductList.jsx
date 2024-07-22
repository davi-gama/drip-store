import { ProductCard } from "../ProductCard/ProductCard";
import sneaker from "/sneaker-card.png";
import "./ProductList.css";

export function ProductSection() {
  const productItem = [
    {
      name: "Nome do produto 1",
      image: sneaker,
      price: 200,
      priceDiscount: 149.9,
      id: 1,
    },
    {
      name: "Nome do produto 2",
      image: "https://url.imagem/do/produto2.png",
      price: 49.9,
      id: 2,
    },
  ];

  return (
    <section className="section-trending">
      {productItem.map((item) => {
        console.log(item);
        return (
          <ProductCard
            key={item.id}
            name={"K-Swiss V8 - Masculino"}
            image={sneaker}
            price={"$200"}
            priceDiscount={"$100"}
          />
        );
      })}
      {/* <div className="product">
        <div className="section1">
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

        <div className="section1">
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

        <div className="section1">
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
        </div> */}
      {/* </div> */}
    </section>
  );
}
