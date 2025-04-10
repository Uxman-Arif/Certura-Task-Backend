const express = require('express');
const { blogs } = require('../controllers/blogs/blogaccess');
const { newblogcreate, upload } = require('../controllers/blogs/blogcreate');

const blogrouter = express.Router();

blogrouter.get('/', blogs).post('/', upload.single('image'), newblogcreate);
module.exports = blogrouter