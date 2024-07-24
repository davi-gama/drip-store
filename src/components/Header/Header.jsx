import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import minicart from "../../assets/mini-cart.svg";
import search from "../../assets/search-icon.svg";

import "./Header.css";

export function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <div className="logo">
          <Logo fill="var(--primary)" />
        </div>
        <form>
          <input type="text" id="pesquisa" placeholder="Pesquisar produto..." />
          <button>
            <img src={search} alt="ícone de lupa" />
          </button>
        </form>
        <div className="redirect">
          <Link to="/">Cadastre-se</Link>
          <button>Entrar</button>
        </div>
        <div className="carrinho">
          <button type="submit">
            <img src={minicart} alt="ícone de carrinho de compras" />
          </button>
        </div>
      </div>
      <Navigation />
    </header>
  );
}
