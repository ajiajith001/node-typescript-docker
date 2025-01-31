import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('posts', (table) => {
    table.specificType('id', 'CHAR(16)').primary();
    table.string('slug').notNullable().unique();
    table.string('title').notNullable();
    table.string('content');
    table.dateTime('publishedAt').index();
    table.dateTime('createdAt').defaultTo(knex.fn.now()).notNullable();
    table.dateTime('updatedAt').defaultTo(knex.fn.now()).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('posts');
}
