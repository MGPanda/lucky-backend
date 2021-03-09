const mongoose = require('mongoose');
const User = require('./User');
const Pet = require('./Pet');

const applicationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: User,
        required: true
    },
    pet: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: Pet,
        required: true
    },
    form: {
        data: {
            name: String,
            email: {
                type: String,
                match: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                required: true
            },
            tel: String,
            DNI: {
                type: String,
                match: /^[0-9]{8,8}[A-Za-z]$/
            },
            address: {
                street: String,
                code: String,
                city: String
            },
            terms: {
                type: Boolean,
                required: true
            },
        },
        pets: {
            morePets: Boolean,
            whichPet: String,
            behaviour: String,
            why: String,
            needs: String,
            expenses: String,
            feed: String
        },
        family: {
            where: String,
            rent: Boolean,
            allowed: Boolean,
            moving: Boolean,
            garden: Boolean,
            flatmate: Boolean,
            agreeTerms: {
                type: Boolean,
                required: true
            },
            agreeVisit: Boolean
        }
    },
    imgs: {
        type: Array
    },
    status: {
        type: String,
        enum: ['process', 'accepted', 'rejected'],
        required: true,
    }
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;