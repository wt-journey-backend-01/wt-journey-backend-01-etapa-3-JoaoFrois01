/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Limpando as tabelas antes de inserir novos dados
  await knex('casos').del();
  await knex('agentes').del();

  await knex('agentes').insert([
    { nome: 'Agente 1', dataDeIncorporacao: '2023-01-01', cargo: 'Investigador' },
    { nome: 'Agente 2', dataDeIncorporacao: '2023-02-01', cargo: 'Analista' },
    { nome: 'Agente 3', dataDeIncorporacao: '2023-03-01', cargo: 'Operacional' }
  ]);
  await knex('casos').insert([
    { titulo: 'Roubo no banco', descricao: 'Roubo durante a madrugada', status: 'aberto', agente_id: 1 },
    { titulo: 'Assalto à mão armada', descricao: 'Suspeito armado capturado', status: 'solucionado', agente_id: 2 }
  ]);
};
