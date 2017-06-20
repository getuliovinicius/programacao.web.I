// public/js/controllers/TelefonesController.js

angular.module('contatooh').controller('TelefonesController', function($scope, /*$http, $resource,*/ Telefone) {

    $scope.telefone = [];
    $scope.filtro = '';
    $scope.mensagem = {};

    function buscaTelefones() {
        Telefone.query(
            function(telefones) {
                $scope.telefones = telefones;
            },
            function(erro) {
                console.log(erro);
                $scope.mensagem = {
                    texto: 'Não foi possível obter a lista de telefones.',
                    class: 'danger'
                };
            }
        );
    }
    buscaTelefones();

    /**
     * Remove um telefone armazenado
     */
    $scope.removeTelefone = function(telefone) {
        console.log(telefone);
        Telefone.delete(
            {
                id: telefone._id
            },
            function() {
                $scope.mensagem = {
                    texto: 'Telefone #' + telefone._id  + ' excluido',
                    class: 'success'
                }
                buscaTelefone();
            },
            function(erro) {
                console.log(erro);
                $scope.mensagem = {
                    texto: 'Não foi possível remover o telefone.',
                    class: 'danger'
                };
            }
        );        
    };

});