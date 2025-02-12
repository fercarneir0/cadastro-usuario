const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);
const bcrypt = require('bcryptjs');


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

//Hash da senha antes de salvar
UserSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();

    try{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err){
        next(err);
    }
});

//Criando o model do schema
const User = mongoose.model('User', UserSchema);


// Exportando o model
module.exports = User;