import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import Produto from "../../../public/white-sneaker.png";
import "./ProductViewPage.css";


import star from "../../assets/star-icon.svg"


export function ProductViewPage() {
  return (
    <>
      <Header />
      <section className="produto-Informacoes">
        <h3>Caminho do Produto</h3>
        <div className="container">

          {/* Imagem Do Tênis */}
          <div className="productImage">
            <img src={Produto} alt="Nike" />
          </div>

          {/* Detalhes/Informações do Produto */}
          <div className="info">
            <h3>Tênis Nike Revolution 6 Next Nature Masculino</h3>
            <h5>Casual | Nike | REF:38416711</h5>
            <img src={star} alt="" />

            <div className="preco">
              <h6>R$</h6>
              <h3>219,00</h3>
              <h5>219,00</h5>
            </div>

            <div className="descricao">
              <h3>Descrião do produto</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur magni doloremque rem voluptates aspernatur. Ea error unde excepturi perferendis, labore cumque, blanditiis, minus non accusamus dolorem vel soluta.</p>
            </div>

            <div className="tamanhos">
              
              <h3>Tamanhos </h3>
              <br />
              
              <div className="pe1">39</div>
              <div className="pe2">40</div>
              <div className="pe3">41</div>
              <div className="pe4">42</div>
              <div className="pe5">43</div>
            
            </div>






          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
