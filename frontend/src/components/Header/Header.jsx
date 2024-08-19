import { Logo } from "../Logo/Logo";
import { NavBar } from "../NavBar/NavBar";
import { Link, useLocation } from "react-router-dom";
import minicart from "../../assets/mini-cart.svg";
import search from "../../assets/search-icon.svg";
import usericon from "../../assets/user.svg";
import { useState, useEffect } from "react";
import "./Header.css";

export function Header() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fetchUser = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  function getFirstName(fullName) {
    if (!fullName) return "";
    return fullName.split(" ")[0];
  }

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
            ) : null}
            <div className="carrinho">
              <button type="submit">
                <img src={minicart} alt="Ícone de carrinho de compras" />
              </button>
            </div>
          </>
        )}
        {user ? (
          <div className="user-menu">
            <img className="user-icon" src={usericon} alt="ícone de usuário" />
            Olá, <span>&nbsp;</span>
            <span onClick={toggleMenu} className="user-name">
              {getFirstName(user.nome_completo)}
            </span>
            {menuOpen && (
              <div className="dropdown-menu">
                <button className="edit-button">
                  <Link to="/editprofile">Editar Perfil</Link>
                </button>
                <button className="logout-button" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : null}
      </div>
      {useLocation().pathname === "/login" ||
      useLocation().pathname === "/signup" ? null : (
        <NavBar />
      )}
    </header>
  );
}
