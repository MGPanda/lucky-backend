const mongoose = require('mongoose');
//necesito la ref de Pet
// const Pet = require('./Pet'); 
const User = require('./User');

const adoptionSchema = new mongoose.Schema({
    pet: {
        idPet: {
            type: mongoose.SchemaTypes.ObjectId,
            // ref: Pet,
            // required: true,
        },
        name: String,
        city: String,
        gender: {
            type: String,
            enum: ['male', 'female', 'N/A']
        },
        img: String
    },
    organisation: {
        idOrganisation: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: User,
            // required: true,
        },
        name: String,
        address: String,
        email: String,
        tel: String
    },
    applicants: [ // esto es un array de objetos
        {
            applicant: {
                idUser: {
                    type: mongoose.SchemaTypes.ObjectId,
                    ref: User,
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
                }
            },
            status: {
                type: String,
                enum: ['process', 'accepted', 'rejected'],
                required: true,
            },
            imgs: [String],
        }
    ],
    taxes: Number,
    active: Boolean
});

const Adoption = mongoose.model('Adoption', adoptionSchema);

module.exports = Adoption;