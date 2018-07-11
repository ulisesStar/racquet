var app = angular.module('myapp');

app.controller('instalacionCtrl', function($scope, $rootScope, $http, alertas, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Instalacion) {
	
	var id = $stateParams.id
	var self = this
	self.control = 0
	self.infomuestra = false

	class InstalacionOne_{

		constructor() {}

		obtener(){
			Instalacion.one(id)
			.then(res => self.instalaciones.item = res.data)
			.then(() => $scope.$digest())
		}

		habilitarEdicion(){
			if(self.control === 0){
				self.control = 1;
				self.infomuestra = true
			}
			else{
				self.control = 0;
				self.infomuestra = false
			}

		}

		editarInstalacion(instalacion){

			Instalacion.editar(instalacion)
			.then(res => alertas.mostrarToastEstandar("Guardado exitosamente!!!"))
			.then(() => $scope.$digest())

			self.infomuestra = false

		}

	}

	self.instalaciones = new InstalacionOne_()
	self.instalaciones.obtener()

});
