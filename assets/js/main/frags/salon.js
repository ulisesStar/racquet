var app = angular.module('myapp');

app.controller('salonCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Salon, Evento, Apartado) {

	self = this;
	
	var id = $stateParams.id
	console.log(id)

	class salon_{
		constructor(){
			this.item = {}
			this.obtener()
		}

		obtener(){
			Salon.one(id)
			.then(async res => new Object({
				id: res.data.id,
				nombre: res.data.nombre,
				descripcion: res.data.descripcion,
				imagenes: await Salon.imagenesOneTodas(res.data.id).then(res => res.data)
				}))
			.then(res => {self.salon.item = res; $scope.$digest(); console.log(self.salon.item)})
		}

		mandarAinstructores(){
			$state.go('instructores')
		}
	}

	self.salon = new salon_()


	class eventos_{
		constructor(){
			this.items = []
			this.obtener()
		}

		obtener(){
			console.log("estoy pasando")
			Evento.obtenerDeSalon(id)
			.then(res => res.data.map(n => new evento_(n)))
			.then(res => this.agregar(res))
		}

		agregar(array){
			array.forEach(n => this.items.push(n))
			$scope.$digest()
			console.log(self.eventos.items)

		}
	}
	self.eventos = new eventos_()

	class evento_{
		constructor(arg){
			this.id = arg.id,
			this.nombre = arg.nombre,
			this.imagen()
		}

		imagen(){

			Evento.imagenes(this.id)
			.then(res => this.imagen = res.data)
			.then(() => $scope.$digest())
		
		}
	}

	class calendario_{
		constructor(){
			this.items = []
			this.obtener()
		}

		obtener(){
			Apartado.obtenerFechas(id)
			.then(res => self.calendarios.items = res.data)
			.then(() => $scope.$digest())
		}
	}

	self.calendarios = new calendario_()




});
