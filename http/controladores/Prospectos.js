const db = require('../relaciones');
var { prospecto } = db;

var ex = module.exports = {};

ex.create = (req, res, next) => prospecto.create(req.body)
    .then(response => res.status(200).jsonp(response))

ex.delete = (req, res, next) => prospecto.findById(req.params.id)
    .then(prospecto => prospecto.destroy())
    .then(response => res.status(200).jsonp(response))

ex.update = (req, res, next) => prospecto.update(req.body, { where: { id: req.params.id } } )
    .then(response => res.status(200).jsonp(response))

ex.read =  (req, res, next) => req.params.id ?
    prospecto.findById(req.params.id)
    .then(response => res.status(200).jsonp(response))
    :
    prospecto.findAll()
    .then(response => res.status(200).jsonp(response))
