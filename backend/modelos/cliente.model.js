var mongoose = require('mongoose');
var Modelo = mongoose.Schema;

var esquema = new Modelo({
    nombre: { type: String },
    apellido: { type: String },
    correo: { type: String },
    contrasenia: { type: String },
    compras: { type: Array }

});
module.exports = mongoose.model('Cliente', esquema);
