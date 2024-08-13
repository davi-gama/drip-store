import { Link } from "react-router-dom";
import sneaker from "/sneakers-login.png";
import facebook from "../../assets/facebook-colored.svg";
import gmail from "../../assets/gmail.svg";
import "./SectionLogin.css";

export function SectionLogin() {
  return (
    <div className="section-login">
      <div className="login-form">
        <form id="login">
          <h1>Acesse sua conta</h1>
          <h3>
            Novo cliente? Então registre-se{" "}
            <Link to="/signup" id="cadastro">
              aqui
            </Link>
          </h3>

          <label htmlFor="inputLogin">Login *</label>
          <input
            type="text"
            id="inputLogin"
            placeholder="Insira seu login ou email"
            required
          />

          <label htmlFor="inputPassword">Senha *</label>
          <input
            type="password"
            id="inputPassword"
            placeholder="Insira sua senha"
            required
          />

          <h5>Esqueci minha senha</h5>

          <div className="access">
            <button>Acessar Conta</button>
          </div>

          <div className="login-social">
            <h3> Ou faça login com </h3>
            <Link to="/">
              <img src={gmail} alt="" />
            </Link>
            <Link to="/">
              <img src={facebook} alt="" />
            </Link>
          </div>
        </form>
      </div>

      <div className="login-image">
        <img src={sneaker} alt="par de sneakers" />
      </div>
    </div>
  );
}