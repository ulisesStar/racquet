const db = require('../relaciones');
var { servicio } = db;

var ex = module.exports = {};

ex.create = (req, res, next) => servicio.create(req.body)
    .then(response => res.status(200).jsonp(response))

ex.delete = (req, res, next) => servicio.findById(req.params.id)
    .then(servicio => servicio.destroy())
    .then(response => res.status(200).jsonp(response))

ex.update = (req, res, next) => servicio.update(req.body, { where: { id: req.params.id } } )
    .then(response => res.status(200).jsonp(response))

ex.read =  (req, res, next) => req.params.id ?
    servicio.findById(req.params.id)
    .then(response => res.status(200).jsonp(response))
    :
    servicio.findAll()
    .then(response => res.status(200).jsonp(response))
