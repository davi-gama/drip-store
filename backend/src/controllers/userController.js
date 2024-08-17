import configDB from '../config/db.js'; // Importa a configuração do banco de dados
import bcrypt from 'bcrypt'; // Importa o algoritmo de criptografia Bcrypt

const saltRounds = 10; 


// Função para obter todos os usuários
export const getUsers = async (req, res) => {
  try {
    const [rows] = await configDB.query(`
      SELECT u.*, e.* 
      FROM usuario u
      LEFT JOIN endereco e ON u.id = e.usuario_id
    `);
    res.json(rows);
  } catch (error) {
    console.error("Error querying the database:", error);
    res.status(500).json({ message: "Database query failed" });
  }
};



// Função para login de usuário
export const loginUser = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const [rows] = await configDB.query("SELECT * FROM usuario WHERE email = ?", [email]);
    
    if (rows.length > 0) {
      const user = rows[0];
      const match = await bcrypt.compare(senha, user.senha);

      if (match) {
        res.status(200).json({ message: "Login bem-sucedido", user });
      } else {
        res.status(400).json({ message: "Email ou senha inválidos" });
      }
    } else {
      res.status(400).json({ message: "Email ou senha inválidos" });
    }
  } catch (error) {
    console.error("Error querying the database:", error);
    res.status(500).json({ message: "Database query failed" });
  }
};

// Função para criar um novo usuário
export const createUser = async (req, res) => {
  const { nome_completo, email, senha } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(senha, saltRounds);

    await configDB.query(
      "INSERT INTO usuario (nome_completo, email, senha) VALUES (?, ?, ?)",
      [nome_completo, email, hashedPassword]
    );
    res.status(201).json({ message: "Usuário criado com sucesso" });
  } catch (error) {
    console.error("Error inserting into the database:", error);
    res.status(500).json({ message: "Database query failed" });
  }
};

// Função para obter um usuário por ID
export const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await configDB.query(`
      SELECT u.*, e.*
      FROM usuario u
      LEFT JOIN usuario_endereco ue ON u.id = ue.usuario_id
      LEFT JOIN endereco e ON ue.endereco_id = e.id
      WHERE u.id = ?`, [id]);
      
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ message: "Usuário não encontrado" });
    }
  } catch (error) {
    console.error("Error querying the database:", error);
    res.status(500).json({ message: "Database query failed" });
  }
};

// Função para atualizar um usuário
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { nome_completo, email, senha } = req.body;

  try {
    let query = "UPDATE usuario SET nome_completo = ?, email = ?";
    const params = [nome_completo, email];

    if (senha) {
      const hashedPassword = await bcrypt.hash(senha, saltRounds);
      query += ", senha = ?";
      params.push(hashedPassword);
    }

    query += " WHERE id = ?";
    params.push(id);

    await configDB.query(query, params);
    res.status(200).json({ message: "Usuário atualizado com sucesso" });
  } catch (error) {
    console.error("Error updating the database:", error);
    res.status(500).json({ message: "Database query failed" });
  }
};

// Função para deletar um usuário
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await configDB.query("DELETE FROM usuario WHERE id = ?", [id]);
    res.status(200).json({ message: "Usuário deletado com sucesso" });
  } catch (error) {
    console.error("Error deleting from the database:", error);
    res.status(500).json({ message: "Database query failed" });
  }
};
