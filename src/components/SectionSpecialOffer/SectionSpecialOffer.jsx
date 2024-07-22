import jordan from "/home-slide-9.png";
import "./SectionSpecialOffer.css";

export function SectionSpecialOffer() {
  return (
    <section className="oferta-especial">
      <div className="container3">
        <div className="foto">
          <div className="row1">
            <img src={jordan} alt="" />
          </div>
          <div className="col">
            <h1>Oferta Especial </h1>
            <h3>Air Jordan edição de colecionador</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              at officia voluptatibus est dolor temporibus laborum neque eos,
              veritatis veniam reprehenderit aperiam omnis! Nisi nemo sequi quia
              numquam eveniet aspernatur impedit quaerat.
            </p>
            <button>Ver Oferta</button>
          </div>
        </div>
      </div>
    </section>
  );
}
