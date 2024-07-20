import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import minicart from "../../assets/mini-cart.svg";
import search from "../../assets/search-icon.svg";
import "./Header.css";

export function Header() {
  return (
    <header>
      <div className="headerWrapper">
        <div className="logo">
          <Logo />
        </div>
        <form id="pesquisa">
          <input type="text" placeholder="Pesquisar produto..." />
          <button>
            <img src={search} alt="" />
          </button>
        </form>
        <div className="redirect">
          <a href="">Cadastre-se</a>
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
