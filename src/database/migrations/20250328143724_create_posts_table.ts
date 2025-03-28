import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('posts', (table) => {
    table.uuid('id').primary().notNullable().defaultTo(knex.fn.uuid());
    table.string('title').notNullable();
    table.text('content').notNullable();
    table.uuid('user_id').references('id').inTable('users');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('posts');
}
