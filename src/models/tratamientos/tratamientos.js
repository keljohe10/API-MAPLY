const moongose = require('mongoose');

const Schema = moongose.Schema;

const tratamientoSchema = new Schema({
    id: { type: Number, unique: true , index: true, required : [true, 'campo obligatorio']},
    idpaciente: { type: Number, required : [true, 'campo obligatorio']},
    idpmedico: { type: Number, required : [true, 'campo obligatorio']},
    niveladherencia:{ type: Number},
    posologia: [
        {
          idmedicamento: { type: Number, required : [true, 'campo obligatorio']},
          periodicidad: { type: Number, required : [true, 'campo obligatorio'] },
          fechaini: { type: Date },
          dosis: { type: Number, required : [true, 'campo obligatorio'] },
          cantidadmed: { type: Number, required : [true, 'campo obligatorio'] },
          duracion: {type:Number, required : [true, 'campo obligatorio'] }
        }
      ]
});