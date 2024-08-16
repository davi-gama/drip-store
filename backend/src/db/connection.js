import mysql2 from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

// Cria um pool de conexões
const pool = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME, // Usa o banco de dados criado
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const promisePool = pool.promise();

export default promisePool;
