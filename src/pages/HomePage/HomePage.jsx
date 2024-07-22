import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Card } from "../../components/ProductCard/ProductCard";
import { List } from "../../components/ProductList/ProductList";

export function HomePage() {
  return (
    <>
      <Header />
      <Card
        name={"K-Swiss V8 - Masculino"}
        image={
          "https://www.leveshoes.com.br/wp-content/uploads/2022/07/IMG-20220727-WA0029.jpg"
        }
        price={"$200"}
        priceDiscount={"$100"}
      />

      <Footer />
    </>
  );
}
