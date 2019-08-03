const inputValidation = require("../../middlewares/inputValidation");
const schema = require("./signUp.schema");
const validate = inputValidation.validate(schema.schema);
const PMedico = require("../../models/personalMedico/pMedico");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

var SEED = require("../../config/config").SEED;

async function login(req, res, next) {
  try {
    const data = req.body;

    const usuario = await PMedico.findOne(
      { email: data.email },
      { id: 1, email: 1, password: 1 }
    );

    !usuario
      ? res.status(400).json({
          ok: false,
          mensaje: "Credenciales incorrectas - email",
          errors: { message: "Credenciales incorrectas" }
        })
      : !bcrypt.compareSync(data.password, usuario.password)
      ? res.status(400).json({
          ok: false,
          mensaje: "Credenciales incorrectas - password",
          errors: { message: "Credenciales incorrectas" }
        })
      : res.status(200).json({
          ok: true,
          id: usuario.id,
          email: usuario.email,
          token: jwt.sign({ usuario: usuario }, SEED, { expiresIn: 14400 })
        });
  } catch (error) {
    next(error);
  }
}

module.exports = [validate, login];
