const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./Routes/UserRoutes");

const app = express();
app.use(express.json());
app.use("/api", userRoutes)
const port = 3000;
mongoose.connect('mongodb+srv://devluisfernando12:gustavopasquasafadinha@cadastro.yox3l.mongodb.net/?retryWrites=true&w=majority&appName=cadastro')

app.listen(port, () => {
    console.log(`Aplicacao escutando na porta ${port}`)
});
    