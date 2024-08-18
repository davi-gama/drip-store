import Usuario from "../models/Usuario.js";
import Endereco from "../models/Endereco.js";
import bcrypt from "bcrypt";
import configDB from "../config/db.js";

const saltRounds = 10;

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

export const loginUser = async (req, res) => {
  const { email, senha } = req.body;
  try {
    const [rows] = await configDB.query(
      "SELECT * FROM usuario WHERE email = ?",
      {
        replacements: [email],
      }
    );
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

export const createUser = async (req, res) => {
  const {
    nome,
    cpf,
    email,
    senha,
    telefone,
    rua,
    numero,
    bairro,
    cidade,
    cep,
    complemento,
    tipo_acesso,
  } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(senha, saltRounds);

    // Inserir usuário
    const user = await Usuario.create({
      nome_completo: nome,
      cpf,
      email,
      senha: hashedPassword,
      telefone,
      tipo_acesso,
    });

    // Inserir endereço associado ao usuário
    await Endereco.create({
      usuario_id: user.id,
      rua,
      numero,
      bairro,
      cidade,
      cep,
      complemento,
    });

    res.status(201).json({ message: "Usuário criado com sucesso" });
  } catch (error) {
    console.error("Erro ao inserir no banco de dados:", error);
    res.status(500).json({ message: "Falha na consulta ao banco de dados" });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await configDB.query(
      `
      SELECT u.*, e.*
      FROM usuario u
      LEFT JOIN endereco e ON u.id = e.usuario_id
      WHERE u.id = ?`,
      { replacements: [id] }
    );

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

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await configDB.query("DELETE FROM usuario WHERE id = ?"),
      {
        replacements: [id],
      };
    res.status(200).json({ message: "Usuário deletado com sucesso" });
  } catch (error) {
    console.error("Error deleting from the database:", error);
    res.status(500).json({ message: "Database query failed" });
  }
};
