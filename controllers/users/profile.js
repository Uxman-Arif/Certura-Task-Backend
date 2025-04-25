const userModel = require('../../models/usermodel');
const { productModel } = require('../../models/productmodel');
const { blogModel } = require('../../models/blogmodel');

const userprofile = async (req, res) => {
    const userid = req.params.id;
    const products = await productModel.find({owner:userid});
    const blogs = await blogModel.find({owner:userid});

    return res.json({msg:'working good'});
}
module.exports = userprofile;