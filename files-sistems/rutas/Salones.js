var route = require('express').Router();
var x = require('../controladores/Salones');

route.route('/data/salon')
        .get(x.read)
        .post(x.create);

route.route('/data/salon/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = route;

