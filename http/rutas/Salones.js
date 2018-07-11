var route = require('express').Router();
var x = require('../controladores/Salones');

route.route('/data/salon')
        .get(x.read)
        .post(x.create);

route.route('/data/salon/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

route.route('/data/salonXimagenes/obtenerParagrid/:limite')
        .get(x.obtenerParagrid);

route.route('/data/salon/imagenes/:idSalon')
		.get(x.imagenes);

route.route('/data/salon/imagenesOneTodas/:idSalon')
		.get(x.imagenesOneTodas);


module.exports = route;
