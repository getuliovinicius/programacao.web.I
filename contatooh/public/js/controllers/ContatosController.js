angular.module('contatooh').controller('ContatosController', function ($scope, /*$http*/ $resource) {
    // $scope.total = 0;
    var Contato = $resource('contatos/:id');

    $scope.mensagem = {};

    buscaContatos = function() {
        Contato.query(
            function(contatos) {
                $scope.contatos = contatos;
            },
            function(erro) {
                $scope.mensagem = {
                    texto: 'Não foi possível obter a lista de contatos.',
                    class: 'danger'
                }
            }
        );
    };

    buscaContatos();

    $scope.remove = function(contato) {
        var idDel = contato._id;
        Contato.delete({id: idDel},
            function() {
                buscaContatos();
                $scope.mensagem = {
                    texto: 'Contato #' + contato._id + ' excluido',
                    class: 'info'
                }
            },
            function(erro) {
                $scope.mensagem = {
                    texto: 'Não foi possível excluir o contato.',
                    class: 'danger'
                }
            }
        );
    };

    // $http.get('/contatos').then(
    //     function(res) {
    //         $scope.contatos = res.data;
    //         console.log(res);
    //     },
    //     function(erro) {
    //         console.log('Não foi possível obter a lista de contatos.');
    //         console.log(erro);
    //     }
    // );

    // $scope.incrementa = function () {
    //     $scope.total++;
    // }

    // $scope.contatos = [
    //     {
    //         '_id': 1,
    //         'nome': 'Contato Angular 1',
    //         'email': 'cont1@empresa.com'
    //     },
    //     {
    //         '_id': 2,
    //         'nome': 'Contato Angular 2',
    //         'email': 'cont2@empresa.com'
    //     },
    //     {
    //         '_id': 3,
    //         'nome': 'Contato Angular 3',
    //         'email': 'cont3@empresa.com'
    //     }
    // ];

    $scope.filtro = '';

});