// app/controllers/contato.js

/**
 * Contatos definidos de modo estático
 */
var contatos = [
    {
        _id: 1, nome: 'Contato Exemplo 1',
        email: 'cont1@empresa.com.br'
    },
    {
        _id: 2, nome: 'Contato Exemplo 2',
        email: 'cont2@empresa.com.br'
    },
    {
        _id: 3, nome: 'Contato Exemplo 3',
        email: 'cont3@empresa.com.br'
    }
];

var ID_CONTATO_INC = 3;

module.exports = function() {
    
    var controller = {};
    
    /**
     * Ação que lista os contatos existentes
     */
    controller.listaContatos = function(req, res) {
        res.json(contatos);
    };

    /**
     * Ação que obtem um contato especifico
     */
    controller.obtemContato = function(req, res) {
        console.log(req.params.id);

        var idContato = req.params.id;
        var contato = contatos.filter(
            function(contato) {
                return contato._id == idContato;
            }
        )[0];

        contato ? res.json(contato) : res.status(404).send('Contato não encontrado.');
    };

    /**
     * Ação que remove um contato da lista
     */
    controller.removeContato = function(req, res) {
        var idContato = req.params.id;
            
        contatos = contatos.filter(
            function(contato) {
                return contato._id != idContato;
            }
        );
        
        res.status(204).end();
    };

    /**
     * Ação que salva um contato na agenda
     */
    controller.salvaContato = function(req, res) {
        var contato = req.body;

        contato = contato._id ? atualiza(contato) : adiciona(contato);

        res.json(contato);
    };

    /**
     * Ação que adiciona um novo contato na agenda
     * @param {*} contatoNovo 
     */
    function adiciona(contatoNovo) {
        contatoNovo._id = ++ID_CONTATO_INC;
        contatos.push(contatoNovo);
        return contatoNovo;
    }

    /**
     * Ação que atualiza um contato na agenda
     * @param {*} contatoAlterar 
     */
    function atualiza(contatoAlterar) {
        contatos = contatos.map(
            function(contato) {
                if(contato._id == contatoAlterar._id) {
                    contato = contatoAlterar;
                }
                return contato;
            }
        );
        return contatoAlterar;
    }

    return controller;

};