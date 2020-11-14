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

// Agregar Empresa
router.post('/', (req, res) => {

    let nuevo = new Modelo({
        nombre: req.body.nombre,
        rubro: req.body.rubro,
        correo: req.body.correo,
        contrasenia: req.body.contrasenia,
        logotipo: req.body.logotipo,
        productos: [],
        paginas: [],
        imagenes: []
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
router.post('/loginEmpresa', (req, res) => {

    Modelo.find({ correo: req.body.correo, contrasenia: req.body.contrasenia }, 
        { nombre: true, rubro: true, logotipo : true, plan: true, correo: true, productos: true, paginas: true, imagenes:true })
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
                    paginaPrincipal: req.body.paginaPrincipal
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

    Modelo.findOne({ _id: req.params.idEmpresa}, {paginas: true})
        .then(datos => {
            res.send({ paginas : datos.paginas });
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

// Guardar imagen
router.post('/guardarImagen/:idEmpresa', (req, res) => {

    Modelo.update({
        _id: mongoose.Types.ObjectId(req.params.idEmpresa)
    },
        {
            $push: {
                imagenes: {
                    _id: mongoose.Types.ObjectId(),
                    nombre: req.body.nombre,
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
// Obtener Imagenes
router.get('/obtenerImagenes/:idEmpresa', (req, res) => {

    Modelo.find({ _id: req.params.idEmpresa}, {imagenes: true})
        .then(datos => {
            res.send(datos);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });

});
// Eliminar Imagenes
router.delete('/eliminarImagen/:idEmpresa/imagen/:idImagen', (req, res) => {

    Modelo.update({ _id: req.params.idEmpresa}, {

        $pull : { imagenes: { _id: mongoose.Types.ObjectId(req.params.idImagen)  }}
    })
        .then(datos => {
            res.send(datos );
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });
});

// Actualizar logotipo
router.put('/actualizarLogotipo/:idEmpresa', (req, res) => {

    Modelo.update({ _id: req.params.idEmpresa}, {
        logotipo: req.body.logotipo
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

// Actualizar plan
router.put('/actualizarPlan/:idEmpresa', (req, res) => {

    Modelo.update({ _id: req.params.idEmpresa}, {
        plan: req.body.plan
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

module.exports = router;

