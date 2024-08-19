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
        nome: "Boné",
        descricao: "Bonés esportivos e casuais.",
      });
    }

    // Inserção dos bonés
    let produto = await Produto.findOne({
      where: { nome: "Boné Running x 4D HEART.RDY" },
    });
    if (!produto) {
      // Insere o produto 'Boné Running x 4D HEAT.RDY'
      produto = await Produto.create({
        nome: "Boné Running x 4D HEART.RDY",
        descricao:
          "Aumente o ritmo e diminua a temperatura durante a corrida. Feito com tecnologia adidas HEAT.RDY, ele remove a umidade e oferece ventilação para manter sua pele seca e refrescada, quilômetro após quilômetro. A aba ligeiramente curva protege seus olhos dos raios de sol, e os orifícios de ventilação cortados a laser estimulam o máximo fluxo de ar. Não importa se está buscando um recorde pessoal ou apenas curtindo uma corrida espontânea, este boné acompanha você.",
        preco: 149.99,
        preco_promocao: 129.99,
        label_promocao: true,
        marca: "adidas",
        genero: "masculino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(), // Gera uma referência aleatória
        categoria_id: categoria.id,
        finalidade: "utilitario",
        estoque: 50,
      });

      await ProdutoCor.bulkCreate([{ produto_id: produto.id, cor: "Preto" }]);

      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem:
            "https://www.tradeinn.com/f/14056/140564146/adidas-bone-running-x-4d-heat-rdy.webp",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log("Produto 'Boné Running x 4D HEART.RDY' já existe.");
    }

    produto = await Produto.findOne({
      where: { nome: "Viseira Corrida AEROREADY" },
    });
    if (!produto) {
      // Insere o produto 'Viseira Corrida AEROREADY'
      produto = await Produto.create({
        nome: "Viseira Corrida AEROREADY",
        descricao:
          "Se for correr de dia, proteja o rosto do sol. Com aba curva, esta viseira de corrida adidas mantém a luz longe dos olhos. A mesh respirável e o tecido AEROREADY antitranspirante mantêm o rosto seco durante o treino. O Fecho aderente permite encontrar o ajuste perfeito.",
        preco: 129.99,
        preco_promocao: 119.99,
        label_promocao: true,
        marca: "Adidas",
        genero: "unissex",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(),
        categoria_id: categoria.id,
        finalidade: "utilitario",
        estoque: 50,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([{ produto_id: produto.id, cor: "Preto" }]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem:
            "https://static.fatimaesportes.com.br/public/fatimaesportes/imagens/produtos/viseira-adidas-aeroready-651d7a32a26b4.jpg",
        },
        {
          produto_id: produto.id,
          url_imagem:
            "https://static.fatimaesportes.com.br/public/fatimaesportes/imagens/produtos/viseira-adidas-aeroready-651d7a33d4808.jpg",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log("Produto 'Viseira Corrida AEROREADY' já existe.");
    }

    produto = await Produto.findOne({
      where: { nome: "Boné Jordan Club Unissex" },
    });
    if (!produto) {
      // Insere o produto 'Boné Jordan Club Unissex'
      produto = await Produto.create({
        nome: "Boné Jordan Club Unissex",
        descricao:
          "Este boné não estruturado de profundidade média possui tecido leve que absorve o suor para ajudar a manter a sua cabeça fresca. Uma alça facilmente ajustável proporciona o caimento ideal.",
        preco: 129.99,
        preco_promocao: 99.99,
        label_promocao: true,
        marca: "Nike",
        genero: "masculino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(),
        categoria_id: categoria.id,
        finalidade: "utilitario",
        estoque: 50,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([{ produto_id: produto.id, cor: "Preto" }]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem: "https://imgnike-a.akamaihd.net/768x768/027308IDA2.jpg",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log("Produto 'Boné Jordan Club Unissex' já existe.");
    }

    produto = await Produto.findOne({
      where: { nome: "Chapéu Nike Camo Unissex" },
    });
    if (!produto) {
      // Insere o produto 'Chapéu Nike Camo Unissex'
      produto = await Produto.create({
        nome: "Chapéu Nike Camo Unissex",
        descricao:
          "Canalize as vibes do início da juventude com o Nike Apex, nosso boné de meia profundidade que aumenta o fator legal de qualquer roupa. Tecido ripstop durável, que absorve o suor e faixa antitranspiração mantêm você se sentindo tão bem quanto parece.",
        preco: 149.99,
        preco_promocao: 129.99, // sem desconto
        label_promocao: true,
        marca: "Nike",
        genero: "masculino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(),
        categoria_id: categoria.id,
        finalidade: "utilitario",
        estoque: 50,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([{ produto_id: produto.id, cor: "Camo" }]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem: "https://imgnike-a.akamaihd.net/768x768/026457NXA2.jpg",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log("Produto 'Chapéu Nike Camo Unissex' já existe.");
    }

    produto = await Produto.findOne({
      where: { nome: "Boné Nike Dri-FIT ADV Rise Unissex" },
    });
    if (!produto) {
      // Insere o produto 'Boné Nike Dri-FIT ADV Rise Unissex'
      produto = await Produto.create({
        nome: "Boné Nike Dri-FIT ADV Rise Unissex",
        descricao:
          "O design estruturado de alta profundidade do Boné Nike Rise apresenta tecido com absorção do suor avançada que ajuda a manter você fresco o dia todo. Finalizamos com um AeroBill flexível e sensação super respirável, para que você possa se concentrar em atingir cada repetição e alcançar o próximo objetivo.",
        preco: 149.99,
        preco_promocao: 119.99,
        label_promocao: true,
        marca: "Nike",
        genero: "masculino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(),
        categoria_id: categoria.id,
        finalidade: "utilitario",
        estoque: 50,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([{ produto_id: produto.id, cor: "Branco" }]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem: "https://imgnike-a.akamaihd.net/1920x1920/02650851A3.jpg",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log("Produto 'Boné Nike Dri-FIT ADV Rise Unissex' já existe.");
    }
  } catch (error) {
    console.error("Erro ao inserir dados iniciais:", error);
  }
};

export default { up };
