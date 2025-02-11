const express = require('express');
const router = express.Router();
const userController = require('../Controller/UserController');

router.post('/users', userController.CreateUser);
router.get('/users', userController.getUsers);
router.put('/users/:id', userController.updateUser);


module.exports = router;