const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    img: {
        type: String,
    }
});

const New = mongoose.model('New', newSchema);

module.exports = New;