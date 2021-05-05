const express = require('express')
const app = express()

// app.use(express.static(__dirname + '/css'));

app.use(express.static(__dirname + '/src/js'));
app.use(express.static(__dirname + '/src/css'));
app.use(express.static(__dirname + '/src/assets'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/src/index.html")
})

app.get("/listaContatos", (req, res) => {
    res.send("Contatos Disponíveis")
})

app.listen(5000, () => {
    console.log('Server is running port 5000')
})
