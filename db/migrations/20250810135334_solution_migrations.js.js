exports.up = function(knex) {
  return knex.schema
    .createTable('agentes', (table) => {
      table.increments('id').primary();
      table.string('nome').notNullable();
      table.date('dataDeIncorporacao').notNullable();
      table.string('cargo').notNullable();
      table.timestamps(true, true);
    })
    .then(() => {
      return knex.schema.createTable('casos', (table) => {
        table.increments('id').primary();
        table.string('titulo').notNullable();
        table.string('descricao').notNullable();
        table.string('status');
        table.integer('agente_id').unsigned().references('id').inTable('agentes').onDelete('CASCADE');
        table.timestamps(true, true);
      });
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('casos')
    .then(() => knex.schema.dropTableIfExists('agentes'));
};
