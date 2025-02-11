const express = require('express');
const router = express.Router();
const userController = require('../Controller/UserController');

router.post('/users', userController.CreateUser);


module.exports = router;