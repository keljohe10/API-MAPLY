//Importaciones
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

//Iniciar Variables
const app = express();

//Conexion de BD
mongoose.connection.openUri('mongodb://localhost:27017/MAPLY', (err, res) => {
    if (err) throw err;
    console.log('BD MAPLY \x1b[34m%s\x1b[0m', 'Activa');
});

//Escucha de peticiones
app.listen(3000, () => {
    console.log('Express Up, Online sobre \x1b[34m%s\x1b[0m', 'puerto 3000');
});

// Load api routes
app.use('/', routes);


module.exports = app;