const express = require('express')
const router = express.Router();
const agentesController = require('../controllers/agentesControllers');
const app = express();
app.use(express.json());

//OBS: AS TAGS DO SWAGGER FAZER REFERÊNCIA A ROTA LOGO ABAIXO




/**
 * @swagger
 * /agentes:
 *   get:
 *     summary: Lista todos os agentes registrados, os filtros de cargo e sort podem ser usados para obter os agentes desejados, Sort ordena os agentes por data de incorporação e cargo filtra os agentes pelo cargo.
 *     tags: [Agentes   ]
 *     parameters:
 *       - in: query
 *         name: sort
 *       - in: query
 *         name: cargo
 *     responses:
 *       200:
 *         description: Lista de agentes do departamento de polícia.
 */
// define a rota para /agentes usando o método GET
router.get('/agentes', agentesController.getAllAgentes);

/**
 * @swagger
 * /agentes/{id}:
 *   get:
 *     summary: Pesquisa um agente pelo ID
 *     tags: [Agentes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Retorna o "agente" correspondente ao ID fornecido.
 */
//define a rota para /agentes/:id usando o método GET
router.get('/agentes/:id', agentesController.getAgenteById);


/**
 * @swagger
 * /agentes:
 *   post:
 *     summary: Cria um novo agente
 *     tags: [Agentes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [nome, dataDeIncorporacao, cargo]
 *             properties:
 *               nome:
 *                 type: string
 *               dataDeIncorporacao:
 *                type: string
 *                format: date
 *                example: "2023-10-01"
 *               cargo:
 *                 type: string
 *     responses:
 *       201:
 *         description: Retorna o objeto "agente" criado.
 */
// define a rota para /agentes usando o método POST
router.post('/agentes', agentesController.createAgente);

/**
 * @swagger
 * /agentes/{id}:
 *   put:
 *     summary: Atualiza todos os atributos de um agente existente
 *     tags: [Agentes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             required: [nome, dataDeIncorporacao, cargo]
 *             type: object
 *             properties:
 *               nome:
 *                type: string
 *               dataDeIncorporacao:
 *                type: string
 *                format: date
 *                example: "2023-10-01"
 *               cargo:
 *                 type: string
 *     responses:
 *       200:
 *         description: Retorna  o objeto "agente" com todos os atributos atualizados.
 */
// define a rota para /agentes usando o método PUT
router.put('/agentes/:id', agentesController.updateAgente);

/**
 * @swagger
 * /agentes/{id}:
 *   patch:
 *     summary: Atualiza os atributos de um agente existente
 *     tags: [Agentes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                type: string
 *               dataDeIncorporacao:
 *                type: string
 *                format: date
 *                example: "2023-10-01"
 *               cargo:
 *                 type: string
 *             example:
 *               cargo: "delegado"
 *     responses:
 *       200:
 *         description: Retorna  o objeto "agente" com todos os atributos do objeto "agente", os que foram e os que não foram atualizados.
 */
// define a rota para /agentes usando o método PATCH
router.patch('/agentes/:id', agentesController.updateAgenteParcial);

/**
 * @swagger
 * /agentes/{id}:
 *   delete:
 *     summary: Remove um agente pelo ID
 *     tags: [Agentes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Não tem conteúdo como resposta, somente o status code de sucesso da remoção.
 */
//define a rota para /agentes/:id usando o método DELETE
router.delete('/agentes/:id', agentesController.deleteAgente);


module.exports = router