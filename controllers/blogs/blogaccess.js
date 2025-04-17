const { blogModel } = require('../../models/blogmodel');

async function blogs(req, res) {
    console.log('here')
    const allblogs = await blogModel.find({});
    return res.json(allblogs);
};

module.exports = {
    blogs
}