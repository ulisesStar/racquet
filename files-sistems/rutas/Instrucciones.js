var route = require('express').Router();
var x = require('../controladores/Instrucciones');

route.route('/data/instruccion')
        .get(x.read)
        .post(x.create);

route.route('/data/instruccion/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = route;

