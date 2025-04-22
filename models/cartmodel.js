const mongoose = require('mongoose');

const cartitemsSchema = mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ecomproduct',
    },
    quantity: {
        type: Number,
        required: true
    },
        
    owner: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'ecomuserModel'
    }
});

const cartitemsModel = mongoose.model('cartitems', cartitemsSchema);

const cartSchema = mongoose.Schema({
    cartitems: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'cartitems'
            }
        ],
        
    owner: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'ecomuserModel'
    }
})

const cartModel = mongoose.model('ecomcart', cartSchema);

module.exports = {
    cartitemsModel,
    cartModel
}