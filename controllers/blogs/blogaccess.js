const { blogModel } = require('../../models/blogmodel');

async function blogs(req, res) {
    const id = req.params;
    const allblogs = await blogModel.find({}).populate('owner');
    return res.json({'blogs': allblogs});
};

module.exports = {
    blogs
}