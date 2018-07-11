const db = require('../relaciones');
var { instruccion } = db;

var ex = module.exports = {};

ex.create = (req, res, next) => instruccion.create(req.body)
    .then(response => res.status(200).jsonp(response))

ex.delete = (req, res, next) => instruccion.findById(req.params.id)
    .then(instruccion => instruccion.destroy())
    .then(response => res.status(200).jsonp(response))

ex.update = (req, res, next) => instruccion.update(req.body, { where: { id: req.params.id } } )
    .then(response => res.status(200).jsonp(response))

ex.read =  (req, res, next) => req.params.id ?
    instruccion.findById(req.params.id)
    .then(response => res.status(200).jsonp(response))
    :
    instruccion.findAll()
    .then(response => res.status(200).jsonp(response))
