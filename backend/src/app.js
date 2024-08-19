import app from "./server/server.js"; // Importa a instância do servidor configurada do Express
import createDB from "./scripts/createDB.js"; // Importa a função para criar o banco de dados se ele não existir
import createTables from "./scripts/createTables.js"; // Importa a função para criar as tabelas do banco de dados se elas não existirem
import { seedController } from "./scripts/seed/seedController.js"; // Importa a função para alimentar as tabelas do banco de dados com os dados iniciais
import configDB from "./config/db.js";

const port = 3000 || configDB.config.port;

const startServer = async () => {
  try {
    // Cria o banco de dados se ele não existir
    await createDB();

    // Cria as tabelas do banco de dados
    await createTables();

    // Alimenta as tabelas do banco de dados com os dados iniciais
    await seedController();

    // Inicia o servidor
    app.listen(port, () => {
      console.log(`\nServidor iniciado na porta ${port}.`);
    });
  } catch (error) {
    console.error("\nErro ao iniciar o servidor:", error);
  }
};

startServer();
