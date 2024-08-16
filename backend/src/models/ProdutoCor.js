import { DataTypes } from "sequelize";
import configDB from "../config/db.js";
import Produto from "./Produto.js";

const ProdutoCor = configDB.define(
  "ProdutoCor",
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
    cor: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: "produto_cor",
    timestamps: false,
  }
);

ProdutoCor.belongsTo(Produto, {
  foreignKey: "produto_id",
  onDelete: "CASCADE",
});

export default ProdutoCor;
