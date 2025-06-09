const express = require('express');
const path = require('path');
const rootDir = require('../utils/path'); 

const router = express.Router();
router.get('/collection',(req,res,next) => {
    // console.log('Add-product runned');
    res.sendFile(path.join(rootDir, 'views', 'collection.html')); 
})
router.get('/wishlist',(req,res,next) => {
    // console.log('Form data :',req.body);
    res.sendFile(path.join(rootDir, 'views', 'wishlist.html')); 
})

module.exports = router;