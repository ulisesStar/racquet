var app = angular.module('myapp');

app.controller('instalacionesCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Instalacion) {

	self = this;

	class instalaciones_{
		constructor(){
			this.items = [],
			this.obtener()
		}
		obtener(){

 			Instalacion.obtener()
 			//.then(res => console.log(res.data))
			.then(res => res.data.map(n => new instalacion_(n)))
			//.then(res => console.log(res))
			.then(res => this.agregarInstalacion(res))

		}

		agregarInstalacion(array){
			array.forEach(n => this.items.push(n))
			$scope.$digest()

			console.log(self.instalaciones.items)
		}

		mandarAinstalacion(instalacion){
			console.log(instalacion)
			$state.go('instalacion',{id: instalacion})

		}
	}

	self.instalaciones = new instalaciones_();

	class instalacion_{
		constructor(arg){
			this.id = arg.id,
			this.nombre = arg.nombre
			this.imagenes()
		}

		imagenes(){
			Instalacion.imagenes(this.id)
			.then(res => this.imagen = res.data)
			.then(() => $scope.$digest())
		}
	}

	


});
