require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const userRoutes = require("./Routes/UserRoutes");

const mongoUri = process.env.MONGO_URI;
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use("/api", userRoutes)
mongoose.connect(mongoUri)

app.listen(port, () => {
    console.log(`Aplicacao escutando na porta ${port}`)
});