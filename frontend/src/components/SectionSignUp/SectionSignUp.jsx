import "./SectionSignUp.css";
import axios from "axios";
import { useState } from "react";
import MaskedInput from "react-text-mask";
import { useNavigate } from "react-router-dom";

export function SectionSignUp() {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    telefone: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    cep: "",
    complemento: "",
  });

  const navigate = useNavigate(); // Hook para redirecionamento

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    let errorMessages = [];

    if (errorMessages.length > 0) {
      alert(errorMessages.join(" "));
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.email ||
      !formData.senha ||
      !formData.telefone ||
      !formData.cpf ||
      !formData.nome ||
      !formData.cidade ||
      !formData.cep ||
      !formData.bairro ||
      !formData.rua ||
      !formData.numero
    ) {
      alert("Preencha todos os campos");
      return;
    }

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/users/cadastro",
        formData
      );

      console.log("Resposta da API:", response.data);
      setFormData({
        nome: "",
        cpf: "",
        email: "",
        senha: "",
        telefone: "",
        rua: "",
        numero: "",
        bairro: "",
        cidade: "",
        cep: "",
        complemento: "",
      });

      alert(
        "Conta criada com sucesso! Você será redirecionado para a tela de login."
      );
      navigate("/login");
    } catch (err) {
      alert("Ocorreu um erro ao enviar seus dados. Tente novamente.");
      console.error("Erro ao enviar dados:", err);
    }
  };

  return (
    <div className="section-signup">
      <div className="signup-form">
        <form id="signup" onSubmit={handleSubmit}>
          <div className="profile-form">
            <h3>Informações Pessoais</h3>
            <hr />

            <label htmlFor="nome">Nome Completo *</label>
            <input
              type="text"
              id="nome"
              placeholder="Insira seu nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />

            <label htmlFor="cpf">CPF *</label>
            <MaskedInput
              mask={[
                /\d/,
                /\d/,
                /\d/,
                ".",
                /\d/,
                /\d/,
                /\d/,
                ".",
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
              ]}
              id="cpf"
              placeholder="Insira seu CPF"
              value={formData.cpf}
              onChange={handleChange}
              guide={false}
              required
            />

            <label htmlFor="email">E-mail *</label>
            <input
              type="email"
              id="email"
              placeholder="Insira seu email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="senha">Senha *</label>
            <input
              type="password"
              id="senha"
              placeholder="Insira sua senha"
              value={formData.senha}
              onChange={handleChange}
              required
            />

            <label htmlFor="telefone">Telefone *</label>
            <MaskedInput
              mask={[
                "(",
                /\d/,
                /\d/,
                ")",
                " ",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
              ]}
              id="telefone"
              placeholder="Insira seu telefone"
              value={formData.telefone}
              onChange={handleChange}
              guide={false}
              required
            />
          </div>

          <div className="delivery-form">
            <h3>Informações de Entrega</h3>
            <hr />

            <label htmlFor="rua">Rua *</label>
            <input
              type="text"
              id="rua"
              placeholder="Insira o nome da sua rua"
              value={formData.rua}
              onChange={handleChange}
              required
            />

            <label htmlFor="numero">Número *</label>
            <input
              type="text"
              id="numero"
              placeholder="Insira o número da sua residência"
              value={formData.numero}
              onChange={handleChange}
              required
            />

            <label htmlFor="bairro">Bairro *</label>
            <input
              type="text"
              id="bairro"
              placeholder="Insira seu bairro"
              value={formData.bairro}
              onChange={handleChange}
              required
            />

            <label htmlFor="cidade">Cidade *</label>
            <input
              type="text"
              id="cidade"
              placeholder="Insira sua cidade"
              value={formData.cidade}
              onChange={handleChange}
              required
            />

            <label htmlFor="cep">CEP *</label>
            <MaskedInput
              mask={[/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]}
              id="cep"
              placeholder="Insira seu CEP"
              value={formData.cep}
              onChange={handleChange}
              guide={false}
              required
            />

            <label htmlFor="complemento">Complemento</label>
            <input
              type="text"
              id="complemento"
              placeholder="Insira complemento"
              value={formData.complemento}
              onChange={handleChange}
            />
          </div>

          <div className="opt-in">
            <input
              type="checkbox"
              id="receberOfertas"
              checked={formData.receberOfertas}
              onChange={handleChange}
            />{" "}
            Quero receber por email ofertas e novidades das lojas da Digital
            Store. A frequência de envios pode variar de acordo com a interação
            do cliente.
          </div>
          <div className="div-submit">
            <button type="submit">Criar Conta</button>
          </div>
        </form>
      </div>
    </div>
  );
}
