var express = require('express');
var router = express.Router();
var Modelo = require('../modelos/contenido.model');
var mongoose = require("mongoose");

// Obtener
router.get('/:idEmpresa/pagina/:idPagina', (req, res) => {

    Modelo.findOne({ idEmpresa: req.params.idEmpresa, idPagina: req.params.idPagina }, {})
        .then(datos => {
            res.send(datos);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });
});

// Obtener todos
router.get('/', (req, res) => {

    Modelo.find({ 
                   }, {})
        .then(datos => {
            res.send(datos);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });
});

// Actualizar bloque 1
router.put('/:idEmpresa/pagina/bloque1/:idPagina', (req, res) => {

    Modelo.updateOne({ idEmpresa: req.params.idEmpresa, idPagina: req.params.idPagina }, { bloque1: req.body.bloque })
        .then(datos => {
            res.send(datos);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });
});

// Actualizar bloque 2
router.put('/:idEmpresa/pagina/bloque2/:idPagina', (req, res) => {

    Modelo.updateOne({ idEmpresa: req.params.idEmpresa, idPagina: req.params.idPagina }, { bloque2: req.body.bloque })
        .then(datos => {
            res.send(datos);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });
});

// Actualizar bloque 3
router.put('/:idEmpresa/pagina/bloque3/:idPagina', (req, res) => {

    Modelo.updateOne({ idEmpresa: req.params.idEmpresa, idPagina: req.params.idPagina }, { bloque3: req.body.bloque })
        .then(datos => {
            res.send(datos);
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
        bloque1: req.body.bloque1,
        bloque2: req.body.bloque2,
        bloque3: req.body.bloque3,
        idPagina: req.body.idPagina,
        idEmpresa: req.body.idEmpresa
    });
    nuevo.save()
        .then(dato => {
            res.send({ dato });
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


module.exports = router;