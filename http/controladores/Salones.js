const db = require('../relaciones');
var { salon } = db;

var ex = module.exports = {};

ex.create = (req, res, next) => salon.create(req.body)
    .then(response => res.status(200).jsonp(response))

ex.delete = (req, res, next) => salon.findById(req.params.id)
    .then(salon => salon.destroy())
    .then(response => res.status(200).jsonp(response))

ex.update = (req, res, next) => salon.update(req.body, { where: { id: req.params.id } } )
    .then(response => res.status(200).jsonp(response))

ex.read =  (req, res, next) => req.params.id ?
    salon.findById(req.params.id)
    .then(response => res.status(200).jsonp(response))
    :
    salon.findAll()
    .then(response => res.status(200).jsonp(response))

ex.imagenes = (req, res, next) =>
    salon.findById(req.params.idSalon)
    .then(salon => salon.getImagen({where: {idSalon: req.params.idSalon}, limit: 1}))
    .then(result => res.status(200).json(result))

ex.obtenerParagrid =  (req, res, next) => salon.findAll({ limit: Number(req.params.limite) })
    .then(response => res.status(200).jsonp(response))

ex.imagenesOneTodas = (req, res, next) =>
    salon.findById(req.params.idSalon)
    .then(salon => salon.getImagen({where: {idSalon: req.params.idSalon}}))
    .then(result => res.status(200).json(result))
