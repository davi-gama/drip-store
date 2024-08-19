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

  if (!email || !senha) {
    return res.status(400).json({ message: "Email e senha são obrigatórios." });
  }

  try {
    const [rows] = await configDB.query(
      "SELECT * FROM usuario WHERE email = ?",
      {
        replacements: [email],
      }
    );

    if (rows.length === 0) {
      return res.status(400).json({ message: "Email ou senha inválidos" });
    }

    // Obtém o usuário encontrado
    const user = rows[0];
    const { senha: hashedPassword } = user;

    // Compara a senha fornecida com o hash armazenado
    const match = await bcrypt.compare(senha, hashedPassword);

    if (!match) {
      return res.status(400).json({ message: "Email ou senha inválidos" });
    }

    res.status(200).json({ message: "Login bem-sucedido", user });
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
  const { nome_completo, email, senha, telefone, cpf, endereco } = req.body;

  try {
    // Atualiza informações do usuário
    const user = await Usuario.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    if (nome_completo) user.nome_completo = nome_completo;
    if (email) user.email = email;
    if (telefone) user.telefone = telefone;
    if (cpf) user.cpf = cpf;
    if (senha) {
      const hashedPassword = await bcrypt.hash(senha, saltRounds);
      user.senha = hashedPassword;
    }

    await user.save();

    // Atualiza informações de endereço
    if (endereco) {
      const [address, created] = await Endereco.findOrCreate({
        where: { usuario_id: id },
        defaults: endereco,
      });

      if (!created) {
        await Endereco.update(endereco, {
          where: { usuario_id: id },
        });
      }
    }

    console.log("Dados recebidos para atualização:", req.body);

    res.status(200).json({ message: "Usuário atualizado com sucesso" });
  } catch (error) {
    console.error("Erro ao atualizar no banco de dados:", error);
    res.status(500).json({ message: "Falha na consulta ao banco de dados" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Usuario.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    await user.destroy();
    res.status(200).json({ message: "Usuário deletado com sucesso" });
  } catch (error) {
    console.error("Error deleting from the database:", error);
    res.status(500).json({ message: "Database query failed" });
  }
};
