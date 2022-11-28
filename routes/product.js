const express = require('express');
const router = express.Router();

//controller Import
const {product} = require('../controllers/product');



//Route 
router.get('/product', product);




// route export
module.exports = router;