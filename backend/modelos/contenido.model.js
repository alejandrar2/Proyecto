var mongoose = require('mongoose');
var Modelo = mongoose.Schema;

var esquema = new Modelo({

    bloque1: { type: String },
    bloque2: { type: String },
    bloque3: { type: String },
    idPagina: { type: String },
    idEmpresa: { type: String }
});
module.exports = mongoose.model('Contenido', esquema);


