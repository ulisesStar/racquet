var conector = require('./conexion.js')

var evento  = require('./modelos/Eventos')(conector);
var imagen  = require('./modelos/Imagenes')(conector);
var instalacion  = require('./modelos/Instalaciones')(conector);
var servicio  = require('./modelos/Servicios')(conector);
var salon  = require('./modelos/Salones')(conector);
var prospecto  = require('./modelos/Prospectos')(conector);
var noticia  = require('./modelos/Noticias')(conector);
var instructor  = require('./modelos/Instructores')(conector);
var apartado  = require('./modelos/Apartados')(conector);
var tag  = require('./modelos/Tags')(conector);
var contenido  = require('./modelos/Contenido')(conector);



imagen.belongsTo(evento, {foreignKey: 'idEvento', as: 'Evento'});
evento.hasMany(imagen, {foreignKey: 'idEvento', as: 'Imagen'});

imagen.belongsTo(instalacion, {foreignKey: 'idInstalacion', as: 'Instalacion'});
instalacion.hasMany(imagen, {foreignKey: 'idInstalacion', as: 'Imagen'});

imagen.belongsTo(servicio, {foreignKey: 'idServicio', as: 'Servicio'});
servicio.hasMany(imagen, {foreignKey: 'idServicio', as: 'Imagen'});

imagen.belongsTo(salon, {foreignKey: 'idSalon', as: 'Salon'});
salon.hasMany(imagen, {foreignKey: 'idSalon', as: 'Imagen'});

imagen.belongsTo(prospecto, {foreignKey: 'idProspecto', as: 'Prospecto'});
prospecto.hasMany(imagen, {foreignKey: 'idProspecto', as: 'Imagen'});

imagen.belongsTo(noticia, {foreignKey: 'idNoticia', as: 'Noticia'});
noticia.hasMany(imagen, {foreignKey: 'idNoticia', as: 'Imagen'});

contenido.belongsTo(noticia, {foreignKey: 'idNoticia', as: 'Noticia'});
noticia.hasOne(contenido, {foreignKey: 'idNoticia', as: 'Contenido'});

imagen.belongsTo(instructor, {foreignKey: 'idInstructor', as: 'Instructor'});
instructor.hasOne(imagen, {foreignKey: 'idInstructor', as: 'Imagen'});

instalacion.belongsToMany(servicio, { as: 'Servicio', through:'instalacion_servicio', foreignKey:'id_instalacion'});
servicio.belongsToMany(instalacion, { as: 'Instalacion', through:'instalacion_servicio', foreignKey:'id_servicio'});

apartado.belongsTo(salon, {foreignKey: 'idSalon', as: 'Salon'});
salon.hasMany(apartado, {foreignKey: 'idSalon', as: 'Apartado'});

evento.belongsTo(salon, {foreignKey: 'idSalon', as: 'Salon'});
salon.hasMany(evento, {foreignKey: 'idSalon', as: 'Evento'});

evento.belongsTo(instalacion, {foreignKey: 'idInstalacion', as: 'Instalacion'});
instalacion.hasMany(evento, {foreignKey: 'idInstalacion', as: 'Evento'});

instructor.belongsToMany(servicio, { as: 'Servicio', through:'instructor_servicio', foreignKey:'id_instructor'});
servicio.belongsToMany(instructor, { as: 'Instructor', through:'instructor_servicio', foreignKey:'id_servicio'});

tag.belongsToMany(noticia, { as: 'Noticia', through:'tag_noticia', foreignKey:'id_tag'}); //13 Tag - 2 Concepto
noticia.belongsToMany(tag, { as: 'Tag', through:'tag_noticia', foreignKey:'id_noticia'});

module.exports.evento = evento;
module.exports.imagen = imagen;
module.exports.instalacion = instalacion;
module.exports.servicio = servicio;
module.exports.salon = salon;
module.exports.prospecto = prospecto;
module.exports.noticia = noticia;
module.exports.instructor = instructor;
module.exports.apartado = apartado;
module.exports.tag = tag;
module.exports.contenido = contenido;
