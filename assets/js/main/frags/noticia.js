var app = angular.module('myapp');

app.controller('noticiaCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Noticia, Tag) {

	self = this;

	var id = $stateParams.id

	class Noticia_{
		constructor(arg){
			Object.entries(arg).forEach(n => this[n[0]] = n[1])
			console.log(this)
			this.obtener()
			this.Obtenerimagenes()
			this.obtenerTags()
		}

		obtener(){
			Noticia.obtenerDatos(id)
			.then(response => this.contenido = response.data)
			.then(response => $scope.$digest())
		}

		Obtenerimagenes(){
			Noticia.imagenesOneTodas(id)
			.then(response => this.imagenes = response.data)
			.then(response => $scope.$digest())
		}

		obtenerTags(){
			Tag.obtenerDenoticia(id)
			.then(response => this.tags = response.data)
			.then(response => $scope.$digest())
		}



	}


	Noticia.one(id)
	.then(response => self.noticia = new Noticia_(response.data))


});
