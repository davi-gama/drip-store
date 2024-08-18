import { DataTypes } from "sequelize";
import configDB from "../config/db.js";

const Usuario = configDB.define(
  "Usuario",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome_completo: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    telefone: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    tipo_acesso: {
      type: DataTypes.STRING(30),
      defaultValue: "client",
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true, // Define restrição única para o e-mail
      validate: {
        isEmail: true, // Valida que o campo seja um e-mail válido
      },
    },
    cpf: {
      type: DataTypes.STRING(16),
      allowNull: false,
      unique: true, // Define restrição única para o CPF
      validate: {
        len: [11, 14], // Valida o tamanho do CPF (considerando formatação com pontos e traços)
      },
    },
  },
  {
    tableName: "usuario",
    timestamps: true,
  }
);

export default Usuario;
