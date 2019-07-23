// Importaciones
var mongoose = require('mongoose');

// Declaracion de esquema logico
var Schema = mongoose.Schema;

var pMedicoSchema = new Schema({
    nombre: {type:String, required:[true, 'campo obligatorio']},
    apellido: {type:String, required:[true, 'campo obligatorio']},
    email:{type:String, unique, required:[true, 'campo obligatorio']},
    fechanac:{type:String, required:[true, 'campo obligatorio']},
    genero:{type:String, required:[true, 'campo obligatorio']},
    password:{type:String, required:[true, 'campo obligatorio']},
    eps:{type:String, required:[true, 'campo obligatorio']},
    imagen:{type:String, required:false},
    role:{type:String, required: true, default: 'PMEDICO_ROLE'}
});
module.exports = mongoose.model('PMedico', pMedicoSchema);