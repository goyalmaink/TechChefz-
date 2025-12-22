# TechChefz Project-1

A small Express + MongoDB backend for TechChefz exercises.

## Features
- Express server with simple routes
- MongoDB (Mongoose) connection
- Basic user/post controllers and routes

## Requirements
- Node.js (16+ recommended)
- MongoDB Atlas or a running MongoDB instance

## Setup & Run 🔧
1. Install dependencies:
   ```bash
   npm install
   ```
2. Add environment variables in a `.env` file at the project root:
   ```env
   DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
   PORT=8000
   ```
   Replace `<username>`, `<password>`, and `<dbname>` appropriately. URL-encode special characters in the password.
3. Start the dev server:
   ```bash
   npm run dev
   ```
   Or:
   ```bash
   node backend/index.js
   ```

## API (examples)
- GET / — health check
- POST /posts — create a post
- PUT /posts/:id — replace a post
- PATCH /posts/:id — update a post

## Notes & Tips 💡
- Ensure `.env` is listed in `.gitignore` and never committed.
- If you accidentally committed secrets, rotate them immediately.


