const userModel = require('../../models/usermodel');
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

async function userRegister(req, res) {
    const data = req.body;
    const profilePicPath = req.file ? req.file.path : null;
    console.log(profilePicPath, data)
    // await userModel.create({
    //     name: data.name,
    //     email: data.email,
    //     password: data.password,
    //     profilePic: profilePicPath
    // });

    return res.json({ msg: 'User is created successfully!' });
};

module.exports = {
    userRegister,
    upload
};
