import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import Produto from "../../assets/White-sneaker.svg";
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

            <div className="price">
              <h6>R$</h6>
              <h3>219,00</h3>
              <h5>219,00</h5>
            </div>

            <div className="description">
              <h3>Descrião do produto</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur magni doloremque rem voluptates aspernatur. Ea error unde excepturi perferendis, labore cumque, blanditiis, minus non accusamus dolorem vel soluta.</p>
            </div>

            <div className="tamanhos">
              <h3>Tamanho </h3>
              <div className="pe">
                <div className="number"><p>39</p></div>
                <div className="number"><p>40</p></div>
                <div className="number"><p>41</p></div>
                <div className="number"><p>42</p></div>
                <div className="number"><p>43</p></div>
              </div>
            </div>

            <div className="colors">
              <h3>Tamanho</h3>
              <div className="types">
                <button id="aqua"></button>
                <button id="red"></button>
                <button id="gray"></button>
                <button id="eclesiatic"></button>
              </div>
            </div>

            <div className="comprar">
              <button>Comprar</button>
            </div>
          </div>

          <div className="outros">
            <div className="box">
              <div className="produto">
                <button>
                  <img id="box1" src={Produto} alt="" />
                </button>

                <button>
                  <img id="box2" src={Produto} alt="" />
                </button>

                <button>
                  <img id="box3" src={Produto} alt="" />
                </button>

                <button>
                  <img id="box4" src={Produto} alt="" />
                </button>

                <button>
                  <img id="box5" src={Produto} alt="" />
                </button>
                
              </div>
            </div>
          </div>





        </div>
      </section>

      <Footer />
    </>
  );
}
