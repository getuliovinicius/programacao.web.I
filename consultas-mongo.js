var contato1 = { "nome" : "Contato 1 Mongo", "email" : "cont1@empresa.com.br" }

var criterio = { "nome" : { $regex : /tato/} }

var contatoComEmails = { "nome": "Contato com emails", "emails": ["contato@email.com.br", "pessoal@empresa.com.br"] }

db.contatos.find( { "$or" : [ { "email" : "cont2@empresa.com.br" }, { "nome" : "Contato 1 Mongo" } ] } )

db.contatos.find( { "email" : { "$ne" : "cont2@empresa.com.br" } } )

db.contatos.ensureIndex({ "email" : 1 })

db.contatos.getIndexes()

db.contatos.dropIndex('email_1')

db.contatos.ensureIndex( { email: 1 }, { unique: true } )

db.contatos.remove({ "_id" : ObjectId("5946d6416608ebf359811db0") } )

db.contatos.find( {}, { "nome" : 1 } )

db.contatos.find( {}, { "nome" : 1, _id : 0 })

db.contatos.remove( { "email" : "cont1@empresa.com.br" } )

var criterio = { "email" : "cont3@empresa.com.br" }

var contato = db.contatos.findOne(criterio)

contato

contato.nome = "Nome Alterado"

db.contatos.findOne(criterio)

db.contatos.update(criterio, contato)

var contato4 = { "nome" : "Contato 4 mongo", "email" : "cont4@empresa.com.br" }

db.contatos.update( { "nome" : 4 }, contato4, true )

db.contatos.update( { "nome" : 2 }, { "email" : "somudei@email.com" } )

db.contatos.update( { "email" : "cont4@empresa.com.br"}, { "$set" : { "nome" : "Mais uma alteração" } } )

var contato = db.contatos.findOne( { "email" : "cont2@empresa.com.br" } )

var emergencia = db.contatos.findOne( { "email" : "cont3@empresa.com.br"} )

contato.emergencia = emergencia

db.contatos.update( { "id": contato.id }, contato )

var emergencia = db.contatos.findOne( { "email" : "cont3@empresa.com.br" } )

emergencia.nome = "Mais uma vez Alterado"

db.contatos.update( { "id" : emergencia.id }, emergencia )

var contato = db.contatos.findOne( { "email" : "cont2@empresa.com.br" } )

var emergencia = db.contatos.findOne( { "email" : "cont3@empresa.com.br" } )

contato.emergencia = emergencia._id

db.contatos.update( { "id" : contato.id }, contato )
