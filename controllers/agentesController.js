const agentesRepository = require("../repositories/agentesRepository")
const helpError = require('../utils/errorHandler');
const moment = require('moment');
const helpID = require('uuid');
const express = require('express');
const app = express();

app.use(express.json());

function getAllAgentes(req, res) {
        const agentes = agentesRepository.findAll()
        if (req.query.cargo)
                res.status(200).json(agentes.filter(a => a.cargo === req.query.cargo));
        if (req.query.sort)
        {
                if (req.query.sort[0] === "-")
                        res.status(200).json(agentes.sort((a, b) => a.dataDeIncorporacao.localeCompare(b.dataDeIncorporacao)).reverse());
                else
                        res.status(200).json(agentes.sort((a, b) => a.dataDeIncorporacao.localeCompare(b.dataDeIncorporacao)));
        }
        res.status(200).json(agentes)
}
function getAgenteById(req, res, next) {
        const id = req.params.id
        const agente = agentesRepository.findById(id)
        if (!agente)
                res.status(404).json({ message: "Agente não encontrado" })
        else
                res.status(200).json(agente)
}

function createAgente(req, res) {
        const nome = req.body.nome
        const dataDeIncorporacao = req.body.dataDeIncorporacao
        const dataFormatada = moment(dataDeIncorporacao, "YYYY-MM-DD", true);
        const cargo = req.body.cargo

        if (!nome)
                return res.status(400).json(helpError.ErrorMessage(400, "nome"));
        if (!dataDeIncorporacao || dataFormatada.format("YYYY-MM-DD") !== req.body.dataDeIncorporacao)
                return res.status(400).json(helpError.ErrorMessage(400, "dataDeIncorporacao"));
        if (!cargo)
                return res.status(400).json(helpError.ErrorMessage(400, "cargo"));

        const novoAgente = agentesRepository.AdicionarAgente(nome, dataDeIncorporacao, cargo)
        res.status(201).json(novoAgente)
}

function updateAgente(req, res) {
        const id = req.params.id
        const agente = agentesRepository.findById(id);
        if (!agente)
                res.status(404).json({ message: "Agente não encontrado" })

        const nome = req.body.nome
        const dataDeIncorporacao = req.body.dataDeIncorporacao
        const cargo = req.body.cargo

        if (!nome)
                return res.status(400).json(helpError.ErrorMessage(400, "nome"));
        if (!dataDeIncorporacao)
                return res.status(400).json(helpError.ErrorMessage(400, "dataDeIncorporacao"));
        if (!cargo)
                return res.status(400).json(helpError.ErrorMessage(400, "cargo"));

        res.status(200).json(agentesRepository.AtualizarAgente(id, nome, dataDeIncorporacao, cargo))
}

function updateAgenteParcial(req, res) {
        const id = req.params.id
        const agente = agentesRepository.findById(id);
        if (!agente)
                res.status(404).json({ message: "Agente não encontrado" })
        const nome = !(req.body.nome) ? agente.nome : req.body.nome;
        const dataDeIncorporacao = !(req.body.dataDeIncorporacao) ? agente.dataDeIncorporacao : req.body.dataDeIncorporacao;
        const cargo = !(req.body.cargo) ? agente.cargo : req.body.cargo;

        res.status(200).json(agentesRepository.AtualizarAgenteParcial(id, nome, dataDeIncorporacao, cargo))
}

function deleteAgente(req, res) {
        const id = req.params.id
        const agente = agentesRepository.findById(id);
        if (!agente)
                res.status(404);

        agentesRepository.RemoverAgente(id);
        res.sendStatus(204);

}

module.exports = {
        getAllAgentes,
        getAgenteById,
        createAgente,
        updateAgente,
        updateAgenteParcial,
        deleteAgente
}