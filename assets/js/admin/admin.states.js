app.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
}]);

app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {


	function template(url, template, controller, oz, params) {
		let obj = {
			url: url,
			params: params,
			views: {
				'main': {
					templateUrl: template,
					controller: controller + ' as ctrl'
				}
			},
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function($ocLazyLoad) {
						return $ocLazyLoad.load([oz]);
					}
				]
			}
		}
		return obj
	}

	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state('home', template('/', '/admin/home', 'homeCtrl', 'adminhome'))

	.state('servicios', template('/servicios', '/admin/servicios', 'serviciosCtrl', 'adminservicios'))
	.state('servicio', template('/servicio/:id', '/admin/servicio', 'servicioCtrl', 'adminservicio', { 'id' : null}))

	.state('instalaciones', template('/instalaciones', '/admin/instalaciones', 'instalacionesCtrl', 'admininstalaciones'))	
	.state('instalacion', template('/instalacion/:id', '/admin/instalacion', 'instalacionCtrl', 'admininstalacion', { 'id' : null}))

	.state('salones', template('/salones', '/admin/salones', 'salonesCtrl', 'adminsalones'))
	.state('salon', template('/salon/:id', '/admin/salon', 'salonCtrl', 'adminsalon', { 'id' : null}))
	
	.state('eventos', template('/eventos', '/admin/eventos', 'eventosCtrl', 'admineventos'))
	.state('evento', template('/evento/:id', '/admin/evento', 'eventoCtrl', 'adminevento', { 'id' : null}))
	
	.state('imagenes', template('/imagenes', '/admin/imagenes', 'imagenesCtrl', 'adminimagenes'))

	.state('blog', template('/blog', '/admin/blog', 'blogCtrl', 'adminblog'))
	.state('noticia', template('/noticia/:id', '/admin/noticia', 'noticiaCtrl', 'adminnoticia',{ 'id' : null}))	

	.state('instructores', template('/instructores', '/admin/instructores', 'instructoresCtrl', 'admininstructores'))	
	.state('instructor', template('/instructor/:id', '/admin/instructor', 'instructorCtrl', 'admininstructor',{ 'id' : null}))	

	.state('prospectos', template('/prospectos', '/admin/prospectos', 'prospectosCtrl', 'adminprospectos'))
	//.state('servicio', template('/servicio/:id', '/admin/servicio', 'servicioCtrl', 'adminservicio', { 'id' : null}))

	
	
}]);
