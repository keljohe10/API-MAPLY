//Importaciones
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const mdAutenticacion = require("./src/middlewares/autenticacion");

//Creacion de Rutas

/* istanbul ignore next */
router.get("/", function(req, res) {
  res.status(200).json({ response: "API-MAPLY is working properly." });
});

//user
const userControllers = require("./src/controllers/personalMedico");
router.get(
  "/user",
  mdAutenticacion.verificaToken,
  userControllers.userPersonalMedico
);
router.post("/user", userControllers.createPersonalMedico);

//Tratamiento
const tratamientoControllers = require("./src/controllers/tratamiento");
router.post("/tratamiento", tratamientoControllers.crearTratamiento);


//signUp
const signUpControllers = require("./src/controllers/signUp");
router.post("/login", signUpControllers.login);

module.exports = router;
