import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Card } from "../../components/ProductCard/ProductCard";

export function HomePage() {
  return (
    <>
      <Header />
      <Card
        name={"K-Swiss v8 - Masculino"}
        image={
          "https://assets.adidas.com/images/w_600,f_auto,q_auto/f9d52817f7524d3fb442af3b01717dfa_9366/K-Swiss v8 - Masculino_Runfalcon_3_Preto_HQ3790_01_standard.jpg"
        }
        price={"$200"}
        priceDiscount={"$100"}
      />

      <Footer />
    </>
  );
}
