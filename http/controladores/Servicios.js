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

ex.Agregarinstructor = (req, res, next) => servicio.findById(req.params.idServicio)
	.then(servicio => servicio.addInstructor(req.params.idInstructor))
	.then(result => res.status(200).json(result))

ex.obtenerInstructores = (req, res, next) => servicio.findById(req.params.idServicio)
	.then(servicio => servicio.getInstructor())
	.then(result => res.status(200).json(result))

ex.eliminarInstructor = (req, res, next) => servicio.findById(req.params.idServicio)
    .then(servicio => servicio.removeInstructor(req.params.idInstructor))
    .then(result => res.status(200).json(result))

ex.Agregarinstalacion = (req, res, next) => servicio.findById(req.params.idServicio)
    .then(servicio => servicio.addInstalacion(req.params.idInstalacion))
    .then(result => res.status(200).json(result))

ex.obtenerInstalacion = (req, res, next) => servicio.findById(req.params.idServicio)
    .then(servicio => servicio.getInstalacion())
    .then(result => res.status(200).json(result))

ex.eliminarInstalacion = (req, res, next) => servicio.findById(req.params.idServicio)
    .then(servicio => servicio.removeInstalacion(req.params.idInstalacion))
    .then(result => res.status(200).json(result))

ex.obtenerParagrid =  (req, res, next) => servicio.findAll({ limit: Number(req.params.limite)  })
    .then(response => res.status(200).jsonp(response))

ex.imagenes = (req, res, next) =>
    servicio.findById(req.params.idServicio)
    .then(servicio => servicio.getImagen({where: {idServicio: req.params.idServicio}, limit: 1}))
    .then(result => res.status(200).json(result))

ex.imagenesOneTodas = (req, res, next) =>
    servicio.findById(req.params.idServicio)
    .then(servicio => servicio.getImagen({where: {idServicio: req.params.idServicio}}))
    .then(result => res.status(200).json(result))
