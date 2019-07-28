//Importaciones
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');
const env = require('node-env-file'); // .env file
env(__dirname + '/.env');

const {
    MONGO_HOST,
    MONGO_DATABASE,
    MONGO_USER,
    MONGO_PASSWORD
} = process.env;

//Iniciar Variables
const app = express();

// Cors enable

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});

// Body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//Conexion de BD
mongoose.connection.openUri(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DATABASE}?retryWrites=true&w=majority`, (err, res) => {
    if (err) throw err;
    console.log('DB \x1b[34m%s\x1b[0m', 'Online!!');
});

//Escucha de peticiones
app.listen(3000, () => {
    console.log('Express Up, Online sobre \x1b[34m%s\x1b[0m', 'puerto 3000');
});

// Load api routes
app.use('/', routes);


module.exports = app;