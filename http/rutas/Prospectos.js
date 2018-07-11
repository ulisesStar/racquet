var route = require('express').Router();
var x = require('../controladores/Prospectos');

route.route('/data/prospecto')
        .get(x.read)
        .post(x.create);

route.route('/data/prospecto/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = route;

