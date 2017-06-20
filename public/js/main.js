// public/js/main.js

angular.module('contatooh', ['ngRoute', 'ngResource']).config(function($routeProvider, $httpProvider) {
    
    $httpProvider.interceptors.push('meuInterceptor');
    
    $routeProvider.when('/', {
        templateUrl: 'partials/inicio.html'
    });

    $routeProvider.when('/contatos', {
        templateUrl: 'partials/contatos.html',
        controller: 'ContatosController'
    });

    $routeProvider.when('/contato/:contatoId', {
        templateUrl: 'partials/contato.html',
        controller: 'ContatoController'
    });

    $routeProvider.when('/contato', {
        templateUrl: 'partials/contato.html',
        controller: 'ContatoController'
    });

    $routeProvider.when('/telefones', {
        templateUrl: 'partials/telefones.html',
        controller: 'TelefonesController'
    });

    $routeProvider.when('/telefone/:telefoneId', {
        templateUrl: 'partials/telefone.html',
        controller: 'TelefoneController'
    });

    $routeProvider.when('/telefone', {
        templateUrl: 'partials/telefone.html',
        controller: 'TelefoneController'
    });

    /**
     * item da prova
     */
    $routeProvider.when('/ajuda', {
        templateUrl: 'partials/ajuda.html'
    });

    $routeProvider.when('/auth', {
        templateUrl: 'partials/auth.html'
    });

    $routeProvider.otherwise({redirectTo: '/'});

});