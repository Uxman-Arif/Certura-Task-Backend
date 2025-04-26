const express = require('express');
const { blogs } = require('../controllers/blogs/blogaccess');
const { newblogcreate } = require('../controllers/blogs/blogcreate');
const { deleteBlog } = require('../controllers/blogs/deleteblog');
const { updateBlog } = require('../controllers/blogs/updateblog');
const { uploadblogreview } = require('../controllers/blogs/blogreview');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

const blogrouter = express.Router();

blogrouter.get('/', blogs).post('/', upload.single('image'), newblogcreate).delete('/:id', deleteBlog);
blogrouter.get('/edit/:id', updateBlog).put('/edit/:id', upload.single('image'), updateBlog).post('/edit/:id', uploadblogreview);
module.exports = blogrouter