const inputValidation = require("../../middlewares/inputValidation");
const schema = require("./createPersonalMedico.schema");
const validate = inputValidation.validate(schema.schema);
const PMedico = require("../../models/personalMedico/pMedico");
const bcrypt = require("bcrypt");

async function createPersonalMedico(req, res, next) {
    try {
        const data = req.body;

        usuario = await PMedico.create({
            id: data.id,
            nombre: data.nombre,
            apellido: data.apellido,
            email: data.email,
            genero: data.genero,
            password: bcrypt.hashSync(data.password, 10),
            eps: data.eps,
            role: data.role
        });

        return res.status(200).json({
            usuario
        });
    } catch (error) {
        
         next(error);
         return res.status(400).json({error});
    }
}

module.exports = [validate, createPersonalMedico];