const userModel = require('../../models/usermodel');
const { productModel } = require('../../models/productmodel');
const { blogModel } = require('../../models/blogmodel');

const userprofile = async (req, res) => {
    const userid = req.params.id;
    console.log(userid)
    const user = await userModel.findOne({_id:userid});
    const products = await productModel.find({owner:userid});
    const blogs = await blogModel.find({owner:userid}).populate('owner');

    return res.json({'user':user, 'products':products, 'blogs':blogs});
}
module.exports = userprofile;