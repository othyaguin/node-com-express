const express = require("express")

const app = express()

app.get('/', (requisiçao, resposta) => {
    resposta.send()
})

app.listen(3000, () => {  
    console.log("Servidor rodando na porta 3000.")
})
