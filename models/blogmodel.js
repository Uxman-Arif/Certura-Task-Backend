const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type:String
    }
});
const blogModel = mongoose.model('blogs', blogSchema)
module.exports = {
    blogModel
}