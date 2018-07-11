const db = require('../relaciones');
var { apartado } = db;

var ex = module.exports = {};

ex.create = (req, res, next) => apartado.create(req.body)
    .then(response => res.status(200).jsonp(response))

ex.delete = (req, res, next) => apartado.findById(req.params.id)
    .then(apartado => apartado.destroy())
    .then(response => res.status(200).jsonp(response))

ex.update = (req, res, next) => apartado.update(req.body, { where: { id: req.params.id } } )
    .then(response => res.status(200).jsonp(response))

ex.read =  (req, res, next) => req.params.id ?
    apartado.findById(req.params.id)
    .then(response => res.status(200).jsonp(response))
    :
    apartado.findAll()
    .then(response => res.status(200).jsonp(response))

ex.obtenerFechas =  (req, res, next) => apartado.findAll({where: {idSalon: req.params.idSalon}})
    .then(response => res.status(200).jsonp(response))
