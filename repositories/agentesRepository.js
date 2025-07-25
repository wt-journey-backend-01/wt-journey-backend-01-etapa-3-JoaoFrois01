const helpID = require('uuid');
const helpError = require('../utils/errorHandler');

const agentes = [

    {
        id: "401bccf5-cf9e-489d-8412-446cd169a0f1",
        nome: "Rommel Carneiro",
        dataDeIncorporacao: "1992-10-04",
        cargo: "delegado"

    }
]

//Function 1 (GET /agentes)
function findAll() {
    return agentes;
}

//Function 2 (GET /agentes/:id)
function findById(id) {
    return agentes.find(c =>  c.id === id )
}

//Function 3 (POST /agentes)
function AdicionarAgente(nome, dataDeIncorporacao, cargo) {
    const novoAgente = {
        id: helpID.v4(),
        nome,
        dataDeIncorporacao,
        cargo
    }
    agentes.push(novoAgente)

    return novoAgente
}

//Function 4 (PUT /agentes/:id)
function AtualizarAgente(id, nome, dataDeIncorporacao, cargo) {
    const agente = findById(id);
    agente.nome = nome;
    agente.dataDeIncorporacao = dataDeIncorporacao;
    agente.cargo = cargo;

    return agente;
}

//Function 5 (PATCH /agentes/:id)
function AtualizarAgenteParcial(id, nome, dataDeIncorporacao, cargo) {
    const agente = findById(id);
    agente.nome = nome;
    agente.dataDeIncorporacao = dataDeIncorporacao;
    agente.cargo = cargo;

    return agente;

}

//Function 6 (DELETE /agentes/:id)
function RemoverAgente(id) {
    const agente = findById(id);
    agentes.splice(agentes.indexOf(agente), 1);
    return 
}

module.exports = {
    findAll,
    findById,
    AdicionarAgente,
    AtualizarAgente,
    AtualizarAgenteParcial,
    RemoverAgente
}