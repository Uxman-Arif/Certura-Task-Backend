const express = require('express');
const {index, upload, prodsave, checkout, uploadreview} = require('../controllers/shoppingcart/products');
const { cartfnc, creatcart, quantityhandle, deletecartitem, deleteallitem } = require('../controllers/shoppingcart/cartfncs');

const router = express.Router();

router.get('/products', index).post('/products', upload.single('picture'), prodsave);
router.get('/checkout/:id', checkout).post('/checkout/:id', uploadreview);
router.get('/cart/:id', cartfnc).post('/cart', creatcart).patch('/cart', quantityhandle).delete('/cart', deletecartitem).delete('/cart/:id', deleteallitem);

module.exports =  router;