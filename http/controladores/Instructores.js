const db = require('../relaciones');
var { instructor } = db;

var ex = module.exports = {};

ex.create = (req, res, next) => instructor.create(req.body)
    .then(response => res.status(200).jsonp(response))

ex.delete = (req, res, next) => instructor.findById(req.params.id)
    .then(instructor => instructor.destroy())
    .then(response => res.status(200).jsonp(response))

ex.update = (req, res, next) => instructor.update(req.body, { where: { id: req.params.id } } )
    .then(response => res.status(200).jsonp(response))

ex.read =  (req, res, next) => req.params.id ?
    instructor.findById(req.params.id)
    .then(response => res.status(200).jsonp(response))
    :
    instructor.findAll()
    .then(response => res.status(200).jsonp(response))

ex.imagenes = (req, res, next) => 
	instructor.findById(req.params.idInstructor)
	.then(instructor => instructor.getImagen({where: {idInstructor: req.params.idInstructor}, limit: 1}))
	.then(result => res.status(200).json(result))
