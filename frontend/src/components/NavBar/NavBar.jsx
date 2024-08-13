import { NavLink } from "react-router-dom";
import "./NavBar.css";

export function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/productlist" activeclassname="active">
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink to="/category" activeclassname="active">
            Categorias
          </NavLink>
        </li>
        <li>
          <NavLink to="/order" activeclassname="active">
            Meus Pedidos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
