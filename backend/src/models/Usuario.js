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
    senha: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, 
      },
    },
    cpf: {
      type: DataTypes.STRING(16),
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "usuario",
    timestamps: true,
  }
);

export default Usuario;
