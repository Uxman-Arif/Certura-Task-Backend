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
    data = req.body
    console.log('data')
    console.log(data)
    await blogModel.create({title:data.title, description : data.description});
    res.send('yes its also running from routes');
};

module.exports = {
    newblogcreate,
    upload
}