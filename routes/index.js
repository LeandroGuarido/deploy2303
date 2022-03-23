module.exports = (app) => {
    var conexao = require('../config/database')
    conexao()

    var mensagens = require('../models/mensagem')
    var mygrids = require('../models/mygrid')

    app.get('/', async(req, res) => {
        var mygrid = await mygrids.find().limit(6).sort({'_id': -1})
        .then((mygrid)=>{
            res.render('index.ejs',{dados:mygrid})
            console.log (mygrid)
        })
        .catch(()=>{
            res.render('index.ejs')
        })
    })

    app.post('/', (req, res) => {


        var documento = new mensagens({
            nome: req.body.first.name,
            sobrenome: req.body.last.name,
            email: req.body.email,
            mensagem: req.body.message
        })
        .save()
        .then(() => {
            res.redirect('/')
        })
        .catch( () => {
            res.send("Não foi possivel gravar o documento no banco de dados")
        })
    })





}