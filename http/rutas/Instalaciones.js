var route = require('express').Router();
var x = require('../controladores/Instalaciones');

route.route('/data/instalacion')
		.get(x.read)
		.post(x.create);

route.route('/data/instalacion/:id')
		.get(x.read)
		.put(x.update)
		.delete(x.delete);

route.route('/data/instalacion/imagenes/:idInstalacion')
		.get(x.imagenes);

route.route('/data/instalacionXimagenes/obtenerParagrid/:limite')
		.get(x.obtenerParagrid);

route.route('/data/imagenesOneTodas/:idInstalacion')
		.get(x.imagenesOneTodas);

route.route('/data/serviciosXinstalaciones/:idInstalacion')
		.get(x.serviciosXinstalaciones);

module.exports = route;
