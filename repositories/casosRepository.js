
const helpError = require('../utils/errorHandler');
const db = require('../db/db');

//Function 1 (GET /casos)
async function findAll() {
    return await db('casos').select('*');
}
//Function 2 (GET /casos/:id)
async function findById(id) {
    return await db('casos').select('*').where({ id }).first();
}

async function findAllCasosByAgenteId(agente_id) {
    return await db('casos').select('*').where({ agente_id });
}

//Function 3 (POST /casos)
async function AdicionarCaso(titulo, descricao, status, agente_id) {
    const [caso] = await db('casos').insert({
        titulo,
        descricao,
        status,
        agente_id
    }).returning('*');
    return caso;
}
//Function 4 (PUT /casos/:id)
 async function AtualizarCaso(id, camposAtualizados) {
    const [casoAtualizado] = await db('casos')
        .where({ id })
        .update(camposAtualizados)
        .returning('*');
    return casoAtualizado;
}

//Function 5 (PATCH /casos/:id) -- Função para atualizar parcialmente um caso(a função está igual a de cima, mudei para tornar mais legível)
async function AtualizarCasoParcial(id, camposAtualizados) {
    const [casoAtualizado] = await db('casos')
        .where({ id })
        .update(camposAtualizados)
        .returning('*');
    return casoAtualizado;
}
//Function 6 (DELETE /casos/:id)

async function RemoverCaso(id) {
    await db('casos').where({ id }).del();
    return;
}





module.exports = {
    findAll,
    findById,
    findAllCasosByAgenteId,
    AdicionarCaso,
    AtualizarCaso,
    AtualizarCasoParcial,
    RemoverCaso
}
