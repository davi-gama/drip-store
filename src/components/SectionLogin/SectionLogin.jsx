import { Link } from "react-router-dom";
import sneaker from "/sneakers-login.png";
import "./SectionLogin.css";
import facebook from "../../assets/facebook-colored.svg";
import gmail from "../../assets/gmail.svg";

export function SectionLogin() {
  return (
   
    <div className="section-login">

      <div className="login-form">
        <form id="login">
          <h1>Acesse sua conta</h1>
          <h3>
            Novo cliente? Então registre-se <Link to="/signup" id="cadastro">aqui</Link>
          </h3>

          <label>Login *</label>
          <input type="text" placeholder="Insira seu login ou email" required />

          <label>Senha *</label>
          <input type="password" placeholder="insira sua senha" required />

          <h5>
            Esqueci minha senha
          </h5>

          <div className="acess">

            <Link to="/" >
              <button>Acessar Conta</button>
            </Link>
          </div>

<div className="or">
          <h3> Ou faça login com </h3>
          <img src={gmail} alt="" />
          <img src={facebook} alt="" />
          

</div>
          
          
      

        </form>
      </div>

      <div className="login-image">
        <img src={sneaker} alt="par de sneakers" />
      </div>
    </div>
    
  );
}

