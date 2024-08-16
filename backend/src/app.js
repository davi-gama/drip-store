import app from "./server/server.js"; // Importa a instância do servidor configurada do Express
import createDB from "./scripts/createDB.js"; // Importa a função para criar o banco de dados se ele não existir
import createTables from "./scripts/createTables.js"; // Importa a função para criar as tabelas do banco de dados se elas não existirem

const PORT = process.env.PORT || 3000; // Define a porta em que o servidor vai rodar, usando a variável de ambiente ou 3000 como fallback

const startServer = async () => {
  try {
    // Cria o banco de dados se ele não existir
    await createDB();

    // Cria as tabelas do banco de dados
    await createTables();

    // Inicia o servidor
    app.listen(PORT, () => {
      console.log(`Server rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao iniciar o servidor:", error);
  }
};

startServer();
