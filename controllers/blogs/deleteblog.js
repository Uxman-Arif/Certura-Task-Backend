const { blogModel } = require('../../models/blogmodel');

async function deleteBlog(req, res) {
    const blogId = req.params.id;

    try {
        const deletedBlog = await blogModel.findByIdAndDelete(blogId);

        if (!deletedBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.status(200).json({ message: "Blog deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting blog", error });
    }
}

module.exports = {
    deleteBlog
};
