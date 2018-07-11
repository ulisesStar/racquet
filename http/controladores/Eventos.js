const db = require('../relaciones');
var { evento, salon} = db;

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

ex.Agregarsalon = (req, res, next) => evento.findById(req.params.idEvento)
	.then(evento => evento.addSalon(req.params.idSalon))
	.then(result => res.status(200).json(result))

ex.obtenerSalones = (req, res, next) => {
        evento.findById(req.params.idEvento)
        .then(result => {
            salon.findById(result.idSalon).then(result => res.status(200).json(result))
        })
    }

ex.eliminarsalon = (req, res, next) =>
    evento.findById(req.params.idEvento)
    .then(evento => evento.removeSalon(req.params.idSalon))
    .then(result => res.status(200).json(result))

ex.imagenes = (req, res, next) =>
    evento.findById(req.params.idEvento)
    .then(evento => evento.getImagen({where: {idEvento: req.params.idEvento}, limit: 1}))
    .then(result => res.status(200).json(result))

ex.obtenerParagrid =  (req, res, next) => evento.findAll({ limit: Number(req.params.limite)  })
    .then(response => res.status(200).jsonp(response))

ex.obtenerDeSalon = (req, res, next) =>
    salon.findById(req.params.idSalon)
    .then(salon => salon.getEvento())
    .then(result => res.status(200).json(result))
