const userModel = require('../../models/usermodel');
const { storeuser, verifyuser } = require('../../middlewares/userverify');

async function Signin(req, res) {
    data = req.body;
    console.log(data)
    const loguser = await userModel.findOne({email:data.email});
    if(loguser){
        if (loguser.password===data.password) {
            const token = storeuser(loguser._id, loguser.name, loguser.email)
            console.log(token)
            it = verifyuser(token);
            console.log(it);
        }else{
            console.log('Incorrect Password!')
        };
    }else{
        console.log('This user not exist!');
    };
    return res.json({'msg':'User data is comed successfully!'});
};

module.exports = Signin;