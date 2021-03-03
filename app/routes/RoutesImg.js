const express = require('express');
const fileMiddleware = require('../middlewares/fileMiddleware');
const routesImg = express.Router();

routesImg.post('/', [fileMiddleware.upload.single('image'), fileMiddleware.uploadToCloudinary], (req, res, next) => {
    console.log('URL imagen: ', req.file_url);

    return res.json({
        image: req.file_url
    })
});

module.exports = routesImg;