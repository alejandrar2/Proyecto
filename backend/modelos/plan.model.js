var mongoose = require('mongoose');
var Modelo = mongoose.Schema;

var esquema = new Modelo({
    nombre: { type: String },
    cantidadPaginas: { type: Number},
    cantidadProductos: { type: Number },
    precio: {type: Number},

});
module.exports = mongoose.model('Planes', esquema);