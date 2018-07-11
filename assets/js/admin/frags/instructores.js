var app = angular.module('myapp');

app.controller('instructoresCtrl', function($scope, $rootScope, alertas, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Instructor) {
	var self = this

    class Contenedor {
        constructor(){
            this.paginas = 18,
            this.pagina = 4,
            this.items = []

        }

        obtener(){
            Instructor.obtener().then(res => {
                self.instructores.items = res.data.map(n => new OneInstructor_(n))
                $scope.$digest()
            })
        }

        nuevo(){
            $mdDialog.show({
                templateUrl: '/dialogs/nuevoInstructor',
                parent: angular.element(document.body),
                bindToController: true,
                preserveScope: true,
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen,
                controller: function($scope, $mdDialog, alertas, $state, Instructor) {
                    $scope.submit = function(instructor) {
                        Instructor.crear(instructor).then(res =>{
                            $mdDialog.hide();
                            $state.go('instructor', {id : res.data.id});
                        })

                        alertas.mostrarToastEstandar("Instructor agregado exitosamente");
                        
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

    class OneInstructor_ {
        constructor(arg){
            this.id = arg.id,
            this.nombre = arg.nombre    
        }

        eliminar(idx){

            $mdDialog.show(
                $mdDialog.confirm().title('¿Seguro que quieres eliminar este Instructor?').textContent('Para eliminar de forma permanente selecciona aceptar').ok('Aceptar').cancel('Cerrar').clickOutsideToClose(true)
            )
            .then(() => {

                Instructor.eliminar(this.id).then(function(res) {
                    self.instructores.items.splice(idx, 1)
                    alertas.mostrarToastEstandar("Instructor eliminado exitosamente");
                })

            })

        }
    }

    self.instructores = new Contenedor()
    self.instructores.obtener()

});
