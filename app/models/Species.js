const mongoose = require('mongoose');

const speciesSchema = new mongoose.Schema({
    species: {
        type: String,
        required: true,
    },
    typePet: {
        type: String,
        required: true,
    }
});


const Species = mongoose.model('Species', speciesSchema);

module.exports = Species;