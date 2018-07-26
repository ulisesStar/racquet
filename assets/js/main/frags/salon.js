var app = angular.module('myapp');

app.controller('salonCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Salon, Evento, Apartado) {

	const self = this;

	var id = $stateParams.id
	console.log(id)



	var date = new Date();
	var d = date.getDate();
	var m = date.getMonth();
	var y = date.getFullYear();



	console.log(date)

	$scope.eventSources = {
	  events: [
	    {
	      title: 'Event1',
	      start: '2018-07-26'
	    },
	    {
	      title: 'Event2',
	      start: '2018-07-26'
	    }
	    // etc...
	  ],
	  color: 'yellow',   // an option!
	  textColor: 'black' // an option!
	}

	self.calendar = {

		height: 300,
		editable: true,
		header:{
		  left: 'month basicWeek basicDay agendaWeek agendaDay',
		  center: 'title',
		  right: 'today prev,next'
		},
		eventClick: () => {
			console.log('evento')
		},
		eventDrop: () => {
			console.log('drop')
		},
		eventResize: () => {
			console.log('resize')
		},
	};

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
			.then(() => {

				$('#calendar').fullCalendar({
					height: 350,
					dayClick: function(date, jsEvent, view) {

						$scope.fecha = date
						$scope.$digest()
						$(this).css('background-color', 'red');

				   },
					events: [
						{
							title: 'All Day Event',
							start: '2018-07-26'
						},
						{
							title: 'All Day Event',
							start: '2018-07-27'
						}
					]
				})

			})
		}
	}

	self.calendarios = new calendario_()


	console.log(self)

});
