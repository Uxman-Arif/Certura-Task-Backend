const { blogModel } = require('../../models/blogmodel');

async function blogs(req, res) {
    const allblogs = await blogModel.find({}).populate('owner');
    return res.json({'blogs': allblogs});
};

module.exports = {
    blogs
}