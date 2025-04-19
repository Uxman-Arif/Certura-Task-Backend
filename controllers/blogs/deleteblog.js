const { blogModel } = require('../../models/blogmodel');

async function deleteBlog(req, res) {
    const blogId = req.params.id;
    console.log(blogId)
    console.log('here in delete')

    const deletedBlog = await blogModel.findByIdAndDelete(blogId);
    const blogs = await blogModel.find({});
    if (!deletedBlog) {
        return res.json({ message: "Blog not found" });
    }

    return res.json({ blogs: blogs });
    
}

module.exports = {
    deleteBlog
};
