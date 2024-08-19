import "./SectionEditProfile.css";
import axios from "axios";
import { useState, useEffect } from "react";
import MaskedInput from "react-text-mask";
import { useNavigate } from "react-router-dom";

export function SectionEditProfile() {
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
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data
    const fetchUserData = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
          setUserId(storedUser.id);
          const response = await axios.get(
            `http://localhost:3000/users/${storedUser.id}`
          );
          const user = response.data;
          setFormData({
            nome: user.nome_completo,
            cpf: user.cpf,
            email: user.email,
            senha: "",
            telefone: user.telefone,
            rua: user.rua,
            numero: user.numero,
            bairro: user.bairro,
            cidade: user.cidade,
            cep: user.cep,
            complemento: user.complemento || "",
          });
        }
      } catch (err) {
        console.error("Erro ao buscar dados do usuário:", err);
      }
    };

    fetchUserData();
  }, []);

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

    // Add validations if necessary

    if (errorMessages.length > 0) {
      alert(errorMessages.join(" "));
      isValid = false;
    }

    return isValid;
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      // Atualize o perfil do usuário na API
      await axios.put(`http://localhost:3000/users/${userId}`, {
        nome_completo: formData.nome,
        email: formData.email,
        senha: formData.senha,
        telefone: formData.telefone,
        cpf: formData.cpf,
        endereco: {
          rua: formData.rua,
          numero: formData.numero,
          bairro: formData.bairro,
          cidade: formData.cidade,
          cep: formData.cep,
          complemento: formData.complemento,
        },
      });

      // Atualiza o perfil do usuário no localStorage
      const updatedUser = {
        ...JSON.parse(localStorage.getItem("user")),
        nome_completo: formData.nome,
      };
      localStorage.setItem("user", JSON.stringify(updatedUser));

      alert("Perfil atualizado com sucesso!");
      navigate("/");
    } catch (err) {
      alert("Ocorreu um erro ao atualizar seu perfil. Tente novamente.");
      console.error("Erro ao atualizar perfil:", err);
    }
  };

  const handleDelete = async () => {
    if (
      window.confirm(
        "Tem certeza de que deseja excluir sua conta? Esta ação não pode ser desfeita."
      )
    ) {
      try {
        await axios.delete(`http://localhost:3000/users/${userId}`);
        localStorage.removeItem("user");
        alert("Conta excluída com sucesso!");
        navigate("/");
      } catch (err) {
        alert("Ocorreu um erro ao excluir sua conta. Tente novamente.");
        console.error("Erro ao excluir conta:", err);
      }
    }
  };

  return (
    <div className="section-editprofile">
      <div className="editprofile-form">
        <form id="editprofile" onSubmit={handleUpdate}>
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
              placeholder="Insira sua nova senha (deixe em branco para manter a atual)"
              value={formData.senha}
              onChange={handleChange}
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

          <div className="div-edit">
            <button type="submit">Atualizar Perfil</button>
            <button type="button" onClick={handleDelete} className="btn-delete">
              Excluir Conta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
