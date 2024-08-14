import "./SectionSignUp.css";

export function SectionSignUp() {
  return (
    <div className="section-signup">
      <div className="signup-form">
        <form>
          <div className="profile-form">

          <h3>Informações Pessoais</h3>
          <hr />

          <label htmlFor="inputName">Nome Completo *</label>
          <input type="text" placeholder="Insira seu nome" required />

          <label htmlFor="inputCPF">CPF * </label>
          <input type="text" placeholder="Insira seu CPF" required />

          <label htmlFor="inputEmail">E-mail *</label>
          <input type="text" placeholder="Insira seu email" required />

          {/* <label htmlFor="inputEmail">Senha *</label>
          <input type="text" placeholder="Insira sua senha" required /> */}

          <label htmlFor="inputNumber">Celular *</label>
          <input type="text" placeholder="Insira seu celular" required />
          </div>

          <div className="delivery-form">
          <h3>Informações de Entrega</h3>
          <hr />

          <label htmlFor="inputAdress">Endereço *</label>
          <input type="text" placeholder="Insira seu endereço" required />

          <label htmlFor="input">Bairro *</label>
          <input type="text" placeholder="Insira seu bairro" required />

          <label htmlFor="">Cidade *</label>
          <input type="text" placeholder="Insira sua cidade" required />

          <label htmlFor=""> CEP *</label>
          <input type="text" placeholder="Insira seu CEP" required />

          <label htmlFor=""> Complemento</label>
          <input type="text" placeholder="Insira Complemento" />
          </div>

        <div className="opt-in">
          <input type="checkbox" /> Quero receber por email ofertas e novidades
          das lojas da Digital Store. A frequência de envios pode variar de
          acordo com a interação do cliente.
        </div>

        <div className="submit">
          <button>Criar Conta</button>
        </div>
        </form>
      </div>
    </div>
  );
}
