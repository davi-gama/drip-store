import star from "../../assets/star-icon.svg";
import starFilled from "../../assets/star-icon-filled.svg";
import "./BuyBox.css";

export function StarsRating(stars) {
  console.log(stars);
  if (stars == 0) {
    return (
      <span className="stars-icon">
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
      </span>
    );
  } else if (stars >= 1 && stars < 2) {
    return (
      <span className="stars-icon">
        <img src={starFilled} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
      </span>
    );
  } else if (stars >= 2 && stars < 3) {
    return (
      <span className="stars-icon">
        <img src={starFilled} />
        <img src={starFilled} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
      </span>
    );
  } else if (stars >= 3 && stars < 4) {
    return (
      <span className="stars-icon">
        <img src={starFilled} />
        <img src={starFilled} />
        <img src={starFilled} />
        <img src={star} />
        <img src={star} />
      </span>
    );
  } else if (stars >= 4 && stars < 5) {
    return (
      <span className="stars-icon">
        <img src={starFilled} />
        <img src={starFilled} />
        <img src={starFilled} />
        <img src={starFilled} />
        <img src={star} />
      </span>
    );
  } else {
    return (
      <span className="stars-icon">
        <img src={starFilled} />
        <img src={starFilled} />
        <img src={starFilled} />
        <img src={starFilled} />
        <img src={starFilled} />
      </span>
    );
  }
}

export function BuyBox(props) {
  return (
    <div className="buy-box">
      <h1 className="name">{props.name}</h1>
      <span className="reference">Casual | Nike | {props.reference}</span>
      <div className="avaliacao">
        {StarsRating(props.star)}
        <span className="stars-number">
          {props.star} <img src={star} />
        </span>
        <span className="rating">({props.rating} avaliações)</span>
      </div>
      {props.priceDiscount ? (
        <div className="preco-produto">
          <span className="moeda">R$</span>
          <strong className="precoDesconto">{props.priceDiscount}</strong>
          <span className="precoOriginal ">{props.price}</span>
        </div>
      ) : (
        <span className="precoDesconto">{props.price}</span>
      )}
      <div className="description">
        <h2>Descrição do produto</h2>
        <p>{props.description}</p>
      </div>
      <button>COMPRAR</button>
    </div>
  );
}
