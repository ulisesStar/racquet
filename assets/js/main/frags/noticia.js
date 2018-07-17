var app = angular.module('myapp');

app.controller('noticiaCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Noticia) {

	self = this;

	var id = $stateParams.id

	class Noticia_{
		constructor(arg){
			Object.entries(arg).forEach(n => this[n[0]] = n[1])
			this.obtener()
		}

		obtener(){
			Noticia.obtenerDatos(id)
			.then(response => this.contenido = response.data)
			.then(response => $scope.$digest())
		}

	}

	Noticia.one(id)
	.then(response => self.noticia = new Noticia_(response.data))


});
