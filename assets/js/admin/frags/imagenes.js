var app = angular.module('myapp');

app.controller('imagenesCtrl', function($scope, $rootScope, alertas, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Evento, Instalacion, Servicio, Salon, Instructor, Imagen, Noticia) {
	
	var id = $stateParams.id
	var self = this
	self.mostrar = false
	imagenXguardar = {}
	obj = {}
	
	class Imagenes_{

		constructor() {
			this.item = {}
		}

		
		secciones(){
			self.imagenes.opciones = [
			{nombre: "Eventos", servicio:Evento, tabla:'idEvento'},
			{nombre: "Instalaciones", servicio:Instalacion, tabla:'idInstalacion'},
			{nombre: "Servicios", servicio:Servicio, tabla:'idServicio'},
			{nombre: "Salones", servicio:Salon, tabla:'idSalon'},
			{nombre: "Instructor", servicio:Instructor, tabla:'idInstructor'},
			{nombre: "Noticia", servicio:Noticia, tabla:'idNoticia'},

			]
		}

		obtieneDatos(opcion){
			this.item = { }
			this.item = opcion

			opcion.servicio.obtener().then(res => {
				self.imagenes.datos = res.data
				console.log(self.imagenes.datos)
			})

			$scope.dato = {value:-1, label:"Selecciona una opción"}
			$scope.$digest()

		}

		guardarDatos(dato){
			self.mostrar = true
			obj[this.item.tabla]
			self.imagenes.Ids = dato.id
			console.log(dato.id)
			self.imagenes.obtenerImagenes()


		}

		guardarImagen(imagen){

			imagenXguardar = {}

			imagenXguardar[this.item.tabla] = self.imagenes.Ids
			imagenXguardar.imagen = 'data:image/png;base64,' + imagen.base64;
			console.log(imagenXguardar)

			Imagen.crear(imagenXguardar)
			//.then(res => console.log(res.data.imagen))
			.then(res => self.imagenes.obtenerImagenesXmodulo.push(res.data))
			.then(() => $scope.$digest())
			self.imagenes.resetDropify()
			//location.reload()



		}

		obtenerImagenes(){
			obj[this.item.tabla] = self.imagenes.Ids
			console.log(obj)
			let objeto = {
				tipo:this.item.tabla,
				id:self.imagenes.Ids
			}
			console.log(objeto)
			Imagen.obtenerTodas(objeto).then(res => {self.imagenes.obtenerImagenesXmodulo = res.data; $scope.$digest()})
		 	objeto = null
		}

		eliminarImagen(id, $index) {

			let ventana = $mdDialog.confirm().title('¿Seguro que quieres eliminar esta Imagen?').textContent('Para eliminar de forma permanente selecciona aceptar').ok('Aceptar').cancel('Cerrar').clickOutsideToClose(true);

			$mdDialog.show(ventana).then(function() {

				Imagen.eliminar(id).then(function(res) {
					self.imagenes.obtenerImagenesXmodulo.splice($index, 1)
					alertas.mostrarToastEstandar("Imagen eliminada exitosamente");
				})

			}, function() {});
		} 

		resetDropify() {
			$scope.inputImage = null; 
			$(".dropify-clear").trigger("click");
		}
			 		
	}

	self.imagenes = new Imagenes_()
	self.imagenes.secciones()
	

});
