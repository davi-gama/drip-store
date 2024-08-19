import Categoria from "../../models/Categoria.js";
import Produto from "../../models/Produto.js";
import ProdutoCor from "../../models/ProdutoCor.js";
import ProdutoImagem from "../../models/ProdutoImagem.js";

const up = async () => {
  try {
    // Verifica se a categoria 'Calça' já existe
    let categoria = await Categoria.findOne({ where: { nome: "Calça" } });
    if (!categoria) {
      // Insere a categoria 'Calça'
      categoria = await Categoria.create({
        nome: "Calça",
        descricao: "Calças esportivas e casuais.",
      });
    }

    // Inserção do produto 'Calça Nord Feminina Térmica'
    let produto = await Produto.findOne({
      where: { nome: "Calça Nord Feminina Térmica" },
    });
    if (!produto) {
      produto = await Produto.create({
        nome: "Calça Nord Feminina Térmica",
        descricao:
          "A Calça Nord Feminina Térmica é uma peça essencial para enfrentar o frio com estilo e conforto. Feita com materiais de alta qualidade, ela oferece excelente isolamento térmico, mantendo o calor corporal mesmo nas temperaturas mais baixas.",
        preco: 99.99,
        preco_promocao: 70.0,
        label_promocao: true,
        marca: "Nord",
        genero: "feminino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(),
        categoria_id: categoria.id,
        finalidade: "corrida",
        estoque: 50,
      });

      // Insere a cor do produto
      await ProdutoCor.create({
        produto_id: produto.id,
        cor: "Preto",
      });

      // Insere a imagem do produto
      await ProdutoImagem.create({
        produto_id: produto.id,
        url_imagem: "https://imgcentauro-a.akamaihd.net/768x768/97745902.jpg",
      });

      console.log(
        "Produto 'Calça Nord Feminina Térmica', cor e imagem inseridos com sucesso."
      );
    } else {
      console.log("Produto 'Calça Nord Feminina Térmica' já existe.");
    }

    // Inserção do produto 'Calça Masculina Oxer Mark'
    produto = await Produto.findOne({
      where: { nome: "Calça Masculina Oxer Mark" },
    });
    if (!produto) {
      produto = await Produto.create({
        nome: "Calça Masculina Oxer Mark",
        descricao:
          "A Calça Masculina Oxer Mark é ideal para atividades físicas ou uso casual, proporcionando conforto e estilo.",
        preco: 119.99,
        preco_promocao: 89.99,
        label_promocao: true,
        marca: "Oxer",
        genero: "masculino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(),
        categoria_id: categoria.id,
        finalidade: "lazer",
        estoque: 100,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([
        { produto_id: produto.id, cor: "Preto" },
        { produto_id: produto.id, cor: "Verde" },
      ]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem:
            "https://imgcentauro-a.akamaihd.net/1366x1366/98489802.jpg",
        },
        {
          produto_id: produto.id,
          url_imagem: "https://imgcentauro-a.akamaihd.net/768x768/98489886.jpg",
        },
      ]);

      console.log(
        "Produto 'Calça Masculina Oxer Mark', cores e imagens inseridos com sucesso."
      );
    } else {
      console.log("Produto 'Calça Masculina Oxer Mark' já existe.");
    }

    // Inserção do produto 'Calça Masculina ASICS Fleece Training'
    produto = await Produto.findOne({
      where: { nome: "Calça Masculina ASICS Fleece Training" },
    });
    if (!produto) {
      produto = await Produto.create({
        nome: "Calça Masculina ASICS Fleece Training",
        descricao:
          "A Calça Masculina ASICS Fleece Training é ideal para atividades físicas ou uso casual, proporcionando conforto e estilo.",
        preco: 99.99,
        preco_promocao: 69.99,
        label_promocao: true,
        marca: "ASICS",
        genero: "masculino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(),
        categoria_id: categoria.id,
        finalidade: "corrida",
        estoque: 100,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([
        { produto_id: produto.id, cor: "Preto" },
        { produto_id: produto.id, cor: "Vermelho" },
      ]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem: "https://imgcentauro-a.akamaihd.net/768x768/96865802.jpg",
        },
        {
          produto_id: produto.id,
          url_imagem: "https://imgcentauro-a.akamaihd.net/768x768/968658NF.jpg",
        },
      ]);

      console.log(
        "Produto 'Calça Masculina ASICS Fleece Training', cores e imagens inseridos com sucesso."
      );
    } else {
      console.log(
        "Produto 'Calça Masculina ASICS Fleece Training' não existe."
      );
    }

    // Inserção do produto 'Calça Legging Feminina Oxer Campeão Slim'
    produto = await Produto.findOne({
      where: { nome: "Calça Legging Feminina Oxer Campeão Slim" },
    });
    if (!produto) {
      produto = await Produto.create({
        nome: "Calça Legging Feminina Oxer Campeão Slim",
        descricao:
          "Calça Legging Feminina Oxer Campeão Slim oferece conforto e estilo para uma corrida ou corrida de ciclismo.",
        preco: 74.99,
        preco_promocao: 54.99,
        label_promocao: true,
        marca: "Oxer",
        genero: "feminino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(),
        categoria_id: categoria.id,
        finalidade: "corrida",
        estoque: 100,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([
        { produto_id: produto.id, cor: "vinho" },
        { produto_id: produto.id, cor: "preto" },
        { produto_id: produto.id, cor: "azul" },
      ]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem: "https://imgcentauro-a.akamaihd.net/768x768/974794NF.jpg",
        },
        {
          produto_id: produto.id,
          url_imagem: "https://imgcentauro-a.akamaihd.net/768x768/9747942Y.jpg",
        },
        {
          produto_id: produto.id,
          url_imagem: "https://imgcentauro-a.akamaihd.net/768x768/97479473.jpg",
        },
      ]);

      console.log(
        "Produto 'Calça Legging Feminina Oxer Campeão Slim', cores e imagens inseridos com sucesso."
      );
    } else {
      console.log(
        "Produto 'Calça Legging Feminina Oxer Campeão Slim' não existe."
      );
    }

    // Inserção do produto 'Calça Jogger Masculina CBF Future Pro'
    produto = await Produto.findOne({
      where: { nome: "Calça Jogger Masculina CBF Future Pro" },
    });
    if (!produto) {
      produto = await Produto.create({
        nome: "Calça Jogger Masculina CBF Future Pro",
        descricao:
          "Calça Jogger Masculina CBF Future Pro oferece conforto e estilo para uma corrida ou corrida de ciclismo.",
        preco: 114.99,
        preco_promocao: 94.99,
        label_promocao: true,
        marca: "Oxer",
        genero: "feminino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(),
        categoria_id: categoria.id,
        finalidade: "utilitario",
        estoque: 100,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([{ produto_id: produto.id, cor: "Azul" }]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem: "https://imgcentauro-a.akamaihd.net/768x768/98493105.jpg",
        },
      ]);

      console.log(
        "Produto 'Calça Jogger Masculina CBF Future Pro', cores e imagens inseridos com sucesso."
      );
    } else {
      console.log(
        "Produto 'Calça Jogger Masculina CBF Future Pro' não existe."
      );
    }
  } catch (error) {
    console.error("Erro ao inserir dados iniciais:", error);
  }
};

export default { up };
