var app = angular.module('myapp');

app.controller('eventoCtrl', function($scope, $rootScope, alertas, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Evento, Salon) {
		
	var id = $stateParams.id
	var self = this
	self.control = 0
	self.infomuestra = false

	class EventoOne_{

		constructor() {}

		obtener(){
			Evento.one(id)
			.then(res => self.eventos.item = res.data)
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

		editarSalon(salon){
			console.log(salon)

			Evento.editar(salon)
			.then(res => alertas.mostrarToastEstandar("Guardado exitosamente!!!"))
			.then(() => $scope.$digest())

			self.infomuestra = false

		}

	}

	self.eventos = new EventoOne_()
	self.eventos.obtener()

	class Salon_{

		constructor() {
			this.agregados = []
		}

		obtener(){
			Salon.obtener()
			.then(res => self.salones.items = res.data)
			.then(() => $scope.$digest())

			console.log(self.salones.agregados)
		}

		agregarSalon(salon){
			
			Evento.editar({
				id: id,
				idSalon: salon.id
			})
			.then(() => {
				Salon.one(salon.id)
				.then(res => self.salones.agregados.push(res.data))
			})
			alertas.mostrarToastEstandar("Salón agregado exitosamente!!!")
			$scope.salon = {value:-1, label:"Selecciona un salon"}

		}

		obtenerSalonesDeEventos(){
			Evento.eventosXsalones(id)
			.then(res => res.data === null ? console.log("nada") : self.salones.agregados.push(res.data))
			.then(() => $scope.$digest())
		}

		mandarASalon(salon){

			$state.go('salon', {id : salon.id});

		}

		eliminarSalon(idx, salon){

			$mdDialog.show(
                $mdDialog.confirm().title('¿Seguro que quieres eliminar este Salón?').textContent('Para eliminar de forma permanente selecciona aceptar').ok('Aceptar').cancel('Cerrar').clickOutsideToClose(true)
            )
            .then(() => {
               Evento.editar({
				id: id,
				idSalon: null
			}).then(function(res) {
                    self.salones.agregados.splice(idx, 1)
                    alertas.mostrarToastEstandar("Salón eliminado exitosamente");
                })

            })
		}
		
	}

	self.salones = new Salon_()
	self.salones.obtener()
	self.salones.obtenerSalonesDeEventos()

});
