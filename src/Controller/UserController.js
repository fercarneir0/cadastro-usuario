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

exports.getUsers = async(req, res) => {
    try {
        const user = await User.find()
        res.status(200).json(user)
    } catch (err){
        res.status(500).send({message: 'Não foi possivel listar os usuários'})
    }
};

exports.getUserById = async(req, res) => {
    try{
        const user = await User.findById(req.params.id);
        if(!user) {
            return res.status(404).send({message: 'Usuário não encontrado'})
        }
        res.status(200).send(user) 
    } catch (err){
        res.status(404).send({message: 'Usuário não encontrado'});
    }
}

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!user) {
            return res.status(404).send({message: 'Usuário não encontrado'})
        }   
        res.send(user);
    } catch (err){
        console.error("Erro ao atualizar o usuário", err);
        res.status(400).send({message: 'Não foi possível atualizar o usuário'})
    }
};

exports.deleteUser = async (req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(404).send({message: 'Usuário não encontrado'})
        }
        res.send(user);
    } catch (err){
        res.status(400).send({message: 'Não foi possível remover o usuário'})
    }
}