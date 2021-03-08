const mongoose = require('mongoose');

const speciesSchema = new mongoose.Schema({
    species: {
        type: String,
    },
    typePet: {
        type: String,
    }
});


const Species = mongoose.model('Species', speciesSchema);

module.exports = Species;