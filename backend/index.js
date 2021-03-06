var express = require('express');
var cors = require('cors'); //Para gestionar politicas de dominios cruzados
var bodyParser = require('body-parser');
var database = require('./database/conexion');

var app = express();

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Importar rutas
var rolesRauter = require('./rutas/roles');
var clienteRauter = require('./rutas/cliente');
var usuarioRauter = require('./rutas/usuario');
var empresaRauter = require('./rutas/empresa');
var categoriaRauter = require('./rutas/categoria');
var contenidoRauter = require('./rutas/contenido');
var planRauter = require('./rutas/plan');


// Rutas
app.use('/roles', rolesRauter);
app.use('/clientes', clienteRauter);
app.use('/usuario', usuarioRauter);
app.use('/empresa', empresaRauter);
app.use('/categoria', categoriaRauter);
app.use('/contenido', contenidoRauter);
app.use('/planes', planRauter);


app.listen(8888, () => {
    console.log('Servidor del backend levantado en 8888');
});