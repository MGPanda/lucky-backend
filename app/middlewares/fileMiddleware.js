const multer = require('multer');
const fs = require('fs');
require('dotenv').config();
const path = require('path');
const cloudinary = require('cloudinary');

const VALID_FILE_TYPES = ['image/png', 'image/jpg', 'image/jpeg'];

// esto no sé por qué no está funcionando
const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/uploads'))
    }
});

const fileFilter = (req, file, cb) => {
    if (!VALID_FILE_TYPES.includes(file.mimetype)) {
        const error = new Error('Invalid file type');
        cb(error, false);
    } else {
        cb(null, true);
    }
}

const upload = multer({
    storage,
    fileFilter: fileFilter,
});

const uploadToCloudinary =  (file, folder) => {
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, (result) => {
            resolve({
                url: result.url,
                id: result.public_id
            })
        }, {
            resource_type: "auto",
            folder: folder
        })
    })
}

module.exports = {
    upload,
    uploadToCloudinary
};

