var conector = require('./conexion.js')

var evento  = require('./modelos/Eventos')(conector);
var imagen  = require('./modelos/Imagenes')(conector);
var instalacion  = require('./modelos/Instalaciones')(conector);
var servicio  = require('./modelos/Servicios')(conector);
var salon  = require('./modelos/Salones')(conector);
var prospecto  = require('./modelos/Prospectos')(conector);
var noticia  = require('./modelos/Noticias')(conector);
var instruccion  = require('./modelos/Instrucciones')(conector);


module.exports.evento = evento;
module.exports.imagen = imagen;
module.exports.instalacion = instalacion;
module.exports.servicio = servicio;
module.exports.salon = salon;
module.exports.prospecto = prospecto;
module.exports.noticia = noticia;
module.exports.instruccion = instruccion;