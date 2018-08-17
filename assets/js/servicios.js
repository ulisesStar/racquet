
app.service('Evento', function() {

    this.crear = evento => axios.post('/data/evento', evento)
    this.obtener = () => axios('/data/evento')
    this.one = id => axios('/data/evento/' + id)
    this.editar = id => axios.put('/data/evento/' + id)
    this.eliminar = id => axios.delete('/data/evento/' + id)
    this.editar = evento => axios.put('/data/evento/' + evento.id, evento)
    this.salones = salon => axios('/data/evento/salonesXeventos/' + salon.idEvento + '/' + salon.idSalon)
    this.eventosXsalones = id => axios('/data/evento/eventosXsalones/'+ id)
    this.eliminarsalon = salon => axios('/data/evento/salonesXeventos/' + salon.idEvento + '/' + salon.idSalon)
    this.imagenes = idEvento => axios('/data/evento/imagenes/' + idEvento)
    this.obtenerParagrid = limite => axios('/data/eventoXimagenes/obtenerParagrid/' + limite)
    this.obtenerDeSalon = idSalon => axios('/data/evento/obtenerDeSalon/'+ idSalon)
	this.portada = id => axios('/data/evento/portada/'+ id)

});

app.service('Imagen', function() {

    this.crear = imagen => axios.post('/data/imagen', imagen)
    this.obtener = () => axios('/data/imagen')
    this.one = id => axios('/data/imagen/' + id)
    this.editar = id => axios.put('/data/imagen/' + id)
    this.eliminar = id => axios.delete('/data/imagen/' + id)
    this.editar = imagen => axios.put('/data/imagen/' + imagen.id, imagen)
    this.obtenerTodas = id => axios.post('/data/imagen/obtenerImagenesXmodulo', id)
    this.obtenerImagenesXnoticia = id => axios('/data/imagen/obtenerImagenesXnoticia/' + id)

});

app.service('Instalacion', function() {

    this.crear = instalacion => axios.post('/data/instalacion', instalacion)
    this.obtener = () => axios('/data/instalacion')
    this.one = id => axios('/data/instalacion/' + id)
    this.editar = id => axios.put('/data/instalacion/' + id)
    this.eliminar = id => axios.delete('/data/instalacion/' + id)
    this.editar = instalacion => axios.put('/data/instalacion/' + instalacion.id, instalacion)
    this.imagenes = idInstalacion => axios('/data/instalacion/imagenes/' + idInstalacion)
    this.imagenesXslider = idInstalacion => axios('/data/imagenesXSlider/obtener/' + idInstalacion)
    this.obtenerParagrid = limite => axios('/data/instalacionXimagenes/obtenerParagrid/' + limite)
    this.imagenesOneTodas = idInstalacion => axios('/data/imagenesOneTodas/' + idInstalacion)
    this.servicios = idInstalacion => axios('/data/serviciosXinstalaciones/' + idInstalacion)

    this.portada = id => axios('/data/instalacion/portada/'+ id)

});

app.service('Servicio', function() {

    this.crear = servicio => axios.post('/data/servicio', servicio)
    this.obtener = () => axios('/data/servicio')
    this.one = id => axios('/data/servicio/' + id)
    this.editar = id => axios.put('/data/servicio/' + id)
    this.eliminar = id => axios.delete('/data/servicio/' + id)
    this.editar = servicio => axios.put('/data/servicio/' + servicio.id, servicio)
    this.instructores = instructor => axios('/data/servicio/instructoresXservicio/' + instructor.idServicio + '/' + instructor.idInstructor)
    this.obtenerInstructores = id => axios('/data/servicio/instructoresXservicio/'+ id)
    this.eliminarinstructor = instructor => axios.delete('/data/servicio/instructoresXservicio/' + instructor.idServicio + '/' + instructor.idInstructor)
    this.instalaciones = instalacion => axios('/data/servicio/instalacionesXservicio/' + instalacion.idServicio + '/' + instalacion.idInstalacion)
    this.obtenerInstalaciones = id => axios('/data/servicio/instalacionesXservicio/'+ id)
    this.eliminarinstalacion = instalacion => axios.delete('/data/servicio/instalacionesXservicio/' + instalacion.idServicio + '/' + instalacion.idInstalacion)
    this.imagenes = idServicio => axios('/data/servicio/imagenes/' + idServicio)
    this.obtenerParagrid = limite => axios('/data/servicioXimagenes/obtenerParagrid/' + limite)
    this.imagenesOneTodas = idServicio => axios('/data/servicio/imagenesOneTodas/' + idServicio)

    	this.portada = id => axios('/data/servicio/portada/'+ id)

});

