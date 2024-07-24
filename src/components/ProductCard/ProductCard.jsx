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
              <span className="preco precoOriginal ">{price}</span>
              <strong className="preco precoDesconto">{priceDiscount}</strong>
            </div>
          ) : (
            <span className="precoProduto">{price}</span>
          )}
        </div>
      </div>
    </>
  );
}
