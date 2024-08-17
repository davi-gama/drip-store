import Usuario from '../models/Usuario.js';
import Endereco from '../models/Endereco.js';


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
  } catch (error) {
    console.error("Erro ao inserir dados iniciais:", error);
  }
};
