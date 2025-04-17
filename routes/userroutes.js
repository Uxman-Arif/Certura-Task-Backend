const express = require('express');
const userrouter = express.Router()
const userRegister = require('../controllers/users/registeruser');
const Signin = require('../controllers/users/signin');

userrouter.post('/signup', userRegister);
userrouter.post('/signin', Signin);

module.exports = userrouter;