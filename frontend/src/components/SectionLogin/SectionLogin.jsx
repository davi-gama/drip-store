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
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();  // useNavigate hook for redirection
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Verifica se os campos estão preenchidos
    if (!email || !password) {
      setError("Preencha todos os campos");
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Email inválido");
      return;
    }

    // Validação de senha (mínimo 6 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      setError("Senha inválida. A senha deve ter pelo menos 6 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.");
      return;
    }

    // Chama a API para realizar o login
    try {
      const response = await axios.post(
        "http://localhost:3000/users",  // URL da API que será chamada
        { email, password },             // Dados que serão enviados no corpo da requisição
        {
          headers: {
            "Content-Type": "application/json",  // Define o tipo de conteúdo como JSON
          },
        }
      );

      // Verifica a resposta do servidor
      if (response.status === 200) {  // Se a resposta for 200, significa que o login foi bem-sucedido
        setUser(response.data.user); // Atualiza o estado com os dados do usuário
        alert("Login efetuado com sucesso");
        navigate("/"); // Redireciona para a página inicial
      } else {
        setError("Erro ao realizar login. Verifique suas credenciais.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      if (!error?.response) {
        setError("Erro ao acessar a API. Tente novamente mais tarde.");
      } else if (error.response.status === 400) {
        setError("Email ou senha inválidos.");
      } else {
        setError(`Ocorreu um erro inesperado: ${error.response.data.message || "Tente novamente."}`);
      }
    }
  };

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="inputPassword">Senha *</label>
          <input
            type="password"
            id="inputPassword"
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
            <h3> Ou faça login com </h3>
            <Link to="/">
              <img src={gmail} alt="Gmail login" />
            </Link>
            <Link to="/">
              <img src={facebook} alt="Facebook login" />
            </Link>
          </div>

          {error && <p className="error">{error}</p>}
          
        </form>
      </div>

      <div className="login-image">
        <img src={sneaker} alt="par de sneakers" />
      </div>
    </div>
  );
}
