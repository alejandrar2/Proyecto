var mongoose = require('mongoose');
var Modelo = mongoose.Schema;

var esquema = new Modelo({
    nombre: { type: String },
    descripcion: { type: String },
    precio: {type: Number}
});
module.exports = mongoose.model('Planes', esquema);