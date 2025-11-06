const yup = require('yup');
const mongoose = require('mongoose');

exports.idSchema = yup.object().shape({
  id: yup.string().test('is-object-id', 'ID inválido', value => mongoose.Types.ObjectId.isValid(value)).required()
});
