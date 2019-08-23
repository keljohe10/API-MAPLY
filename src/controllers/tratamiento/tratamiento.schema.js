const joiBase = require('joi');
const joiDateExtension = require('joi-date-extensions');
const joi = joiBase.extend(joiDateExtension);

const schema = {
    body: {
        id: joi.number().required(),
        idpaciente: joi.number().required(),
        idpmedico: joi.number().required(),
        niveladherencia: joi.number(),
        posologia: joi.array().min(1).required().items(
            joi.object({
              idmedicamento: joi.number().required(),
              periodicidad: joi.number().required(),
              fechaini: joi.date().format('MM/DD/YYYY'),
              dosis: joi.number().required(),
              cantidadmed: joi.number().required(),
              duracion: joi.number().required()
            })
          )

    }
};

module.exports = { schema };