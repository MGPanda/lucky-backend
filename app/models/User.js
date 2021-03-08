const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const config = require('../config');

const userSchema = mongoose.Schema({
    name: String,
    lastname: String,
    birthdate: Date,
    email: String,
    password: String,
    address: String,
    phone: String,
    city: String,
    country: String,
    image: String,
    protectora: Boolean
});

userSchema.pre('save', function (next) {
    if (this.password) {
        this.password = bcrypt.hashSync(this.password, config.server.bcrypt.rounds);
    }
    next();
});

userSchema.method({
    checkPassword: function (plaintextPassword) {
        return bcrypt.compareSync(plaintextPassword, this.password);
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;