import { Logo } from "../Logo/Logo";
import { NavBar } from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import minicart from "../../assets/mini-cart.svg";
import search from "../../assets/search-icon.svg";

import "./Header.css";

export function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <div className="logo">
          <Link to="/">
            <Logo fill="var(--primary)" />
          </Link>
        </div>
        {useLocation().pathname === "/login" ||
        useLocation().pathname === "/signup" ? null : (
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
              <Link to="/signup">Cadastre-se</Link>
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
      {useLocation().pathname == "/login" ||
      useLocation().pathname == "/signup" ? null : (
        <NavBar />
      )}
    </header>
  );
}
