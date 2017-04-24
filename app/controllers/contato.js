// app/controllers/contato.js

/*var contatos = [
    {
        _id: 1, nome: 'João Silva',
        email: 'cont1@empresa.com.br',
        telefone: '16-3722-0000'
    },
    {
        _id: 2, nome: 'João Plenário',
        email: 'cont2@empresa.com.br',
        telefone: '16-3722-0000'
    },
    {
        _id: 3, nome: 'Maria Ferreira',
        email: 'cont3@empresa.com.br',
        telefone: '16-3722-0000'
    }
];*/

module.exports = function() {

    //var Contato = app.models.contato;
    var	controller = {};

    /**
     * Ação de listagem dos contatos
     */
    controller.listaContatos = function(req, res) {
        
        //res.json(contatos);
    
    };

    /**
     * Ação de obtenção de um contato especifico
     */
    controller.obtemContato = function(req, res) {

        /*var	idContato = req.params.id;

        var	contato = contatos.filter(function(contato)	{
            return contato._id == idContato;
        })[0];

        contato	? res.json(contato)	: res.status(404).send('Contato	não	encontrado');

        console.log(req.params.id);*/

        /*var filtrados = contatos.filter(function(contato) {
            return contato._id == req.params.id;
        });

        if (filtrados.length > 0) {
            res.json(filtrados[0]);
        } else {
            res.status(404).send('Contato ' + req.params.id + ' Não encontrado.');
        }*/

    };

    /**
     * Ação para exclusão de um contato
     */
    controller.removeContato = function(req, res) {

        /*var idContato = req.params.id;

        contatos = contatos.filter(function(contato) {
            return contato._id != idContato;
        });

        res.status(204).end();

        console.log('API: removeContato: ' + idContato);*/

        /*contatos = contatos.filter(function(contato) {
            return contato._id != req.params.id;
        });

        res.status(204).end();*/

    };

    // var ID_CONTATO_INC = 3;

    /**
     * Ação para criação ou alteração de um contato
     */
    controller.salvaContato = function(req, res) {

        /*var contato = req.body;

        contato = contato._id ? atualiza(contato) : adiciona(contato);

        res.json(contato);*/

    }

    /*function adiciona(contatoNovo) {

        contatoNovo._id = ++ID_CONTATO_INC;

        contatos.push(contatoNovo);

        return contatoNovo;

    }*/

    /*function atualiza(contatoExistente) {

        contatos = contatos.map(function(contato) {

            if (contato._id == contatoExistente._id) {
                contato = contatoExistente;
            }

            return contato;

        });

        return contatoExistente;

    }*/

    return controller;

};
