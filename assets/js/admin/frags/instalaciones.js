var app = angular.module('myapp');

app.controller('instalacionesCtrl', function($scope, $rootScope, $http, alertas, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Instalacion) {
	var self = this

    class Contenedor {
        constructor(){
            this.paginas = 8,
            this.pagina = 4,
            this.items = []

        }

        obtener(){
            Instalacion.obtener().then(res => {
                self.instalaciones.items = res.data.map(n => new OneInstalacion_(n))
                $scope.$digest()
            })
        }

        nuevo(){
            $mdDialog.show({
                templateUrl: '/dialogs/nuevaInstalacion',
                parent: angular.element(document.body),
                bindToController: true,
                preserveScope: true,
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen,
                controller: function($scope, $mdDialog, alertas, $state, Instalacion) {
                    $scope.submit = function(instalacion) {
                        Instalacion.crear(instalacion).then(res =>{
                            $mdDialog.hide();
                            $state.go('instalacion', {id : res.data.id});
                        })

                        alertas.mostrarToastEstandar("Instalacion agregada exitosamente");
                        
                    }
                    $scope.close = function() {
                        $mdDialog.hide(false);
                    }
                }
            })

        }
        
        cambioPagina(){
            
        }
    }

    class OneInstalacion_ {
        constructor(arg){
            this.id = arg.id,
            this.nombre = arg.nombre    
        }

        eliminar(idx){

            $mdDialog.show(
                $mdDialog.confirm().title('¿Seguro que quieres eliminar esta Instalacion?').textContent('Para eliminar de forma permanente selecciona aceptar').ok('Aceptar').cancel('Cerrar').clickOutsideToClose(true)
            )
            .then(() => {

                Instalacion.eliminar(this.id).then(function(res) {
                    self.instalaciones.items.splice(idx, 1)
                    alertas.mostrarToastEstandar("Instalacion eliminada exitosamente");
                })

            })

        }
    }

    self.instalaciones = new Contenedor()
    self.instalaciones.obtener()

});
