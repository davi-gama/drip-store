import { Link } from "react-router-dom";
import "./ProductCard.css";

export function ProductCard({ image, link, name, price, priceDiscount, category }) {
  return (
    <>
      <div className="Card">
        <Link to={link}>
          <div className="CardImg">
            <img src={image} alt="Produto" />
          </div>
        </Link>
        <div className="infoProduto">
          <p className="categoria">{category}</p>
          <Link to={link}>
            <p className="titulo">{name}</p>
          </Link>
          {priceDiscount ? (
            <div>
              <span className="precoOriginal ">R$ {price}</span>
              <strong className="precoDesconto">R$ {priceDiscount}</strong>
            </div>
          ) : (
            <span className="precoDesconto">{price}</span>
          )}
        </div>
      </div>
    </>
  );
}
