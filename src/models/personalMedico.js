var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    id: { type: Number, required: [true, 'El nombre es necesario'] },
    name: { type: String, required: false }
}, { collection: 'personalMedico' });

module.exports = mongoose.model('PersonalMedico', userSchema);