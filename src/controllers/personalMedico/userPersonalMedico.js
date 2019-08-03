const PMedico = require("../../models/personalMedico/pMedico");
const bcrypt = require("bcrypt");

async function userPersonalMedico(req, res, next) {
  try {
    const user = await PMedico.findOne({ email: "neal3@hotmail.com" });
    console.log(req.usuario);

    if (!bcrypt.compareSync("128919201", user.password)) {
      return res.status(400).json({
        ok: false,
        mensaje: "Credenciales incorrectas - password",
        errors: { message: "Credenciales incorrectas" }
      });
    } else {
      res.status(200).send("Done");
    }
  } catch (error) {
    next(error);
  }
}

module.exports = [userPersonalMedico];
