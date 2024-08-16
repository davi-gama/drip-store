import promisePool from '../db/connection.js';

const createTables = async () => {
    try {
        // Tabela usuario
        await promisePool.query(`
            CREATE TABLE IF NOT EXISTS usuario (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nome_conpleto VARCHAR(100) NOT NULL,
                telefone VARCHAR(20) NOT NULL,
                tipo_acesso ENUM('admin', 'client') DEFAULT 'client' NOT NULL,
                senha VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL,
                cpf VARCHAR(16) UNIQUE NOT NULL,
                data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            );
        `);

        // Tabela categoria
        await promisePool.query(`
            CREATE TABLE IF NOT EXISTS categoria (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(100) NOT NULL UNIQUE,
                descricao TEXT
            );
        `);

        // Tabela produto
        await promisePool.query(`
            CREATE TABLE IF NOT EXISTS produto (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(100) NOT NULL,
                descricao TEXT,
                preco DECIMAL(10, 2) NOT NULL,
                preco_promocao DECIMAL(10, 2) NULL,
                label_promocao BOOLEAN DEFAULT FALSE,
                marca VARCHAR(100),
                genero ENUM('masculino', 'feminino', 'unissex'),
                numero_vendas INT DEFAULT 0,
                rating DECIMAL(3, 2) DEFAULT 0.00,
                numero_avaliacoes INT DEFAULT 0,
                referencia VARCHAR(100) UNIQUE,
                categoria_id INT,
                finalidade ENUM('lazer', 'casual', 'corrida', 'utilitario') NOT NULL,
                data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (categoria_id) REFERENCES categoria(id) ON DELETE SET NULL
            );
        `);

        // Tabela produto_cor
        await promisePool.query(`
            CREATE TABLE IF NOT EXISTS produto_cor (
                id INT AUTO_INCREMENT PRIMARY KEY,
                produto_id INT,
                cor VARCHAR(50) NOT NULL,
                FOREIGN KEY (produto_id) REFERENCES produto(id) ON DELETE CASCADE
            );
        `);

        // Tabela produto_imagem
        await promisePool.query(`
            CREATE TABLE IF NOT EXISTS produto_imagem (
                id INT AUTO_INCREMENT PRIMARY KEY,
                produto_id INT,
                url_imagem VARCHAR(255) NOT NULL,
                descricao VARCHAR(255),
                FOREIGN KEY (produto_id) REFERENCES produto(id) ON DELETE CASCADE
            );
        `);

        // Tabela endereco
        await promisePool.query(`
            CREATE TABLE IF NOT EXISTS endereco (
                id INT AUTO_INCREMENT PRIMARY KEY,
                usuario_id INT,
                rua VARCHAR(100) NOT NULL,
                numero VARCHAR(10) NOT NULL,
                bairro VARCHAR(100) NOT NULL,
                cidade VARCHAR(100) NOT NULL,
                cep VARCHAR(12) NOT NULL,
                complemento VARCHAR(50),
                FOREIGN KEY (usuario_id) REFERENCES usuario(id) ON DELETE CASCADE
            );
        `);

        // Tabela compra
        await promisePool.query(`
            CREATE TABLE IF NOT EXISTS compra (
                id INT AUTO_INCREMENT PRIMARY KEY,
                usuario_id INT,
                total DECIMAL(10, 2) NOT NULL,
                data_compra TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                status ENUM('pendente', 'processando', 'enviado', 'concluído', 'cancelado'),
                FOREIGN KEY (usuario_id) REFERENCES usuario(id) ON DELETE SET NULL
            );
        `);

        // Tabela pedido
        await promisePool.query(`
            CREATE TABLE IF NOT EXISTS pedido (
                id INT AUTO_INCREMENT PRIMARY KEY,
                compra_id INT,
                produto_id INT,
                quantidade INT NOT NULL,
                preco DECIMAL(10, 2) NOT NULL,
                FOREIGN KEY (compra_id) REFERENCES compra(id) ON DELETE CASCADE,
                FOREIGN KEY (produto_id) REFERENCES produto(id) ON DELETE SET NULL
            );
        `);

        console.log('Tabelas criadas com sucesso!');
    } catch (error) {
        console.error('Erro ao criar tabelas:', error);
    } finally {
        await promisePool.end();
    }
};

export default createTables;
