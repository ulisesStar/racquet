var app = angular.module('myapp');

app.controller('noticiaCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Noticia) {

	self = this;
	
	var id = $stateParams.id
	console.log(id)

	class Noticia_{
		constructor(){
			this.item = {}
			this.obtener()
		}

		obtener(){
			Noticia.one(id)
			.then(async res => new Object({
				id: res.data.id,
				nombre: res.data.nombre,
				resena: res.data.resena,
				descripcion: res.data.descripcion,
				imagenes: await Noticia.imagenesOneTodas(res.data.id).then(res => res.data)}))
			.then(res => {self.noticia.item = res; $scope.$digest(); console.log(self.noticia.item)})
		}

	}

	self.noticia = new Noticia_()


});
