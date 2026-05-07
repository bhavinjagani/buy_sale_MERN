import { createConnection } from 'mysql';
import { config } from 'dotenv';

config();

const connection = createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});


export {connection};