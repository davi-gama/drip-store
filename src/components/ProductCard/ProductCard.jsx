import "./ProductCard.css";

export function ProductCard({ image, name, price, priceDiscount }) {
  return (
    <>
      <div className="Card">
        <div className="CardImg">
          <img src={image} alt="Produto" />
        </div>
        <div className="infoProduto">
          <p className="titulo">{name}</p>
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
