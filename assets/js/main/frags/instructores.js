var app = angular.module('myapp');

app.controller('instructoresCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Instructor) {

	self = this;

	class instructores_ {
		constructor(){
			this.item = {}
			this.items = []
			this.obtener()
		}

		obtener(){
			Instructor.obtener()
			.then(res =>res.data.map(n => new instructoresOne_(n)))
			.then(res => this.agregar(res))
		}

		mandarInfo(instructor){
			console.log(instructor)
			self.instructores.item = instructor;
			$scope.$digest()
		}

		agregar(array){
			array.forEach(n => this.items.push(n))
			$scope.$digest()
			console.log(self.instructores.items)

		}
	}

	self.instructores = new instructores_()

	class instructoresOne_{
		constructor(arg){
			this.id = arg.id,
			this.nombre = arg.nombre,
			this.descripcion = arg.descripcion,
			this.imagen()
		}

		imagen(){
			Instructor.imagenes(this.id)
			.then(res => this.imagen = res.data)
			.then(() => $scope.$digest())

		}
	}
	


});
