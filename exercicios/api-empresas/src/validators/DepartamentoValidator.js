const yup = require('yup');

exports.departamentoCreateSchema = yup.object().shape({
  nome: yup.string().required(),
  descricao: yup.string().required()
}, { abortEarly: false });

exports.departamentoUpdateSchema = yup.object().shape({
  nome: yup.string(),
  descricao: yup.string()
}, { abortEarly: false });
