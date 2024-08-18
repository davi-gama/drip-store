import { Link, useNavigate } from "react-router-dom";
import sneaker from "/sneakers-login.png";
import facebook from "../../assets/facebook-colored.svg";
import gmail from "../../assets/gmail.svg";
import "./SectionLogin.css";
import axios from "axios";
import { useState } from "react";

export function SectionLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // useNavigate hook for redirection

  const handleLogin = async (e) => {
    e.preventDefault();

    // Verifica se os campos estão preenchidos
    if (!email || !password) {
      alert("Preencha todos os campos");
      return;
    }

    // Chama a API para realizar o login
    try {
      const response = await axios.post(
        "http://localhost:3000/users/login", // URL da API que será chamada
        { email, senha: password }, // Dados que serão enviados no corpo da requisição
        {
          headers: {
            "Content-Type": "application/json", // Define o tipo de conteúdo como JSON
          },
        }
      );

      // Verifica a resposta do servidor
      if (response.status === 200) {
        // Se a resposta for 200, significa que o login foi bem-sucedido
        const { user } = response.data;
        localStorage.setItem("user", JSON.stringify(user));
        alert("Login efetuado com sucesso");
        navigate("/");
      } else {
        alert("Erro ao realizar login. Verifique suas credenciais.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      if (!error?.response) {
        alert("Erro ao acessar a API. Tente novamente mais tarde.");
      } else if (error.response.status === 400) {
        alert("Email ou senha inválidos.");
      } else {
        alert(
          `Ocorreu um erro inesperado: ${
            error.response.data.message || "Tente novamente."
          }`
        );
      }
    }
  };

  return (
    <div className="section-login">
      <div className="login-wrapper">
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="inputSenha">Senha *</label>
          <input
            type="password"
            id="inputSenha"
            placeholder="Insira sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <h5>Esqueci minha senha</h5>

          <div className="access">
            <button onClick={handleLogin}>Acessar Conta</button>
          </div>

          <div className="login-social">
            <h4>Ou faça login com</h4>
            <Link to="/">
              <img src={gmail} alt="Ícone do Gmail" />
            </Link>
            <Link to="/">
              <img src={facebook} alt="Ícone do Facebook" />
            </Link>
          </div>
        </form>
      </div>

      <div className="login-image">
        <img src={sneaker} alt="Nike W Air Max Dia" />
      </div>
    </div>
  );
}
