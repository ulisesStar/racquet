var route = require('express').Router();
var x = require('../controladores/Servicios');

route.route('/data/servicio')
        .get(x.read)
        .post(x.create);

route.route('/data/servicio/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete)

route.route('/data/servicio/instructoresXservicio/:idServicio/:idInstructor')
        .get(x.Agregarinstructor)
        .delete(x.eliminarInstructor);


route.route('/data/servicio/instructoresXservicio/:idServicio')
        .get(x.obtenerInstructores);

route.route('/data/servicio/instalacionesXservicio/:idServicio/:idInstalacion')
        .get(x.Agregarinstalacion)
        .delete(x.eliminarInstalacion);


route.route('/data/servicio/instalacionesXservicio/:idServicio')
        .get(x.obtenerInstalacion);

route.route('/data/servicioXimagenes/obtenerParagrid/:limite')
        .get(x.obtenerParagrid);

route.route('/data/servicio/imagenes/:idServicio')
        .get(x.imagenes);

route.route('/data/servicio/imagenesOneTodas/:idServicio')
        .get(x.imagenesOneTodas);


module.exports = route;
