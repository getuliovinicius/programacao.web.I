// public/js/controllers/ContatoController.js

angular.module('contatooh').controller('ContatoController', function($scope, /*$resource,*/ $routeParams, Contato) {

    $scope.mensagem = {};
    
    // var Contato = $resource('contatos/:id');

    /**
     * Exibe os dados do contato no formulário
     */
    /*Contato.get(
        {
            id: $routeParams.contatoId
        },
        function(contato) {
            $scope.contato = contato;
        },
        function(erro) {
            console.log(erro);
            $scope.mensagem = {
                texto: 'Não foi possível obter o contato.'
            };
        }
    );*/

    if($routeParams.contatoId) {
        /**
         * Exibe os dados do contato no formulário
         */
        console.log($routeParams.contatoId);
        Contato.get(
            {
                id: $routeParams.contatoId
            },
            function(contato) {
                $scope.contato = contato;
            },
            function(erro) {
                console.log(erro);
                $scope.mensagem = {
                    texto: 'Não foi possível obter o contato.',
                    class: 'danger'
                };
            }
        );
    } else {
        /**
         * Exibe um formulário em branco para cadastro de um novo contato
         */
        // $scope.contato = {};
        $scope.contato = new Contato();
    }

    /**
     * Salva alterações em um contato
     */
    $scope.salvaContato = function() {
        $scope.contato.$save().then(
            function() {
                $scope.mensagem = {
                    texto: 'Contato salvo com sucesso.',
                    class: 'success'
                };
                // limpa o formulário
                $scope.contato = new Contato();
            },
            function(erro) {
                $scope.mensagem = {
                    texto: 'Não foi possível salvar o contato.',
					class: 'danger'
                };
            }
        );
    }

    Contato.query(function(contatos) {
        $scope.contatos = contatos;
    });

});