import Categoria from "../../models/Categoria.js";
import Produto from "../../models/Produto.js";
import ProdutoCor from "../../models/ProdutoCor.js";
import ProdutoImagem from "../../models/ProdutoImagem.js";

const up = async () => {
  try {
    // Verifica se a categoria 'Calca' já existe
    let categoria = await Categoria.findOne({ where: { nome: "Calca" } });
    if (!categoria) {
      // Insere a categoria 'Calca'
      categoria = await Categoria.create({
        nome: "Calca",
        descricao: "Calca esportivos e casuais.",
      });
    }

    // Inserção dos Calca
    // Adicione a lógica de inserção de produtos, cores e imagens aqui

  } catch (error) {
    console.error("Erro ao inserir dados iniciais:", error);
  }
};

// Exporta a função `up` como padrão
export default { up };
