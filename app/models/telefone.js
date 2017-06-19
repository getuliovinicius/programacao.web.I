// app/models/telefone.js

/**
 * 2º Item da prova. Criar um esquema no mongoose...
 */

var mongoose = require('mongoose');

module.exports = function() {
    var schema = mongoose.Schema(
        {
            numeroTelefone: {
                type: String,
                required: true
            },
            tipo: {
                type: String,
                default: "Celular"
            },
            contato: {
                type: mongoose.Schema.ObjectId,
                ref: 'Contato'
            }

        }
    );

    return mongoose.model('Telefone', schema);
};            
