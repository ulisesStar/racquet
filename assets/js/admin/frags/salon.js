var app = angular.module('myapp');

app.controller('salonCtrl', function($scope, $rootScope, $http, alertas, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Salon, Apartado) {

	var id = $stateParams.id
	var self = this

	self.control = 0
	self.infomuestra = false





	class SalonOne_{

		constructor() {}

		obtener(){
			Salon.one(id)
			.then(res => self.salones.item = res.data)
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

			Salon.editar(salon)
			.then(res => alertas.mostrarToastEstandar("Guardado exitosamente!!!"))
			.then(() => $scope.$digest())

			self.infomuestra = false

		}

		obtenerFechas(){

			Apartado.obtenerFechas(id)
			.then(res => {
				self.salones.fechas = res.data
				$scope.$digest()
			})
		}

		click(fecha){
			fecha.idSalon = id;
			Apartado.crear(fecha)
			.then(res =>{
				alertas.mostrarToastEstandar("Fecha guardada exitosamente")
				self.salones.fechas.push(res.data)
				$scope.$digest();
			})

		}
		eliminarApartado(idx, fecha){

			$mdDialog.show(
                $mdDialog.confirm().title('¿Seguro que quieres eliminar esta Fecha?').textContent('Para eliminar de forma permanente selecciona aceptar').ok('Aceptar').cancel('Cerrar').clickOutsideToClose(true)
            )
            .then(() => {

                Apartado.eliminar(fecha.id).then(function(res) {
                    self.salones.fechas.splice(idx, 1)
                    alertas.mostrarToastEstandar("Fecha eliminada exitosamente");
                })

            })


		}

	}

	self.salones = new SalonOne_()
	self.salones.obtener()
	self.salones.obtenerFechas()


});
