// app/routes/telefone.js

/**
 * 3º Item da prova. Crie, também, as rotas para acessar...
 */

function verificaAutenticacao(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.status('401').json('Não autorizado.');
    }
}

module.exports = function(app) {
    
    var controller = app.controllers.telefone;
    
    app.route('/telefones')
        .get(verificaAutenticacao, controller.listaTelefones)
        .post(verificaAutenticacao, controller.salvaTelefone);
    app.route('/telefones/:id')
        .get(verificaAutenticacao, controller.obtemTelefone)
        .delete(verificaAutenticacao, controller.removeTelefone);
        
};