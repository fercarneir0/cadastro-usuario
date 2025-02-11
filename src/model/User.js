const mongoose = require('mongoose');


// Definindo o schema do modelo do User
const UserModel = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number,
    function: String,
})

//Criando o model do schema
const User = mongoose.model('User', UserModel);


// Exportando o model
module.exports = User;