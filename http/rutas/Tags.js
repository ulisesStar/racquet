var route = require('express').Router();
var x = require('../controladores/Tags');

route.route('/data/tag')
		.get(x.read)
		.post(x.create);

route.route('/data/tag/:id')
		.get(x.read)
		.put(x.update)
		.delete(x.delete);

route.route('/data/tag/union/:idTag/:idNoticia')
		.post(x.ligar)
		.delete(x.desligar);

route.route('/data/tag/obtenerXnoticia/:idNoticia')
		.get(x.obtenerXnoticia);

module.exports = route;

