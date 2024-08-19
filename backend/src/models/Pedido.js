import { DataTypes } from "sequelize";
import configDB from "../config/db.js";
import Compra from "./Compra.js";
import Produto from "./Produto.js";

const Pedido = configDB.define(
  "Pedido",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    compra_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Compra,
        key: "id",
      },
      onDelete: "CASCADE",
    },
    produto_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Produto,
        key: "id",
      },
      onDelete: "SET NULL",
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    preco: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: "pedido",
    timestamps: true,
  }
);

Pedido.belongsTo(Compra, { foreignKey: "compra_id", onDelete: "CASCADE" });
Pedido.belongsTo(Produto, { foreignKey: "produto_id", onDelete: "SET NULL" });

export default Pedido;
