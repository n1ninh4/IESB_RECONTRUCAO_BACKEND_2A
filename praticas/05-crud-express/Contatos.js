//importa o express
const express = require('express')

//crio um roteador
const router = express.Router()

//implemento as rotas e a logica

//crud de contatos( create, read, update, delete )

//variavel pra guardar a lista de contatos
let contatos = ["geo", "leo"]

//buscar a lista de contatos
router.get('/conatatos', (req, res, next) => {
    res.json(contatos)
})
//cadastras o contato

//deletar o contato

//deletar todos os contatos
