const { cartitemsModel, cartModel } = require('../../models/cartmodel');

async function cartfnc(req, res) {
    const cartid = req.params.id;
    const cart = await cartModel.find({owner:cartid})
    const cartitems = await cartitemsModel.find({owner:cartid}).populate('product');
    return res.json({'cart':cart, 'cartitems':cartitems});
};

async function creatcart(req, res) {
    data = req.body;
    if(!data){
        return res.json({msg:'Please send data correctly'})
    };
    const checkcart = await cartModel.findOne({owner:data.owner});
    const checkcartitem = await cartitemsModel.findOne({product:data.prodid});
    if (checkcartitem){
        return res.json({msg:'This Cart items is already exist!'});
    }
    const createcartitem = await cartitemsModel.create({product:data.prodid, quantity:data.quantity, owner:data.owner})
    if (checkcart) {
        checkcart.cartitems.push(createcartitem);
        checkcart.save();
    }else{
        const cartmdl = await cartModel.create({owner:data.owner});
        cartmdl.cartitems.push(createcartitem);
        cartmdl.save();
    }

    const cart = await cartModel.find({owner:data.owner})
    const cartitems = await cartitemsModel.find({owner:data.owner}).populate('product');

    return res.json({msg:'Cartitem is added successfully!', 'cart':cart, 'cartitems':cartitems})
};

async function quantityhandle(req, res) {
    data = req.body;
    const prod = await cartitemsModel.findOne({_id:data.prodid});
    if (data.action==='add'){
        prod.quantity = prod.quantity+1;
    }else{
        if(prod.quantity>=2){
            prod.quantity = prod.quantity-1;
        }
    }
    prod.save()
    return res.json({msg:'working good'});
};

async function deletecartitem(req, res) {
    data = req.body;
    await cartitemsModel.deleteOne({_id:data.prodid});

    return res.json({msg:'product deleted successfully!'});
};

module.exports = {
    cartfnc, 
    creatcart,
    quantityhandle,
    deletecartitem
}