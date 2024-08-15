import { Logo } from "../Logo/Logo";
import { NavBar } from "../NavBar/NavBar";
import { Link, useLocation } from "react-router-dom";
import minicart from "../../assets/mini-cart.svg";
import search from "../../assets/search-icon.svg";
import { useState } from "react";
import "./Header.css";

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Estado para controlar se o usuário está logado

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
            <form id="search">
              <input
                type="text"
                id="pesquisa"
                placeholder="Pesquisar produto..."
              />
              <button>
                <img src={search} alt="ícone de lupa" />
              </button>
            </form>
            
            {!isLoggedIn ? (
              <div className="redirect">
                <Link to="/signup">Cadastre-se</Link>
                <Link to="/login">
                  <button>Entrar</button>
                </Link>
              </div>
            ) : (
              <div className="redirect">
                <Link to="/" onClick={() => setIsLoggedIn(false)}>Logout</Link>
              </div>
            )}
            
            <div className="carrinho">
              <button type="submit">
                <img src={minicart} alt="ícone de carrinho de compras" />
              </button>
            </div>
          </>
        )}
      </div>
      {useLocation().pathname === "/login" ||
      useLocation().pathname === "/signup" ? null : (
        <NavBar />
      )}
    </header>
  );
}
