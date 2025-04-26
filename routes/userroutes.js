const express = require('express');
const userrouter = express.Router()
const { userRegister, upload } = require('../controllers/users/registeruser');
const Signin = require('../controllers/users/signin');
const userprofile = require('../controllers/users/profile');

userrouter.post('/signup', upload.single('profilePic'), userRegister);
userrouter.post('/signin', Signin);
userrouter.get('/profile/:id', userprofile);

module.exports = userrouter;