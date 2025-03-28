# Express Boilerplate

A modern Express.js boilerplate with TypeScript, featuring a robust database layer using [Knex.js](https://knexjs.org/) query builder and [Objection.js](https://vincit.github.io/objection.js/) ORM. This project provides a solid foundation for building scalable Node.js applications with type safety and structured database operations.

Key Features:

- TypeScript support for enhanced developer experience and type safety
- Database migrations and seeding with Knex.js
- Elegant model layer with Objection.js
- CORS configuration
- Request validation middleware
- Structured logging

## Available Scripts

In the project directory, you can run:

### Development

- `npm run start` - Starts the application using ts-node
- `npm run start:watch` - Starts the application in watch mode using nodemon
- `npm run format` - Formats all TypeScript files using Prettier
- `npm run build` - Builds the TypeScript project

### Database Operations

- `npm run db-up` - Starts the PostgreSQL database container
- `npm run db-down` - Stops and removes the PostgreSQL database container
- `npm run db-migrate` - Runs pending database migrations
- `npm run db-rollback` - Rolls back the latest database migration
- `npm run db-seed` - Seeds the database with initial data
- `npm run db-init` - Initializes database (runs migrations and seeds)
- `npm run db-migrate:create` - Creates a new migration file

## Database Configuration

The project uses PostgreSQL with the following default configuration:

- Host: localhost
- Port: 5432
- Username: postgres
- Password: postgres
- Database: application

You can customize these settings by creating a `.env` file in the root directory with the following environment variables:

- `DB_HOST` - The host address of the database
- `DB_PORT` - The port number of the database
- `DB_USER` - The username for the database
- `DB_PASSWORD` - The password for the database
- `DB_NAME` - The name of the database

Local database settings can be found in the `docker-compose.yml` file.
