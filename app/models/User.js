const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const config = require('../config');

const userSchema = mongoose.Schema(
    {
        username: String,
        name: String,
        lastname: String,
        birthdate: Date,
        email: String,
        password: String,
        adress: String,
        phone: String,
        city: String,
        county: String,       
        protectora: Boolean,

    }
);

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
