var route = require('express').Router();
var x = require('../controladores/Instructores');

route.route('/data/instructor')
        .get(x.read)
        .post(x.create);

route.route('/data/instructor/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

route.route('/data/instructor/imagenes/:idInstructor')
    	.get(x.imagenes);

module.exports = route;

