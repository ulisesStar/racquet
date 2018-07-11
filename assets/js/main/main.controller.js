app.controller('mainCtrl', function ($scope, $location, anchorSmoothScroll, $state, mdDialog, $timeout, $mdSidenav) {
 
  $scope.hola = () => {

    console.log("click")
  }

  $scope.mandarMas = (eID) =>{
		
		$location.hash('bottom');
		anchorSmoothScroll.scrollTo(eID);

  } 

  $scope.mandaAhome = () => {
  	$state.go('home')
  }

   $scope.mandarApagina = (numero) => {

      switch(numero) {
        case 1:
          $state.go('home')
          break;
        case 2:
          $state.go('servicios')
          break;
        case 3:
          $state.go('instalaciones')
          break;
        case 4:
          $state.go('contacto')
          break;
        case 5:
          $state.go('instructores')
          break;
        case 6:
           $state.go('salones')
          break;
      }
  }


  $scope.toggleLeft = buildToggler('left');

  function buildToggler(componentId) {
    return function() {
      $mdSidenav(componentId).toggle();
    };
  }

   $scope.secciones = [
        {
            nombre: 'Inicio',
            state: 'home'
        },
        {
            nombre: 'Servicios',
            state: 'servicios'
        },
        {
            nombre: 'Instalaciones',
            state: 'instalaciones'
        },
        {
            nombre: 'Salones',
            state: 'salones'
        },
         {
            nombre: 'Instructores',
            state: 'instructores'
        },
         {
            nombre: 'Contacto',
            state: 'contacto'
        },
    ];



});
