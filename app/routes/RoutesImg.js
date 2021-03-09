const express = require('express');
const fs = require('fs');
const fileMiddleware = require('../middlewares/fileMiddleware');
const routesImg = express.Router();

routesImg.post('/', fileMiddleware.upload.array('image'), async (req, res) => {

    const uploader = async (path) => await fileMiddleware.uploadToCloudinary(path, 'Images');
  
    if (req.method === 'POST') {
      const urls = []
      const files = req.files;
      for (const file of files) {
        const { path } = file;
        const newPath = await uploader(path)
        urls.push(newPath)
        fs.unlinkSync(path)
      }
  
      res.status(200).json({
        message: 'images uploaded successfully',
        imgs: urls
      })
  
    } else {
      res.status(405).json({
        err: `${req.method} method not allowed`
      })
    }
  })

module.exports = routesImg;