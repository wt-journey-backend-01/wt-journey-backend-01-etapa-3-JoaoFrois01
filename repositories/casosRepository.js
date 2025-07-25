const helpID = require('uuid');
const helpError = require('../utils/errorHandler');
const casos = [
    {
        id: "f5fb2ad5-22a8-4cb4-90f2-8733517a0d46",
        titulo: "homicidio",
        descricao: "Disparos foram reportados às 22:33 do dia 10/07/2007 na região do bairro União, resultando na morte da vítima, um homem de 45 anos.",
        status: "aberto",
        agente_id: "401bccf5-cf9e-489d-8412-446cd169a0f1"

    },
    //Demais objetos
]

//Function 1 (GET /casos)
function findAll() {
    return casos
}
//Function 2 (GET /casos/:id)
function findById(id) {
    return casos.find(caso => caso.id === id);
}
//Function 3 (POST /casos)
function AdicionarCaso(titulo, descricao, status, agente_id) {
    const novoCaso = {
        id: helpID.v4(),
        titulo,
        descricao,
        status,
        agente_id
    }
    casos.push(novoCaso);
    return novoCaso;
}
//Function 4 (PUT /casos/:id)

function AtualizarCaso(id, titulo, descricao, status, agente_id) {
    const caso = findById(id);
    caso.titulo = titulo;
    caso.descricao = descricao;
    caso.status = status;
    caso.agente_id = agente_id;
    return caso;
}

//Function 5 (PATCH /casos/:id) -- Função para atualizar parcialmente um caso(a função está igual a de cima, mudei para tornar mais legível)
function AtualizarCasoParcial(id, titulo, descricao, status, agente_id) {
    const caso = findById(id);
    caso.titulo = titulo;
    caso.descricao = descricao;
    caso.status = status;
    caso.agente_id = agente_id;
    return caso;
}

//Function 6 (DELETE /casos/:id)

function RemoverCaso(id) {
    const caso = findById(id);
    casos.splice(casos.indexOf(caso), 1);
}





module.exports = {
    findAll,
    findById,
    AdicionarCaso,
    AtualizarCaso,
    AtualizarCasoParcial,
    RemoverCaso
}
