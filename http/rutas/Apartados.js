var route = require('express').Router();
var x = require('../controladores/Apartados');

route.route('/data/apartado')
        .get(x.read)
        .post(x.create);

route.route('/data/apartado/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

route.route('/data/apartado/fechasXsalones/:idSalon')
        .get(x.obtenerFechas);
        

module.exports = route;

