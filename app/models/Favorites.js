const mongoose = require('mongoose');
const User = require('./User');
const Pet = require('./Pet');



const FavoritesSchema = mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: User,
       
    },
    petId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: Pet,
     
    }

});

const Favorite = mongoose.model('Favorite', FavoritesSchema);

module.exports = Favorite;