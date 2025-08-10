
const helpError = require('../utils/errorHandler');
const db = require('../db/db');

//Function 1 (GET /agentes)
async function findAll() {
    return await db('agentes').select('*');
}

//Function 2 (GET /agentes/:id)
async function findById(id) {
    return await db('agentes').select('*').where({ id }).first()
}


//Function 3 (POST /agentes)
async function AdicionarAgente(nome, dataDeIncorporacao, cargo) {
    return await db('agentes').insert({
        nome,
        dataDeIncorporacao,
        cargo
    }).returning('*');
}

//Function 4 (PUT /agentes/:id)
async function AtualizarAgente(id, camposAtualizados) {
    const [agenteAtualizado] = await db('agentes')
        .where({ id })
        .update(camposAtualizados)
        .returning('*');
    return agenteAtualizado;
}

//Function 5 (PATCH /agentes/:id)
async function AtualizarAgenteParcial(id, camposAtualizados) {
    const [agenteAtualizado] = await db('agentes')
        .where({ id })
        .update(camposAtualizados)
        .returning('*');

    return agenteAtualizado;
}

//Function 6 (DELETE /agentes/:id)
async function RemoverAgente(id) {
    await db('agentes').where({ id }).del();
    return;
}

module.exports = {
    findAll,
    findById,
    AdicionarAgente,
    AtualizarAgente,
    AtualizarAgenteParcial,
    RemoverAgente
}