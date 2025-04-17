const userModel = require('../../models/usermodel');
const { storeuser } = require('../../middlewares/userverify');

async function Signin(req, res) {
    data = req.body;
    const loguser = await userModel.findOne({email:data.email});
    if(loguser){
        if (loguser.password===data.password) {
            const token = storeuser(loguser._id, loguser.name, loguser.email)
            return res.json({'token':token});
        }else{
            return res.json({'msg':'Incorrect Password!'});
        };
    }else{
        return res.json({'msg':'This user not exist!'});
    };
};

module.exports = Signin;