## Backend Template
Welcome to the Backend Template! 

This project serves as a foundational template for building backend applications. It is designed with modern tools and best practices to help you quickly set up and deploy your backend services.

**Features**

- Fastify: A fast and low overhead web framework for Node.js.
- TypeScript: Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- Drizzle ORM: A lightweight and type-safe ORM for interacting with your database.
- Postgres: A powerful, open-source object-relational database system.
- Zod: A TypeScript-first schema declaration and validation library.
- Swagger: Integrated Swagger UI for API documentation.

**Development**

To start developing with this template, use the following commands:
	**Start Development Server:**
```
pnpm run dev
```
**Database Operations:**

- Generate Database Migrations:
```
pnpm run db:generate
```
- Run Database Migrations:
```
pnpm run db:migrate
```

- Open Database Studio:
```
pnpm run db:studio
```


**Installation**

Ensure you have Node.js installed, then clone the repository and run:

```
pnpm install
```

**Dependencies**

- @fastify/cors: Enable CORS in your Fastify application.
- @fastify/swagger: Fastify plugin to serve Swagger documentation.
- @fastify/swagger-ui: Fastify plugin to serve Swagger UI.
- fastify-type-provider-zod: Type provider for Fastify using Zod.
- postgres: Node.js client for interfacing with PostgreSQL databases.

**Dev Dependencies**

- @biomejs/biome: A tool for managing your project's environment.
- @types/node: TypeScript definitions for Node.js.
- tsx: A TypeScript execution engine for Node.js.
- typescript: Language for application-scale JavaScript development.
