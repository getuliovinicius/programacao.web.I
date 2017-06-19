// app/controllers/telefone.js

/**
 * 3º Item da prova. Criar um controller para...
 */

var sanitize = require('mongo-sanitize');

module.exports = function(app) {
    
    var Telefone = app.models.telefone;
    var controller = {};
    
    /**
     * Ação que lista os telefones existentes
     */
    controller.listaTelefones = function(req, res) {
        //Contato.find().exec().then(
        Telefone.find().populate('contato').exec().then(
            function(telefones) {
                res.json(telefones);
            },
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    /**
     * Ação que obtem um telefone especifico
     */
    controller.obtemTelefone = function(req, res) {
        var _id = req.params.id;
        Telefone.findById(_id).exec().then(
            function(telefone) {
                if (!telefone) throw new Error("Telefone não encontrado.");
                res.json(telefone);
            },
            function(erro) {
                console.log(erro);
                res.status(404).json(erro);
            }
        );
    };

    /**
     * Ação que remove um telefone da lista
     */
    controller.removeTelefone = function(req, res) {
        // var _id = req.params.id;
        var _id = sanitize(req.params.id);
        Telefone.remove({"_id" : _id}).exec().then(
            function() {
                res.status(204).end();
            },
            function(erro) {
                return console.error(erro);
            }
        );
    };

    /**
     * Ação que salva um telefone na agenda
     */
    controller.salvaTelefone = function(req, res) {
        var _id = req.body._id;
        /**
         * Independente da quantidade de parâmetros,
         * apenas selecionamos os que desejamos:
         */
        var dados = {
            "numeroTelefone" : req.body.numeroTelefone,
            "tipo" : req.body.tipo,
            "contato" : req.body.contato || null
        };

        if(_id) {
            Telefone.findByIdAndUpdate(_id, dados).exec().then(
                function(telefone) {
                    res.json(telefone);
                },
                function(erro) {
                    console.error(erro);
                    res.status(500).json(erro);
                }
            );
        } else {
            Telefone.create(dados).then(
                function(telefone) {
                    res.status(201).json(telefone);
                },
                function(erro) {
                    console.log(erro);
                    res.status(500).json(erro);
                }
            );
        }
    };

    return controller;

};