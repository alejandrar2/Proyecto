var mongoose = require('mongoose');
var Modelo = mongoose.Schema;

var esquema = new Modelo({
    nombre: { type: String },
    rubro: { type: String },
    logotipo: {type: String ,default: "https://lh3.googleusercontent.com/proxy/-LfvnUdSlB9KIWTqoGQ7119jxKCSXkZfqDQcBpUctuU3E9GGISqSRMjhHMkXpjBucmgZMIWD9w6uxq85271vIyeyIIHJ8bd1my2_L1G7U6O0TA"},
    plan: {type: String , default : 'basic'},
    correo: { type: String },
    contrasenia: { type: String },
    productos: { type: Array },
    paginas: { type: Array },
    imagenes: { type: Array },
    bloquear: { type: Boolean, default : false}
  


});
module.exports = mongoose.model('Empresa', esquema);



