const db = require('../relaciones');
var { instalacion, imagen } = db;

var ex = module.exports = {};

ex.create = (req, res, next) => instalacion.create(req.body)
    .then(response => res.status(200).jsonp(response))

ex.delete = (req, res, next) => instalacion.findById(req.params.id)
    .then(instalacion => instalacion.destroy())
    .then(response => res.status(200).jsonp(response))

ex.update = (req, res, next) => instalacion.update(req.body, { where: { id: req.params.id } } )
    .then(response => res.status(200).jsonp(response))

ex.read =  (req, res, next) => req.params.id ?
    instalacion.findById(req.params.id)
    .then(response => res.status(200).jsonp(response))
    :
    instalacion.findAll()
    .then(response => res.status(200).jsonp(response))

ex.imagenes = (req, res, next) =>
    instalacion.findById(req.params.idInstalacion)
    .then(instalacion => instalacion.getImagen({where: {idInstalacion: req.params.idInstalacion}, limit: 1}))
    .then(result => res.status(200).json(result))

ex.imagenesXSlider =  (req, res, next) =>
    instalacion.findAll({attributes: ['id', 'nombre']})
    .then(response => res.status(200).jsonp(response))

ex.obtenerParagrid =  (req, res, next) => instalacion.findAll({ limit: Number(req.params.limite) })
    .then(response => res.status(200).jsonp(response))

ex.imagenesOneTodas = (req, res, next) =>
    instalacion.findById(req.params.idInstalacion)
    .then(instalacion => instalacion.getImagen({where: {idInstalacion: req.params.idInstalacion}}))
    .then(result => res.status(200).json(result))

ex.serviciosXinstalaciones = (req, res, next) =>
    instalacion.findById(req.params.idInstalacion)
    .then(instalacion => instalacion.getServicio())
    .then(result => res.status(200).json(result))
