import dotenv from 'dotenv';
dotenv.config();

interface KnexConfig {
  [key: string]: object;
}

const config: KnexConfig = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: '5432',
      database: 'application',
      user: 'postgres',
      password: 'postgres',
    },
    pool: {
      min: 1,
      max: 10,
    },
    migrations: {
      directory: 'migrations',
    },
    seeds: {
      directory: 'seeds',
    },
  },
  production: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    pool: {
      min: 1,
      max: 10,
    },
    migrations: {
      directory: 'migrations',
    },
    seeds: {
      directory: 'seeds',
    },
  },
};

export default config;
