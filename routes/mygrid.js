const mygrid = require('../models/mygrid')

module.exports = (app) => {
    // importar gravações do database
    var conexao = require('../config/database')
    // importar o modelo mygrid
    var modelo = require('../models/mygrid')

    // abrir o forumulario mygrid.ejs
    app.get('/mygrid', (req, res) => {
        // coenctar com o database
        conexao()
        // buscar todos os documentos da coleçao mygrid
        modelo.find()
        .then((modelo)=>{
        res.render('mygrid.ejs')
        })

    })

    // gravar as infromaçoes do fomulario
    app.get('/mygrid', (req, res) => {
        // conectar com o database
        conexao()
        // gravar o document ona coleçao mygrid
        var documento = new modelo({
            titulo:req.body.titulo,
            texto:req.body.texto
        }).save()
        .then(()=>{
            res.redirect('/mygrid')
        })
        .catch(()=>{
            res.send('Não foi possivel gravar os dados no DB')
        })
    })
}