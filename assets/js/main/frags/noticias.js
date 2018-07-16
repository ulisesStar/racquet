var app = angular.module('myapp');

app.controller('noticiasCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Noticia) {

	self = this;

	class Noticias_{
		constructor(){
			this.items = [],
			this.obtener()
		}

		obtener(){

 			Noticia.obtener()
			.then(res => res.data.map(n => new noticia_(n)))
			.then(res => this.agregarSalon(res))
		}

		agregarSalon(array){
			array.forEach(n => this.items.push(n))
			$scope.$digest()
			console.log(self.noticias.items)
		}

		mandarAnoticia(id){
			$state.go('noticia',{id:id})
		}
	}

	self.noticias = new Noticias_();

	class noticia_{
		constructor(arg){
			this.id = arg.id,
			this.nombre = arg.nombre,
			this.resena = arg.resena,
			this.imagenes()
		}

		imagenes(){
			Noticia.imagenes(this.id)
			.then(res => this.imagen = res.data)
			.then(() => $scope.$digest())
		}
	}


});
