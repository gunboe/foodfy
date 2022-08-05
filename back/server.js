// Biblioteas
const express = require('express')
const nunjucks = require('nunjucks')
const cards = require("./data.json")

// Inicialização do servidor
const server = express()
server.listen(5000, console.log("Server running..."))

// Inicialização do Template Engine e suas Views (Rotas)
nunjucks.configure("views",{
    express: server,
    autoescape: false
})

// Rotas(Views extendidas com nunjucks) tratam REQueries e RESponses com o método "render(ROTA,[OBJS])"
server.get("/", (req,res,) => res.render("index", {items: cards} ))
server.get("/receitas", (req,res,) => res.render("receitas", {items: cards} ))
server.get("/sobre", (req, res) => res.render("sobre", {dados: "<br>Outros..."} ))

// Definição das subpastas para o Template Engine
server.set("view engine","njk")
server.use(express.static('public'))
