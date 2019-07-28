const inputValidation = require("../../middlewares/inputValidation");
const schema = require("./createPersonalMedico.schema");
const validate = inputValidation.validate(schema.schema);
const PMedico = require("../../models/personalMedico/pMedico");
const bcrypt = require("bcrypt");

async function createPersonalMedico(req, res, next) {
    try {
        const data = req.body;

        await PMedico.create({
            nombre: data.nombre,
            apellido: data.apellido,
            email: data.email,
            fechanac: data.fechanac,
            genero: data.genero,
            password: bcrypt.hashSync(data.password, 10),
            eps: data.eps,
            role: data.role
        });

        res.status(200).send(`Usuario ${data.nombre} creado exitosamente!!!!`);
    } catch (error) {
        return next(error);
    }
}

module.exports = [validate, createPersonalMedico];