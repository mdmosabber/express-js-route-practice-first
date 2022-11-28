const express = require('express');
const router = express.Router();

//controller Import
const {auth} = require('../controllers/auth');



//Route 
router.get('/',auth)





// route export
module.exports = router