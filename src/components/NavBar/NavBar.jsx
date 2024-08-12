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
          <NavLink to="/categories" activeclassname="active">
            Categorias
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders" activeclassname="active">
            Meus Pedidos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
