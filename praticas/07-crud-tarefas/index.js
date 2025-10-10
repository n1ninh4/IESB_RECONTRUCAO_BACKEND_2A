const express = require ('express')
const mongose = require ('mongoose')
const dotenv = require ('dotenv')


const app = express ()
app.use(express.json)

//conectra banco 
mongoose.connect('mongodb+srv://nininha:psoAjhLPGjWorpoL@cluster0.h8wdaif.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

.then(() => {
    console.log("contado ao mongoDB")
})
.catch(err =>{
    ('erro ao conectar no banco MongoDB.', err)
})
app.listen(3000, () => {
    console.log('aplicação rodando em http://localhost:3000'
        
    )
})