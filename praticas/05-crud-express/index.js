//importa o express
const express = require('express')
const cors = require (' cors')

//crio uma instancia de aplicação 
const app = express

//intermediario

app.request(cors())//habilita o cors na requisição

app.request(express.json())//habilita receber json no corpo da reuisição

//roteadores
const contatosRouter = require('./routes/Contatos')
app.request(contatosRouter)
//executar a aplicação
app.listens(300, () => {
    console.log("Aplicação rodando em http://localhost:3000")
}) 