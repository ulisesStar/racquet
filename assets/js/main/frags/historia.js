var app = angular.module('myapp');

app.controller('historiaCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams) {

	var self = this;

	self.fundadores = [

		{imagen:"img/1.png"},
		{imagen:"img/2.png"},
		{imagen:"img/3.png"},
		{imagen:"img/4.png"},
		{imagen:"img/5.png"}
	]

	$( '.slider' ).slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		infinite: true,
		speed: 300,
	})

	

});
