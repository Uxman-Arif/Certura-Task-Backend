const { blogModel, blogrevieModel } = require('../../models/blogmodel');

async function uploadblogreview(req, res) {
    const prodid = req.params.id;
    if(prodid==null){
        return res.json({msg:'First send id correct'});
    };
    if(!req.body){
        return res.json({msg:'please send data first'});
    };
    const reviews = await blogrevieModel.create({review:req.body.review,owner:req.body.owner, product:prodid});
    return res.json({'prod':prodid, 'reviews':reviews});
}


module.exports = {
    uploadblogreview
};