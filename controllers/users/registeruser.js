const userModel = require('../../models/usermodel');
async function userRegister(req, res) {
    data = req.body;
    await userModel.create({name:data.name, email:data.email, password:data.password});
    return res.json({msg:'User is created successfully!'});
};

module.exports = userRegister;