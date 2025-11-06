const Projeto = require('../models/ProjetoModel');

exports.create = async (req, res) => {
  try {
    const novo = await Projeto.create(req.body);
    res.status(201).json(novo);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
};

exports.getAll = async (req, res) => {
  const lista = await Projeto.find();
  res.json(lista);
};

exports.getById = async (req, res) => {
  try {
    const item = await Projeto.findById(req.params.id);
    if (!item) return res.status(404).json({ erro: 'Não encontrado' });
    res.json(item);
  } catch (err) {
    res.status(400).json({ erro: 'ID inválido' });
  }
};

exports.update = async (req, res) => {
  try {
    const atualizado = await Projeto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(atualizado);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    await Projeto.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
};
