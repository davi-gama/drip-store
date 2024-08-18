import configDB from "../config/db.js";

// Função para obter todos os produtos
export const getProducts = async (req, res) => {
  try {
    const [rows] = await configDB.query(`
      SELECT 
        p.id as produto_id, 
        p.nome, 
        p.descricao, 
        p.preco, 
        p.preco_promocao, 
        p.label_promocao, 
        p.marca, 
        p.genero, 
        p.numero_vendas, 
        p.rating, 
        p.numero_avaliacoes, 
        p.referencia, 
        p.finalidade, 
        p.estoque, 
        p.categoria_id,
        GROUP_CONCAT(DISTINCT pc.cor ORDER BY pc.cor ASC) as cores,
        GROUP_CONCAT(DISTINCT pi.url_imagem ORDER BY pi.url_imagem ASC) as imagens
      FROM produto p
      LEFT JOIN produto_cor pc ON p.id = pc.produto_id
      LEFT JOIN produto_imagem pi ON p.id = pi.produto_id
      GROUP BY p.id;
    `);

    // Transformando as strings de URLs e cores em arrays
    const produtos = rows.map((produto) => {
      return {
        ...produto,
        imagens: produto.imagens ? produto.imagens.split(",") : [],
        cores: produto.cores ? produto.cores.split(",") : [],
      };
    });

    res.json(produtos);
  } catch (error) {
    console.error("Error querying the database:", error);
    res.status(500).json({ message: "Database query failed" });
  }
};

// Função para obter um produto por ID
export const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await configDB.query(
      `
      SELECT 
        p.id as produto_id, 
        p.nome, 
        p.descricao, 
        p.preco, 
        p.preco_promocao, 
        p.label_promocao, 
        p.marca, 
        p.genero, 
        p.numero_vendas, 
        p.rating, 
        p.numero_avaliacoes, 
        p.referencia, 
        p.finalidade, 
        p.estoque, 
        p.categoria_id,
        GROUP_CONCAT(DISTINCT pc.cor ORDER BY pc.cor ASC) as cores,
        GROUP_CONCAT(DISTINCT pi.url_imagem ORDER BY pi.url_imagem ASC) as imagens
      FROM produto p
      LEFT JOIN produto_cor pc ON p.id = pc.produto_id
      LEFT JOIN produto_imagem pi ON p.id = pi.produto_id
      WHERE p.id = ?
      GROUP BY p.id;
    `,
      { replacements: [id] }
    );

    // Transformando as strings de URLs e cores em arrays
    const produto = rows.map((produto) => {
      return {
        ...produto,
        imagens: produto.imagens ? produto.imagens.split(",") : [],
        cores: produto.cores ? produto.cores.split(",") : [],
      };
    });

    // Verifica se o produto foi encontrado
    if (produto.length > 0) {
      res.json(produto[0]);
    } else {
      res.status(404).json({ message: "Produto não encontrado" });
    }
  } catch (error) {
    console.error("Error querying the database:", error);
    res.status(500).json({ message: "Database query failed" });
  }
};
