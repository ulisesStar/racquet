var route = require('express').Router();
var x = require('../controladores/Instalaciones');

route.route('/data/instalacion')
        .get(x.read)
        .post(x.create);

route.route('/data/instalacion/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = route;

