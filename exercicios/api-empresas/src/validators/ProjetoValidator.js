const yup = require('yup');

exports.projetoCreateSchema = yup.object().shape({
  nome: yup.string().required(),
  descricao: yup.string().required(),
  data_inicio: yup.date().required(),
  data_fim: yup.date().min(yup.ref('data_inicio'), 'Data fim deve ser posterior à data início').required()
}, { abortEarly: false });

exports.projetoUpdateSchema = yup.object().shape({
  nome: yup.string(),
  descricao: yup.string(),
  data_inicio: yup.date(),
  data_fim: yup.date().min(yup.ref('data_inicio'), 'Data fim deve ser posterior à data início')
}, { abortEarly: false });
s