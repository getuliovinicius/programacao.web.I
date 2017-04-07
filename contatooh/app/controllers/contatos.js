var contatos = [
    {
        _id: 1,
        nome: 'Contato Exemplo 1',
        email: 'cont1@empresa.com.br'
    },
    {
        _id: 2,
        nome: 'Contato Exemplo 2',
        email: 'cont2@empresa.com.br'
    },
    {
        _id: 3,
        nome: 'Contato Exemplo 3',
        email: 'cont3@empresa.com.br'
    }
];

module.exports = function() {

    var controller = {};

    controller.listaContatos = function(req, res) {
        res.json(contatos);
    };

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

    controller.removeContato = function(req, res) {

        contatos = contatos.filter(function(contato) {
            return contato._id != req.params.id;
        });

        res.status(204).end();

    };

    var ID_CONTATO_INC = 3

    controller.salvaContato = function(req, res) {

        var contato = req.body;
        contato = contato._id ? atualiza(contato) : adiciona(contato);
        res.json(contato);

    };

    function adiciona(novo) {
     
        novo._id = ++ID_CONTATO_INC;
        contatos.push(novo);
        return novo;
    
    }

    function atualiza(existente) {
        
        contatos = contatos.map(function(contato) {
        
            if(contato._id == existente._id) {
                contato = existente;
            }

            return contato;
        
        });

        return existente;

    }

    return controller;

};