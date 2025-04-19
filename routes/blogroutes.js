const express = require('express');
const { blogs } = require('../controllers/blogs/blogaccess');
const { newblogcreate, upload } = require('../controllers/blogs/blogcreate');
const { deleteBlog } = require('../controllers/blogs/deleteblog');

const blogrouter = express.Router();

blogrouter.get('/', blogs).post('/', upload.single('image'), newblogcreate).delete('/:id', deleteBlog);
module.exports = blogrouter