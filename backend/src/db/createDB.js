import mysql2 from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const createDatabaseIfNotExists = async () => {
    const connection = mysql2.createConnection({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD
    });

    const promiseConnection = connection.promise();

    try {
        await promiseConnection.connect();
        const [databases] = await promiseConnection.query('SHOW DATABASES LIKE ?', [DB_NAME]);

        if (databases.length === 0) {
            await promiseConnection.query(`CREATE DATABASE ${DB_NAME}`);
            console.log(`Banco de dados ${DB_NAME} criado com sucesso.`);
        } else {
            console.log(`Banco de dados ${DB_NAME} já existe.`);
        }
    } catch (error) {
        console.error('Erro ao criar banco de dados:', error);
    } finally {
        await promiseConnection.end();
    }
};

export default createDatabaseIfNotExists;
