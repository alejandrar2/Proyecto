var mongoose = require('mongoose');
var Modelo = mongoose.Schema;

var esquema = new Modelo({
    nombre: { type: String },
    descripcion: { type: String },

});
module.exports = mongoose.model('Roles', esquema);