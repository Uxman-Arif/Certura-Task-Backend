const { blogModel } = require('../../models/blogmodel');

async function deleteBlog(req, res) {
    const blogId = req.params.id;

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
