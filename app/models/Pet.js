const mongoose = require('mongoose');
const config = require('../config');
const Species = require('./Species');
const Shelter = require('./Shelter');


const petSchema = mongoose.Schema({
    name: {
        type: String,
    },
    city: {
        type: String,
    },
    species: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: Species
    },
    age: {
        type: Number,
    },
    gender: {
        type: String,
        enum: ['Macho', 'Hembra', 'n/a']
    },
    size: {
        type: String,
        enum: ['Pequeño', 'Mediano', 'Grande']
    },
    images: {
        image1: String,
        image2: String,
        image3: String,
    },
    km: {
        type: String
    },

    data: {
        weight: {
            type: String,

        },
        personality: {
            type: String
        },
        history: {
            type: String
        }
    },

    health: {
        vaccine: Boolean,
        dewormed: Boolean,
        healthful: Boolean,
        sterilized: Boolean,
        identified: Boolean,
        chip: Boolean,
        about: String
    },

    adoption: {
        requeriments: String,
        rates: String,
        transfers: String
    },

    shelter: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: Shelter
    }

})


const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;