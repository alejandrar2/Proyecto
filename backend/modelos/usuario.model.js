var mongoose = require('mongoose');
var Modelo = mongoose.Schema;

var esquema = new Modelo({
    nombre: {type: String },
    apellido: {type: String },
    correo: {type: String },
    contrasenia: {type: String }

});
module.exports = mongoose.model('Usuario' , esquema);
