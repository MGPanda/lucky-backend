const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const config = require('../config');

const shelterSchema = mongoose.Schema({
    name: String,
    password: String,
    address: String,
    email: String,
    phone: String,
    city: String,
    county: String,
    lat: Number,
    long: Number
});

shelterSchema.pre('save', function (next) {
    if (this.password) {
        this.password = bcrypt.hashSync(this.password, config.server.bcrypt.rounds);
    }
    next();
});

shelterSchema.method({
    checkPassword: function (plaintextPassword) {
        return bcrypt.compareSync(plaintextPassword, this.password);
    },
});

const Shelter = mongoose.model('Shelter', shelterSchema);

module.exports = Shelter;