const mongoose = require('mongoose');


// Definindo o schema do modelo do User
const UserModel = new mongoose.UserModel({
    name: String,
    email: String,
    password: Number,
    age: Number,
    function: String
})

//Criando o model do schema
const User = mongoose.model('User'.UserModel);


// Exportando o model
module.exports = User;