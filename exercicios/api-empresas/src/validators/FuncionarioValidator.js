const yup = require('yup');
const mongoose = require('mongoose');

const isValidObjectId = (value) => mongoose.Types.ObjectId.isValid(value);

exports.funcionarioCreateSchema = yup.object().shape({
  nome: yup.string().required(),
  cpf: yup.string().required(),
  email: yup.string().email().required(),
  telefone: yup.string().required(),
  data_contratacao: yup.date().required(),
  data_nascimento: yup.date().required(),
  genero: yup.string().required(),
  endereco: yup.object({
    cep: yup.string(),
    logradouro: yup.string(),
    numero: yup.string(),
    complemento: yup.string(),
    bairro: yup.string(),
    cidade: yup.string(),
    uf: yup.string()
  }),
  cargo: yup.string().test('is-object-id', 'ID de cargo inválido', isValidObjectId).required(),
  departamento: yup.string().test('is-object-id', 'ID de departamento inválido', isValidObjectId).required()
}, { abortEarly: false });

exports.funcionarioUpdateSchema = yup.object().shape({
  nome: yup.string(),
  cpf: yup.string(),
  email: yup.string().email(),
  telefone: yup.string(),
  data_contratacao: yup.date(),
  data_nascimento: yup.date(),
  genero: yup.string(),
  endereco: yup.object({
    cep: yup.string(),
    logradouro: yup.string(),
    numero: yup.string(),
    complemento: yup.string(),
    bairro: yup.string(),
    cidade: yup.string(),
    uf: yup.string()
  }),
  cargo: yup.string().test('is-object-id', 'ID de cargo inválido', isValidObjectId),
  departamento: yup.string().test('is-object-id', 'ID de departamento inválido', isValidObjectId)
}, { abortEarly: false });
