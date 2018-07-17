var app = angular.module('myapp');

app.controller('noticiaCtrl', function($scope, $rootScope, $http, alertas, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Noticia, Tag, Imagen, Contenido) {

	var self = this

    var id = $stateParams.id

    class NoticiaOne_{

        constructor() {
			this.obtenerContenido()
		}

        obtener(){
            Noticia.one(id)
            .then(res => self.noticias.item = res.data)
            .then(() => $scope.$digest())
        }

        editarNotica(noticia){

            Noticia.editar(noticia)
            .then(res => alertas.mostrarToastEstandar("Guardado exitosamente!!!"))
            .then(() => $scope.$digest())

			Contenido.crear(Object.assign(this.contenido, { idNoticia : id}))
			

            self.infomuestra = false

        }

		obtenerContenido(){
			Noticia.obtenerDatos(id)
			.then(response => this.contenido = response.data)
			.then(response => $scope.$digest())

		}

        obtenerImagenes(id){

            Imagen.obtenerImagenesXnoticia(id)
            .then(res => {self.noticias.ImagenesXnoticia = res.data; $scope.$digest()})

        }

    }

    self.noticias = new NoticiaOne_()
    self.noticias.obtener()
    self.noticias.obtenerImagenes(id)


    class Tag_{
        constructor(){}

        obtener(){
            Tag.obtenerDenoticia(id)
            .then(res => self.tags.items = res.data)
            .then(() =>  $scope.$digest() )
        }

        async transformar(text){

            let obj = {}
            obj.nombre = text;
            console.log(this.items)

            return this.items.find(n => n.nombre == text)

             ? (
                this.filtrar(text)

                ) : (
                    Tag.crear(obj).then(res => {
                        self.tags.items.push(res.data)
                        $scope.$digest();
                        Tag.ligar(res.data.id, id).then(res => console.log(res))
                    })
                )

            return Tag.crear(obj).then(res => {
                self.tags.items.push(res.data)
                $scope.$digest();
                Tag.ligar(res.data.id, id).then(res => console.log(res))

            })

        }

        remover(item){
            console.log(item)
            Tag.desligar(item.id, id).then(res => console.log(res))
        }

        async filtrar(text){
            console.log(text)
            return Tag.obtener().then(res => res.data);
        }

        seleccion(item){

            console.log(item)

            Tag.ligar(item.id, id).then(res => console.log(res))
            self.tags.items.push(item)

        }
    }

    self.tags = new Tag_()
    self.tags.obtener()


});
