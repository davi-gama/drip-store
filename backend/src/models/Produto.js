import { DataTypes } from "sequelize";
import configDB from "../config/db.js";
import Categoria from "./Categoria.js";

const Produto = configDB.define(
  "Produto",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
    },
    preco: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    preco_promocao: {
      type: DataTypes.DECIMAL(10, 2),
    },
    label_promocao: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    marca: {
      type: DataTypes.STRING(100),
    },
    genero: {
      type: DataTypes.ENUM("masculino", "feminino", "unissex"),
    },
    numero_vendas: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    rating: {
      type: DataTypes.DECIMAL(3, 2),
      defaultValue: 0.0,
    },
    numero_avaliacoes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    referencia: {
      type: DataTypes.STRING(100),
      unique: true,
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Categoria,
        key: "id",
      },
      onDelete: "SET NULL",
    },
    finalidade: {
      type: DataTypes.ENUM("lazer", "casual", "corrida", "utilitario"),
      allowNull: false,
    },
    estoque: {
      type: DataTypes.INTEGER,
      defaultValue: 50,
    },
    data_criacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    data_atualizacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      onUpdate: DataTypes.NOW,
    },
  },
  {
    tableName: "produto",
    timestamps: false,
  }
);

Produto.belongsTo(Categoria, {
  foreignKey: "categoria_id",
  onDelete: "SET NULL",
});

export default Produto;
