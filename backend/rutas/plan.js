var express = require('express');
var router = express.Router();
var Modelo = require('../modelos/plan.model');
var mongoose = require("mongoose")



// Obtener Planes
router.get('/', (req, res) => {

    Modelo.find({}, {})
        .then(datos => {
            res.send(datos);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });

});


// Obtener plan
router.get('/:id', (req, res) => {

    Modelo.findOne({ _id: req.params.id }, {})
        .then(dato => {
            res.send(dato);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });

});

// Guardar plan
router.post('/', (req, res) => {

    let nuevo = new Modelo({
        nombre: req.body.nombre,
        cantidadPaginas: Number(req.body.cantidadPaginas),
        cantidadProductos: Number( req.body.cantidadProductos),
        precio: req.body.precio,
           });

    nuevo.save()
        .then(dato => {
            res.send( dato );
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });

});

// Actualizar Plan
router.put('/:idPlan', (req, res) => {

    Modelo.update({ _id: req.params.idPlan}, {

        cantidadPaginas: req.body.cantidadPaginas,
        cantidadProductos: req.body.cantidadProductos,
        precio : req.body.precio
    })
        .then(datos => {
            res.send(datos);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });

});

//Eliminar Plan
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