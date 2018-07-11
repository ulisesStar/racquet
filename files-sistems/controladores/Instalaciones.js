const db = require('../relaciones');
var { instalacion } = db;

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
