const db = require('../relaciones');
var { tag, noticia } = db;

var ex = module.exports = {};

ex.create = (req, res, next) => tag.create(req.body)
    .then(response => res.status(200).jsonp(response))

ex.delete = (req, res, next) => tag.findById(req.params.id)
    .then(tag => tag.destroy())
    .then(response => res.status(200).jsonp(response))

ex.update = (req, res, next) => tag.update(req.body, { where: { id: req.params.id } } )
    .then(response => res.status(200).jsonp(response))

ex.read =  (req, res, next) => req.params.id ?
    tag.findById(req.params.id)
    .then(response => res.status(200).jsonp(response))
    :
    tag.findAll()
    .then(response => res.status(200).jsonp(response))

ex.ligar = (req, res, next) => tag.findById(req.params.idTag)
	.then(tag => tag.addNoticia(req.params.idNoticia))
	.then(response => res.status(200).json(response))

ex.desligar = (req, res, next) => tag.findById(req.params.idTag)
	.then(tag => tag.removeNoticia(req.params.idNoticia))
	.then(response => res.status(200).json(response))

ex.obtenerXnoticia = (req, res, next) => noticia.findById(req.params.idNoticia)
	.then(noticia => noticia.getTag())
	.then(response => res.status(200).json(response))
