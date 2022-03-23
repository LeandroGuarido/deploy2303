const mongoose = require ('mongoose')

const conexao = async() => {
    //conexao local
    //var bdlocal = await mongoose.connect.('mongodb//localhost/ac1tri')
    //conexao atlas
    var atlas  = await mongoose.connect('mongodb+srv://UserAdmin:userAdm@ac1tri.xb0bm.mongodb.net/ac1tri?retryWrites=true&w=majority')
}

module.exports = conexao    