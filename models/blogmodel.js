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
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
});
const blogModel = mongoose.model('blogs', blogSchema)
module.exports = {
    blogModel
}