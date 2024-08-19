import Categoria from "../../models/Categoria.js";
import Produto from "../../models/Produto.js";
import ProdutoCor from "../../models/ProdutoCor.js";
import ProdutoImagem from "../../models/ProdutoImagem.js";

const up = async () => {
  try {
    // Verifica se a categoria 'Headphone' já existe
    let categoria = await Categoria.findOne({ where: { nome: "Headphone" } });
    if (!categoria) {
      // Insere a categoria 'Headphone'
      categoria = await Categoria.create({
        nome: "Headphone",
        descricao: "Headphone esportivos e casuais.",
      });
    }

    // Inserção dos Headphone
    // Adicione a lógica de inserção de produtos, cores e imagens aqui
    let produto = await Produto.findOne({
      where: { nome: "Fone De Ouvido JBL, Tune 520bt" },
    });
    if (!produto) {
      // Insere o produto 'Fone De Ouvido JBL, Tune 520bt'
      produto = await Produto.create({
        nome: "Fone De Ouvido JBL, Tune 520bt",
        descricao:
          "som jbl pure bass,possuem o renomado som jbl pure bass, que pode ser encontrado nas mais famosas casas de show ao redor do mundo. Transmita sem fio som de alta qualidade de seu smartphone sem cabos bagunçados com a ajuda da mais recente tecnologia bluetooth.",
        preco: 288.45,
        preco_promocao: 70.0,
        label_promocao: true,
        marca: "JBL",
        genero: "masculino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(),
        categoria_id: categoria.id,
        finalidade: "experiencia sonora",
        estoque: 50,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([{ produto_id: produto.id, cor: "Preto" }]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem:
            "https://images.kabum.com.br/produtos/fotos/sync_mirakl/466380/Fone-De-Ouvido-JBL-Tune-520bt-Bluetooth-At-57hrs-App-Comando-De-Voz-Preto_1722882699_gg.jpg",
        },
        {
          produto_id: produto.id,
          url_imagem:
            "https://images.kabum.com.br/produtos/fotos/sync_mirakl/466380/Fone-De-Ouvido-JBL-Tune-520bt-Bluetooth-At-57hrs-App-Comando-De-Voz-Preto_1722882712_gg.jpg",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log("Produto 'Fone De Ouvido JBL, Tune 520bt' já existe.");
    }

    produto = await Produto.findOne({
      where: { nome: "Headphone Qcy Melobuds H2" },
    });
    if (!produto) {
      // Insere o produto 'Headphone Qcy Melobuds H2'
      produto = await Produto.create({
        nome: "Headphone Qcy Melobuds H2",
        descricao:
          "Som surround 3d: o driver dinâmico magnético forte de ndfe de 40 mm oferece um grande palco de som, apenas mergulhe em sua música favorita o tempo todo. O qcy h2 é ótimo para ouvir música, jogar e assistir filmes, possui drivers poderosos de 40 mm que produzem um som excelente. com bons graves e seu modo de baixa latência, garante que o som não fique atrás da imagem. Ele também possui efeitos sonoros espaciais 3d.",
        preco: 197.0,
        preco_promocao: 167.45,
        label_promocao: true,
        marca: "QCY",
        genero: "masculino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(),
        categoria_id: categoria.id,
        finalidade: "experiencia sonora",
        estoque: 50,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([{ produto_id: produto.id, cor: "Preto" }]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem:
            "https://images.kabum.com.br/produtos/fotos/sync_mirakl/541221/Headphone-Qcy-Melobuds-H2-Bluetooth-Multiponto-Preto_1716302077_gg.jpg",
        },
        {
          produto_id: produto.id,
          url_imagem:
            "https://images.kabum.com.br/produtos/fotos/sync_mirakl/541221/Headphone-Qcy-Melobuds-H2-Bluetooth-Multiponto-Preto_1716302096_gg.jpg",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log("Produto 'Headphone Qcy Melobuds H2' já existe.");
    }

    produto = await Produto.findOne({
      where: { nome: "Fone De Ouvido Headset Qcy H4 Anc" },
    });
    if (!produto) {
      // Insere o produto 'Fone De Ouvido Headset Qcy H4 Anc'
      produto = await Produto.create({
        nome: "Fone De Ouvido Headset Qcy H4 Anc",
        descricao:
          " Headset Qcy H4 Anc Adaptativo Bluetooth 5.2 Multiponto 70h. Anc Com 4 Níveis: Escolha Os Modos Disponíveis De Acordo Com O Lugar Em Que Você Estiver, Ajustando O Balanço Do Cancelamento De Ruídos De Acordo Com O Som Ambiente Em Até 43 Db.",
        preco: 338.0,
        preco_promocao: 59.99,
        label_promocao: true,
        marca: "QCY",
        genero: "masculino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(),
        categoria_id: categoria.id,
        finalidade: "experiencia sonora",
        estoque: 50,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([{ produto_id: produto.id, cor: "Branco" }]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem:
            "https://images.kabum.com.br/produtos/fotos/sync_mirakl/541221/Headphone-Qcy-Melobuds-H2-Bluetooth-Multiponto-Preto_1716302077_gg.jpg",
        },
        {
          produto_id: produto.id,
          url_imagem:
            "https://images.kabum.com.br/produtos/fotos/sync_mirakl/541221/Headphone-Qcy-Melobuds-H2-Bluetooth-Multiponto-Preto_1716302096_gg.jpg",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log("Produto 'Fone de Ouvido Headset Qcy H4 Anc' já existe.");
    }

    produto = await Produto.findOne({
      where: { nome: "Headphone Bluetooth AKG Y500 Verde" },
    });
    if (!produto) {
      // Insere o produto 'Headphone Bluetooth AKG Y500 Verde'
      produto = await Produto.create({
        nome: "Headphone Bluetooth AKG Y500 Verde",
        descricao:
          "Ouvir música é muito bom e um dos passatempos favoritos mundo a fora. Afinal, qualquer atividade se torna mais prazerosa com ela. Mas para conseguir aproveitar da melhor forma possível, o ideal é ter um Headphone de boa qualidade e o Y500 Bluetooth na cor verde é o modelo ideal para você. Ele vem com som referência AKG, com qualidade superior de áudio conhecida e reconhecida. Além disso, ele possui design confortável e resistente, com carregamento rápido (5 minutos = 1 hora de playtime), reprodução e pausa automáticos, controles de volume e som no corpo do fone e conexão bluetooth. Qualidade que dita o ritmo do seu dia.",
        preco: 386.1,
        preco_promocao: 59.99,
        label_promocao: true,
        marca: "AKG",
        genero: "masculino",
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(),
        categoria_id: categoria.id,
        finalidade: "experiencia sonora",
        estoque: 50,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([{ produto_id: produto.id, cor: "Verde" }]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem:
            "https://images.kabum.com.br/produtos/fotos/magalu/437257/Headphone-Bluetooth-AKG-Y500-Verde_1678278591_gg.jpg",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log("Produto 'Headphone Bluetooth AKG Y500 Verde' já existe.");
    }

    produto = await Produto.findOne({
      where: { nome: "Fone de Ouvido AKG K92" },
    });
    if (!produto) {
      // Insere o produto 'Fone de Ouvido AKG K92'
      produto = await Produto.create({
        nome: "Fone de Ouvido AKG K92",
        descricao:
          "Nossos fones de ouvido K92 possuem resposta confiável e de baixa frequência estendida que fornecem a definição necessária para tocar bateria e contrabaixo. Ao mesmo tempo, a resposta de frequência detalhada, precisa e balanceada revela as nuances em vocais, violões e instrumentos acústicos. Os generosos drivers de 40 mm do K52,k72 e K92 entregam a mais alta sensibilidade e a mais ampla resposta de frequência,",
        preco: 300.0,
        preco_promocao: 59.99,
        label_promocao: true,
        marca: "AKG",
        genero: "masculino",
        numero_vendas: 0,
        rating: 4.5,
        numero_avaliacoes: 104,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(),
        categoria_id: categoria.id,
        finalidade: "experiencia sonora",
        estoque: 50,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([
        { produto_id: produto.id, cor: "Preto" },
        { produto_id: produto.id, cor: "Dourado" },
      ]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem:
            "https://images.kabum.com.br/produtos/fotos/94582/94582_1516796661_index_gg.jpg",
        },
        {
          produto_id: produto.id,
          url_imagem:
            "https://images.kabum.com.br/produtos/fotos/94582/94582_1516796565_gg.jpg",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log("Produto 'Fone de Ouvido AKG K92' já existe.");
    }

    produto = await Produto.findOne({
      where: { nome: "Fone de Ouvido Beats Studio 3 Wireless" },
    });
    if (!produto) {
      // Insere o produto 'Fone de Ouvido Beats Studio 3 Wireless'
      produto = await Produto.create({
        nome: "Fone de Ouvido Beats Studio 3 Wireless",
        descricao:
          "O fone de ouvido Beats Studio3 Wireless oferece uma experiência sonora de alta qualidade com o Pure ANC (Puro cancelamento ativo de ruído). A tecnologia Pure ANC da Beats bloqueia ativamente os ruídos externos e calibra o áudio em tempo real para preservar a nitidez, o alcance e toda a emoção do seu som. Ele detecta de forma contínua os ruídos externos que devem ser bloqueados e responde em tempo real aos ajustes pessoais, otimizando o som para você ouvir música com toda a qualidade.",
        preco: 1090.5,
        preco_promocao: 59.99,
        label_promocao: true,
        marca: "Beats",
        genero: "masculino",
        numero_vendas: 3,
        rating: 4.7,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(),
        categoria_id: categoria.id,
        finalidade: "experiencia sonora",
        estoque: 50,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([{ produto_id: produto.id, cor: "Preto" }]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        {
          produto_id: produto.id,
          url_imagem:
            "https://images.kabum.com.br/produtos/fotos/464800/fone-de-ouvido-beats-studio3-wireless-apple-beats-decade-collection-preto-vermelho-da-superacao-mx422ll-a_1687809387_gg.jpg",
        },
        {
          produto_id: produto.id,
          url_imagem:
            "https://images.kabum.com.br/produtos/fotos/464800/fone-de-ouvido-beats-studio3-wireless-apple-beats-decade-collection-preto-vermelho-da-superacao-mx422ll-a_1687809385_gg.jpg",
        },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log(
        "Produto 'Fone de Ouvido Beats Studio 3 Wireless' já existe."
      );
    }
  } catch (error) {
    console.error("Erro ao inserir dados iniciais:", error);
  }
};

export default { up };
