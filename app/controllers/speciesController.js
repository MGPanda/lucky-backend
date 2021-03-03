const Species = require('../models/Species');


async function listSpecies(req, res){
    try {
        const results = await Species.find();
        res.json({results: results})
    } catch (error) {
        res.json({errors: error.message});
    }
}

module.exports={
    listSpecies
}