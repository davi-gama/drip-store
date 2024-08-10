import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import minicart from "../../assets/mini-cart.svg";
import search from "../../assets/search-icon.svg";

import "./Header.css";

export function Header(props) {
  return (
    <header>
      <div className="header-wrapper">
        <div className="logo">
          <Logo fill="var(--primary)" />
        </div>
        {props.showResto == false ? null : (
          <>
            <form>
              <input
                type="text"
                id="pesquisa"
                placeholder="Pesquisar produto..."
              />
              <button>
                <img src={search} alt="ícone de lupa" />
              </button>
            </form>
            <div className="redirect">
              <Link to="/">Cadastre-se</Link>
              <Link to="/login">
                <button>Entrar</button>
              </Link>
            </div>
            <div className="carrinho">
              <button type="submit">
                <img src={minicart} alt="ícone de carrinho de compras" />
              </button>
            </div>
          </>
        )}
      </div>
      {props.showNavBar == false ? null : <Navigation />}
    </header>
  );
}
