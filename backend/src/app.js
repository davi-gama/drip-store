import app from "./server/server.js"; // Importa a instância do servidor configurada do Express
import createDB from "./scripts/createDB.js"; // Importa a função para criar o banco de dados se ele não existir
import createTables from "./scripts/createTables.js"; // Importa a função para criar as tabelas do banco de dados se elas não existirem
import { seedController } from "./scripts/seed/seedController.js"; // Importa a função para alimentar as tabelas do banco de dados com os dados iniciais

const PORT = process.env.PORT || 3000; // Define a porta em que o servidor vai rodar, usando a variável de ambiente ou 3000 como fallback

const startServer = async () => {
  try {
    // Cria o banco de dados se ele não existir
    await createDB();

    // Cria as tabelas do banco de dados
    await createTables();

    // Alimenta as tabelas do banco de dados com os dados iniciais
    await seedController();

    // Inicia o servidor
    app.listen(PORT, () => {
      console.log(`\nServidor iniciado na porta ${PORT}. | Seja bem-vindo!\n`);
    });
  } catch (error) {
    console.error("\nErro ao iniciar o servidor:", error);
  }
};

startServer();
