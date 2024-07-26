import { Link } from "react-router-dom";
import "./Navigation.css";

export function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/productlist">Produtos</Link>
        </li>
        <li>
          <Link to="/">Categorias</Link>
        </li>
        <li>
          <Link to="/">Meus Pedidos</Link>
        </li>
      </ul>
    </nav>
  );
}
