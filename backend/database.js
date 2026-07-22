import { createConnection } from 'mysql2';
import { config } from 'dotenv';

const env = process.argv.includes('--production') ? 'production' : 'development';
config({ path: `.env.${env}` });

const connection = createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});


export {connection};