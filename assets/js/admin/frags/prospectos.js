var app = angular.module('myapp');

app.controller('prospectosCtrl', function($scope, $rootScope, alertas, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Prospecto) {
	
	Prospecto.obtener()
	.then(res => $scope.prospectos = res.data)
	.then(() => $scope.$digest())

	$scope.eliminarProspecto = (idx, prospecto) => {

        $mdDialog.show(
            $mdDialog.confirm().title('¿Seguro que quieres eliminar este Prospecto?').textContent('Para eliminar de forma permanente selecciona aceptar').ok('Aceptar').cancel('Cerrar').clickOutsideToClose(true)
        )
        .then(() => {

            Prospecto.eliminar(prospecto.id).then(function(res) {
                $scope.prospectos.splice(idx, 1)
                alertas.mostrarToastEstandar("Prospecto eliminado exitosamente");
            })

        })

	}
});
