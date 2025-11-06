const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

// Conexão com MongoDB Atlas
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`)
  .then(() => console.log(' Conectado ao MongoDB Atlas'))
  .catch(err => console.error(' Erro ao conectar ao MongoDB:', err));

// Importação dos controllers
const departamento = require('./controllers/DepartamentoController');
const cargo = require('./controllers/CargoController');
const funcionario = require('./controllers/FuncionarioController');
const projeto = require('./controllers/ProjetoController');
const tarefa = require('./controllers/TarefaController');

// Rotas de Departamento
app.post('/departamentos', departamento.create);
app.get('/departamentos', departamento.getAll);
app.get('/departamentos/:id', departamento.getById);
app.put('/departamentos/:id', departamento.update);
app.delete('/departamentos/:id', departamento.remove);

// Rotas de Cargo
app.post('/cargos', cargo.create);
app.get('/cargos', cargo.getAll);
app.get('/cargos/:id', cargo.getById);
app.put('/cargos/:id', cargo.update);
app.delete('/cargos/:id', cargo.remove);

// Rotas de Funcionário
app.post('/funcionarios', funcionario.create);
app.get('/funcionarios', funcionario.getAll);
app.get('/funcionarios/:id', funcionario.getById);
app.put('/funcionarios/:id', funcionario.update);
app.delete('/funcionarios/:id', funcionario.remove);

// Rotas de Projeto
app.post('/projetos', projeto.create);
app.get('/projetos', projeto.getAll);
app.get('/projetos/:id', projeto.getById);
app.put('/projetos/:id', projeto.update);
app.delete('/projetos/:id', projeto.remove);

// Rotas de Tarefa
app.post('/tarefas', tarefa.create);
app.get('/tarefas', tarefa.getAll);
app.get('/tarefas/:id', tarefa.getById);
app.put('/tarefas/:id', tarefa.update);
app.delete('/tarefas/:id', tarefa.remove);

// Inicialização do servidor
app.listen(3000, () => {
  console.log('🚀 Servidor rodando na porta 3000');
});
