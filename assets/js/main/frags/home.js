var app = angular.module('myapp');

app.controller('homeCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams,Instalacion, Evento, Servicio, Salon, Noticia, Resolucion) {

	self = this;
	var scrollMagicController = new ScrollMagic.Controller();

	class tipo_{
		constructor(arg){
			this.key = arg
			this.nombre = _.capitalize(arg)
			this.check = false
		}
		cambio(){

			self.tipos.todo = false
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
			this.default()
		}

		default(){
			this.peticion = {
				eventos : 2,
				instalaciones : 2,
				servicios : 2,
				noticias : 2,
				salones : 2
			}
			this.ruleThemAll()

			self.tipos.forEach(n => n.check = false)

		}

		async ruleThemAll(){
			var tipos = [
				{  nombre : 'eventos', servicio : Evento, clase : (x) =>  new modulo_(x, 'evento', Evento, 'evento')},
				{  nombre : 'servicios', servicio : Servicio, clase : (x) =>  new modulo_(x, 'servicio', Servicio)},
				{  nombre : 'instalaciones', servicio : Instalacion, clase : (x) =>  new modulo_(x, 'instalación', Instalacion)},
				{  nombre : 'noticias', servicio : Noticia, clase : (x) =>  new modulo_(x, 'noticia', Noticia)},
				{  nombre : 'salones', servicio : Salon, clase : (x) =>  new modulo_(x, 'salón', Salon)}
			]

			Promise.all(
				tipos.map(async (n) => await this.obtener(n.nombre, n.servicio).then(response =>  !_.isNull(response) ? response.map(x => n.clase(x)   ) : null )))
			.then(response => _.flatten(response).filter(n => !_.isNull(n),))
			.then(response => response.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)).reverse())
			.then(response => {

				console.log(response)

				let tipos = _.uniqBy(response, 'tipo').map(n => n.tipo).map(n => new cuadro_(n))


				console.log(tipos)

				var cuenta1 = 0
				var	cuenta2 = 0
				var algo = []
				tipos.reverse()
				response.reverse()

				console.log(response.length + (tipos.length))

				_.times( (response.length * 2) + (tipos.length), (n) => {

					if(n === 0){
						algo.push(new texto_())
					}

					console.log('tiempo :' +  n)

					if((n % 2 ) === 0){
						console.log('cuenta1 :' + cuenta1)
						console.log(response[cuenta1])
						algo.push(response[cuenta1])
						cuenta1++

					}else{
						console.log('cuenta2 :' + cuenta1)
						console.log(tipos[cuenta2])
						if(cuenta2 < tipos.length)
							algo.push(tipos[cuenta2])
							cuenta2++
					}

				})

				console.log(algo)

				this.items = algo

			})
			.then(() => {


				TweenMax.from($('.grid-container'),  1.5, { opacity : 0, y: '100%' } )

				setTimeout(() => {

					console.log($('.grid-container md-grid-tile'))

					$('.grid-container md-grid-tile').each((key, v) => {

						new ScrollMagic.Scene({
							triggerElement: v,
							triggerHook: .7,
							duration: '250px'
							})
						.setTween(TweenMax.from($(v).find( 'figure' ),  1.5, { opacity : 0, y: '100%' } ))
						.addTo(scrollMagicController)
						// .addIndicators()

					})

					let secciones = ['.club', '.ambiente'].forEach(n => {

						new ScrollMagic.Scene({
							triggerElement: n,
							triggerHook: .7,
							duration: '250px'
							})
						.setTween(TweenMax.from(n + '-content',  1.5, { opacity : 0, y: '100%' } ))
						.addTo(scrollMagicController)

					})

				}, 1000)
			})
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
			array.forEach(n => this.items.push(n))
		}

		tamano(){
			let resolucion = new Object({  xs : [ 6 , 6] , sm : [ 6 , 6], md : [ 6 , 8], lg : [ 5 , 6], xl : [ 6 , ]   })[Resolucion.obtener()]
			let random = _.random(resolucion[0], resolucion[1])
			return {
				x : random - _.random(1, 3),
				y : random
			}
		}

	}
	self.grids = new Grids_()

	class cuadro_ {
		constructor(x) {
			this.tamanio = {
				x : 2,
				y : 2
			}
			switch (x) {

				case 'noticia':
					this.color =   '#8e2f2e '
					this.nombre = 'Noticias'
					this.ir = () => $state.go('noticias')
					break;
				case 'servicio':
					this.color = '#3a512b'
					this.nombre = 'Servicios'
					this.ir = () => $state.go('servicios')
					break;
				case 'instalacion':
					this.color = '#8e2f2e '
					this.nombre = 'Instalaciones'
					this.ir = () => $state.go('instalaciones')
					break;
				case 'evento':
					this.color = '#30898c '
					this.nombre = 'Eventos'
					this.ir = () => $state.go('eventos')
					break;
				case 'salon':
					this.color = '#3a512b '
					this.nombre = 'Salones'
					this.ir = () => $state.go('salones')
					break;
				default:

			}
		}
	}

	class modulo_ {
		constructor(arg, nombre, servicio) {
			this.tipo = _.deburr(nombre);
			this.categoria = nombre
			this.id = arg.id,
			this.nombre = arg.nombre,
			this.servicio = servicio
			this.obtener()
			this.tamanio = self.grids.tamano()
		}
		obtener(){
			this.servicio.imagenes(this.id)
			.then(res => this.imagen = res.data)
			.then(() => $scope.$digest())
		}
		ir(){
			$state.go(this.tipo, {id : this.id})
		}
	}

	class texto_{
		constructor(){
			this.texto = true
			this.tamanio = {
				x : 2,
				y : 4
			}
			this.descripcion = `<div class="texto">
				<p> BIENVENIDO A LAS </p>
				<h1> PALMAS RACQUET CLUB </h1>
				<div class="texto-descripcion">
					<p> Somos el primer club de tenis de Veracruz.</p>
				</div>
			</div>
			`
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
			.then(() => slider())
		}
	}

	function slider(){
		$('.slider').slick({
   		dots: true,
   		infinite: true,
   		speed: 300,
   		slidesToShow: 1,
   		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		prevArrow: $('.prev'),
		nextArrow: $('.next')
   	  })
	}

	var tl = new TimelineLite();


	$('#ambiente md-grid-tile').each((key, v) => {

		tl.from(v, 1.5, { opacity : 0, x: '100%' }, "+=1")

		new ScrollMagic.Scene({
			triggerElement: '#ambiente',
			triggerHook: .6,
			duration: '400px'
			})
		.setTween(tl)
		.addTo(scrollMagicController)

	})

});
