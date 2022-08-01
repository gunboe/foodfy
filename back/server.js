// Biblioteas
const express = require('express')
const nunjucks = require('nunjucks')

// Inicialização do servidor
const server = express()
server.listen(5000, console.log("Server running..."))

// Inicialização do Template Engine e suas Views (Rotas)
nunjucks.configure("views",{
    express: server
})

// Rotas(Views)
server.get("/", (req,res,) => res.render("index"))
server.get("/receitas", (req,res,) => res.render("receitas"))
server.get("/sobre", (req,res,) => res.render("sobre"))

// Definição das subpastas para o Template Engine
server.use(express.static('public'))
server.set("view engine","html")


// const texto = "Boa noite! E ai, blz?"
// const cabeca = "<html> <meta http-equiv=\"refresh\" content=\"3\"> <body>"
// const corpo = `<br><b>--> ${texto} <--</b>`
// const pes = "</body></html>"

// server.get("/",function(req, res){
//     return res.send(resposta)
// })


