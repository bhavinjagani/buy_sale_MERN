import { createConnection } from 'mysql';
// connect to DB
const connection = createConnection({
    host: 'localhost',
    database: 'buynsale',
    user: 'root'
});


export {connection};