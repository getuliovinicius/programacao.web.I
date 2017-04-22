// public/js/controllers/ContatoController.js

angular.module('contatooh').controller('ContatoController',	function($scope, $routeParams, /*$resource,*/ Contato) {
        
    console.log($routeParams.contatoId);

    if($routeParams.contatoId) {
        Contato.get({id: $routeParams.contatoId},
            function(contato) {
                $scope.contato = contato;
            },
            function(erro) {

                console.log(erro);

                $scope.mensagem = {
                    texto: 'Não foi possível obter o contato'
                };

            }
        );
    } else {
        $scope.contato = new Contato();
    }

    $scope.salvaContato = function() {
        $scope.contato.$save();
    };

    

});