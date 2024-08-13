import "./HomePageSlide.css";
import sneaker from "/white-sneaker.png";

export function HomePageSlide() {
  return (
    <div className="home-page-slider">
      <div className="slider-info">
        <h4>Melhores ofertas personalizadas</h4>
        <h1>Queima de estoque Nike 🔥</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, vero!
        </p>
        <button>Ver Oferta</button>
      </div>
      <div className="slider-image">
        <img src={sneaker} alt="tênis nike air force" />
      </div>
    </div>
  );
}
