app.factory('Resolucion', function(){
	return {
		obtener : () => {
			switch (true) {
				case _.inRange(window.innerWidth , 0, 600) :
					return 'xs'
					break;
				case _.inRange(window.innerWidth , 601, 960) :
					return 'sm'
					break;
				case  _.inRange(window.innerWidth , 961, 1280) :
					return 'md'
					break;
				case  _.inRange(window.innerWidth , 1281, 1920) :
					return 'lg'
					break;
				case  window.innerWidth > 1920 :
					return 'xl'
					break;
				default:

			}

		}

	};
});
