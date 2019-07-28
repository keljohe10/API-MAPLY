const joiBase = require('joi');
const joiDateExtension = require('joi-date-extensions');
const joi = joiBase.extend(joiDateExtension);

const schema = {
    body: {
        nombre: joi.string().required().description('Nombre personal medico'),
        apellido: joi.string().required().description('Apellido personal medico'),
        email: joi.string().email().required().description('Email personal medico'),
        fechanac: joi.date().format('MM/DD/YYYY').required(),
        genero: joi.string().valid(['M', 'F']).required(),
        password: joi.string().min(8).max(15).required(),
        password_confirmation: joi.any().valid(joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' } } }),
        eps: joi.string().required(),
        imagen: joi.string(),
        role: joi.string().valid(['ADMIN', 'PERSONAL_MEDICO', 'PACIENTE', 'ACUDIENTE']).required()

    }
};

module.exports = { schema };