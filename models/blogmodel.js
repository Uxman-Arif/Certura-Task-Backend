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

const blogreviewSchema = mongoose.Schema({
    review: {
        type: String,
        required: true
    },
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'blogs',
    },
    owner: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
});

const blogrevieModel = mongoose.model('blogreview', blogreviewSchema);
module.exports = {
    blogModel,
    blogrevieModel
}