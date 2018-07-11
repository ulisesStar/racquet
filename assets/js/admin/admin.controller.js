app.controller('adminCtrl', function($scope, $rootScope, $http, mdDialog, $timeout, $mdSidenav) {


    $scope.secciones = [
        {
            icon: 'home',
            nombre: 'home',
            state: 'home'
        },{
            icon: 'star',
            nombre: 'Servicios',
            state: 'servicios'
        },
        {
            icon: 'location_city',
            nombre: 'Instalaciones',
            state: 'instalaciones'
        }
        ,
        {
            icon: 'casino',
            nombre: 'Salones',
            state: 'salones'
        }
        ,
        {
            icon: 'calendar_today',
            nombre: 'Eventos',
            state: 'eventos'
        }
        ,
        {
            icon: 'photo',
            nombre: 'Imagenes',
            state: 'imagenes'
        }
        ,
        {
            icon: 'create',
            nombre: 'Blog',
            state: 'blog'
        }
        ,
        {
            icon: 'group',
            nombre: 'Instructores',
            state: 'instructores'
        }
        ,
        {
            icon: 'person',
            nombre: 'Prospectos',
            state: 'prospectos'
        }

    ];

    $scope.toggleLeft = buildToggler('left');

    function buildToggler(componentId) {
        return function() {
            $mdSidenav(componentId).toggle();
        };
    }

    $scope.Dropify = function() {

        $('.dropify').dropify({
            messages: {
                default: 'Agregar',
                replace: 'Reemplazar',
                remove: 'Eliminar',
                error: 'Error'
             }
        });

        $('.dropify').on('change', function() {

            var input = this;
            if(input.files && input.files[0]){
                var reader = new FileReader();

                reader.onload = function(e) {
                    $scope.$apply(function(){
                        $scope.inputImage = e.target.result;
                    });
                }

                reader.readAsDataURL(input.files[0]);
            }
        });

    };

    $scope.toggleLeft = buildToggler('left');

    function buildToggler(componentId) {
        return function() {
            $mdSidenav(componentId).toggle();
        };
    }
});
