var express = require('express');
var router = express.Router();
var Modelo = require('../modelos/empresa.model');
var mongoose = require("mongoose")

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

// Añadir
router.post('/', (req, res) => {

    let nuevo = new Modelo({

        bloque1: req.body.bloque1,
        bloque2: req.body.bloque2,
        bloque3: req.body.bloque3,
        idPagina: req.body.idPagina,
        idEmpresa: req.body.idEmpresa
    });
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
