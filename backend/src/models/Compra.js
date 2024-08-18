import { DataTypes } from "sequelize";
import configDB from "../config/db.js";
import Usuario from "./Usuario.js";

const Compra = configDB.define(
  "Compra",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Usuario,
        key: "id",
      },
      onDelete: "SET NULL",
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM(
        "pendente",
        "processando",
        "enviado",
        "concluído",
        "cancelado"
      ),
    },
  },
  {
    tableName: "compra",
    timestamps: true,
  }
);

Compra.belongsTo(Usuario, { foreignKey: "usuario_id", onDelete: "SET NULL" });

export default Compra;
