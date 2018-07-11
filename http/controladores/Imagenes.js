const db = require('../relaciones');
var { imagen } = db;

var ex = module.exports = {};

ex.create = (req, res, next) => imagen.create(req.body)
    .then(response => res.status(200).jsonp(response))

ex.delete = (req, res, next) => imagen.findById(req.params.id)
    .then(imagen => imagen.destroy())
    .then(response => res.status(200).jsonp(response))

ex.update = (req, res, next) => imagen.update(req.body, { where: { id: req.params.id } } )
    .then(response => res.status(200).jsonp(response))

ex.read =  (req, res, next) => req.params.id ?
    imagen.findById(req.params.id)
    .then(response => res.status(200).jsonp(response))
    :
    imagen.findAll()
    .then(response => res.status(200).jsonp(response))

ex.obtenerTodas =  (req, res, next) => {

    console.log(req.body)

	var obj  = new Object()
	obj[ req.body.tipo ] = req.body.id

	console.log(req.body)

	imagen.findAll({ where: obj })
	.then(response => res.status(200).jsonp(response))

	}

ex.imagenesXnoticia =  (req, res, next) => imagen.findAll({where: {idNoticia: req.params.idNoticia}})
    .then(response => res.status(200).jsonp(response))

