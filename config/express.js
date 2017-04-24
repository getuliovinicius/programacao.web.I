// config/express.js

var	express	= require('express');
var	load = require('express-load');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
//var home = require('../app/routes/home');

module.exports = function() {

    var	app	= express();

    /**
     * variável	de ambiente
     */
    app.set('port', 3000);

    /**
     * middlewares
     */
    app.use(express.static('./public'));
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    // app.use(require('method-override')());
    app.use(methodOverride());

    /**
     * carregamento
     */
    // home(app);
    // load('controllers', {cwd: 'app'}).then('routes').into(app);
    load('models', {cwd: 'app'}).then('controllers').then('routes').into(app);

    return app;

};
