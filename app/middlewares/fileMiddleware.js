const multer = require('multer');
const fs = require('fs');
require('dotenv').config();
const path = require('path');
const cloudinary = require('cloudinary').v2;

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
    fileFilter,
});

const uploadToCloudinary = async (req, res, next) => {
    if (req.file) {
        const filePath = req.file.path;

        const image = await cloudinary.uploader.upload(filePath);
        await fs.unlinkSync(filePath);

        req.file_url = image.secure_url;
        next();
    } else {
        next();
    }
}

module.exports = {
    upload,
    uploadToCloudinary
};