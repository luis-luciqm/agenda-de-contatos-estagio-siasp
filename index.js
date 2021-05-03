const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send("Estágio SIASP")
})

app.listen(5000, () => {
    console.log('Server is running port 5000')
})
