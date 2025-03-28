import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('users').del();

  await knex('users').insert([
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password',
    },
    {
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      password: 'password',
    },
  ]);
}
