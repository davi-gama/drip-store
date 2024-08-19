import { Link } from "react-router-dom";
import "./ProductCard.css";

export function ProductCard({ image, link, name, price, priceDiscount }) {
  return (
    <>
      <div className="Card">
        <Link to={link}>
          <div className="CardImg">
            <img src={image} alt="Produto" />
          </div>
        </Link>
        <div className="infoProduto">
          <Link to={link}>
            <p className="titulo">{name}</p>
          </Link>
          {priceDiscount ? (
            <div>
              <span className="precoOriginal ">{price} R$</span>
              <strong className="precoDesconto">{priceDiscount} R$</strong>
            </div>
          ) : (
            <span className="precoDesconto">{price}</span>
          )}
        </div>
      </div>
    </>
  );
}