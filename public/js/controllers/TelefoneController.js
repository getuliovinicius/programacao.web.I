// public/js/controllers/TelefoneController.js

angular.module('contatooh').controller('TelefoneController', function($scope, /*$resource,*/ $routeParams, Telefone) {

    $scope.mensagem = {};
    
    if($routeParams.telefoneId) {
        /**
         * Exibe os dados do telefone no formulário
         */
        console.log($routeParams.telefoneId);
        Telefone.get(
            {
                id: $routeParams.telefoneId
            },
            function(telefone) {
                $scope.telefone = telefone;
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
         * Exibe um formulário em branco para cadastro de um novo telefone
         */
        // $scope.telefone = {};
        $scope.telefone = new Telefone();
    }

    /**
     * Salva alterações em um telefone
     */
    $scope.salvaTelefone = function() {
        $scope.telefone.$save().then(
            function() {
                $scope.mensagem = {
                    texto: 'Telefone salvo com sucesso.',
                    class: 'success'
                };
                // limpa o formulário
                $scope.telefone = new Telefone();
            },
            function(erro) {
                $scope.mensagem = {
                    texto: 'Não foi possível salvar o telefone.',
					class: 'danger'
                };
            }
        );
    }

    Telefone.query(function(telefones) {
        $scope.telefones = telefones;
    });

});