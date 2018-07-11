var route = require('express').Router();
var x = require('../controladores/Eventos');

route.route('/data/evento')
        .get(x.read)
        .post(x.create);

route.route('/data/evento/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = route;

