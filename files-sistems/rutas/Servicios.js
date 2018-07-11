var route = require('express').Router();
var x = require('../controladores/Servicios');

route.route('/data/servicio')
        .get(x.read)
        .post(x.create);

route.route('/data/servicio/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = route;

