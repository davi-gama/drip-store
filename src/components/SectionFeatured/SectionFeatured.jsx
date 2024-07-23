import camiseta from "../../assets/icon-shirt.svg";
import calca from "../../assets/icon-pants.svg";
import headphone from "../../assets/icon-headphone.svg";
import tenis from "../../assets/icon-sneaker.svg";
import "./SectionFeatured.css";

export function SectionFeatured() {
  return (
    <section className="colecoes">
      <div className="icone">
        <img src={camiseta} alt="ícone de camisa" />
        <h3>Camisetas</h3>
      </div>

      <div className="icone">
        <img src={calca} alt="ícone de calça" />
        <h3>Calças</h3>
      </div>

      <div className="icone">
        <img src={calca} alt="ícone de calça" />
        <h3>Bonés</h3>
      </div>

      <div className="icone">
        <img src={headphone} alt="ícone de headphone" />
        <h3>Headphones</h3>
      </div>

      <div className="icone">
        <img src={tenis} alt="ícone de tênis" />
        <h3>Tênis</h3>
      </div>
    </section>
  );
}
