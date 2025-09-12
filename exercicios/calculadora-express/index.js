const express = require('express');
const app = express();
const port = 3000;

const calculadoraRouter = require('./routes/calculadora');

app.use('/calculadora', calculadoraRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});