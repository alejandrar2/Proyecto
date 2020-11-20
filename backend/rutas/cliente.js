var express = require('express');
var router = express.Router();
var Modelo = require('../modelos/cliente.model');
var mongoose = require('mongoose');



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

// Añadir
router.post('/', (req, res) => {

    let nuevo = new Modelo({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        sexo: req.body.sexo,
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

    Modelo.findOne({ correo: req.body.correo, contrasenia: req.body.contrasenia }, { nombre: true, apellido: true, correo: true, compras: true })
        .then(datos => {

            if (datos) {
                res.send(datos);
                res.end();
            } else {
                res.send({ res: false });
                res.end();
            }


        })
        .catch(error => {
            res.send(error);
            res.end();
        });

});

// Actualizar fotoPerfil
router.put('/actualizarFotoPerfil/:idUsuario', (req, res) => {

    Modelo.update({ _id: req.params.idUsuario }, {
        fotoPerfil: req.body.fotoPerfil
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

// Guardar producto
router.post('/guardarProducto/:idUsuario', (req, res) => {

    Modelo.update({
        _id: mongoose.Types.ObjectId(req.params.idUsuario)
    },
        {
            $push: {
                compras: {
                    _id: mongoose.Types.ObjectId(),
                    nombre: req.body.nombre,
                    calificacion: Number(req.body.calificacion),
                    precio: Number(req.body.precio),
                    categoria: req.body.categoria,
                    urlImagen: req.body.urlImagen
                }
            }
        }
    )
        .then(datos => {
            res.send({ respuesta: true, datos });
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });

});

// Eliminar Producto
router.delete('/eliminarProducto/:idUsuario/producto/:idProducto', (req, res) => {

    Modelo.update({ _id: req.params.idUsuario }, {

        $pull: { compras: { _id: mongoose.Types.ObjectId(req.params.idProducto) } }
    })
        .then(datos => {
            res.send({ respuesta: true, datos });
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });

});

// Obtener productos de clientes
router.get('/compras/:idUsuario', (req, res) => {

    Modelo.findOne({ _id: req.params.idUsuario }, { compras: true })
        .then(datos => {
            res.send(datos);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });

});


module.exports = router;
