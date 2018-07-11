var app = angular.module('myapp');

app.controller('servicioCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, alertas, Servicio, Instructor, Instalacion) {
	
	var id = $stateParams.id;
	var self = this
	self.control = 0;
	self.infomuestra = false;

	class ServicioOne_{

		constructor() {
		}

		obtener(){
			Servicio.one(id)
			.then(res => self.servicios.item = res.data)
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

		editarServicio(servicio){

			Servicio.editar(servicio)
			.then(res => alertas.mostrarToastEstandar("Guardado exitosamente!!!"))
			.then(() => $scope.$digest())

			self.infomuestra = false

		}

	}

	self.servicios = new ServicioOne_()
	self.servicios.obtener()


class Instructores_{

		constructor() {
		}

		obtener(){
			Instructor.obtener()
			.then(res => self.instructores.items = res.data)
			.then(() => $scope.$digest())
		}

		agregarInstructor(instructor){
			var obj = {
				idServicio: id,
				idInstructor: instructor.id
			}
			
			Servicio.instructores(obj)
			.then(res => self.instructores.agregados.push(instructor))
			.then(() => $scope.$digest())

			alertas.mostrarToastEstandar("Instructor agregado exitosamente!!!")
			$scope.instructor = {value:-1, label:"Selecciona un instructor"}
		}

		obtenerInstructoresDeServicio(){
			Servicio.obtenerInstructores(id)
			.then(res => {self.instructores.agregados = res.data; console.log(self.instructores.agregados)})
			.then(() => $scope.$digest())
		}

		mandarAInstructor(instructor){

			$state.go('instructor', {id : instructor.id});

		}

		eliminarInstructor(idx, instructor){

			$mdDialog.show(
                $mdDialog.confirm().title('¿Seguro que quieres eliminar este Instructor?').textContent('Para eliminar de forma permanente selecciona aceptar').ok('Aceptar').cancel('Cerrar').clickOutsideToClose(true)
            )
            .then(() => {
				
                Servicio.eliminarinstructor({
					idServicio: id,
					idInstructor: instructor.id
				}).then(function(res) {
                    self.instructores.agregados.splice(idx, 1)
                    alertas.mostrarToastEstandar("Instructor eliminado exitosamente");
                })

            })


		}


		
	}

	self.instructores = new Instructores_()
	self.instructores.obtener()
	self.instructores.obtenerInstructoresDeServicio()


	class Instalaciones_{

		constructor(){}

		obtener(){
			Instalacion.obtener()
			.then(res => self.instalaciones.items = res.data)
			.then(() => $scope.$digest())
		}

		agregarInstalacion(instalacion){
			var obj = {
				idServicio: id,
				idInstalacion: instalacion.id
			}
			
			Servicio.instalaciones(obj)
			.then(res => self.instalaciones.agregados.push(instalacion))
			.then(() => $scope.$digest())

			alertas.mostrarToastEstandar("Instalación agregada exitosamente!!!")
			$scope.instalacion = {value:-1, label:"Selecciona una instalacion"}
		}

		obtenerInstalacionesDeServicio(){
			Servicio.obtenerInstalaciones(id)
			.then(res => {self.instalaciones.agregados = res.data; console.log(self.instalaciones.agregados)})
			.then(() => $scope.$digest())
		}

		mandarAInstalacion(instalacion){

			$state.go('instalacion', {id : instalacion.id});

		}

		eliminarInstalacion(idx, instalacion){

			$mdDialog.show(
                $mdDialog.confirm().title('¿Seguro que quieres eliminar esta Instalación?').textContent('Para eliminar de forma permanente selecciona aceptar').ok('Aceptar').cancel('Cerrar').clickOutsideToClose(true)
            )
            .then(() => {
				
                Servicio.eliminarinstalacion({
					idServicio: id,
					idInstalacion: instalacion.id
				}).then(function(res) {
                    self.instalaciones.agregados.splice(idx, 1)
                    alertas.mostrarToastEstandar("Instalacion eliminado exitosamente");
                })

            })


		}

	}

	self.instalaciones = new Instalaciones_()
	self.instalaciones.obtener()
	self.instalaciones.obtenerInstalacionesDeServicio()

});
