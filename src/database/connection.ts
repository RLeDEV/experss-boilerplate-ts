import Knex from 'knex';
import { Model, knexSnakeCaseMappers } from 'objection';
import knexConfig from '@database/config';

export function connect(env: string) {
  const config = knexConfig[env];

  if (!config) {
    throw new Error(`Database connection error: Invalid environment: ${env}`);
  }

  const knex = Knex({ ...config, ...knexSnakeCaseMappers() });
  // Bind all models to the knex instance
  Model.knex(knex);

  return knex;
}
