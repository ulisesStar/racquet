var app = angular.module('myapp');

app.controller('servicioCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Servicio, Instructor) {

	self = this;
	var id = $stateParams.id
	console.log(id)

	class servicio_{
		constructor(){
			this.item = {}
			this.obtener()
		}

		obtener(){
			Servicio.one(id)
			.then(async res => new Object({
				id: res.data.id,
				nombre: res.data.nombre,
				descripcion: res.data.descripcion,
				imagenes: await Servicio.imagenesOneTodas(res.data.id).then(res => res.data),
				instructores:  await Servicio.obtenerInstructores(res.data.id)
				.then(res => Promise.all(res.data.map(async n =>  await Instructor.imagenes(n.id).then(res => res.data))))
				}))
			.then(res => {self.servicio.item = res; $scope.$digest(); console.log(self.servicio.item)})
		}

		mandarAinstructores(){
			$state.go('instructores')
		}

		mandarAhistoria(){
			$state.go('historia')
		}
	}

	self.servicio = new servicio_()
	


});
