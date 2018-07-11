var route = require('express').Router();
var x = require('../controladores/Imagenes');

route.route('/data/imagen')
        .get(x.read)
        .post(x.create);

route.route('/data/imagen/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

route.route('/data/imagen/obtenerImagenesXmodulo')
        .post(x.obtenerTodas);


route.route('/data/imagen/obtenerImagenesXnoticia/:idNoticia')
        .get(x.imagenesXnoticia);

module.exports = route;

