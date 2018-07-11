var app = angular.module('myapp');

app.controller('instructorCtrl', function($scope, $rootScope, alertas, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Instructor) {
	

	var id = $stateParams.id
	var self = this
	self.control = 0
	self.infomuestra = false

	class InstructorOne_{

		constructor() {}

		obtener(){
			Instructor.one(id)
			.then(res => self.instructores.item = res.data)
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

		editarInstructor(instructor){

			Instructor.editar(instructor)
			.then(res => alertas.mostrarToastEstandar("Guardado exitosamente!!!"))
			.then(() => $scope.$digest())

			self.infomuestra = false

		}

	}

	self.instructores = new InstructorOne_()
	self.instructores.obtener()

});
