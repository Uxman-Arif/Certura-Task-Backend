const { blogModel } = require('../../models/blogmodel');

function blogs(req, res) {
    blogModel.create({title:'test', description : 'This is only for testing purpose'});
    res.send('yes its also running from routes');
};

module.exports = {
    blogs
}