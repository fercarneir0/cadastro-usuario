// Importando o model do User
const User = require('../model/User');

// Criar um user 
exports.CreateUser = async(req, res) =>  {
    try {
        const { name, email, password, age, function: userFunction } = req.body;
        const existingUser = await User.findOne({ email })

        if(existingUser){
            return res.status(409).send({ message: 'Já existe um usuário com esse email'});
        }

        const user = new User(req.body)
        await user.save();
        
        res.status(200).send(user)
    } catch (err) {
        res.status(400).send(err)
    }
};