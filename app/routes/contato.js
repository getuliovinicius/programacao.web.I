// app/routes/contato.js

function verificaAutenticacao(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        console.log("que merda");
        res.status('401').json('Não autorizado.');
    }
}

module.exports = function(app) {
    
    var controller = app.controllers.contato;
    
    /*app.get('/contatos', controller.listaContatos);
    app.get('/contatos:id', controller.obtemContato);
    app.delete('/contatos:id', controller.removeContato);*/

    /*app.route('/contatos')
        .get(controller.listaContatos)
        .post(controller.salvaContato);
    app.route('/contatos/:id')
        .get(controller.obtemContato)
        .delete(controller.removeContato);*/

    app.route('/contatos')
        .get(verificaAutenticacao, controller.listaContatos)
        .post(verificaAutenticacao, controller.salvaContato);
    app.route('/contatos/:id')
        .get(verificaAutenticacao, controller.obtemContato)
        .delete(verificaAutenticacao, controller.removeContato);
};