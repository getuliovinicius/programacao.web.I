// public/js/services/TelefoneService.js

angular.module('contatooh').factory('Telefone', function($resource) {
    return $resource('telefones/:id');
});