const db = require('../relaciones');
var { noticia } = db;

var ex = module.exports = {};

ex.create = (req, res, next) => noticia.create(req.body)
    .then(response => res.status(200).jsonp(response))

ex.delete = (req, res, next) => noticia.findById(req.params.id)
    .then(noticia => noticia.destroy())
    .then(response => res.status(200).jsonp(response))

ex.update = (req, res, next) => noticia.update(req.body, { where: { id: req.params.id } } )
    .then(response => res.status(200).jsonp(response))

ex.read =  (req, res, next) => req.params.id ?
    noticia.findById(req.params.id)
    .then(response => res.status(200).jsonp(response))
    :
    noticia.findAll()
    .then(response => res.status(200).jsonp(response))
