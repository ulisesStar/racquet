const db = require('../relaciones');
var { evento } = db;

var ex = module.exports = {};

ex.create = (req, res, next) => evento.create(req.body)
    .then(response => res.status(200).jsonp(response))

ex.delete = (req, res, next) => evento.findById(req.params.id)
    .then(evento => evento.destroy())
    .then(response => res.status(200).jsonp(response))

ex.update = (req, res, next) => evento.update(req.body, { where: { id: req.params.id } } )
    .then(response => res.status(200).jsonp(response))

ex.read =  (req, res, next) => req.params.id ?
    evento.findById(req.params.id)
    .then(response => res.status(200).jsonp(response))
    :
    evento.findAll()
    .then(response => res.status(200).jsonp(response))
