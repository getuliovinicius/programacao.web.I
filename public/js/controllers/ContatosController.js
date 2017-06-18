// public/js/controllers/ContatosController.js

angular.module('contatooh').controller('ContatosController', function($scope, /*$http, $resource,*/ Contato) {

    /*$scope.contatos = [
        {
            "_id": 1,
            "nome": "Contato Angular 1",
            "email": "cont1@empresa.com.br"
        },
        {
            "_id": 2,
            "nome": "Contato Angular 2",
            "email": "cont2@empresa.com.br"
        },
        {
            "_id": 3,
            "nome": "Contato Angular 3",
            "email": "cont3@empresa.com.br"
        }
    ];*/
    $scope.contatos = [];
    // $scope.total = 0;
    $scope.filtro = '';
    /*$scope.incrementa = function() {
        $scope.total++;
    };*/
    $scope.mensagem = {};

    // var Contato = $resource('contatos/:id');

    /**
     * Busca contatos no amazenados
     */
    /*$http.get('/contatos')
        .success(
            function(data) {
                $scope.contatos = data;
            })
        .error(
            function(statusText) {
                console.log("Não foi possível obter a lista de contatos");
                console.log(statusText);
            });*/

    function buscaContatos() {
        Contato.query(
            function(contatos) {
                $scope.contatos = contatos;
            },
            function(erro) {
                console.log(erro);
                $scope.mensagem = {
                    texto: 'Não foi possível obter a lista de contatos.',
                    class: 'danger'
                };
            }
        );
    }
    buscaContatos();

    /**
     * Remove um contado armazenado
     */
    $scope.removeContato = function(contato) {
        console.log(contato);
        Contato.delete(
            {
                id: contato._id
            },
            function() {
                $scope.mensagem = {
                    texto: 'Contato #' + contato._id  + ' excluido',
                    class: 'success'
                }
                buscaContatos();
            },
            function(erro) {
                console.log(erro);
                $scope.mensagem = {
                    texto: 'Não foi possível remover o contato.',
                    class: 'danger'
                };
            }
        );        
    };

});