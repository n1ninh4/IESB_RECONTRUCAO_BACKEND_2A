const yup = require('yup');
const mongoose = require('mongoose');

const isValidObjectId = (value) => mongoose.Types.ObjectId.isValid(value);

exports.tarefaCreateSchema = yup.object().shape({
  titulo: yup.string().required(),
  descricao: yup.string().required(),
  data_inicio: yup.date().required(),
  data_fim: yup.date().min(yup.ref('data_inicio'), 'Data fim deve ser posterior à data início').required(),
  responsavel: yup.string().test('is-object-id', 'ID de funcionário inválido', isValidObjectId).required(),
  projeto: yup.string().test('is-object-id', 'ID de projeto inválido', isValidObjectId).required()
}, { abortEarly: false });

exports.tarefaUpdateSchema = yup.object().shape({
  titulo: yup.string(),
  descricao: yup.string(),
  data_inicio: yup.date(),
  data_fim: yup.date().min(yup.ref('data_inicio'), 'Data fim deve ser posterior à data início'),
  responsavel: yup.string().test('is-object-id', 'ID de funcionário inválido', isValidObjectId),
  projeto: yup.string().test('is-object-id', 'ID de projeto inválido', isValidObjectId)
}, { abortEarly: false });
