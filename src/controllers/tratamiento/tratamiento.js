const inputValidation = require("../../middlewares/inputValidation");
const schema = require("./tratamiento.schema");
const validate = inputValidation.validate(schema.schema);
const Tratamiento = require("../../models/tratamientos/tratamientos");

async function crearTratamiento(req, res, next) {
    try {
        const data = req.body;  

        //Validaciones de medicos y pacientes
        let tratamiento = await Tratamiento.create({
            "id": data.id,
            "idpaciente": data.idpaciente,
            "idpmedico": data.idpmedico,
            "niveladherencia": data.niveladherencia,
            "posologia": data.posologia
        });

        return res.status(200).send();
    } catch (error) {        
         next(error);
         return res.status(400).json({error});
    }
}

module.exports = [validate, crearTratamiento];