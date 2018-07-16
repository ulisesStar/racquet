var route = require('express').Router();
var x = require('../controladores/Noticias');

route.route('/data/noticia')
        .get(x.read)
        .post(x.create);

route.route('/data/noticia/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

route.route('/data/noticia/imagenes/:idNoticia')
        .get(x.imagenes);

route.route('/data/noticiaXimagenes/obtenerParagrid/:limite')
        .get(x.obtenerParagrid);

route.route('/data/noticia/imagenesOneTodas/:idNoticia')
        .get(x.imagenesOneTodas);

module.exports = route;
