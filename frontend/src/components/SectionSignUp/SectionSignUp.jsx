import "./SectionSignUp.css";
import axios from "axios";
import { useState } from "react";

export function SectionSignUp() {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    celular: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    cep: "",
    complemento: "",
    tipoAcesso: "client",  
  });

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
  
    // Validação do e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      errorMessages.push("E-mail inválido.");
      isValid = false;
    }
  
    // Validação do CPF
    const validateCPF = (cpf) => {
      cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
      if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false; // Verifica se todos os dígitos são iguais
  
      let sum = 0;
      let remainder;
  
      for (let i = 1; i <= 9; i++) sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
      remainder = (sum * 10) % 11;
      if (remainder === 10 || remainder === 11) remainder = 0;
      if (remainder !== parseInt(cpf.substring(9, 10))) return false;
  
      sum = 0;
      for (let i = 1; i <= 10; i++) sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
      remainder = (sum * 10) % 11;
      if (remainder === 10 || remainder === 11) remainder = 0;
      if (remainder !== parseInt(cpf.substring(10, 11))) return false;
  
      return true;
    };
  
    if (!validateCPF(formData.cpf)) {
      errorMessages.push("CPF inválido.");
      isValid = false;
    }
  
    // Validação do celular
    const celularPattern = /^(?:\+55\s?)?(?:\(\d{2}\)\s?)?\d{4,5}-\d{4}$/;
    if (!celularPattern.test(formData.celular)) {
      errorMessages.push("Celular inválido. Deve seguir um dos formatos aceitos.");
      isValid = false;
    }
  
    // Validação do CEP
    const cepPattern = /^\d{5}-?\d{3}$/;
    if (!cepPattern.test(formData.cep)) {
      errorMessages.push("CEP inválido. Deve conter 8 dígitos, com ou sem hífen.");
      isValid = false;
    }
  
    // Validação da senha
    const senhaPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,20}$/;
    if (!senhaPattern.test(formData.senha)) {
      errorMessages.push("Senha inválida. Deve ter entre 8 e 20 caracteres, incluindo uma letra maiúscula, um número e um caractere especial.");
      isValid = false;
    }
  
    setError(errorMessages.join(' '));
    return isValid;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/users/cadastro", formData);

      console.log("Resposta da API:", response.data);
      setFormData({
        nome: "",
        cpf: "",
        email: "",
        senha: "",
        celular: "",
        rua: "",
        numero: "",
        bairro: "",
        cidade: "",
        cep: "",
        complemento: "",
        receberOfertas: false,
        tipoAcesso: "false",
      });
      setError("");
    } catch (err) {
      setError("Ocorreu um erro ao enviar seus dados. Tente novamente.");
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
            <input
              type="text"
              id="cpf"
              placeholder="Insira seu CPF"
              value={formData.cpf}
              onChange={handleChange}
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

            <label htmlFor="celular">Celular *</label>
            <input
              type="text"
              id="celular"
              placeholder="Insira seu celular"
              value={formData.celular}
              onChange={handleChange}
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
            <input
              type="text"
              id="cep"
              placeholder="Insira seu CEP"
              value={formData.cep}
              onChange={handleChange}
              required
            />

            <label htmlFor="complemento">Complemento</label>
            <input
              type="text"
              id="complemento"
              placeholder="Insira Complemento"
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
            Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.
          </div>

          <div className="tipoAcesso">
            <label htmlFor="tipoAcesso">Tipo de Acesso *</label>
            <select
              name="tipoAcesso"
              id="tipoAcesso"
              value={formData.tipoAcesso}
              onChange={handleChange}
              required
            >
              <option value="admin">Administrador</option>
              <option value="client">Cliente</option>
            </select>
          </div>

          <div className="div-submit">
            <button type="submit">Criar Conta</button>
          </div>

          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
}
