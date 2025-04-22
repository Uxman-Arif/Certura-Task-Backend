const { blogModel } = require('../../models/blogmodel');

async function updateBlog(req, res) {
    const blogId = req.params.id;
    if (!req.body?.title && !req.body?.description && !req?.file) {
        try {
            const blog = await blogModel.findById(blogId).populate('owner', 'name');
            if (!blog) return res.json({ msg: 'Blog not found' });
            return res.json({ blog });
        } catch (err) {
            return res.json({ msg: 'Error fetching blog', error: err });
        }
    }
    try {
        const updateFields = {};
        if (req.body.title) updateFields.title = req.body.title;
        if (req.body.description) updateFields.description = req.body.description;
        if (req.file) updateFields.image = req.file.filename;
        
        const updatedBlog = await blogModel.findByIdAndUpdate(blogId, updateFields, { new: true });
        if (!updatedBlog) return res.json({ msg: 'Blog not found' });

        res.json({ msg: 'Blog updated successfully', blog: updatedBlog });
    } catch (error) {
        res.json({ msg: 'Error updating blog', error });
    }
}

module.exports = {
    updateBlog
};
