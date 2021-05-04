const express = require('express')
const app = express()

// app.use(express.static(__dirname + '/css'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/src/index.html")
})

app.get("/listaContatos", (req, res) => {
    res.send("Contatos Disponíveis")
})

app.use(express.static(__dirname + '/src/js'));
console.log(__dirname + '/src/js')

app.listen(5000, () => {
    console.log('Server is running port 5000')
})
