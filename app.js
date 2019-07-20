//Importaciones
var express = require('express');
var mongoose = require('mongoose');

//Iniciar Variables
var app = express();

//Conexion de BD
mongoose.connection.openUri('mongodb://localhost:27017/MAPLY', (err, res)=>{
    if(err) throw err;
    console.log('Base de datos MAPLY \x1b[34m%s\x1b[0m','Online');
});
//Creacion de Rutas
app.get('/',(req,res,next)=>{
    res.status(200).json({
        ok : true,
        mensaje : 'Operación Correcta'
    });
});

//Escucha de peticiones
app.listen(3000, ()=>{
    console.log('Express Arriba, Online sobre \x1b[34m%s\x1b[0m', 'puerto 3000');
})