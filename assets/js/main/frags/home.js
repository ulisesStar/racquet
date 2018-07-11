var app = angular.module('myapp');

app.controller('homeCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams,Instalacion, Evento, Servicio, Salon, Noticia) {

	self = this;

	class tipo_{
		constructor(arg){
			this.todo = true
			this.key = arg
			this.nombre = _.capitalize(arg)
			this.check = false
		}
		cambio(){

			this.todo = false
			self.tipos.forEach(n => n.check = n.key !== this.key ? false : true )

			Object.entries(self.grids.peticion)
			.forEach(n => self.grids.peticion[n[0]] = n[0] === this.key ? 10 : 0)

			self.grids.ruleThemAll()

		}
	}

	self.tipos = _.map(['noticias', 'eventos', 'instalaciones', 'servicios', 'salones'], (n) =>  new tipo_(n))

	class Grids_{
		constructor(){
			this.items = []
			this.peticion = {
				eventos : 2,
				instalaciones : 2,
				servicios : 2,
				noticias : 2,
				salones : 2
			}
			this.ruleThemAll()
		}

		async ruleThemAll(){
			var tipos = [
				{  nombre : 'eventos', servicio : Evento, clase : (x) =>  new evento_(x)},
				{  nombre : 'servicios', servicio : Servicio, clase : (x) =>  new servicio_(x)},
				{  nombre : 'instalaciones', servicio : Instalacion, clase : (x) =>  new instalacion_(x)},
				{  nombre : 'noticias', servicio : Noticia, clase : (x) =>  new noticia_(x)},
				{  nombre : 'salones', servicio : Salon, clase : (x) =>  new salon_(x)}
			]

			Promise.all(
				tipos.map(async (n) => await this.obtener(n.nombre, n.servicio).then(response =>  !_.isNull(response) ? response.map(x => n.clase(x)   ) : null )))
			.then(response => _.flatten(response).filter(n => !_.isNull(n),))
			.then(response => this.items = response.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)).reverse())
			.then(() => $scope.$digest())

		}

		obtener(tipo, servicio){
			return new Promise((resolve) => {

				console.log(this.peticion[tipo])

				if(this.peticion[tipo] > 0)
					servicio.obtenerParagrid(this.peticion[tipo])
					.then(response => resolve(response.data))
				else
					resolve(null)
			})
		}

		introducir(array){
			console.log(array)
			array.forEach(n => this.items.push(n))
		}

		tamano(){

			let random = _.random(3, 4)
			return {
				x : random - 1 ,
				y : random
			}
		}

	}
	self.grids = new Grids_()

	class noticia_{
		constructor(arg){
			this.id = arg.id,
			this.nombre = arg.nombre,
			this.obtener()
			this.tamanio = self.grids.tamano()
		}

		obtener(){


			Noticia.imagenes(this.id)
			.then(res => this.imagen = res.data)
			.then(() => $scope.$digest())
		}

	}

	class instalacion_{
		constructor(arg){
			this.id = arg.id,
			this.nombre = arg.nombre,
			this.obtener()
			this.tamanio = self.grids.tamano()
		}

		 obtener(){

			 Instalacion.imagenes(this.id)
			.then(res => this.imagen = res.data)
			.then(() => $scope.$digest())

		}

	}

	class servicio_{
		constructor(arg){
			this.id = arg.id,
			this.nombre = arg.nombre,
			this.obtener()
			this.tamanio = self.grids.tamano()
		}

		obtener(){

			Servicio.imagenes(this.id)
			.then(res => this.imagen = res.data)
			.then(() => $scope.$digest())

		}

	}

	class salon_{
		constructor(arg){
			this.id = arg.id,
			this.nombre = arg.nombre,
			this.obtener()
			this.tamanio = self.grids.tamano()
		}

		obtener(){

			Salon.imagenes(this.id)
			.then(res => this.imagen = res.data)
			.then(() => $scope.$digest())

		}

	}

	class evento_{
		constructor(arg){
			this.id = arg.id,
			this.nombre = arg.nombre,
			this.obtener()
			this.tamanio = self.grids.tamano()
		}


		 obtener(){

		 	Evento.imagenes(this.id)
			.then(res => this.imagen =  res.data)
			.then(() => $scope.$digest())

		}

	}



	class instalaciones_{
		constructor(){
			this.items = [],
			this.obtener()
		}
		obtener(){

 			Instalacion.obtener()
 			//.then(res => console.log(res.data))
			.then(res => res.data.map(n => new instalacion2_(n)))
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

	class instalacion2_{
		constructor(arg){
			Object.entries(arg).forEach(n => this[n[0]] = n[1])
			this.imagenes()
		}

		imagenes(){
			Instalacion.imagenes(this.id)
			.then(res => this.imagen = res.data)
			.then(() => $scope.$digest())
		}
	}


	 $('.slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true
	  })

});
