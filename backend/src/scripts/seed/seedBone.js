import Categoria from "../../models/Categoria.js";
import Produto from "../../models/Produto.js";
import ProdutoCor from "../../models/ProdutoCor.js";
import ProdutoImagem from "../../models/ProdutoImagem.js";

const up = async () => {
  try {
    // Verifica se a categoria 'Bonés' já existe
    let categoria = await Categoria.findOne({ where: { nome: "Bonés" } });
    if (!categoria) {
      // Insere a categoria 'Bonés'
      categoria = await Categoria.create({
        nome: "Bonés",
        descricao: "Bonés esportivos e casuais.",
      });
    }

    // Inserção dos bonés
    // Adicione a lógica de inserção de produtos, cores e imagens aqui

  } catch (error) {
    console.error("Erro ao inserir dados iniciais:", error);
  }
};

// Exporta a função `up` como padrão
export default { up };
