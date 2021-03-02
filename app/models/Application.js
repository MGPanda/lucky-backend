const mongoose = require('mongoose');
const User = require('./User');
const Pet = require('./Pet');

const applicationSchema = new mongoose.Schema({
    // hay que pasar el id del usuario de alguna forma. (input hidden?)
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: User,
    },
    // le podemos pasar el id de la mascota por param
    petId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: Pet,
    },
    form: {
        data: {
            name: String,
            email: String,
            tel: String,
            DNI: String,
            address: {
                street: String,
                code: String,
                city: String
            },
            terms: Boolean,
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
            agreeTerms: Boolean,
            agreeVisit: Boolean
        }
    },
    imgs: [String],
    status: {
        type: String,
        enum: ['process', 'accepted', 'rejected'],
        // required: true,
    }
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;