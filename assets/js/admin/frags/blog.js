var app = angular.module('myapp');

app.controller('blogCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Noticia) {
	
	var self = this

	class Contenedor {
        constructor(){
            this.paginas = 18,
            this.pagina = 4,
            this.items = []

        }

        obtener(){
            Noticia.obtener().then(res => {
                self.noticias.items = res.data.map(n => new OneNoticia_(n))
                $scope.$digest()
            })
        }

        nuevo(){
            $mdDialog.show({
                templateUrl: '/dialogs/nuevaNoticia',
                parent: angular.element(document.body),
                bindToController: true,
                preserveScope: true,
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen,
                controller: function($scope, $mdDialog, alertas, $state, Noticia) {
                    $scope.submit = function(noticia) {
                        Noticia.crear(noticia).then(res =>{
                            $mdDialog.hide();
                            $state.go('noticia', {id : res.data.id});
                        })

                        alertas.mostrarToastEstandar("Noticia agregado exitosamente");
                        
                    }
                    $scope.close = function() {
                        $mdDialog.hide(false);
                    }
                }
            })

        }
        
        cambioPagina(){
            console.log('si estoy cambiando de pagina')
        }
    }

    class OneNoticia_ {
        constructor(arg){
            this.id = arg.id,
            this.nombre = arg.nombre    
        }

        eliminar(idx){

            $mdDialog.show(
                $mdDialog.confirm().title('¿Seguro que quieres eliminar este Noticia?').textContent('Para eliminar de forma permanente selecciona aceptar').ok('Aceptar').cancel('Cerrar').clickOutsideToClose(true)
            )
            .then(() => {

                Noticia.eliminar(this.id).then(function(res) {
                    self.noticias.items.splice(idx, 1)
                    alertas.mostrarToastEstandar("Noticia eliminado exitosamente");
                })

            })

        }
    }

    self.noticias = new Contenedor()
    self.noticias.obtener()


});
