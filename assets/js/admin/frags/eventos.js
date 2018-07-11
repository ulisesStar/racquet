var app = angular.module('myapp');

app.controller('eventosCtrl', function($scope, $rootScope, alertas, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Evento) {
	
	var self = this

    class Contenedor {
        constructor(){
            this.paginas = 18,
            this.pagina = 4,
            this.items = []

        }

        obtener(){
            Evento.obtener().then(res => {
                self.eventos.items = res.data.map(n => new OneEvento_(n))
                $scope.$digest()
            })
        }

        nuevo(){
            $mdDialog.show({
                templateUrl: '/dialogs/nuevoEvento',
                parent: angular.element(document.body),
                bindToController: true,
                preserveScope: true,
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen,
                controller: function($scope, $mdDialog, alertas, $state, Evento) {
                    $scope.submit = function(evento) {
                        Evento.crear(evento).then(res =>{
                            $mdDialog.hide();
                            $state.go('evento', {id : res.data.id});
                        })

                        alertas.mostrarToastEstandar("Evento agregado exitosamente");
                        
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

    class OneEvento_ {
        constructor(arg){
            this.id = arg.id,
            this.nombre = arg.nombre    
        }

        eliminar(idx){

            $mdDialog.show(
                $mdDialog.confirm().title('¿Seguro que quieres eliminar este Evento?').textContent('Para eliminar de forma permanente selecciona aceptar').ok('Aceptar').cancel('Cerrar').clickOutsideToClose(true)
            )
            .then(() => {

                Evento.eliminar(this.id).then(function(res) {
                    self.eventos.items.splice(idx, 1)
                    alertas.mostrarToastEstandar("Evento eliminado exitosamente");
                })

            })

        }
    }

    self.eventos = new Contenedor()
    self.eventos.obtener()

});
