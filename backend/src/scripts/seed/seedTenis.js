import Categoria from "../../models/Categoria.js";
import Produto from "../../models/Produto.js";
import ProdutoCor from "../../models/ProdutoCor.js";
import ProdutoImagem from "../../models/ProdutoImagem.js";

const up = async () => {
  try {
    // Verifica se a categoria 'Tenis' já existe
    let categoria = await Categoria.findOne({ where: { nome: "Tenis" } });
    if (!categoria) {
      // Insere a categoria 'Tenis'
      categoria = await Categoria.create({
        nome: "Tenis",
        descricao: "Tenis esportivos e casuais.",
      });
    }

    // Inserção dos Tenis
    // Adicione a lógica de inserção de produtos, cores e imagens aqui
    let produto = await Produto.findOne({
      where: { nome: "Tênis Nike Revolution 7 Masculino" },
    });
    if (!produto) {
      // Insere o produto 'Tênis Nike Revolution 7 Masculino'
      produto = await Produto.create({
        nome: "Tênis Nike Revolution 7 Masculino",
        descricao:
          "Carregamos o Revolution 7 com o tipo de amortecimento e suporte macio que pode mudar o seu mundo de corrida. Elegante como sempre, confortável quando a borracha encontra a estrada e performático para o ritmo desejado, é uma evolução de um favorito dos fãs que oferece uma condução macia e suave.",
        preco: 297.82,
        preco_promocao: 59.99,
        label_promocao: true,
        marca: "Nike",
        genero: "masculino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(),
        categoria_id: categoria.id,
        finalidade: "corrida",
        estoque: 50,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([{ produto_id: produto.id, cor: "Preto" }]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem: "https://imgnike-a.akamaihd.net/1920x1920/027285INA8.jpg",
        },
        {
          produto_id: produto.id,
          url_imagem: "https://imgnike-a.akamaihd.net/1920x1920/027285INA3.jpg",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log("Produto 'Camiseta Mizuno Energy Masculina' já existe.");
    }

    // Verifica se já existe o produto 'Air Max DN U.S.A'
    produto = await Produto.findOne({
      where: { nome: "Air Max DN U.S.A" },
    });
    if (!produto) {
      // Insere o produto 'Air Max DN U.S.A'
      produto = await Produto.create({
        nome: "Air Max DN U.S.A",
        descricao:
          "Diga olá à próxima geração de tecnologia Air. O Air Max Dn apresenta nosso sistema de unidade Dynamic Air de tubos de dupla pressão, criando uma sensação reativa a cada passo. Isso resulta em um design futurista que é confortável o suficiente para ser usado do dia à noite. Vá em frente – sinta o irreal.",
        preco: 1299.99,
        preco_promocao: 59.99,
        label_promocao: true,
        marca: "Nike",
        genero: "masculino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(),
        categoria_id: categoria.id,
        finalidade: "casual",
        estoque: 50,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([
        { produto_id: produto.id, cor: "Branco" },
        { produto_id: produto.id, cor: "Azul" },
        { produto_id: produto.id, cor: "Vermelho" },
      ]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem: "https://imgnike-a.akamaihd.net/1920x1920/02990451A2.jpg",
        },
        {
          produto_id: produto.id,
          url_imagem: "https://imgnike-a.akamaihd.net/1920x1920/02990451A5.jpg",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log("Produto 'Air Max DN U.S.A' já existe.");
    }

    // Verifica se já existe o produto 'Tênis New Balance 9060 Unisex'
    produto = await Produto.findOne({
      where: { nome: "Tênis New Balance 9060 Unisex" },
    });
    if (!produto) {
      // Insere o produto 'Tênis New Balance 9060 Unisex'
      produto = await Produto.create({
        nome: "Tênis New Balance 9060 Unisex",
        descricao:
          " O Tênis Casual Unissex New Balance 9060 combina estilo clássico com um visual contemporâneo para a versatilidade do dia a dia. O modelo garante máximo conforto e amortecimento por meio da entressola produzida com as tecnologias ABZORB e SBS.",
        preco: 1199.99,
        preco_promocao: 1000.99,
        label_promocao: true,
        marca: "New Balance",
        genero: "masculino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(),
        categoria_id: categoria.id,
        finalidade: "corrida",
        estoque: 50,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([
        { produto_id: produto.id, cor: "Sea Salt" },
        { produto_id: produto.id, cor: "Oliviine" },
      ]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem:
            "https://newbrasil.vtexassets.com/arquivos/ids/169751-800-800?v=638497373631830000&width=800&height=800&aspect=true",
        },
        {
          produto_id: produto.id,
          url_imagem:
            "https://newbrasil.vtexassets.com/arquivos/ids/169752-800-800?v=638497373651730000&width=800&height=800&aspect=true  ",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log("Produto 'Tênis New Balance 9060 Unissex' já existe.");
    }

    // Verifica se já existe o produto 'Tênis New Balance 550 Masculino'
    produto = await Produto.findOne({
      where: { nome: "Tênis New Balance 550 Masculino" },
    });
    if (!produto) {
      // Insere o produto 'Tênis New Balance 550 Masculino'
      produto = await Produto.create({
        nome: "Tênis New Balance 550 Masculino",
        descricao:
          "Inspirado no basquete, o Tênis Masculino New Balance 550 homenageia o calçado original criado em 1989, ano que definiu uma geração de esportistas da modalidade. Com fechamento em cadarço para um ajuste seguro, o modelo agrega originalidade e autenticidade ao seu estilo.",
        preco: 799.99,
        preco_promocao: 59.99,
        label_promocao: true,
        marca: "Mizuno",
        genero: "masculino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(),
        categoria_id: categoria.id,
        finalidade: "corrida",
        estoque: 50,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([
        { produto_id: produto.id, cor: "White" },
        { produto_id: produto.id, cor: "Blue Agate" },
      ]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem:
            "https://newbrasil.vtexassets.com/arquivos/ids/169696-800-800?v=638494747574700000&width=800&height=800&aspect=true",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log("Produto 'Tênis New Balance 550 Masculino' já existe.");
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
        preco: 999.99,
        preco_promocao: 59.99,
        label_promocao: true,
        marca: "Mizuno",
        genero: "masculino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(),
        categoria_id: categoria.id,
        finalidade: "corrida",
        estoque: 50,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([{ produto_id: produto.id, cor: "Branco" }]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem:
            "https://flavios.vtexassets.com/arquivos/ids/219893-1600-1600?v=638143296231100000&width=1600&height=1600&aspect=true",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log(
        "Produto 'Tênis Masculino Mizuno Wave Prophecy 12' já existe."
      );
    }
  } catch (error) {
    console.error("Erro ao inserir dados iniciais:", error);
  }
};

export default { up };
