var app = angular.module('myapp');

app.controller('salonesCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Salon) {

	self = this;
	
	class salones_{
		constructor(){
			this.items = [],
			this.obtener()
		}
		obtener(){

 			Salon.obtener()
			.then(res => res.data.map(n => new salon_(n)))
			.then(res => this.agregarSalon(res))

		}

		agregarSalon(array){
			array.forEach(n => this.items.push(n))
			$scope.$digest()

			console.log(self.salones.items)
		}

		mandarAsalon(salon){
			console.log(salon)
			$state.go('salon',{id: salon})

		}
	}

	self.salones = new salones_();

	class salon_{
		constructor(arg){
			this.id = arg.id,
			this.nombre = arg.nombre
			this.imagenes()
		}

		imagenes(){
			Salon.imagenes(this.id)
			.then(res => this.imagen = res.data)
			.then(() => $scope.$digest())
		}
	}

	


});
