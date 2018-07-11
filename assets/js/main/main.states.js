app.run([
    '$rootScope',
    '$state',
    '$stateParams',
    function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
]);

app.config([
    '$urlRouterProvider',
    '$stateProvider',
    function($urlRouterProvider, $stateProvider) {

		function template(seccion, vista, url, params) {
			let obj = {
				url: url,
				data: {
					titulo: vista[0]
				},
				params: params,
				views: {
					'main': {
						templateUrl: _(vista).union(['/' + seccion]).reverse().join('/'),
						controller: vista[0] + 'Ctrl as ctrl'
					}
				},
				resolve: {
					loadMyCtrl: [
						'$ocLazyLoad',
						function($ocLazyLoad) {
							return $ocLazyLoad.load([seccion + vista[0]]);
						}
					]
				}
			}
			return obj
		}

		$urlRouterProvider.otherwise('/');
		$stateProvider

		.state('home', template('main', ['home'], '/'))
		.state('instalaciones', template('main', ['instalaciones'], '/instalaciones'))
		.state('instalacion', template('main', ['instalacion'], '/instalacion/:id', {'id': null}))
		.state('servicios', template('main', ['servicios'], '/servicios'))
		.state('servicio', template('main', ['servicio'], '/servicio/:id', {'id': null}))
		.state('instructores', template('main', ['instructores'], '/instructores'))
		.state('instructor', template('main', ['instructor'], '/instructor/:id', {'id': null}))
		.state('salones', template('main', ['salones'], '/salones'))
		.state('salon', template('main', ['salon'], '/salon/:id', {'id': null}))
		.state('contacto', template('main', ['contacto'], '/contacto'))
		.state('historia', template('main', ['historia'], '/historia'))

	}
]);
