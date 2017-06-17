// config/express.js

/**
 * Requisição de módulos
 */
var express = require('express');
// var home = require('../app/routes/home');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function() {

    var app = express();

    /**
     * Configurações de ambiente
     */ 
    app.set('port', 3000);

    /**
     * Middlewares
     */
    app.use(express.static('./public'));
    app.set('view engine', 'ejs');
    app.set('views','./app/views');
    app.use(bodyParser.urlencoded( { extended: true } ));
    app.use(bodyParser.json());
    app.use(require('method-override')());

    /**
     * Carregamento de rotas
     */
    // home(app);
    load('models', {cwd: 'app'}).then('controllers').then('routes').into(app);
    
    return app;

};