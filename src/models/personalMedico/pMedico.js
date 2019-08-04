// Importaciones
const mongoose = require('mongoose');

// Declaracion de esquema logico
const Schema = mongoose.Schema;

const pMedicoSchema = new Schema({
    id: { type: Number, unique: true , index: true, required : [true, 'campo obligatorio']},
    nombre: { type: String, required: [true, 'campo obligatorio'] },
    apellido: { type: String, required: [true, 'campo obligatorio'] },
    email: { type: String, unique: true, index: true, required: [true, 'campo obligatorio'] },
    genero: { type: String, required: [true, 'campo obligatorio'] },
    password: { type: String, required: [true, 'campo obligatorio'] },
    eps: { type: String, required: [true, 'campo obligatorio'] },
    imagen: { type: String, required: false },
    role: { type: String, required: true, default: 'PMEDICO_ROLE' }
});

module.exports = mongoose.model('PMedico', pMedicoSchema);