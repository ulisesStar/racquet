var route = require('express').Router();
var x = require('../controladores/Contenidos');

route.route('/data/contenido')
        .get(x.read)
        .post(x.create);

route.route('/data/contenido/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = route;
