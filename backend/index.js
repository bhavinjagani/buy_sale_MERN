import express from 'express';
import { config } from "dotenv";
import cors from "cors";

import { router } from './routes/allRoute.js';
import { connection } from './database.js';

config();
const app = express();
const port = 5000;//process.env['PORT'];
app.use(cors());

connection.connect((err) => {
    if (err) throw err;
    console.log("connected")
});

//Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// Routes
app.use('/', router);

// Listening on the port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});