app.service('Salon', function() {

    this.crear = salon => axios.post('/data/salon', salon)
    this.obtener = () => axios('/data/salon')
    this.one = id => axios('/data/salon/' + id)
    this.editar = id => axios.put('/data/salon/' + id)
    this.eliminar = id => axios.delete('/data/salon/' + id)
    this.editar = salon => axios.put('/data/salon/' + salon.id, salon)
    this.imagenes = idSalon => axios('/data/salon/imagenes/' + idSalon)
    this.obtenerParagrid = limite => axios('/data/salonXimagenes/obtenerParagrid/' + limite)
    this.imagenesOneTodas = idSalon => axios('/data/salon/imagenesOneTodas/' + idSalon)

    	this.portada = id => axios('/data/salon/portada/'+ id)

});

app.service('Prospecto', function() {

    this.crear = prospecto => axios.post('/data/prospecto', prospecto)
    this.obtener = () => axios('/data/prospecto')
    this.one = id => axios('/data/prospecto/' + id)
    this.editar = id => axios.put('/data/prospecto/' + id)
    this.eliminar = id => axios.delete('/data/prospecto/' + id)
    this.editar = prospecto => axios.put('/data/prospecto/' + prospecto.id, prospecto)

});

app.service('Noticia', function() {

    this.crear = noticia => axios.post('/data/noticia', noticia)
    this.obtener = () => axios('/data/noticia')
    this.one = id => axios('/data/noticia/' + id)
    this.editar = id => axios.put('/data/noticia/' + id)
    this.eliminar = id => axios.delete('/data/noticia/' + id)
    this.editar = noticia => axios.put('/data/noticia/' + noticia.id, noticia)
    this.imagenes = idNoticia => axios('/data/noticia/imagenes/' + idNoticia)
    this.obtenerParagrid = limite => axios('/data/noticiaXimagenes/obtenerParagrid/' + limite)
    this.imagenesOneTodas = idNoticia => axios('/data/noticia/imagenesOneTodas/' + idNoticia)
    this.obtenerDatos = idNoticia => axios('/data/noticia/obtenerDatos/' + idNoticia)

    this.portada = id => axios('/data/evento/noticia/'+ id)


});

app.service('Contenido', function() {

    this.crear = contenido => axios.post('/data/contenido', contenido)
    this.obtener = () => axios('/data/contenido')
    this.one = id => axios('/data/contenido/' + id)
    this.eliminar = id => axios.delete('/data/contenido/' + id)
    this.editar = contenido => axios.put('/data/contenido/' + contenido.id, contenido)

});

app.service('Instructor', function() {

    this.crear = instructor => axios.post('/data/instructor', instructor)
    this.obtener = () => axios('/data/instructor')
    this.one = id => axios('/data/instructor/' + id)
    this.editar = id => axios.put('/data/instructor/' + id)
    this.eliminar = id => axios.delete('/data/instructor/' + id)
    this.editar = instructor => axios.put('/data/instructor/' + instructor.id, instructor)
    this.imagenes = idInstructor => axios('/data/instructor/imagenes/' + idInstructor)


});

app.service('Apartado', function() {

    this.crear = apartado => axios.post('/data/apartado', apartado)
    this.obtener = () => axios('/data/apartado')
    this.one = id => axios('/data/apartado/' + id)
    this.editar = id => axios.put('/data/apartado/' + id   )
    this.eliminar = id => axios.delete('/data/apartado/' + id)
    this.editar = apartado => axios.put('/data/apartado/' + apartado.id, apartado)
    this.obtenerFechas = id => axios('/data/apartado/fechasXsalones/' + id)

});

app.service('Tag', function() {

    this.crear = tag => axios.post('/data/tag', tag)
    this.obtener = () => axios('/data/tag')
    this.one = id => axios('/data/tag/' + id)
    this.editar = id => axios.put('/data/tag/' + id)
    this.eliminar = id => axios.delete('/data/tag/' + id)
    this.editar = tag => axios.put('/data/tag/' + tag.id, tag)
    this.ligar = (tag, noticia) => axios.post('/data/tag/union/' + tag + '/' + noticia)
    this.desligar = (tag, noticia) => axios.delete('/data/tag/union/' + tag + '/' + noticia)
    this.obtenerDenoticia = (noticia) => axios('/data/tag/obtenerXnoticia/' + noticia)

});
