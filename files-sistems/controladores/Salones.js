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
