import { DataTypes } from "sequelize";
import configDB from "../config/db.js";
import Produto from "./Produto.js";

const ProdutoImagem = configDB.define(
  "ProdutoImagem",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    produto_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Produto,
        key: "id",
      },
      onDelete: "CASCADE",
    },
    url_imagem: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING(255),
    },
  },
  {
    tableName: "produto_imagem",
    timestamps: false,
  }
);

export default ProdutoImagem;
