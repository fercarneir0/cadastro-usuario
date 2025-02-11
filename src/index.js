const express = require("express");
const mongoose = require("mongoose");


const app = express();
const port = 3000;
mongoose.connect('mongodb+srv://devluisfernando12:<flamengo@2025>@cadastro.yox3l.mongodb.net/?retryWrites=true&w=majority&appName=cadastro')

app.get('/', (req, res) => {
    res.send("Hello World!")   
});

app.listen(port, () => {
    console.log(`Aplicacao escutando na porta 3000! ${port}`)
});
    