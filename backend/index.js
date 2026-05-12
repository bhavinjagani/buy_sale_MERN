import express from 'express';
import { config } from "dotenv";
import cors from "cors";
import { createServer } from 'http';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';

import { router } from './routes/allRoute.js';
import { connection } from './database.js';
import { resolvers } from './graphql/resolvers.js';
import { getUser } from './middleware/auth.js';

config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const typeDefs = readFileSync(join(__dirname, 'graphql/schema.graphql'), 'utf-8');

async function startServer() {
    const app = express();
    const port = process.env.PORT || 8000;

    app.use(cors());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(express.static('public'));

    connection.connect((err) => {
        if (err) throw err;
        console.log("connected");
    });

    const httpServer = createServer(app);

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await apolloServer.start();

    // Existing REST routes
    app.use('/', router);

    // GraphQL endpoint
    app.use('/graphql', expressMiddleware(apolloServer, {
        context: async ({ req }) => ({ user: getUser(req) }),
    }));

    await new Promise((resolve) => httpServer.listen({ port }, resolve));
    console.log(`Server running on port ${port}`);
    console.log(`GraphQL sandbox: http://localhost:${port}/graphql`);
}

startServer();
