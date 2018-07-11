var app = angular.module('myapp');

app.controller('salonesCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, alertas, Salon) {
	var self = this

    class Contenedor {
        constructor(){
            this.paginas = 18,
            this.pagina = 4,
            this.items = []

        }

        obtener(){
            Salon.obtener().then(res => {
                self.salones.items = res.data.map(n => new OneSalon_(n))
                $scope.$digest()
            })
        }

        nuevo(){
            $mdDialog.show({
                templateUrl: '/dialogs/nuevoSalon',
                parent: angular.element(document.body),
                bindToController: true,
                preserveScope: true,
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen,
                controller: function($scope, $mdDialog, alertas, $state, Salon) {
                    $scope.submit = function(salon) {
                        Salon.crear(salon).then(res =>{
                            $mdDialog.hide();
                            $state.go('salon', {id : res.data.id});
                        })

                        alertas.mostrarToastEstandar("Salon agregado exitosamente");
                        
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

    class OneSalon_ {
        constructor(arg){
            this.id = arg.id,
            this.nombre = arg.nombre    
        }

        eliminar(idx){

            $mdDialog.show(
                $mdDialog.confirm().title('¿Seguro que quieres eliminar este Salón?').textContent('Para eliminar de forma permanente selecciona aceptar').ok('Aceptar').cancel('Cerrar').clickOutsideToClose(true)
            )
            .then(() => {

                Salon.eliminar(this.id).then(function(res) {
                    self.salones.items.splice(idx, 1)
                    alertas.mostrarToastEstandar("Salón eliminado exitosamente");
                })

            })

        }
    }

    self.salones = new Contenedor()
    self.salones.obtener()

});
