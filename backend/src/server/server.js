import express from 'express';
import cors from 'cors';
import routes from '../routes/routes.js';

class Server {
    constructor() {
        this.app = express();  // Inicializa uma instância do Express
        this.middlewares();    // Configura os middlewares
        this.routes();         // Define as rotas
    }

    middlewares() {
        this.app.use(cors());          // Habilita o CORS para permitir requisições de outras origens
        this.app.use(express.json());  // Habilita o parsing de JSON no corpo das requisições
    }

    routes() {
        this.app.use('/', routes);  // Usa as rotas centralizadas
    }
}

export default new Server().app;  // Exporta a instância do app Express configurada
