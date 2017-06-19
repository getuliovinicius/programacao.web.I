// config/express.js

/**
 * Requisição de módulos
 */
var express = require('express');
// var home = require('../app/routes/home');
var load = require('express-load');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

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
    //app.use(require('method-override')());
    app.use(methodOverride());

    /**
     * Autenticação
     */
    app.use(cookieParser());
    app.use(session(
        {
            secret: 'Sola scientia emancipat',
            resave: true,
            saveUninitialized: true
        }
    ));
    app.use(passport.initialize());
    app.use(passport.session());
    
    /**
     * Carregamento de rotas
     */
    // home(app);
    load('models', {cwd: 'app'}).then('controllers').then('routes').into(app);
    
    /**
     * se nenhum rota atender, direciona para página 404
     */
    app.get('*', function(req, res) {
        res.status(404).render('404');
    });

    return app;

};