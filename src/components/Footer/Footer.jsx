import { Logo } from "../Logo/Logo";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import "./Footer.css";

export function Footer() {
  return (
    <>
      <footer>
        <div className="footer-wrapper">
          <div className="descricao">
            <Logo fill={"var(--white)"} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              atque?
            </p>
            <div className="social-icons">
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>
          <div className="info-categorias">
            <div className="info">
              <h4>Informação</h4>
              <ul className="links">
                <li>Sobre Drip Store</li>
                <li>Segurança</li>
                <li>Wishlist</li>
                <li>Blog</li>
                <li>Trabalhe conosco</li>
                <li>Meus pedidos</li>
              </ul>
            </div>
            <div className="categorias">
              <h4>Categorias</h4>
              <ul className="links">
                <li>Camisetas</li>
                <li>Calças</li>
                <li>Bonés</li>
                <li>Headphones</li>
                <li>Tênis</li>
              </ul>
            </div>
          </div>
          <div className="contato">
            <h4>Contato</h4>
            <address>
              Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
              60150-161
            </address>
            <address>(85) 3051-3411</address>
          </div>
        </div>
        <hr />
        <div className="copyright">
          <span>© 2024 Digital Store</span>
        </div>
      </footer>
    </>
  );
}
