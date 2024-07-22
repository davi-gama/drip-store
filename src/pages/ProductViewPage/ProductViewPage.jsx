import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import Produto from "../../../public/sneaker-card.png";
import "./ProductViewPage.css";

// import "./ProductViewPage.css";
// import  {BuyBox}  from "../../components/BuyBox/BuyBox.jsx";
// import { Section } from "../../components/Section/Section";

// const ProductImage = [
//   {src: "/white-sneaker.png"}

// ]

export function ProductViewPage() {
  return (
    <>
      <Header />

      <section className="produto-Informacoes">
        <h3>Caminho do Produto</h3>

        <div className="container">

        <div className="produtoImagem">
          <img src={Produto} alt="" />
        </div>

        <div className="informacoes">
          <h1>Tênis Nike Revolution 6 Next Nature Masculino</h1>
          
          <img src="" alt="" />
        </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
