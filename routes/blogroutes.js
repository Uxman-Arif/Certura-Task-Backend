const express = require('express');
const { index } = require('../controllers/blogs/blogcreate');

const blogrouter = express.Router();

blogrouter.get('/', index);
module.exports = blogrouter