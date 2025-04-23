const { productModel, productrevieModel } = require('../../models/productmodel');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });


async function index(req, res) {
    const products = await productModel.find({});
    return res.json({'products':products});
};

async function prodsave(req, res) {
    const data = req.body;
    if(!data){
        return res.json({'msg':'Please send data correctly!', 'products':products});
    };

    await productModel.create({name:data.name, description:data.description, stk_available:data.stk, price:data.price, picture:req.file.filename, owner:data.owner})
    return res.send('product added successfully!')
};

async function checkout(req, res){
    const prodid = req.params.id;
    if(prodid==null){
        return res.json({msg:'First send id correct'})
    }
    const prod = await productModel.findOne({_id:prodid});
    const reviews = await productrevieModel.find({product:prodid}).populate('owner');
    return res.json({'prod':prod, 'reviews':reviews});
};

async function uploadreview(req, res) {
    const prodid = req.params.id;
    if(prodid==null){
        return res.json({msg:'First send id correct'});
    };
    if(!req.body){
        return res.json({msg:'please send data first'});
    };
    const reviews = await productrevieModel.create({review:req.body.review,owner:req.body.owner, product:prodid});
    return res.json({'prod':prodid, 'reviews':reviews});
}

module.exports = {
    index,
    upload,
    prodsave,
    checkout,
    uploadreview,
};