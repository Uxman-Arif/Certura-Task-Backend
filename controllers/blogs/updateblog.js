const { blogModel } = require('../../models/blogmodel');

async function updateBlog(req, res) {
    const blogId = req.params.id;
    const updatedData = req.body;

    try {
        const updatedBlog = await blogModel.findByIdAndUpdate(
            blogId,
            {
                title: updatedData.title,
                description: updatedData.description,
                image: updatedData.image // optional
            },
            { new: true } // return updated document
        );

        if (!updatedBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(500).json({ message: "Error updating blog", error });
    }
}

module.exports = {
    updateBlog
};
