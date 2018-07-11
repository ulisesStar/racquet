app.config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {

	function template(seccion, vista) {
	    let obj = {
	        name: seccion + vista,
	        files: [ 'js/' + seccion + '/frags/' + vista + '.js' ]
	    }
	    return obj
	}

    $ocLazyLoadProvider.config({
        debug: true,
        modules: [
			template('main', 'home'),
			template('main', 'instalaciones'),
			template('main', 'instalacion'),
			template('main', 'instructores'),
			template('main', 'salones'),
			template('main', 'salon'),
			template('main', 'servicios'),
			template('main', 'servicio'),
			template('main', 'instructor'),
			template('main', 'contacto'),
			template('main', 'historia'),
			template('admin', 'home'),
			template('admin', 'servicios'),
			template('admin', 'servicio'),
			template('admin', 'instalaciones'),
			template('admin', 'instalacion'),
			template('admin', 'salones'),
			template('admin', 'salon'),
			template('admin', 'eventos'),
			template('admin', 'evento'),
			template('admin', 'imagenes'),
			template('admin', 'blog'),
			template('admin', 'noticia'),
			template('admin', 'instructores'),
			template('admin', 'instructor'),
			template('admin', 'prospectos'),			
        ]
		
    });
}]);
