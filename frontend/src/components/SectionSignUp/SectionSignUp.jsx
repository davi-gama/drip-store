import "./SectionSignUp.css";

export function SectionSignUp() {
  return (
    <div className="section-signup">
      <div className="signup-form">
        <form id="signup">
          <div className="profile-form">
            <h3>Informações Pessoais</h3>
            <hr />

            <label htmlFor="inputNome">Nome Completo *</label>
            <input
              type="text"
              id="inputNome"
              placeholder="Insira seu nome"
              required
            />

            <label htmlFor="inputCPF">CPF *</label>
            <input
              type="text"
              id="inputCPF"
              placeholder="Insira seu CPF"
              required
            />

            <label htmlFor="inputEmail">E-mail *</label>
            <input
              type="text"
              id="inputEmail"
              placeholder="Insira seu email"
              required
            />

            <label htmlFor="inputCelular">Celular *</label>
            <input
              type="text"
              id="inputCelular"
              placeholder="Insira seu celular"
              required
            />
          </div>

          <div className="delivery-form">
            <h3>Informações de Entrega</h3>
            <hr />

            <label htmlFor="inputEndereco">Endereço *</label>
            <input
              type="text"
              id="inputEndereco"
              placeholder="Insira seu endereço"
              required
            />

            <label htmlFor="inputBairro">Bairro *</label>
            <input
              type="text"
              id="inputBairro"
              placeholder="Insira seu bairro"
              required
            />

            <label htmlFor="inputCidade">Cidade *</label>
            <input
              type="text"
              id="inputCidade"
              placeholder="Insira sua cidade"
              required
            />

            <label htmlFor="inputCEP"> CEP *</label>
            <input
              type="text"
              id="inputCEP"
              placeholder="Insira seu CEP"
              required
            />

            <label htmlFor="inputComplemento">Complemento</label>
            <input
              type="text"
              id="inputComplemento"
              placeholder="Insira Complemento"
            />
          </div>

          <div className="opt-in">
            <input type="checkbox" id="inputOfertas" /> Quero receber por email
            ofertas e novidades das lojas da Digital Store. A frequência de
            envios pode variar de acordo com a interação do cliente.
          </div>

          <div className="div-submit">
            <button>Criar Conta</button>
          </div>
        </form>
      </div>
    </div>
  );
}
