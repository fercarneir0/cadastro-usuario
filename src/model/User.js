const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);


// Definindo o schema do modelo do User
const UserSchema = new mongoose.Schema({
    userId: Number,
    name: String,
    email: String,
    password: String,
    age: Number,
    function: String,
});

//Incrementando o ID automaticamente
UserSchema.plugin(autoIncrement, {inc_field: "userId"});

//Criando o model do schema
const User = mongoose.model('User', UserSchema);


// Exportando o model
module.exports = User;