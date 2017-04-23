// app/controllers/contato.js

var contatos = [
    {
        _id: 1, nome: 'João Silva',
        email: 'cont1@empresa.com.br'
    },
    {
        _id: 2, nome: 'João Plenário',
        email: 'cont2@empresa.com.br'
    },
    {
        _id: 3, nome: 'Maria Ferreira',
        email: 'cont3@empresa.com.br'
    }
];

module.exports = function() {

    var	controller = {};

    /**
     * Ação de listagem dos contatos
     */
    controller.listaContatos = function(req, res) {
        res.json(contatos);
    };

    /**
     * Ação de obtenção de contato especifico
     */
    /*controller.obtemContato = function(req, res) {

        var	idContato = req.params.id;

        var	contato = contatos.filter(function(contato)	{
            return contato._id == idContato;
        })[0];

        contato	? res.json(contato)	: res.status(404).send('Contato	não	encontrado');

        console.log(req.params.id);

    };*/
    controller.obtemContato = function(req, res) {

        var filtrados = contatos.filter(function(contato) {
            return contato._id == req.params.id;
        });

        if (filtrados.length > 0) {
            res.json(filtrados[0]);
        } else {
            res.status(404).send('Contato ' + req.params.id + ' Não encontrado.');
        }

    };

    /**
     * Ação para remoção de um contato
     */
    /*controller.removeContato = function(req, res) {

        var idContato = req.params.id;

        contatos = contatos.filter(function(contato) {
            return contato._id != idContato;
        });

        res.status(204).end();

        console.log('API: removeContato: ' + idContato);

    };*/
    controller.removeContato = function(req, res) {

        contatos = contatos.filter(function(contato) {
            return contato._id != req.params.id;
        });

        res.status(204).end();

    };

    var ID_CONTATO_INC = 3;

    function adiciona(contatoNovo) {

        contatoNovo._id = ++ID_CONTATO_INC;

        contatos.push(contatoNovo);

        return contatoNovo;

    }

    function atualiza(contatoExistente) {

        contatos = contatos.map(function(contato) {

            if (contato._id == contatoExistente._id) {
                contato = contatoExistente;
            }

            return contato;

        });

        return contatoExistente;

    }

    controller.salvaContato = function(req, res) {

        var contato = req.body;

        contato = contato._id ? atualiza(contato) : adiciona(contato);

        res.json(contato);

    }

    return controller;

};
