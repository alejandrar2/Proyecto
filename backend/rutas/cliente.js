var express = require('express');
var router = express.Router();
var Modelo = require('../modelos/cliente.model')


// Obtener
router.get('/', (req, res) => {

    Modelo.find({}, {})
        .then(datos => {
            res.send({ respuesta: true, datos });
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });

});

// Obtener uno
router.get('/:id', (req, res) => {

    Modelo.findOne( { _id: req.params.id }, {  })
        .then(dato => {
            res.send(dato);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });

});

// Añadir
router.post('/', (req, res) => {

    let nuevo = new Modelo({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        contrasenia: req.body.contrasenia,
        compras: []
    });

    nuevo.save()
        .then(dato => {
            res.send({ respuesta: true, dato });
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });


});
//Eliminar 
router.delete('/:id', (req, res) => {

    Modelo.remove({ _id: req.params.id }).
        then((data) => {
            res.json({
                Ok: true
            });
            res.end();
        }).catch((erro) => {
            res.json({
                Ok: false
            });
            res.end();
        });
});
 // Login Cliente
router.post('/loginCliente', (req, res) => {

    Modelo.find({correo: req.body.correo , contrasenia: req.body.contrasenia}, {nombre:true, apellido: true, correo: true, compras: true })
        .then(datos => {
            res.send({ respuesta: true, datos });
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });

});

module.exports = router;
