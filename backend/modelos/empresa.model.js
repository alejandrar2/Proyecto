var mongoose = require('mongoose');
var Modelo = mongoose.Schema;

var esquema = new Modelo({
    nombre: { type: String },
    rubro: { type: String },
    logotipo: {type: String},
    plan: {type: String , default : 'basic'},
    correo: { type: String },
    contrasenia: { type: String },
    productos: { type: Array },
    paginas: { type: Array },
    bloquear: { type: Boolean, default : false}
  


});
module.exports = mongoose.model('Empresa', esquema);



