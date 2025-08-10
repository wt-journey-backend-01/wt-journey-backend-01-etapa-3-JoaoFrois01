const express = require('express')
const app = express();
const PORT = 3000;
const agentesRouter = require("./routes/agentesRoutes")
const casosRouter = require("./routes/casosRoutes")
const setupSwagger = require('./docs/swagger');

app.use(express.json());
app.use('/agentes',agentesRouter);
app.use('/casos',casosRouter);
setupSwagger(app);

app.listen(PORT, () => {
    console.log(`Servidor do Departamento de Polícia rodando em localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('<h1>Bem-vindo ao Departamento de Polícia!</h1>');
});