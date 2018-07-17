const db = require('../relaciones');
var { contenido } = db;

var ex = module.exports = {};

ex.create = (req, res, next) => contenido.findOrCreate({ where : { idNoticia : req.body.idNoticia }})
    .spread((contenido , status) => contenido.update(req.body))
    .then(response => res.status(200).jsonp(response))

ex.delete = (req, res, next) => contenido.findById(req.params.id)
    .then(contenido => contenido.destroy())
    .then(response => res.status(200).jsonp(response))

ex.update = (req, res, next) => contenido.update(req.body, { where: { id: req.params.id } } )
    .then(response => res.status(200).jsonp(response))

ex.read =  (req, res, next) => req.params.id ?
    contenido.findById(req.params.id)
    .then(response => res.status(200).jsonp(response))
    :
    contenido.findAll()
    .then(response => res.status(200).jsonp(response))
