var app = angular.module('myapp');

app.controller('contactoCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Prospecto) {

	var self = this;

	self.entregado = true;

	class contacto_{
		constructor(){}

		nuevoProspecto(prospecto){
			Prospecto.crear(prospecto)
			.then(res => self.entregado = false)
			.then(() => $scope.$digest())
		}
	}

	self.contacto = new contacto_()


});
