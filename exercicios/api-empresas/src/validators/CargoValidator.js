const yup = require('yup');

exports.cargoCreateSchema = yup.object().shape({
  nome: yup.string().required(),
  descricao: yup.string().required(),
  salario: yup.number().min(1518).required()
}, { abortEarly: false });

exports.cargoUpdateSchema = yup.object().shape({
  nome: yup.string(),
  descricao: yup.string(),
  salario: yup.number().min(1518)
}, { abortEarly: false });
