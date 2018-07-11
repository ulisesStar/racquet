var app = angular.module('myapp');

app.controller('instalacionCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Instalacion) {

	self = this;
	
	var id = $stateParams.id

	class instalacion_{
		constructor(){
			this.item = {}
			this.obtener()
		}

		obtener(){
			Instalacion.one(id)
			.then(async res => new Object({
				id: res.data.id,
				nombre: res.data.nombre,
				descripcion: res.data.descripcion,
				imagen: await Instalacion.imagenesOneTodas(res.data.id).then(res => res.data),
				servicios: await Instalacion.servicios(res.data.id).then(res => res.data)
				}))
			.then(res => {self.instalacion.item = res; $scope.$digest(); console.log(self.instalacion.item)})
			
		}

		mandarAservicio(servicio) {

			$state.go('servicio',{id: servicio})

		}
	}

	self.instalacion = new instalacion_()


});
