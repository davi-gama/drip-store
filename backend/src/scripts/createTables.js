import configDB from "../config/db.js";
import Usuario from "../models/Usuario.js";
import Categoria from "../models/Categoria.js";
import Produto from "../models/Produto.js";
import ProdutoCor from "../models/ProdutoCor.js";
import ProdutoImagem from "../models/ProdutoImagem.js";
import Endereco from "../models/Endereco.js";
import Compra from "../models/Compra.js";
import Pedido from "../models/Pedido.js";

async function createTables() {
  try {
    await configDB.authenticate(); // Verifica a conexão com o banco de dados
    await Usuario.sync();
    await Categoria.sync();
    await Produto.sync();
    await ProdutoCor.sync();
    await ProdutoImagem.sync();
    await Endereco.sync();
    await Compra.sync();
    await Pedido.sync();

    console.log("\n3. Tabelas sincronizadas/criadas com sucesso.\n");
  } catch (error) {
    console.error("\nErro ao sincronizar as tabelas:", error);
  }
}

export default createTables;
