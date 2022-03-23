    http = require("http")

    porta =3060

    http.createServer((req,res)=>{

    res.end("<html><body><h1>Criando um servidor HTTP no console na porta: "
        + porta +
        "</h1></body></html>"
    )

}).listen(porta, ()=>{
    console.log("Servidor no endereço: http:localhost:"+porta) 
})
