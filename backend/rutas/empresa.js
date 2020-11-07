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
        rubro: req.body.rubro,
        correo: req.body.correo,
        contrasenia: req.body.contrasenia,
        productos: [],
        paginas: []
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
// Login Empresa
router.post('/logEmpresa', (req, res) => {

    Modelo.find({ correo: req.body.correo, contrasenia: req.body.contrasenia }, { nombre: true, rubro: true, correo: true, productos: paginas, paginas: true })
        .then(datos => {
            res.send({ respuesta: true, datos });
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });

});

// Guardar productos
router.post('/guardarProducto/:idEmpresa', (req, res) => {

    Modelo.update({
        _id: mongoose.Types.ObjectId(req.params.idEmpresa)
    },
        {
            $push: {
                productos: {
                    _id: mongoose.Types.ObjectId(),
                    nombre: req.body.nombre,
                    calificacion: req.body.calificacion,
                    precio: req.body.precio,
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

// Guardar Paginas
router.post('/guardarPagina/:idEmpresa', (req, res) => {

    Modelo.update({
        _id: mongoose.Types.ObjectId(req.params.idEmpresa)
    },
        {
            $push: {
                paginas: {
                    _id: mongoose.Types.ObjectId(),
                    titulo: req.body.titulo,
                    descripcion: req.body.descripcion,
                    palabrasClaves: req.body.palabrasClaves,
                    navbar: req.body.navbar,
                    footer: req.body.footer,
                    paginaPrincipal: req.body.paginaPrincipal,
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

// Obtener Productos
router.get('/obtenerProductos/:idEmpresa', (req, res) => {

    Modelo.find({ _id: req.params.idEmpresa}, {productos: true})
        .then(datos => {
            res.send({ respuesta: true, datos });
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });

});

// Eliminar Productos
router.delete('/eliminarProducto/:idEmpresa/producto/:idProducto', (req, res) => {

    Modelo.update({ _id: req.params.idEmpresa}, {

        $pull : { productos: { _id: mongoose.Types.ObjectId(req.params.idProducto)  }}
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

// Obtener Sitios
router.get('/obtenerSitios/:idEmpresa', (req, res) => {

    Modelo.find({ _id: req.params.idEmpresa}, {paginas: true})
        .then(datos => {
            res.send({ respuesta: true, datos });
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });

});

// Eliminar Sitio
router.delete('/eliminarSitio/:idEmpresa/sitio/:idSitio', (req, res) => {

    Modelo.update({ _id: req.params.idEmpresa}, {

        $pull : { paginas: { _id: mongoose.Types.ObjectId(req.params.idSitio)  }}
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
module.exports = router;

