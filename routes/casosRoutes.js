const express = require('express')
const router = express.Router();
const casosController = require('../controllers/casosControllers');
const app = express();
app.use(express.json());

//OBS: AS TAGS DO SWAGGER FAZER REFERÊNCIA A ROTA LOGO ABAIXO





/**
 * @swagger
 * /casos/search:
 *   get:
 *     summary: Lista todos os casos registrados de acordo com a pesquisa através de um termo de busca "q" via query string.
 *     tags: [Casos]
 *     parameters:
 *       - in: query
 *         name: q
 *     responses:
 *       200:
 *         description: Lista de casos do departamento de polícia de acordo com o filtro, caso não tenha nada no filtro, todos os casos são listados.
 */

//define a rota para /casos/search usando o método GET
router.get('/casos/search', casosController.getAllCasosBySearch);

/**
 * @swagger
 * /casos:
 *   get:
 *     summary: Lista todos os casos registrados, podem ser usadas os filtros de agente_id e status do caso para obter os casos desejados.
 *     tags: [Casos]
 *     parameters:
 *       - in: query
 *         name: agente_id
 *       - in: query
 *         name: status
 *     responses:
 *       200:
 *         description: Lista de casos do departamento de polícia.
 */
// define a rota para /casos usando o método GET
router.get('/casos', casosController.getAllCasos);

/**
 * @swagger
 * /casos/{id}:
 *   get:
 *     summary: Pesquisa um caso pelo ID.
 *     tags: [Casos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Retorna o "caso" correspondente ao ID fornecido.
 */
//define a rota para /casos/:id usando o método GET
router.get('/casos/:id', casosController.getCasoById);


/**
 * @swagger
 * /casos/{id}/agente:
 *   get:
 *     summary: Pesquisa um agente pelo ID do caso.
 *     tags: [Casos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Retorna o agente correspondente ao ID  do caso fornecido.
 */
// define a rota para /casos/:id usando o método GET
router.get('/casos/:id/agente', casosController.getAgenteByCasoId)  ;


/**
 * @swagger
 * /casos:
 *   post:
 *     summary: Cria um novo caso.
 *     tags: [Casos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [titulo, descricao, status, agente_id]
 *             properties:
 *               titulo:
 *                 type: string
 *               descricao:
 *                type: string
 *               status:
 *                 type: string
 *                 enum: [aberto,solucionado]
 *               agente_id:
 *                 type: string
 *     responses:
 *       201:
 *         description: Retorna o objeto "caso" criado.
 */
// define a rota para /casos usando o método POST
router.post('/casos', casosController.createCaso);

/**
 * @swagger
 * /casos/{id}:
 *   put:
 *     summary: Atualiza todos os atributos de um caso existente
 *     tags: [Casos]
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
 *              type: object
 *              required: [titulo, descricao, status, agente_id]
 *              properties:
 *               titulo:
 *                 type: string
 *               descricao:
 *                type: string
 *               status:
 *                 type: string
 *                 enum: [aberto,solucionado]
 *               agente_id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Retorna  o objeto "caso" com todos os atributos atualizados.
 */
// define a rota para /casos usando o método PUT
router.put('/casos/:id', casosController.updateCaso);

/**
 * @swagger
 * /casos/{id}:
 *   patch:
 *     summary: Atualiza os atributos de um caso existente.
 *     tags: [Casos]
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
 *             schema:
 *              type: object
 *              properties:
 *               titulo:
 *                 type: string
 *               descricao:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [aberto,solucionado]
 *               agente_id:
 *                 type: string
 *             example:
 *               titulo: "Assalto a banco"
 *     responses:
 *       200:
 *         description: Retorna  o objeto "caso" com todos os atributos do objeto "caso, os que foram e os que não foram atualizados.
 */
// define a rota para /casos usando o método PUT
router.patch('/casos/:id', casosController.updateCasoParcial);

/**
 * @swagger
 * /casos/{id}:
 *   delete:
 *     summary: Remove um caso pelo ID.
 *     tags: [Casos]
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
router.delete('/casos/:id', casosController.deleteCaso);

module.exports = router;