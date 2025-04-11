const { blogModel } = require('../../models/blogmodel');
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


async function newblogcreate(req, res) {
    data = req.body;
    console.log(data);
    console.log(data.image);
    console.log(req.file)
    await blogModel.create({title: data.title, description: data.description, image: req.file?.filename});
    return res.json('Blog is Created successfully!');
};

module.exports = {
    newblogcreate,
    upload
};