// app/models/contato.js

var mongoose = require('mongoose');

module.exports = function() {
    var schema = mongoose.Schema(
        {
            nome: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true,
                index: {
                    unique: true
                }
            },
            endereco: {
                type: String,
                required: true
            },
            telefone: {
                type: String,
                required: true
            },
            emergencia: {
                type: mongoose.Schema.ObjectId,
                ref: 'Contato'
            }
        }
    );

    return mongoose.model('Contato', schema);
};