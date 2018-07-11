var app = angular.module('myapp');

app.controller('serviciosCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Servicio) {

	self = this;
	
	class servicios_{
		constructor(){
			this.items = [],
			this.obtener()
		}
		obtener(){

 			Servicio.obtener()
 			//.then(res => console.log(res.data))
			.then(res => res.data.map(n => new servicio_(n)))
			//.then(res => console.log(res))
			.then(res => this.agregarInstalacion(res))

		}

		agregarInstalacion(array){
			array.forEach(n => this.items.push(n))
			$scope.$digest()

			console.log(self.servicios.items)
		}

		mandarAservicio(servicio){
			console.log(servicio)
			$state.go('servicio',{id: servicio})

		}
	}

	self.servicios = new servicios_();

	class servicio_{
		constructor(arg){
			this.id = arg.id,
			this.nombre = arg.nombre
			this.imagenes()
		}

		imagenes(){
			Servicio.imagenes(this.id)
			.then(res => this.imagen = res.data)
			.then(() => $scope.$digest())
		}
	}


});
