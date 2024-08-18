import Categoria from "../../models/Categoria.js";
import Produto from "../../models/Produto.js";
import ProdutoCor from "../../models/ProdutoCor.js";
import ProdutoImagem from "../../models/ProdutoImagem.js";

const up = async () => {
  try {
    // Verifica se a categoria 'Camisetas' já existe
    let categoria = await Categoria.findOne({ where: { nome: "Camisetas" } });
    if (!categoria) {
      // Insere a categoria 'Camisetas'
      categoria = await Categoria.create({
        nome: "Camisetas",
        descricao: "Camisetas esportivas e casuais.",
      });
    }

    // Verifica se já existe o produto 'Camiseta Mizuno Energy Masculina'
    let produto = await Produto.findOne({
      where: { nome: "Camiseta Mizuno Energy Masculina" },
    });
    if (!produto) {
      // Insere o produto 'Camiseta Mizuno Energy Masculina'
      produto = await Produto.create({
        nome: "Camiseta Mizuno Energy Masculina",
        descricao:
          "Pronto para os exercícios ao ar livre ou na academia com Camiseta Mizuno Energy Masculina! Confeccionada em material leve que fornece excelente modelagem ao corpo, a peça apresenta design esportivo que garante ventilação interna. Adquira já essa camiseta Mizuno masculina!",
        preco: 99.99,
        preco_promocao: 70.0, // 30% de desconto
        label_promocao: true,
        marca: "Mizuno",
        genero: "masculino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(), // Gera uma referência aleatória
        categoria_id: categoria.id,
        finalidade: "corrida",
        estoque: 50,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([
        { produto_id: produto.id, cor: "Preto" },
        { produto_id: produto.id, cor: "Laranja" },
        { produto_id: produto.id, cor: "Cinza" },
      ]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem:
            "https://mizunobr.vtexassets.com/arquivos/ids/234560-1600-1600?v=638246052696930000&width=1600&height=1600&aspect=true",
        },
        {
          produto_id: produto.id,
          url_imagem:
            "https://mizunobr.vtexassets.com/arquivos/ids/229862-1600-1600?v=638139010300800000&width=1600&height=1600&aspect=true",
        },
        {
          produto_id: produto.id,
          url_imagem:
            "https://mizunobr.vtexassets.com/arquivos/ids/229827-1600-1600?v=638138905191400000&width=1600&height=1600&aspect=true",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log("Produto 'Camiseta Mizuno Energy Masculina' já existe.");
    }

    // Verifica se já existe o produto 'Camiseta Mizuno Run Spark Masculina'
    produto = await Produto.findOne({
      where: { nome: "Camiseta Mizuno Run Spark Masculina" },
    });
    if (!produto) {
      // Insere o produto 'Camiseta Mizuno Run Spark Masculina'
      produto = await Produto.create({
        nome: "Camiseta Mizuno Run Spark Masculina",
        descricao:
          "Aposte na versatilidade da Camiseta Mizuno Run Spark Masculina para complementar o seu sportwear. Essa peça é confeccionada em material macio ao toque da pele, respirável e com big logo em destaque para autenticidade. Vista seu tênis de corrida e essa camiseta masculina da Mizuno para dar o seu melhor a cada KM!",
        preco: 84.99,
        preco_promocao: 0, // sem desconto
        label_promocao: false,
        marca: "Mizuno",
        genero: "masculino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(), // Gera uma referência aleatória
        categoria_id: categoria.id,
        finalidade: "corrida",
        estoque: 50,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([
        { produto_id: produto.id, cor: "Preto" },
        { produto_id: produto.id, cor: "Azul" },
        { produto_id: produto.id, cor: "Cinza" },
      ]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem:
            "https://mizunobr.vtexassets.com/arquivos/ids/231059-1600-1600?v=638203672533500000&width=1600&height=1600&aspect=true",
        },
        {
          produto_id: produto.id,
          url_imagem:
            "https://mizunobr.vtexassets.com/arquivos/ids/231056-1600-1600?v=638203672545830000&width=1600&height=1600&aspect=true",
        },
        {
          produto_id: produto.id,
          url_imagem:
            "https://mizunobr.vtexassets.com/arquivos/ids/231063-1600-1600?v=638203672556400000&width=1600&height=1600&aspect=true",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log("Produto 'Camiseta Mizuno Run Spark Masculina' já existe.");
    }

  } catch (error) {
    console.error("Erro ao inserir dados iniciais:", error);
  }
};

// Exporta a função `up` como padrão
export default { up };
