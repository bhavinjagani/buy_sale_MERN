# Buy & Sale

A full-stack classifieds marketplace (like OLX/Craigslist) where users can post, browse, and search ads across categories such as vehicles, real estate, and electronics. Built as a MERN-style app with a MySQL database and a GraphQL + REST hybrid API.

## Tech Stack

**Frontend** ([Frontend/](Frontend))
- React 18 (Create React App / react-scripts)
- Apollo Client for GraphQL
- Redux Toolkit for state management
- React Router
- Bootstrap

**Backend** ([backend/](backend))
- Node.js + Express
- Apollo Server (GraphQL) alongside REST routes
- MySQL (via `mysql2`)
- JWT auth (`jsonwebtoken`, `bcryptjs`)
- Google OAuth login (`google-auth-library`, `@react-oauth/google`)
- AWS S3 for image uploads (`@aws-sdk/client-s3`)
- Gemini API for AI features — ad description generation and a RAG-based chatbot (`@google/genai`)

## Project Structure

```
.
├── Frontend/                 # React app
│   └── src/
│       ├── components/       # Home, Categories, Search, PostAds, MyAccount, LoginRegister, AdsDetails...
│       ├── context/          # GraphQL queries/mutations
│       ├── store/            # Redux slices
│       └── apolloClient.js
├── backend/                  # Express + GraphQL API
│   ├── controllers/          # ads, search, user
│   ├── models/                # MySQL queries
│   ├── graphql/               # schema.graphql + resolvers.js
│   ├── routes/                 # REST routes (auth, uploads, ads, search)
│   ├── middleware/            # JWT auth
│   ├── rag/                    # embeddings + vector store for chatbot
│   └── database.js             # MySQL connection pool
└── docker-compose.yml
```

## API

- **GraphQL** (`/graphql`) — categories, sub-categories, ads (create/update/delete), search, locations, user profile, auth (login/register/Google login), AI ad-description generation. See [backend/graphql/schema.graphql](backend/graphql/schema.graphql).
- **REST** (`backend/routes/allRoute.js`) — image upload to S3, login/register, category/ad fetch endpoints, search, marketing unsubscribe.

## Getting Started

### Prerequisites
- Node.js 20+
- MySQL database

### Backend

```bash
cd backend
npm install
cp .env.development .env.development   # fill in your own values (see below)
npm run dev      # nodemon, development mode
# or
npm start        # production mode
```

Environment variables (`backend/.env.development` / `backend/.env.production`):

| Variable | Description |
|---|---|
| `PORT` | Server port (default 8000) |
| `DB_HOST`, `DB_NAME`, `DB_USER`, `DB_PASSWORD` | MySQL connection |
| `SECRET` | JWT signing secret |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, `S3_BUCKET` | S3 image uploads |
| `GEMINI_API_KEY` | Gemini API for AI ad descriptions / chatbot |

### Frontend

```bash
cd Frontend
npm install
npm start
```

Environment variables (`Frontend/.env`):

| Variable | Description |
|---|---|
| `REACT_APP_API_URL` | Backend API base URL |
| `REACT_APP_S3_URL` | S3 bucket URL for serving images |
| `REACT_APP_GOOGLE_CLIENT_ID` | Google OAuth client ID |

### Docker

Build and run both services together:

```bash
docker-compose up --build
```

This starts the backend on `8001` (mapped from container port `8000`) and the frontend (nginx) on `80`. Requires `REACT_APP_API_URL`, `REACT_APP_S3_URL`, and `REACT_APP_GOOGLE_CLIENT_ID` in the environment, plus `backend/.env.production` for backend secrets.

## Database

MySQL schema/data used by this project is in `buynsalecpy.sql` at the repo root.
