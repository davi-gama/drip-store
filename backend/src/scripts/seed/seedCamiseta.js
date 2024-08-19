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

    // Inserção das Camisetas
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
        preco_promocao: 69.99, // 30% de desconto
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
        preco_promocao: 59.99, // sem desconto
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
        { produto_id: produto.id, cor: "Azul" },
        { produto_id: produto.id, cor: "Cinza" },
      ]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem:
            "https://images.tcdn.com.br/img/img_prod/1028923/camiseta_mizuno_run_spark_6329_1_857ca675f0902b0b3378b24636bd2007.jpg",
        },
        {
          produto_id: produto.id,
          url_imagem:
            "https://static.ativaesportes.com.br/public/ativaesportes/imagens/produtos/camiseta-mizuno-run-spark-masculina-mnmsr3659-9520-648c12b004469.jpg",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log("Produto 'Camiseta Mizuno Run Spark Masculina' já existe.");
    }

    // Verifica se já existe o produto 'Camiseta Nike Sportwear Club - Masculina'
    produto = await Produto.findOne({
      where: { nome: "Camiseta Nike Sportwear Club - Masculina" },
    });

    if (!produto) {
      // Insere o produto 'Camiseta Nike Sportwear Club - Masculina'
      produto = await Produto.create({
        nome: "Camiseta Nike Sportwear Club - Masculina",
        descricao:
          "Treine com liberdade e conforto. A Camiseta Nike Sportwear Club - Masculina é ideal para quem busca por bem-estar nas atividades físicas diárias. Produzida em tecido leve, a peça acompanha os movimentos do corpo e permite que você se movimente com suavidade. Uma camiseta de treino versátil, para combinar com bermuda esportiva ou calça jogger e seu tênis de academia preferido. Aproveite!",
        preco: 39.99,
        preco_promocao: 25.99,
        label_promocao: true,
        marca: "Nike",
        genero: "masculino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(), // Gera uma referência aleatória
        categoria_id: categoria.id,
        finalidade: "corrida",
        estoque: 53,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([
        { produto_id: produto.id, cor: "Preto" },
        { produto_id: produto.id, cor: "Azul claro" },
        { produto_id: produto.id, cor: "Azul escuro" },
      ]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem: "https://imgcentauro-a.akamaihd.net/768x768/94910702.jpg",
        },
        {
          produto_id: produto.id,
          url_imagem: "https://imgcentauro-a.akamaihd.net/768x768/9491072R.jpg",
        },
        {
          produto_id: produto.id,
          url_imagem: "https://imgcentauro-a.akamaihd.net/768x768/94910705.jpg",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log("Produto 'Camiseta Kappa Shangai Masculina' já existe.");
    }

    // Verifica se já existe o produto 'Camiseta Nord Masculina Manga Hering'
    produto = await Produto.findOne({
      where: {
        nome: "Camiseta Nord Masculina Manga Hering",
      },
    });

    if (!produto) {
      // Insere o produto 'Camiseta Nord Masculina Manga Hering'
      produto = await Produto.create({
        nome: "Camiseta Nord Masculina Manga Hering",
        descricao:
          "Camiseta esportiva elaborada em poliamida e elastano que garante toque gelado, além de proteção uv 50+ que não sai na lavagem. Possui modelagem regular e estampa refletiva no peito. Mais elasticidade e movimento para sua rotina de treinos. Detalhes da peça: - Em poliamida - Modelagem regular - Manga curta - Gola redonda - Proteção UV 50+ - Toque gelado.",
        preco: 84.99,
        preco_promocao: 59.99, // sem desconto
        label_promocao: true,
        marca: "Hering",
        genero: "masculino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(), // Gera uma referência aleatória
        categoria_id: categoria.id,
        finalidade: "corrida", // Escolhida de acordo com a descrição
        estoque: 96,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([
        { produto_id: produto.id, cor: "Preto" },
        { produto_id: produto.id, cor: "Branco" },
      ]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem: "https://imgcentauro-a.akamaihd.net/768x768/97745602.jpg",
        },
        {
          produto_id: produto.id,
          url_imagem: "https://imgcentauro-a.akamaihd.net/768x768/97745605.jpg",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log(
        "Produto 'Camiseta Esportiva Hering Sports Com Proteção UV 50+ Masculina' já existe."
      );
    }

    // Verifica se já existe o produto 'Camiseta do Palmeiras Masculina Home'
    produto = await Produto.findOne({
      where: { nome: "Camiseta do Palmeiras Masculina Home" },
    });

    if (!produto) {
      // Insere o produto 'Camiseta do Palmeiras Masculina Home'
      produto = await Produto.create({
        nome: "Camiseta do Palmeiras Masculina Home",
        descricao:
          "Leveza e conforto para se desafiar nos treinos. A camiseta masculina Topper Marker chega para garantir bem-estar enquanto você se movimenta. Esta camiseta de treino masculina tem modelagem regulagem e é confeccionada em tecido respirável que proporciona secagem rápida, ideal para se manter seco durante as atividades. Prepare o short esportivo e o tênis academia masculino para buscar os melhores resultados! Peça a sua camiseta fitness Topper e aproveite!",
        preco: 99.99,
        preco_promocao: 79.99, // sem desconto
        label_promocao: true,
        marca: "Topper",
        genero: "masculino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(), // Gera uma referência aleatória
        categoria_id: categoria.id,
        finalidade: "corrida", // Escolhida de acordo com a descrição
        estoque: 36,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([{ produto_id: produto.id, cor: "Verde" }]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem: "https://imgcentauro-a.akamaihd.net/768x768/98863307.jpg",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log("Produto 'Camiseta Topper Marker Masculina' já existe.");
    }

    // Verifica se já existe o produto 'Camiseta Olympikus Costas Mesh Masculina'
    produto = await Produto.findOne({
      where: { nome: "Camiseta Olympikus Costas Mesh Masculina" },
    });

    if (!produto) {
      // Insere o produto 'Camiseta Olympikus Costas Mesh Masculina'
      produto = await Produto.create({
        nome: "Camiseta Olympikus Costas Mesh Masculina",
        descricao:
          "Da corrida à musculação, pegue pesado nos treinos diários usando a Camiseta Esportiva Masculina da Olympikus. Confeccionada com tecido leve e caimento solto, a peça garante liberdade de movimentos para realizar os exercícios do treino de braço ou corrida sem desconfortos. Combine a Camiseta Masculina Olympikus com bermuda e tênis e esteja pronto para superar seus limites e ir cada vez mais longe.",
        preco: 54.99,
        preco_promocao: 49.99, // sem desconto
        label_promocao: true,
        marca: "Olympikus",
        genero: "masculino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(), // Gera uma referência aleatória
        categoria_id: categoria.id,
        finalidade: "casual", // Escolhida de acordo com a descrição
        estoque: 47,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([
        { produto_id: produto.id, cor: "Verde" },
        { produto_id: produto.id, cor: "Preto" },
      ]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem:
            "https://vulcabras.vtexassets.com/arquivos/ids/254591-1300-1300?v=637968735774900000&width=1300&height=1300&aspect=true",
        },
        {
          produto_id: produto.id,
          url_imagem:
            "https://vulcabras.vtexassets.com/arquivos/ids/232084-1300-1300?v=637801879775800000&width=1300&height=1300&aspect=true",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log(
        "Produto 'Camiseta Olympikus Costas Mesh Masculina' já existe."
      );
    }

    // Verifica se já existe o produto 'Camiseta Masculina Oxer Estampada'
    produto = await Produto.findOne({
      where: { nome: "Camiseta Masculina Oxer Estampada" },
    });

    if (!produto) {
      // Insere o produto 'Camiseta Masculina Oxer Estampada'
      produto = await Produto.create({
        nome: "Camiseta Masculina Oxer Estampada",
        descricao:
          "Conforto total para treinar com confiança. A Camiseta Masculina Oxer Estampada garante seu bem-estar na prática da sua atividade preferida. Esta camiseta academia conta com tecnologia Dry Action, que afasta o suor e a umidade, e tecnologia Solartech, para te manter protegido dos raios UVA e UVB. Leveza e liberdade de movimentos para você viver o melhor do esporte. Prepare o short de treino e o tênis academia masculino. Garanta a sua!",
        preco: 44.99,
        preco_promocao: 34.99, // sem desconto
        label_promocao: true,
        marca: "Oxer",
        genero: "masculino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(), // Gera uma referência aleatória
        categoria_id: categoria.id, // Ajuste para o ID da categoria 'Camiseta'
        finalidade: "corrida",
        estoque: 36,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([
        { produto_id: produto.id, cor: "Roxo" },
        { produto_id: produto.id, cor: "Amarelo" },
      ]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem: "https://imgcentauro-a.akamaihd.net/768x768/983440NF.jpg",
        },
        {
          produto_id: produto.id,
          url_imagem: "https://imgcentauro-a.akamaihd.net/768x768/983440NH.jpg",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log(
        "Produto 'Camiseta Olympikus Essential Masculina' já existe."
      );
    }

    // Verifica se já existe o produto 'Camiseta Olympikus Essential Feminina'
    produto = await Produto.findOne({
      where: { nome: "Camiseta Olympikus Essential Feminina" },
    });

    if (!produto) {
      // Insere o produto 'Camiseta Olympikus Essential Feminina'
      produto = await Produto.create({
        nome: "Camiseta Olympikus Essential Feminina",
        descricao:
          "Eleve seu estilo com a Camiseta Feminina Olympikus Essential, peça que oferece praticidade e versatilidade para o dia a dia. Com design moderno e confortável, é ideal para diversas atividades. Combine-a com seu jeans e tênis preferido para um look completo e atualizado. Adquira já a sua e garanta estilo e conforto em todos os momentos!",
        preco: 54.99,
        preco_promocao: 39.99, // sem desconto
        label_promocao: true,
        marca: "Olympikus",
        genero: "feminino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(), // Gera uma referência aleatória
        categoria_id: categoria.id, // Ajuste para o ID da categoria 'Camiseta'
        finalidade: "casual", // Com base na descrição e nome
        estoque: 82,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([
        { produto_id: produto.id, cor: "Azul Marinho" },
        { produto_id: produto.id, cor: "Rosa" },
        { produto_id: produto.id, cor: "Branco" },
      ]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem:
            "https://vulcabras.vtexassets.com/arquivos/ids/284411-1300-1300?v=638302262061730000&width=1300&height=1300&aspect=true",
        },
        {
          produto_id: produto.id,
          url_imagem:
            "https://vulcabras.vtexassets.com/arquivos/ids/283617-1300-1300?v=638285092742630000&width=1300&height=1300&aspect=true",
        },
        {
          produto_id: produto.id,
          url_imagem:
            "https://vulcabras.vtexassets.com/arquivos/ids/263786-1300-1300?v=638096630469030000&width=1300&height=1300&aspect=true",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log("Produto 'Camiseta Olympikus Essential Feminina' já existe.");
    }

    // Verifica se já existe o produto 'Camiseta Olympikus Eco Masculina'
    produto = await Produto.findOne({
      where: { nome: "Camiseta Olympikus Eco Masculina" },
    });

    if (!produto) {
      // Insere o produto 'Camiseta Olympikus Eco Masculina'
      produto = await Produto.create({
        nome: "Camiseta Olympikus Eco Masculina",
        descricao:
          "Treine na academia ou ao ar livre com a Camiseta Olympikus Eco Masculina. Essa peça é confeccionada em material macio ao toque da pele, proporciona respirabilidade e ótimo caimento, ideal para seus treinos de musculação. Combine com um short e calça e se alcance seus objetivos usando a camiseta masculina da OLK, feito de brasileiros para brasileiros!",
        preco: 59.99,
        preco_promocao: 44.99, // sem desconto
        label_promocao: true,
        marca: "Olympikus",
        genero: "masculino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(), // Gera uma referência aleatória
        categoria_id: categoria.id, // Ajuste para o ID da categoria 'Camiseta'
        finalidade: "casual", // Com base na descrição e nome
        estoque: 135,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([
        { produto_id: produto.id, cor: "Preto" },
        { produto_id: produto.id, cor: "Branco" },
        { produto_id: produto.id, cor: "Cinza" },
      ]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem:
            "https://static.allianzparqueshop.com.br/produtos/camiseta-olympikus-eco-masculina/06/2I2-7039-006/2I2-7039-006_zoom1.jpg?ts=1695699150?ims=1088x",
        },
        {
          produto_id: produto.id,
          url_imagem:
            "https://static.allianzparqueshop.com.br/produtos/camiseta-olympikus-eco-masculina/14/2I2-7039-014/2I2-7039-014_zoom1.jpg?ts=1695528403?ims=1088x",
        },
        {
          produto_id: produto.id,
          url_imagem:
            "https://static.allianzparqueshop.com.br/produtos/camiseta-olympikus-eco-masculina/10/2I2-7039-010/2I2-7039-010_zoom1.jpg?ts=1695700363?ims=1088x",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log("Produto 'Camiseta Olympikus Eco Masculina' já existe.");
    }

    // Verifica se já existe o produto 'Camiseta Adidas Own The Run Base Feminina'
    produto = await Produto.findOne({
      where: { nome: "Camiseta Adidas Own The Run Base Feminina" },
    });

    if (!produto) {
      // Insere o produto 'Camiseta Adidas Own The Run Base Feminina'
      produto = await Produto.create({
        nome: "Camiseta Adidas Own The Run Base Feminina",
        descricao:
          "A Camiseta Feminina Adidas Own The Run Base é peça essencial para os treinos ao ar livre ou na academia! O composto tecnológico Aeroready afasta o suor e te mantém leve e confortável durante os exercícios, enquanto o design autêntico dá um up no seu visual. Complete o visual com um tênis e bermuda. Não deixe para depois e compre já essa camiseta Adidas feminina!",
        preco: 109.99,
        preco_promocao: 79.99, // sem desconto
        label_promocao: true,
        marca: "Adidas",
        genero: "feminino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(), // Gera uma referência aleatória
        categoria_id: categoria.id, // Ajuste para o ID da categoria 'Camiseta'
        finalidade: "corrida", // Com base na descrição e nome
        estoque: 42,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([
        { produto_id: produto.id, cor: "Rosa" },
        { produto_id: produto.id, cor: "Branco" },
      ]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem:
            "https://static.netshoes.com.br/produtos/camiseta-adidas-own-the-run-base-feminina/06/FB9-3816-306/FB9-3816-306_zoom1.jpg?ts=1704288786?ims=1088x",
        },
        {
          produto_id: produto.id,
          url_imagem:
            "https://static.netshoes.com.br/produtos/camiseta-adidas-own-the-run-base-feminina/28/FB9-3816-028/FB9-3816-028_zoom1.jpg?ts=1704289455?ims=1088x",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log(
        "Produto 'Camiseta Adidas Own The Run Base Feminina' já existe."
      );
    }

    // Verifica se já existe o produto 'Camiseta Manga Curta Adidas Small Logo Feminina'
    produto = await Produto.findOne({
      where: { nome: "Camiseta Manga Curta Adidas Small Logo Feminina" },
    });

    if (!produto) {
      // Insere o produto 'Camiseta Manga Curta Adidas Small Logo Feminina'
      produto = await Produto.create({
        nome: "Camiseta Manga Curta Adidas Small Logo Feminina",
        descricao:
          "Aposte em estilo! A Camiseta Adidas Small é perfeita para acompanhar as suas produções em qualquer ocasião. Confeccionada em algodão, tem caimento leve, manga curta e gola careca. Essa camiseta feminina exibe o logo da marca em destaque no peito. Dica: combine com looks casuais ou esportivos – short de corrida, calça legging ou calça jeans feminina. Você merece as melhores escolhas. Garanta já!",
        preco: 99.99,
        preco_promocao: 79.99, // sem desconto
        label_promocao: true,
        marca: "Adidas",
        genero: "feminino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(), // Gera uma referência aleatória
        categoria_id: categoria.id, // Ajuste para o ID da categoria 'Camiseta'
        finalidade: "casual", // Pode ser ajustado com base na finalidade descrita
        estoque: 25,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([
        { produto_id: produto.id, cor: "Preto" },
        { produto_id: produto.id, cor: "Cinza" },
      ]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem:
            "https://static.netshoes.com.br/produtos/camiseta-manga-curta-adidas-small-logo-feminina/26/FB9-4201-026/FB9-4201-026_zoom1.jpg?ts=1718636716?ims=1088x",
        },
        {
          produto_id: produto.id,
          url_imagem:
            "https://imgcentauro-a.akamaihd.net/1366x1366/M14GWS03.jpg",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log(
        "Produto 'Camiseta Manga Curta Adidas Small Logo Feminina' já existe."
      );
    }

    // Verifica se já existe o produto 'Camiseta Mizuno Nirvana Feminina'
    produto = await Produto.findOne({
      where: { nome: "Camiseta Mizuno Nirvana Feminina" },
    });

    if (!produto) {
      // Insere o produto 'Camiseta Mizuno Nirvana Feminina'
      produto = await Produto.create({
        nome: "Camiseta Mizuno Nirvana Feminina",
        descricao:
          "Leveza e conforto para se desafiar nos treinos. A camiseta feminina Mizuno Nirvana garante bem-estar enquanto você se movimenta. Esta camiseta de treino feminina tem modelagem regulagem e é confeccionada em tecido respirável que proporciona secagem rápida, ideal para se manter seca durante as atividades. Prepare o short esportivo e o tênis para buscar os melhores resultados! Peça a sua camiseta fitness Mizuno e aproveite!",
        preco: 49.99,
        preco_promocao: 34.99, // sem desconto
        label_promocao: true,
        marca: "Mizuno",
        genero: "feminino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(), // Gera uma referência aleatória
        categoria_id: categoria.id, // Ajuste para o ID da categoria 'Camiseta'
        finalidade: "corrida", // Pode ser ajustado com base na finalidade descrita
        estoque: 92,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([
        { produto_id: produto.id, cor: "Rosa" },
        { produto_id: produto.id, cor: "Preto" },
        { produto_id: produto.id, cor: "Azul" },
      ]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem:
            "https://static.netshoes.com.br/produtos/camiseta-mizuno-nirvana-feminina/18/2FU-8530-018/2FU-8530-018_zoom1.jpg?ts=1696347935?ims=1088x",
        },
        {
          produto_id: produto.id,
          url_imagem:
            "https://static.netshoes.com.br/produtos/camiseta-mizuno-nirvana-feminina/06/2FU-8530-006/2FU-8530-006_zoom1.jpg?ts=1696431916?ims=1088x",
        },
        {
          produto_id: produto.id,
          url_imagem:
            "https://static.netshoes.com.br/produtos/camiseta-mizuno-nirvana-feminina/08/2FU-8530-008/2FU-8530-008_zoom1.jpg?ts=1696355478?ims=1088x",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log("Produto 'Camiseta Mizuno Nirvana Feminina' já existe.");
    }

    // Verifica se já existe o produto 'Camisa Térmica Penalty Delta Pro X Manga Longa Masculina'
    produto = await Produto.findOne({
      where: {
        nome: "Camisa Térmica Penalty Delta Pro X Manga Longa Masculina",
      },
    });

    if (!produto) {
      // Insere o produto 'Camisa Térmica Penalty Delta Pro X Manga Longa Masculina'
      produto = await Produto.create({
        nome: "Camisa Térmica Penalty Delta Pro X Manga Longa Masculina",
        descricao:
          "A Camisa Térmica Manga Longa da Penalty é a peça ideal para você usar por debaixo do seu uniforme de jogo. Vestindo rente ao corpo, a peça conta com tecnologia que auxilia a temperatura do corpo, auxiliando na performance durante a prática esportiva. Com abertura para os polegares, o modelo traz praticidade e também pode ser usado para treinos de corrida.",
        preco: 109.99,
        preco_promocao: 89.99, // sem desconto
        label_promocao: true,
        marca: "Penalty",
        genero: "masculino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(), // Gera uma referência aleatória
        categoria_id: categoria.id, // Ajuste para o ID da categoria 'Camisa Térmica'
        finalidade: "casual", // Pode ser ajustado com base na finalidade descrita
        estoque: 27,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([
        { produto_id: produto.id, cor: "Preto" },
        { produto_id: produto.id, cor: "Branco" },
      ]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem:
            "https://static.netshoes.com.br/produtos/camisa-termica-penalty-delta-pro-x-manga-longa-masculina/06/50D-0115-006/50D-0115-006_zoom1.jpg?ts=1694920478?ims=1088x",
        },
        {
          produto_id: produto.id,
          url_imagem:
            "https://static.netshoes.com.br/produtos/camisa-termica-penalty-delta-pro-x-manga-longa-masculina/14/50D-0115-014/50D-0115-014_zoom1.jpg?ts=1695441131?ims=1088x",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log(
        "Produto 'Camisa Térmica Penalty Delta Pro X Manga Longa Masculina' já existe."
      );
    }

    // Verifica se já existe o produto 'Camiseta Oakley Bark New Tee Masculina'
    produto = await Produto.findOne({
      where: { nome: "Camiseta Oakley Bark New Tee Masculina" },
    });

    if (!produto) {
      // Insere o produto 'Camiseta Oakley Bark New Tee Masculina'
      produto = await Produto.create({
        nome: "Camiseta Oakley Bark New Tee Masculina",
        descricao:
          "Simples e descomplicada, esta t-shirt clássica traz a identidade Oakley no design estampado com o logo da marca. Um modelo prático, confortável e versátil, para diversas combinações e momentos.",
        preco: 69.99,
        preco_promocao: 49.99, // sem desconto
        label_promocao: true,
        marca: "Oakley",
        genero: "masculino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(), // Gera uma referência aleatória
        categoria_id: categoria.id, // Ajuste para o ID da categoria 'Camiseta'
        finalidade: "casual", // Ajustado com base na descrição do produto
        estoque: 39,
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
            "https://static.netshoes.com.br/produtos/camiseta-oakley-bark-new-tee-masculina/06/D63-4589-006/D63-4589-006_zoom1.jpg?ts=1695699168?ims=1088x",
        },
        {
          produto_id: produto.id,
          url_imagem:
            "https://static.netshoes.com.br/produtos/camiseta-oakley-bark-new-tee-masculina/92/D63-4589-192/D63-4589-192_zoom1.jpg?ts=1694832006?ims=1088x",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log(
        "Produto 'Camiseta Oakley Bark New Tee Masculina' já existe."
      );
    }

    // Verifica se já existe o produto 'Camiseta Nike Dri-FIT Hyverse Masculina'
    produto = await Produto.findOne({
      where: { nome: "Camiseta Nike Dri-FIT Hyverse Masculina" },
    });

    if (!produto) {
      // Insere o produto 'Camiseta Nike Dri-FIT Hyverse Masculina'
      produto = await Produto.create({
        nome: "Camiseta Nike Dri-FIT Hyverse Masculina",
        descricao:
          "Vista-se com nossa camiseta que absorve o suor e deixe que a sensação macia e o caimento relaxado ajudem você a fazer exercícios de todas as formas e tamanhos. Seu plano de condicionamento físico é variado, por isso criamos uma camiseta confortável o suficiente para o que você quiser, seja uma corrida rápida, repetições na academia ou encontrar seu zen no tapete de yoga. Benefícios - Tecnologia Nike Dri-FIT absorve o suor da sua pele para evaporação mais rápida, ajudando a manter você seca e confortável.",
        preco: 149.99,
        preco_promocao: 129.99, // sem desconto
        label_promocao: true,
        marca: "Nike",
        genero: "masculino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(), // Gera uma referência aleatória
        categoria_id: categoria.id, // Ajuste para o ID da categoria 'Camiseta'
        finalidade: "corrida", // Ajustado com base na descrição do produto
        estoque: 85,
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
          url_imagem: "https://imgnike-a.akamaihd.net/768x768/024852IDA4.jpg",
        },
        {
          produto_id: produto.id,
          url_imagem: "https://imgnike-a.akamaihd.net/768x768/024852O8A4.jpg",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log(
        "Produto 'Camiseta Nike Dri-FIT Hyverse Masculina' já existe."
      );
    }

    // Verifica se já existe o produto 'Camiseta NBA Los Angeles Lakers New Era Logo Masculina'
    produto = await Produto.findOne({
      where: { nome: "Camiseta NBA Los Angeles Lakers New Era Logo Masculina" },
    });

    if (!produto) {
      // Insere o produto 'Camiseta NBA Los Angeles Lakers New Era Logo Masculina'
      produto = await Produto.create({
        nome: "Camiseta NBA Los Angeles Lakers New Era Logo Masculina",
        descricao:
          "Vista a Camiseta NBA Los Angeles Lakers New Era Logo Masculina para torcer para o seu time do coração. É confeccionada em material macio e leve ao toque da pele, com escudo em destaque no peito, garantindo conforto e atitude para o seu sportwear. Mostre sua paixão pelo basquete com a New Era, peça já a sua camiseta dos Lakers!",
        preco: 99.99,
        preco_promocao: 89.99, // sem desconto
        label_promocao: true,
        marca: "New Era",
        genero: "masculino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(),
        categoria_id: categoria.id,
        finalidade: "utilitario",
        estoque: 117,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([
        { produto_id: produto.id, cor: "Preto" },
        { produto_id: produto.id, cor: "Cinza" },
      ]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem:
            "https://static.lojanba.com/produtos/camiseta-nba-los-angeles-lakers-new-era-logo-masculina/06/1XB-0500-006/1XB-0500-006_zoom1.jpg?ts=1695354307?ims=1088x",
        },
        {
          produto_id: produto.id,
          url_imagem:
            "https://static.lojanba.com/produtos/camiseta-nba-los-angeles-lakers-new-era-logo-masculina/88/1XB-0500-188/1XB-0500-188_zoom1.jpg?ts=1695701317?ims=1088x",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log(
        "Produto 'Camiseta NBA Los Angeles Lakers New Era Logo Masculina' já existe."
      );
    }

    // Verifica se já existe o produto 'Camiseta Cropped Puma Essentials Logo Feminina'
    produto = await Produto.findOne({
      where: { nome: "Camiseta Cropped Puma Essentials Logo Feminina" },
    });

    if (!produto) {
      // Insere o produto 'Camiseta Cropped Puma Essentials Logo Feminina'
      produto = await Produto.create({
        nome: "Camiseta Cropped Puma Essentials Logo Feminina",
        descricao:
          "Aposte em um look básico e estiloso usando a Camiseta Cropped Feminina da Puma. Produzido em material macio e caimento solto, o modelo estampa o logo da marca na parte frontal, deixando seu sportwear diferenciado. Aproveite.",
        preco: 179.9,
        preco_promocao: 149.9, // sem desconto
        label_promocao: true,
        marca: "Puma",
        genero: "feminino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(), // Gera uma referência aleatória
        categoria_id: categoria.id, // Ajuste para o ID da categoria 'Camiseta'
        finalidade: "lazer", // Ajustado com base na descrição do produto
        estoque: 70,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([
        { produto_id: produto.id, cor: "Branco" },
        { produto_id: produto.id, cor: "Preto" },
      ]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem:
            "https://static.netshoes.com.br/produtos/camiseta-cropped-puma-essentials-logo-feminina/14/2I3-2120-014/2I3-2120-014_zoom1.jpg?ts=1695699428?ims=1088x",
        },
        {
          produto_id: produto.id,
          url_imagem:
            "https://static.netshoes.com.br/produtos/camiseta-cropped-puma-essentials-logo-feminina/06/2I3-2120-006/2I3-2120-006_zoom1.jpg?ts=1695699427?ims=1088x",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log(
        "Produto 'Camiseta Cropped Puma Essentials Logo Feminina' já existe."
      );
    }

    // Verifica se já existe o produto 'Camiseta Nike Dri-Fit - Feminina'
    produto = await Produto.findOne({
      where: { nome: "Camiseta Nike Dri-Fit - Feminina" },
    });

    if (!produto) {
      // Insere o produto 'Camiseta Nike Dri-Fit - Feminina'
      produto = await Produto.create({
        nome: "Camiseta Nike Dri-Fit - Feminina",
        descricao:
          "Camiseta esportiva básica elaborada em malha de poliéster com toque macio, garante elasticidade e movimento e tecnologia easy care, que não amassa. Ideal para a prática esportiva. Detalhes da peça:-Em malha-Modelagem regular-Manga curta-Gola redonda-Easy Care-Secagem rápida.",
        preco: 69.99,
        preco_promocao: 49.99, // sem desconto
        label_promocao: true,
        marca: "Nike",
        genero: "feminino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(), // Gera uma referência aleatória
        categoria_id: categoria.id, // Ajuste para o ID da categoria 'Camiseta'
        finalidade: "lazer", // Ajustado com base na descrição do produto
        estoque: 10,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([
        { produto_id: produto.id, cor: "Verde" },
        { produto_id: produto.id, cor: "Branco" },
        { produto_id: produto.id, cor: "Vermelho" },
      ]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem: "https://imgcentauro-a.akamaihd.net/768x768/M14ISZ07.jpg",
        },
        {
          produto_id: produto.id,
          url_imagem:
            "https://trilhaesportes.fbitsstatic.net/img/p/camiseta-nike-dri-fit-feminina-branco-72052/275239-1.jpg?w=800&h=800&v=no-value",
        },
        {
          produto_id: produto.id,
          url_imagem:
            "https://trilhaesportes.fbitsstatic.net/img/p/camiseta-nike-dri-fit-feminina-vermelho-72009/274870-1.jpg?w=800&h=800&v=no-value",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log("Produto 'Camiseta Nike Dri-Fit - Feminina' já existe.");
    }
  } catch (error) {
    console.error("Erro ao inserir dados iniciais:", error);
  }
};

// Exporta a função `up` como padrão
export default { up };
