import { DataTypes } from "sequelize";
import configDB from "../config/db.js";
import Usuario from "./Usuario.js";

const Endereco = configDB.define(
  "Endereco",
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
      onDelete: "CASCADE",
    },
    rua: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    numero: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    bairro: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    cidade: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    cep: {
      type: DataTypes.STRING(12),
      allowNull: false,
    },
    complemento: {
      type: DataTypes.STRING(50),
    },
  },
  {
    tableName: "endereco",
    timestamps: false,
  }
);

Endereco.belongsTo(Usuario, { foreignKey: "usuario_id", onDelete: "CASCADE" });

export default Endereco;
