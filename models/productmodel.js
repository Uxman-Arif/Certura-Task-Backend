const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    stk_available: {
        type: Number
    },
    price: {
        type: Number
    },
    picture: {
        type: String
    },
    owner: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'ecomuserModel'
    }
});

const productModel = mongoose.model('ecomproduct', productSchema);

const productreviewSchema = mongoose.Schema({
    review: {
        type: String,
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ecomproduct',
    },
    owner: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'ecomuserModel'
    }
});

const productrevieModel = mongoose.model('productreview', productreviewSchema);

module.exports = {
    productModel,
    productrevieModel,
};