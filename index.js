const express = require ('express')
const app = express()

const port = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.send("Olá, realizando teste com Heroku nesse endpoint")
})


app.listen(port, ()=>{
    console.info(`Aplicação rodando na porta ${port}`)
})