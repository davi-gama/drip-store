import { Link } from "react-router-dom";
import "./SectionCollection.css";

export function SectionCollection() {
  return (
    <>
      <section className="destaques">
        <div className="collection-1">
          <p id="oferta">30% OFF</p>
          <Link to="/productlist">
            <button id="btnComprar">Comprar</button>
          </Link>
        </div>
        <div className="collection-2">
          <p id="oferta">30% OFF</p>
          <Link to="/productlist">
            <button id="btnComprar">Comprar</button>
          </Link>
        </div>
        <div className="collection-3">
          <p id="oferta">30% OFF</p>
          <Link to="/productlist">
            <button id="btnComprar">Comprar</button>
          </Link>
        </div>
      </section>
    </>
  );
}
