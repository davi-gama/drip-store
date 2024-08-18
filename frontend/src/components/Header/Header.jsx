import { Logo } from "../Logo/Logo";
import { NavBar } from "../NavBar/NavBar";
import { Link, useLocation } from "react-router-dom";
import minicart from "../../assets/mini-cart.svg";
import search from "../../assets/search-icon.svg";
import { useState, useEffect } from "react";
import "./Header.css";

export function Header() {
  const [user, setUser] = useState(null); // Estado para armazenar o usuário

  useEffect(() => {
    // Obtém o usuário do localStorage quando o componente é montado
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove o usuário do localStorage ao fazer logout
    setUser(null);
  };

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
                <img src={search} alt="Ícone de lupa" />
              </button>
            </form>

            {!user ? (
              <div className="redirect">
                <Link to="/signup">Cadastre-se</Link>
                <Link to="/login">
                  <button>Entrar</button>
                </Link>
              </div>
            ) : (
              <div className="redirect">
                <span>Bem-vindo, {user.nome_completo}</span>
                <Link to="/" onClick={handleLogout}>
                  Logout
                </Link>
              </div>
            )}

            <div className="carrinho">
              <button type="submit">
                <img src={minicart} alt="Ícone de carrinho de compras" />
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
