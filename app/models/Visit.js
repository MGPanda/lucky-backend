const mongoose = require('mongoose');

const visitSchema = mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    petId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    date: {
        type: Date,
    },
    time: {
        type: Number
    }
});

const Visit = mongoose.model("Visit", visitSchema);

module.exports = Visit;