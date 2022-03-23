const mongoose = require('mongoose')

const modelo = mongoose.Schema({

nome: String,
Sobrenome: String,
Email: String,
Mensagem: String,
enviado: {type: Date, default: Date.now }
})

const Mensagem = mongoose.model('Mensagem', modelo)

module.exports = mensagem