import Usuario from '../models/Usuario.js';
import Endereco from '../models/Endereco.js';
import Categoria from '../models/Categoria.js';
import Produto from '../models/Produto.js';
import ProdutoCor from '../models/ProdutoCor.js';
import ProdutoImagem from '../models/ProdutoImagem.js';

export const up = async () => {
  try {
    // Verifica se já existem dados para evitar inserções duplicadas
    const usuariosCount = await Usuario.count();
    if (usuariosCount === 0) {
      // Insere usuários de exemplo
      const usuarios = await Usuario.bulkCreate([
        {
          nome_completo: 'João Silva',
          telefone: '1234567890',
          tipo_acesso: 'client',
          senha: 'password123', // Em produção, use hashing para senhas
          email: 'joao.silva@example.com',
          cpf: '12345678901',
          data_criacao: new Date(),
          data_atualizacao: new Date(),
        },
        {
          nome_completo: 'Maria Oliveira',
          telefone: '0987654321',
          tipo_acesso: 'admin',
          senha: 'password456', // Em produção, use hashing para senhas
          email: 'maria.oliveira@example.com',
          cpf: '10987654321',
          data_criacao: new Date(),
          data_atualizacao: new Date(),
        },
      ]);

      // Insere endereços relacionados aos usuários
      await Endereco.bulkCreate([
        {
          usuario_id: usuarios[0].id, // Relaciona ao ID do primeiro usuário
          rua: 'Rua A',
          numero: '123',
          bairro: 'Centro',
          cidade: 'Cidade Exemplo',
          cep: '12345-678',
          complemento: 'Apto 101',
        },
        {
          usuario_id: usuarios[1].id, // Relaciona ao ID do segundo usuário
          rua: 'Rua B',
          numero: '456',
          bairro: 'Bairro Exemplo',
          cidade: 'Outra Cidade',
          cep: '87654-321',
          complemento: 'Casa 2',
        },
      ]);

      console.log("Dados iniciais inseridos com sucesso.");
    } else {
      console.log("Dados iniciais já existem.");
    }

    // Verifica se a categoria 'Camisetas' já existe
    let categoria = await Categoria.findOne({ where: { nome: 'Camisetas' } });
    if (!categoria) {
      // Insere a categoria 'Camisetas'
      categoria = await Categoria.create({
        nome: 'Camisetas',
        descricao: 'Camisetas esportivas e casuais.',
      });
    }

    // Verifica se já existe o produto 'Camiseta Mizuno Energy Masculina'
    let produto = await Produto.findOne({ where: { nome: 'Camiseta Mizuno Energy Masculina' } });
    if (!produto) {
      // Insere o produto 'Camiseta Mizuno Energy Masculina'
      produto = await Produto.create({
        nome: 'Camiseta Mizuno Energy Masculina',
        descricao: 'Pronto para os exercícios ao ar livre ou na academia com Camiseta Mizuno Energy Masculina! Confeccionada em material leve que fornece excelente modelagem ao corpo, a peça apresenta design esportivo que garante ventilação interna. Adquira já essa camiseta Mizuno masculina!',
        preco: 99.99,
        preco_promocao: 70.00, // 30% de desconto
        label_promocao: true,
        marca: 'Mizuno',
        genero: 'masculino',
        numero_vendas: 0,
        rating: 0.0,
        numero_avaliacoes: 0,
        referencia: Math.random().toString(36).substring(2, 10).toUpperCase(), // Gera uma referência aleatória
        categoria_id: categoria.id,
        finalidade: 'corrida',
        estoque: 50,
      });

      // Insere as cores do produto
      await ProdutoCor.bulkCreate([
        { produto_id: produto.id, cor: 'Preto' },
        { produto_id: produto.id, cor: 'Laranja' },
        { produto_id: produto.id, cor: 'Cinza' },
      ]);

      // Insere as imagens do produto
      await ProdutoImagem.bulkCreate([
        { produto_id: produto.id, url_imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/234560-1600-1600?v=638246052696930000&width=1600&height=1600&aspect=true' },
        { produto_id: produto.id, url_imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/229862-1600-1600?v=638139010300800000&width=1600&height=1600&aspect=true' },
        { produto_id: produto.id, url_imagem: 'https://mizunobr.vtexassets.com/arquivos/ids/229827-1600-1600?v=638138905191400000&width=1600&height=1600&aspect=true' },
      ]);

      console.log("Produto, cores e imagens inseridos com sucesso.");
    } else {
      console.log("Produto já existe.");
    }
  } catch (error) {
    console.error("Erro ao inserir dados iniciais:", error);
  }
};
