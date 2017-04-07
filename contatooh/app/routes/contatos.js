module.exports = function(app) {
    var controller = app.controllers.contatos;
    /*app.get('/contatos', controller.listaContatos);
    app.get('/contatos/:id', controller.obtemContato);
    app.delete('/contatos/:id', controller.removeContato);*/

    app.route('/contatos')
        .get(controller.listaContatos)
        .post(controller.salvaContato);

    app.route('/contatos/:id')
        .get(controller.obtemContato)
        .delete(controller.removeContato);
}