import configDB from "../config/db.js";
import mysql from "mysql2/promise";

async function createDB() {
  try {
    const connection = await mysql.createConnection({
      host: configDB.options.host,
      user: configDB.config.username,
      password: configDB.config.password,
    });

    await connection.query(
      `CREATE DATABASE IF NOT EXISTS ${configDB.config.database};`
    );
    console.log("\n2. Database criada com sucesso.\n");
    await connection.end();
  } catch (error) {
    console.error("\nErro ao conectar com o DB: ", error);
  }
}

export default createDB;
