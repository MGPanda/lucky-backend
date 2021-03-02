const mongoose = require('mongoose');
//necesito la ref de Pet
// const Pet = require('./Pet'); 
const User = require('./User');

const adoptionSchema = new mongoose.Schema({
    petId: {
        type: mongoose.SchemaTypes.ObjectId,
        // ref: Pet,
        // required: true,
    },
    organizationId: {
        type: mongoose.SchemaTypes.ObjectId,
        // ref: User,
        // required: true,
    },
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: User
    },
    rate: String,
    active: Boolean
});

const Adoption = mongoose.model('Adoption', adoptionSchema);

module.exports = Adoption;