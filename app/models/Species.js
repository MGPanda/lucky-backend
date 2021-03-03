const mongoose = require('mongoose');

const speciesSchema = new mongoose.Schema({
    species: String,
});


const Species = mongoose.model('Species', speciesSchema);

module.exports = Species;