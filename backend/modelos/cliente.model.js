var mongoose = require('mongoose');
var Modelo = mongoose.Schema;

var esquema = new Modelo({
    nombre: { type: String },
    apellido: { type: String },
    sexo: { type: String },
    correo: { type: String },
    contrasenia: { type: String },
    fotoPerfil: { type: String ,  default: 'https://www.optimaley.com/wp-content/uploads/2014/09/foto-perfil-generica.jpg'},
    compras: { type: Array }

});
module.exports = mongoose.model('Cliente', esquema);
