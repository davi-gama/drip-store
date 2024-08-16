import { DataTypes } from "sequelize";
import configDB from "../config/db";

const Categoria = configDB.define(
  "Categoria",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    descricao: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "categoria",
    timestamps: false,
  }
);

export default Categoria;
