//Importaciones
const express = require('express');
const router = express.Router();

//Creacion de Rutas

/* istanbul ignore next */
router.get('/', function(req, res) {
    res.status(200).json({ response: 'API-MAPLY is working properly.' });
});

//user
const userControllers = require('./src/controllers/personalMedico');
router.get('/user', userControllers.userPersonalMedico);
router.post('/user', userControllers.createPersonalMedico);



module.exports = router;