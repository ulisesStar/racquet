var route = require('express').Router();
var x = require('../controladores/Eventos');

route.route('/data/evento')
        .get(x.read)
        .post(x.create);

route.route('/data/evento/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

route.route('/data/evento/salonesXeventos/:idEvento/:idSalon')
        .get(x.Agregarsalon)
        .delete(x.eliminarsalon);

route.route('/data/evento/eventosXsalones/:idEvento')
        .get(x.obtenerSalones);

route.route('/data/evento/imagenes/:idEvento')
        .get(x.imagenes);

route.route('/data/eventoXimagenes/obtenerParagrid/:limite')
	.get(x.obtenerParagrid);

route.route('/data/evento/obtenerDeSalon/:idSalon')
        .get(x.obtenerDeSalon);

module.exports = route;
