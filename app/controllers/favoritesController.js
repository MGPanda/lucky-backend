const Favorite = require('../models/Favorites');

/**
 * @param {array} formdata
 * @returns {json}
 */

async function createFavorite(req, res) {
    try {
        const newFavorite = new Favorite(req.body); 
        console.log(req.body);
                
        await newFavorite.save();
        res.json({saved: true, newFavorite});

    }
    catch(err) {
        
        res.json({error: 'Error al consultar DB!'});
    }
}


/**
 * @returns {json}
 */
function listFavorites(req, res) {
        
        Favorite.find({ userId: req.params.id }).then(function (Favs) {
            console.log(Favs);
            console.log(req.params.id);
            res.json({Favs});
        });
        
}

function findFavorite(req, res) {
        
    Favorite.find({ userId: req.body.userId, petId: req.body.petId }).then(function (Favs) {
       
        res.json(Favs);
    });
    
}
    
async function removeFavorites(req, res) {
  
    try {
        await Favorite.findOneAndDelete({ _id: req.params.id });
                
        res.json({deleted: true});

    }
    catch(err) {
        
        res.json({error: 'Error al consultar DB!'});
    }
    
    
}


module.exports = {
    
    createFavorite,
    removeFavorites,
    listFavorites,
    findFavorite,
    
};
