const Tarefa = require('../models/TarefaModel');

exports.create = async (req, res) => {
  try {
    const novo = await Tarefa.create(req.body);
    res.status(201).json(novo);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
};

exports.getAll = async (req, res) => {
  const lista = await Tarefa.find().populate(['responsavel', 'projeto']);
  res.json(lista);
};

exports.getById = async (req, res) => {
  try {
    const item = await Tarefa.findById(req.params.id).populate(['responsavel', 'projeto']);
    if (!item) return res.status(404).json({ erro: 'Não encontrado' });
    res.json(item);
  } catch (err) {
    res.status(400).json({ erro: 'ID inválido' });
  }
};

exports.update = async (req, res) => {
  try {
    const atualizado = await Tarefa.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(atualizado);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    await Tarefa.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
};
