import express from 'express';
import { config } from "dotenv";
const env = process.argv.includes('--production') ? 'production' : 'development';
config({ path: `.env.${env}` });
console.log(`Running in ${env} mode`);
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

    app.get('/', (_req, res) => {
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <title>Buy & Sale API</title>
                <style>
                    * { margin: 0; padding: 0; box-sizing: border-box; }
                    body {
                        font-family: 'Segoe UI', sans-serif;
                        background: linear-gradient(135deg, #3ba2ff, #6963ff);
                        min-height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .card {
                        background: white;
                        border-radius: 16px;
                        padding: 48px 56px;
                        text-align: center;
                        box-shadow: 0 20px 60px rgba(0,0,0,0.15);
                        max-width: 480px;
                        width: 90%;
                    }
                    .badge {
                        display: inline-block;
                        background: #e8f5e9;
                        color: #2e7d32;
                        font-size: 13px;
                        font-weight: 600;
                        padding: 4px 14px;
                        border-radius: 20px;
                        margin-bottom: 20px;
                        letter-spacing: 0.5px;
                    }
                    h1 {
                        font-size: 28px;
                        color: #1a1a2e;
                        margin-bottom: 10px;
                    }
                    p {
                        color: #666;
                        font-size: 15px;
                        margin-bottom: 32px;
                        line-height: 1.6;
                    }
                    .links {
                        display: flex;
                        gap: 12px;
                        justify-content: center;
                        flex-wrap: wrap;
                    }
                    a {
                        padding: 10px 24px;
                        border-radius: 8px;
                        font-size: 14px;
                        font-weight: 600;
                        text-decoration: none;
                        transition: opacity 0.2s;
                    }
                    a:hover { opacity: 0.85; }
                    .primary {
                        background: linear-gradient(135deg, #3ba2ff, #6963ff);
                        color: white;
                    }
                    .secondary {
                        background: #f1f3f5;
                        color: #333;
                    }
                    .footer {
                        margin-top: 32px;
                        font-size: 12px;
                        color: #aaa;
                    }
                </style>
            </head>
            <body>
                <div class="card">
                    <div class="badge">● Server Running</div>
                    <h1>Buy &amp; Sale API</h1>
                    <p>Backend server is up and running.<br/>Use the links below to explore.</p>
                    <div class="links">
                        <a href="/graphql" class="primary">GraphQL Playground</a>
                        <a href="/latestAds" class="secondary">Latest Ads</a>
                    </div>
                    <div class="footer">Node.js + Express + Apollo GraphQL</div>
                </div>
            </body>
            </html>
        `);
    });

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
