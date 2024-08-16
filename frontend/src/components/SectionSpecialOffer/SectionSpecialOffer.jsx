import misspiggy from "/home-slide-9.png";
import "./SectionSpecialOffer.css";

export function SectionSpecialOffer() {
  return (
    <section className="oferta-especial">
      <div className="jordan">
        <img src={misspiggy} alt="Nike SB 'Miss Piggy'" />
      </div>
      <div className="info">
        <h1>Oferta Especial </h1>
        <h3>Air Jordan edição de colecionador</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at
          officia voluptatibus est dolor temporibus laborum neque eos, veritatis
          veniam reprehenderit aperiam omnis! Nisi nemo sequi quia numquam
          eveniet aspernatur impedit quaerat.
        </p>
        <button>Ver Oferta</button>
      </div>
    </section>
  );
}
