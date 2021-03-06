const mongoose = require('mongoose');

const visitSchema = mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
    },
    petId: {
        type: mongoose.SchemaTypes.ObjectId,
    },
    date: {
        type: Date,
    },
    // time: {
    //     type: TimeRanges
    // }
});

const Visit = mongoose.model("Visit", visitSchema);

module.exports = Visit;