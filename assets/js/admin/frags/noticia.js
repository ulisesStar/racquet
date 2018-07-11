var app = angular.module('myapp');

app.controller('noticiaCtrl', function($scope, $rootScope, $http, alertas, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Noticia, Tag, Imagen) {
	
	var self = this

    var id = $stateParams.id

    class NoticiaOne_{

        constructor() {}

        obtener(){
            Noticia.one(id)
            .then(res => self.noticias.item = res.data)
            .then(() => $scope.$digest())
        }

        editarNotica(noticia){

            Noticia.editar(noticia)
            .then(res => alertas.mostrarToastEstandar("Guardado exitosamente!!!"))
            .then(() => $scope.$digest())

            self.infomuestra = false

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
